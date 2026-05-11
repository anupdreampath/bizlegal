import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { pages } from "@/lib/db/schema";
import { asc, eq } from "drizzle-orm";

export async function GET() {
  const list = await db.select().from(pages).orderBy(asc(pages.slug));
  return NextResponse.json({ pages: list });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { slug, title, metaDescription } = body;
  if (!slug || !title) return NextResponse.json({ error: "slug and title required" }, { status: 400 });
  const existing = await db.select().from(pages).where(eq(pages.slug, slug));
  if (existing.length) return NextResponse.json({ error: "slug exists" }, { status: 409 });
  const inserted = await db.insert(pages).values({ slug, title, metaDescription }).returning();
  return NextResponse.json({ page: inserted[0] });
}
