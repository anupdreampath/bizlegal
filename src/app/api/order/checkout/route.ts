import { NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { getStripe } from "@/lib/stripe";
import { leads, payments } from "@/lib/db/schema";

const formationFeeCents = 75000; // $750

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name || !body.email) {
    return NextResponse.json({ error: "name and email required" }, { status: 400 });
  }

  const leadRows = await db
    .insert(leads)
    .values({
      sessionId: body.sessionId ? Number(body.sessionId) : null,
      visitorId: body.visitorId || null,
      source: "order_page",
      status: "order_started",
      name: String(body.name),
      email: String(body.email),
      phone: body.phone || null,
      service: "LLC Formation Package",
      message: body.notes || null,
      metadata: { package: "llc_formation_750" },
    })
    .returning({ id: leads.id });

  const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: String(body.email),
    success_url: `${origin}/order/success?lead=${leadRows[0].id}`,
    cancel_url: `${origin}/order/cancelled?lead=${leadRows[0].id}`,
    metadata: { leadId: String(leadRows[0].id), package: "llc_formation_750" },
    payment_intent_data: {
      metadata: { leadId: String(leadRows[0].id), package: "llc_formation_750" },
    },
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: formationFeeCents,
          product_data: {
            name: "California LLC Formation Package",
            description:
              "Attorney-drafted documents, attorney-guided decisions, professional filing, and 1 year of law firm support.",
          },
        },
      },
    ],
  });

  await db.insert(payments).values({
    leadId: leadRows[0].id,
    providerSessionId: session.id,
    status: "pending",
    amountCents: formationFeeCents,
    currency: "usd",
    description: "California LLC Formation Package",
  });

  return NextResponse.json({ url: session.url, leadId: leadRows[0].id });
}
