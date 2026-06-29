import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";

async function main() {
  const [{ db }, { blocks, pages }] = await Promise.all([
    import("../src/lib/db/client"),
    import("../src/lib/db/schema"),
  ]);

  const rows = await db.select().from(pages).where(eq(pages.slug, "booking")).limit(1);
  if (!rows.length) throw new Error("booking page missing");

  const content = {
    eyebrow: "Book a call",
    heading: "Reserve a consultation slot",
    body: "Choose the next available time and pay the flat $25 non-refundable booking fee to hold your call.",
    slotsHeading: "Available slots",
    detailsHeading: "Your details",
    noSlotsText: "No slots are available yet. Please check back soon.",
    loadingText: "Opening checkout...",
    submitText: "Pay $25 and book",
    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      service: "Service needed",
      notes: "Notes",
    },
  };
  const style = {
    backgroundColor: "#f8f5ed",
    cardBackgroundColor: "#ffffff",
    textColor: "#000000",
    bodyColor: "#4b5563",
    accentColor: "#166534",
  };

  const pageId = rows[0].id;
  const existing = await db.select().from(blocks).where(eq(blocks.pageId, pageId));
  const booking = existing.find((block) => block.type === "bookingForm");

  if (booking) {
    await db.update(blocks).set({ content, style, position: 0, visible: true, updatedAt: new Date() }).where(eq(blocks.id, booking.id));
  } else {
    await db.insert(blocks).values({ pageId, type: "bookingForm", position: 0, content, style, visible: true });
  }

  for (const block of existing.filter((item) => item.type === "richContent")) {
    await db.update(blocks).set({ position: 1, visible: false, updatedAt: new Date() }).where(eq(blocks.id, block.id));
  }

  console.log("Seeded editable booking form.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
