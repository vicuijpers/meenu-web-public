
import { NextResponse } from "next/server";
import { google } from "googleapis";
export const runtime = "nodejs";

function getPrivateKey(env: NodeJS.ProcessEnv): string | null {
  let key = env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64
    ? Buffer.from(env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64, "base64").toString("utf8")
    : env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "";
  key = key.replace(/\\n/g, "\n").replace(/\r/g, "");
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1);
  }
  return key || null;

type SubscribeBody = { email?: string };

export async function POST(req: Request) {
  try {
    const { email }: SubscribeBody = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

function getPrivateKey(env: NodeJS.ProcessEnv): string | null {
  let key = env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64
    ? Buffer.from(env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64, "base64").toString("utf8")
    : env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "";
  key = key.replace(/\\n/g, "\n").replace(/\r/g, "");
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1);
  }
  return key || null;
}
    // Append to Google Sheet
    const {
      GOOGLE_SHEETS_SPREADSHEET_ID,
      GOOGLE_SHEETS_WORKSHEET_NAME,
      GOOGLE_SERVICE_ACCOUNT_EMAIL,
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64,
    } = process.env;

    if (
      !GOOGLE_SHEETS_SPREADSHEET_ID ||
      !GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !(
        GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY ||
        GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64
      )
    ) {
      return NextResponse.json(
        { error: "Google Sheets not configured" },
        { status: 500 }
      );
    }

    // Normalize private key formatting from env:
    // - Convert escaped \n to real newlines
    // - Strip accidental surrounding quotes
    // - Remove CRs from Windows line endings
    let privateKey = GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64
      ? Buffer.from(
          GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64,
          "base64"
        ).toString("utf8")
    await auth.getClient();
          if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const privateKey = getPrivateKey(env);
    if (!env.GOOGLE_SHEETS_SPREADSHEET_ID || !env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !privateKey) {
      return NextResponse.json({ error: "Google Sheets not configured" }, { status: 500 });
          const key = getPrivateKey(env);
    if (!key) {
      return NextResponse.json({ error: "Google Sheets not configured" }, { status: 500 });
    }
    if (key.includes("BEGIN RSA PRIVATE KEY")) {
      return NextResponse.json({ error: "Unsupported key type: RSA (PKCS#1). Generate a new JSON key (PKCS#8 BEGIN PRIVATE KEY)." }, { status: 500 });
    }
    if (!key.includes("BEGIN PRIVATE KEY") || !key.includes("END PRIVATE KEY")) {
      return NextResponse.json({ error: "Invalid private key format. Use BASE64 env or ensure escaped newlines (\\n) with BEGIN/END PRIVATE KEY." }, { status: 500 });
    }
    await auth.getAccessToken();

    const sheets = google.sheets({ version: "v4", auth });
    // Determine worksheet name; fallback to first sheet if env not provided
    let sheetName = GOOGLE_SHEETS_WORKSHEET_NAME;
    if (!sheetName) {
      const meta = await sheets.spreadsheets.get({
        spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
        fields: "sheets(properties(title))",
      });
      sheetName = meta.data.sheets?.[0]?.properties?.title || "Sheet1";
    }

    const range = `${sheetName}!A:C`;
    const timestamp = new Date().toISOString();
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, email, req.headers.get("x-forwarded-for") || ""]],
      },
    });

    if (result.status !== 200) {
      return NextResponse.json(
        { error: "Failed to write to sheet" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    // Log server-side for debugging
    console.error("/api/subscribe error:", err);
    // Provide a more helpful error message without leaking sensitive data
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

  try {
    const env = process.env;
    const key = getPrivateKey(env);
    const missing: string[] = [];
    if (!env.GOOGLE_SHEETS_SPREADSHEET_ID) missing.push("GOOGLE_SHEETS_SPREADSHEET_ID");
    if (!env.GOOGLE_SERVICE_ACCOUNT_EMAIL) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    if (!key) {
      return NextResponse.json({ ok: false, error: "Missing env vars", missing }, { status: 500 });
    }
    if (key.includes("BEGIN RSA PRIVATE KEY")) {
      return NextResponse.json({ ok: false, error: "Unsupported key type: RSA (PKCS#1). Generate a new JSON key (PKCS#8 BEGIN PRIVATE KEY)." }, { status: 500 });
    }
    if (!key.includes("BEGIN PRIVATE KEY") || !key.includes("END PRIVATE KEY")) {
      return NextResponse.json({ ok: false, error: "Invalid private key format. Use BASE64 env or ensure escaped newlines (\\n) with BEGIN/END PRIVATE KEY." }, { status: 500 });
    }
    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL, private_key: key },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    await auth.getClient();
    await auth.getAccessToken();
    const sheets = google.sheets({ version: "v4", auth });
    const meta = await sheets.spreadsheets.get({
      spreadsheetId: env.GOOGLE_SHEETS_SPREADSHEET_ID!,
      fields: "sheets(properties(title))",
    });
    const sheetName = env.GOOGLE_SHEETS_WORKSHEET_NAME || meta.data.sheets?.[0]?.properties?.title || "Sheet1";
    return NextResponse.json({ ok: true, sheetName });
  } catch (err) {
    console.error("/api/subscribe GET health error:", err);
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
