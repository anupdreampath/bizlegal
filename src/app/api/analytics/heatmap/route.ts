import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { heatmapEvents } from "@/lib/db/schema";

export async function POST(req: Request) {
  const body = await req.json();
  await db.insert(heatmapEvents).values({
    sessionId: body.sessionId ? Number(body.sessionId) : null,
    pageViewId: body.pageViewId ? Number(body.pageViewId) : null,
    visitorId: String(body.visitorId || "unknown"),
    path: String(body.path || "/"),
    eventType: String(body.eventType || "click"),
    x: Number(body.x || 0),
    y: Number(body.y || 0),
    viewportWidth: body.viewportWidth ? Number(body.viewportWidth) : null,
    viewportHeight: body.viewportHeight ? Number(body.viewportHeight) : null,
  });
  return NextResponse.json({ ok: true });
}
