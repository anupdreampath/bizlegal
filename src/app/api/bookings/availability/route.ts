import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { callSlots } from "@/lib/db/schema";
import { and, asc, eq, gt } from "drizzle-orm";

export async function GET() {
  const slots = await db
    .select()
    .from(callSlots)
    .where(and(eq(callSlots.status, "available"), gt(callSlots.startsAt, new Date())))
    .orderBy(asc(callSlots.startsAt))
    .limit(30);

  return NextResponse.json({ slots });
}
