import { NextResponse } from "next/server";
import { getThemeSettings } from "@/lib/db/queries";

export async function GET() {
  const theme = await getThemeSettings();
  return NextResponse.json({ theme });
}
