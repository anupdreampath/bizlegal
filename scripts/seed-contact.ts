import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";

async function main() {
  const [{ db }, { blocks, pages }] = await Promise.all([
    import("../src/lib/db/client"),
    import("../src/lib/db/schema"),
  ]);

  const rows = await db.select().from(pages).where(eq(pages.slug, "contact")).limit(1);
  if (!rows.length) throw new Error("contact page missing");

  const content = {
    eyebrow: "Contact",
    heading: "Talk to a real California lawyer",
    body:
      "Questions about LLC formation, registered agent service, or ongoing compliance? Our attorneys are here to help - no guesswork, no expensive billable hours.",
    image: {
      url: "/amyersnapa-attachments/iStock-2238258267.jpg",
      alt: "Small business owner talking through LLC formation questions with biz.legal",
      type: "image",
    },
    infoEyebrow: "Contact Information",
    formEyebrow: "Send a Message",
    successHeading: "Message sent",
    successBody: "Thank you for reaching out. Our team will respond within 1 business day.",
    contacts: [
      { title: "Phone", value: "(833) 555-0123", note: "Mon - Fri, 9:00 AM - 6:00 PM PT" },
      { title: "Email", value: "info@bizlegal.com", note: "We respond within 1 business day" },
      { title: "Office", value: "Los Angeles, California", note: "By appointment only" },
    ],
    fields: {
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
    },
    subjectOptions: [
      { value: "llc-formation", label: "LLC Formation" },
      { value: "llc-management", label: "LLC Management" },
      { value: "compliance", label: "Compliance Question" },
      { value: "existing-client", label: "Existing Client Support" },
      { value: "other", label: "Other" },
    ],
  };
  const style = {
    heroBackgroundColor: "#166534",
    pageBackgroundColor: "#f8f5ed",
    textColor: "#000000",
    heroTextColor: "#ffffff",
    bodyColor: "#4b5563",
    accentColor: "#166534",
  };

  const pageId = rows[0].id;
  const existing = await db.select().from(blocks).where(eq(blocks.pageId, pageId));
  const contact = existing.find((block) => block.type === "contactForm");

  if (contact) {
    await db.update(blocks).set({ content, style, position: 0, visible: true, updatedAt: new Date() }).where(eq(blocks.id, contact.id));
  } else {
    await db.insert(blocks).values({ pageId, type: "contactForm", position: 0, content, style, visible: true });
  }

  for (const block of existing.filter((item) => item.type === "richContent")) {
    await db.update(blocks).set({ position: 1, visible: false, updatedAt: new Date() }).where(eq(blocks.id, block.id));
  }

  console.log("Seeded editable contact form.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
