import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { leads } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const updated = await db
    .update(leads)
    .set({
      status: body.status || "new",
      updatedAt: new Date(),
    })
    .where(eq(leads.id, Number(id)))
    .returning();
  return NextResponse.json({ lead: updated[0] });
}
