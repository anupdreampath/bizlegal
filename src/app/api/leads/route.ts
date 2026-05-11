import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { leads } from "@/lib/db/schema";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name || !body.email) {
    return NextResponse.json({ error: "name and email required" }, { status: 400 });
  }

  const inserted = await db
    .insert(leads)
    .values({
      sessionId: body.sessionId ? Number(body.sessionId) : null,
      visitorId: body.visitorId || null,
      source: body.source || "website",
      name: String(body.name),
      email: String(body.email),
      phone: body.phone || null,
      company: body.company || null,
      service: body.service || null,
      message: body.message || null,
      metadata: body.metadata || {},
    })
    .returning({ id: leads.id });

  return NextResponse.json({ leadId: inserted[0].id });
}
