import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { bookingFeeCents, getStripe } from "@/lib/stripe";
import { callBookings, callSlots, leads, payments } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name || !body.email || !body.slotId) {
    return NextResponse.json({ error: "name, email, and slotId required" }, { status: 400 });
  }

  const slotRows = await db.select().from(callSlots).where(eq(callSlots.id, Number(body.slotId))).limit(1);
  const slot = slotRows[0];
  if (!slot || slot.status !== "available" || slot.startsAt <= new Date()) {
    return NextResponse.json({ error: "slot unavailable" }, { status: 409 });
  }

  await db.update(callSlots).set({ status: "held", updatedAt: new Date() }).where(eq(callSlots.id, slot.id));

  const leadRows = await db
    .insert(leads)
    .values({
      sessionId: body.sessionId ? Number(body.sessionId) : null,
      visitorId: body.visitorId || null,
      source: "book_call",
      status: "booking_started",
      name: String(body.name),
      email: String(body.email),
      phone: body.phone || null,
      service: body.service || null,
      message: body.notes || null,
      metadata: { slotId: slot.id },
    })
    .returning({ id: leads.id });

  const bookingRows = await db
    .insert(callBookings)
    .values({
      leadId: leadRows[0].id,
      slotId: slot.id,
      sessionId: body.sessionId ? Number(body.sessionId) : null,
      visitorId: body.visitorId || null,
      name: String(body.name),
      email: String(body.email),
      phone: body.phone || null,
      startsAt: slot.startsAt,
      endsAt: slot.endsAt,
      timezone: slot.timezone,
      notes: body.notes || null,
      feeCents: bookingFeeCents,
    })
    .returning({ id: callBookings.id });

  const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: String(body.email),
    success_url: `${origin}/booking/success?booking=${bookingRows[0].id}`,
    cancel_url: `${origin}/booking/cancelled?booking=${bookingRows[0].id}`,
    metadata: { bookingId: String(bookingRows[0].id), leadId: String(leadRows[0].id) },
    payment_intent_data: {
      metadata: { bookingId: String(bookingRows[0].id), leadId: String(leadRows[0].id) },
    },
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: bookingFeeCents,
          product_data: {
            name: "Consultation booking fee",
            description: "Non-refundable fee to reserve a call with biz.legal.",
          },
        },
      },
    ],
  });

  await db
    .update(callBookings)
    .set({ stripeCheckoutSessionId: session.id, updatedAt: new Date() })
    .where(eq(callBookings.id, bookingRows[0].id));

  await db.insert(payments).values({
    bookingId: bookingRows[0].id,
    leadId: leadRows[0].id,
    providerSessionId: session.id,
    status: "pending",
    amountCents: bookingFeeCents,
    currency: "usd",
    description: "Non-refundable consultation booking fee",
  });

  return NextResponse.json({ url: session.url, bookingId: bookingRows[0].id });
}
