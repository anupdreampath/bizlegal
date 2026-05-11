import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { themeSettings } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const list = await db.select().from(themeSettings);
  const map: Record<string, any> = {};
  for (const t of list) map[t.key] = t.value;
  return NextResponse.json({ theme: map });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { key, value } = body;
  if (!key) return NextResponse.json({ error: "key required" }, { status: 400 });
  const existing = await db.select().from(themeSettings).where(eq(themeSettings.key, key));
  if (existing.length) {
    await db.update(themeSettings).set({ value, updatedAt: new Date() }).where(eq(themeSettings.key, key));
  } else {
    await db.insert(themeSettings).values({ key, value });
  }
  return NextResponse.json({ ok: true });
}
