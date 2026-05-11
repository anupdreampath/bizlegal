import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { blocks } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.json();
  const { pageId, type, content, style, position } = body;
  if (!pageId || !type) return NextResponse.json({ error: "pageId and type required" }, { status: 400 });

  let pos = position;
  if (typeof pos !== "number") {
    const existing = await db.select().from(blocks).where(eq(blocks.pageId, pageId)).orderBy(asc(blocks.position));
    pos = existing.length;
  }

  const inserted = await db
    .insert(blocks)
    .values({
      pageId,
      type,
      position: pos,
      content: content || {},
      style: style || {},
    })
    .returning();
  return NextResponse.json({ block: inserted[0] });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { order } = body as { order: number[] };
  if (!Array.isArray(order)) return NextResponse.json({ error: "order required" }, { status: 400 });
  for (let i = 0; i < order.length; i++) {
    await db.update(blocks).set({ position: i, updatedAt: new Date() }).where(eq(blocks.id, order[i]));
  }
  return NextResponse.json({ ok: true });
}
