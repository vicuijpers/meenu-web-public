import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default function Page() {
  redirect("/legal#refunds");
}
