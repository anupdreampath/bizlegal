import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { getStripe } from "@/lib/stripe";
import { callBookings, callSlots, leads, payments } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import Stripe from "stripe";

export async function POST(req: Request) {
  const stripe = getStripe();
  const signature = req.headers.get("stripe-signature");
  const rawBody = await req.text();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;
  try {
    event = webhookSecret && signature
      ? stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
      : JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "invalid webhook" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const bookingId = Number(session.metadata?.bookingId);
    const leadId = Number(session.metadata?.leadId);
    const paymentIntentId =
      typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id;

    if (bookingId) {
      const bookingRows = await db.select().from(callBookings).where(eq(callBookings.id, bookingId)).limit(1);
      const booking = bookingRows[0];

      await db
        .update(callBookings)
        .set({
          status: "confirmed",
          stripePaymentIntentId: paymentIntentId || null,
          updatedAt: new Date(),
        })
        .where(eq(callBookings.id, bookingId));

      if (booking?.slotId) {
        await db
          .update(callSlots)
          .set({ status: "booked", updatedAt: new Date() })
          .where(eq(callSlots.id, booking.slotId));
      }
    }

    if (leadId) {
      await db.update(leads).set({ status: "call_booked", updatedAt: new Date() }).where(eq(leads.id, leadId));
    }

    await db
      .update(payments)
      .set({
        status: "paid",
        providerPaymentIntentId: paymentIntentId || null,
        rawPayload: session as unknown as Record<string, unknown>,
        updatedAt: new Date(),
      })
      .where(eq(payments.providerSessionId, session.id));
  }

  return NextResponse.json({ received: true });
}
