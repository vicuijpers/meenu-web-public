import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

type SubscribeBody = {
  email?: string;
};

// Helper function to get CORS headers
function getCorsHeaders(origin: string | null) {
  const allowedOrigins = [
    "https://www.meenu.nl",
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:3001",
  ];

  const isAllowedOrigin = origin && allowedOrigins.includes(origin);
  const isSameOrigin = !origin; // No origin header means same-origin request

  // If it's an allowed origin, return it; otherwise, return the first allowed origin
  const corsOrigin = isAllowedOrigin ? origin : allowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": corsOrigin,
  };
}

function getPrivateKey(env: NodeJS.ProcessEnv): string | null {
  let key = env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64
    ? Buffer.from(
        env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64,
        "base64"
      ).toString("utf8")
    : env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "";

  key = key.replace(/\\n/g, "\n").replace(/\r/g, "");

  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }

  return key || null;
}

function validatePrivateKey(key: string): { valid: boolean; error?: string } {
  if (key.includes("BEGIN RSA PRIVATE KEY")) {
    return {
      valid: false,
      error:
        "Unsupported key type: RSA (PKCS#1). Generate a new JSON key (PKCS#8 BEGIN PRIVATE KEY).",
    };
  }

  if (!key.includes("BEGIN PRIVATE KEY") || !key.includes("END PRIVATE KEY")) {
    return {
      valid: false,
      error:
        "Invalid private key format. Use BASE64 env or ensure escaped newlines (\\n) with BEGIN/END PRIVATE KEY.",
    };
  }

  return { valid: true };
}

async function createSheetsClient(env: NodeJS.ProcessEnv) {
  const privateKey = getPrivateKey(env);

  if (
    !env.GOOGLE_SHEETS_SPREADSHEET_ID ||
    !env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !privateKey
  ) {
    throw new Error("Google Sheets not configured");
  }

  const validation = validatePrivateKey(privateKey);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  await auth.getClient();
  await auth.getAccessToken();

  return google.sheets({ version: "v4", auth });
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: {
        ...getCorsHeaders(origin),
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  try {
    const { email }: SubscribeBody = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        {
          status: 400,
          headers: getCorsHeaders(origin),
        }
      );
    }

    const sheets = await createSheetsClient(process.env);

    let sheetName = process.env.GOOGLE_SHEETS_WORKSHEET_NAME;
    if (!sheetName) {
      const meta = await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
        fields: "sheets(properties(title))",
      });
      sheetName = meta.data.sheets?.[0]?.properties?.title || "Sheet1";
    }

    const range = `${sheetName}!A:C`;
    const timestamp = new Date().toISOString();
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, email, req.headers.get("x-forwarded-for") || ""]],
      },
    });

    if (result.status !== 200) {
      return NextResponse.json(
        { error: "Failed to write to sheet" },
        {
          status: 500,
          headers: getCorsHeaders(origin),
        }
      );
    }

    return NextResponse.json(
      { success: true },
      {
        headers: getCorsHeaders(origin),
      }
    );
  } catch (err: unknown) {
    console.error("/api/subscribe error:", err);
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json(
      { error: message },
      {
        status: 500,
        headers: getCorsHeaders(origin),
      }
    );
  }
}

export async function GET(req: Request) {
  const origin = req.headers.get("origin");

  try {
    const env = process.env;
    const privateKey = getPrivateKey(env);

    const missing: string[] = [];
    if (!env.GOOGLE_SHEETS_SPREADSHEET_ID)
      missing.push("GOOGLE_SHEETS_SPREADSHEET_ID");
    if (!env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
      missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    if (!privateKey)
      missing.push(
        "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64"
      );

    if (missing.length) {
      return NextResponse.json(
        { ok: false, error: "Missing env vars", missing },
        {
          status: 500,
          headers: getCorsHeaders(origin),
        }
      );
    }

    const validation = validatePrivateKey(privateKey!);
    if (!validation.valid) {
      return NextResponse.json(
        { ok: false, error: validation.error },
        {
          status: 500,
          headers: getCorsHeaders(origin),
        }
      );
    }

    const sheets = await createSheetsClient(env);
    const meta = await sheets.spreadsheets.get({
      spreadsheetId: env.GOOGLE_SHEETS_SPREADSHEET_ID!,
      fields: "sheets(properties(title))",
    });

    const sheetName =
      env.GOOGLE_SHEETS_WORKSHEET_NAME ||
      meta.data.sheets?.[0]?.properties?.title ||
      "Sheet1";

    return NextResponse.json(
      { ok: true, sheetName },
      {
        headers: getCorsHeaders(origin),
      }
    );
  } catch (err) {
    console.error("/api/subscribe GET health error:", err);
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json(
      { ok: false, error: message },
      {
        status: 500,
        headers: getCorsHeaders(origin),
      }
    );
  }
}
