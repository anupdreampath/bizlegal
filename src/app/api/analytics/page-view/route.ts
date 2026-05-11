import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { pageViews, visitorSessions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.json();

  if (body.pageViewId) {
    await db
      .update(pageViews)
      .set({
        endedAt: body.endedAt ? new Date(body.endedAt) : new Date(),
        durationSeconds: Number(body.durationSeconds || 0),
        maxScrollDepth: Number(body.maxScrollDepth || 0),
      })
      .where(eq(pageViews.id, Number(body.pageViewId)));

    if (body.sessionId) {
      await db
        .update(visitorSessions)
        .set({ lastSeenAt: new Date() })
        .where(eq(visitorSessions.id, Number(body.sessionId)));
    }

    return NextResponse.json({ ok: true });
  }

  const inserted = await db
    .insert(pageViews)
    .values({
      sessionId: body.sessionId ? Number(body.sessionId) : null,
      visitorId: String(body.visitorId),
      path: String(body.path || "/"),
      title: body.title || null,
      referrer: body.referrer || null,
      viewportWidth: body.viewportWidth ? Number(body.viewportWidth) : null,
      viewportHeight: body.viewportHeight ? Number(body.viewportHeight) : null,
    })
    .returning({ id: pageViews.id });

  return NextResponse.json({ pageViewId: inserted[0].id });
}
