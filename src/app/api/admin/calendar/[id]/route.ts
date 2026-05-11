import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { callSlots } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const updates: Partial<typeof callSlots.$inferInsert> = { updatedAt: new Date() };
  if (typeof body.status === "string") updates.status = body.status;
  if (body.startsAt) updates.startsAt = new Date(body.startsAt);
  if (body.endsAt) updates.endsAt = new Date(body.endsAt);
  if (body.timezone) updates.timezone = body.timezone;

  const updated = await db
    .update(callSlots)
    .set(updates)
    .where(eq(callSlots.id, Number(id)))
    .returning();

  return NextResponse.json({ slot: updated[0] });
}
