import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { visitorSessions } from "@/lib/db/schema";
import { getRequestInfo, parseDevice } from "@/lib/request-info";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const requestInfo = getRequestInfo(req);
  const device = parseDevice(requestInfo.userAgent);
  const utm = body.utm || {};

  const inserted = await db
    .insert(visitorSessions)
    .values({
      visitorId: String(body.visitorId || crypto.randomUUID()),
      landingPage: body.landingPage || null,
      referrer: body.referrer || null,
      utmSource: utm.utm_source || null,
      utmMedium: utm.utm_medium || null,
      utmCampaign: utm.utm_campaign || null,
      ipAddress: requestInfo.ipAddress,
      country: requestInfo.country,
      region: requestInfo.region,
      city: requestInfo.city,
      timezone: requestInfo.timezone,
      userAgent: requestInfo.userAgent,
      deviceType: device.deviceType,
      browser: device.browser,
      os: device.os,
    })
    .returning({ id: visitorSessions.id });

  return NextResponse.json({ sessionId: inserted[0].id });
}
