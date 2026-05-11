import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { callSlots } from "@/lib/db/schema";
import { asc, gte } from "drizzle-orm";

export async function GET() {
  const slots = await db
    .select()
    .from(callSlots)
    .where(gte(callSlots.startsAt, new Date(Date.now() - 24 * 60 * 60 * 1000)))
    .orderBy(asc(callSlots.startsAt));
  return NextResponse.json({ slots });
}

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.startsAt) return NextResponse.json({ error: "startsAt required" }, { status: 400 });
  const startsAt = new Date(body.startsAt);
  const durationMinutes = Number(body.durationMinutes || 30);
  const endsAt = new Date(startsAt.getTime() + durationMinutes * 60 * 1000);

  const inserted = await db
    .insert(callSlots)
    .values({
      startsAt,
      endsAt,
      timezone: body.timezone || "America/Los_Angeles",
      status: body.status || "available",
    })
    .returning();

  return NextResponse.json({ slot: inserted[0] });
}
