import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { analyticsEvents } from "@/lib/db/schema";

export async function POST(req: Request) {
  const body = await req.json();
  await db.insert(analyticsEvents).values({
    sessionId: body.sessionId ? Number(body.sessionId) : null,
    pageViewId: body.pageViewId ? Number(body.pageViewId) : null,
    visitorId: String(body.visitorId || "unknown"),
    eventType: String(body.eventType || "event"),
    path: body.path || null,
    target: body.target || null,
    metadata: body.metadata || {},
  });
  return NextResponse.json({ ok: true });
}
