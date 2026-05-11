import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { blocks } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blockId = Number(id);
  const body = await req.json();
  const updates: any = { updatedAt: new Date() };
  if (body.content !== undefined) updates.content = body.content;
  if (body.style !== undefined) updates.style = body.style;
  if (typeof body.visible === "boolean") updates.visible = body.visible;
  if (typeof body.position === "number") updates.position = body.position;
  if (typeof body.type === "string") updates.type = body.type;
  const updated = await db.update(blocks).set(updates).where(eq(blocks.id, blockId)).returning();
  return NextResponse.json({ block: updated[0] });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await db.delete(blocks).where(eq(blocks.id, Number(id)));
  return NextResponse.json({ ok: true });
}
