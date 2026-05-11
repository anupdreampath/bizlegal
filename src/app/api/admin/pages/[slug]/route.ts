import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { pages, blocks } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await db.select().from(pages).where(eq(pages.slug, slug)).limit(1);
  if (!page.length) return NextResponse.json({ error: "not found" }, { status: 404 });
  const list = await db
    .select()
    .from(blocks)
    .where(eq(blocks.pageId, page[0].id))
    .orderBy(asc(blocks.position));
  return NextResponse.json({ page: page[0], blocks: list });
}

export async function PATCH(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const body = await req.json();
  const updates: any = { updatedAt: new Date() };
  if (typeof body.title === "string") updates.title = body.title;
  if (typeof body.metaDescription === "string") updates.metaDescription = body.metaDescription;
  if (typeof body.published === "boolean") updates.published = body.published;
  const updated = await db.update(pages).set(updates).where(eq(pages.slug, slug)).returning();
  return NextResponse.json({ page: updated[0] });
}
