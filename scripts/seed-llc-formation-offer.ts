import { config } from "dotenv";
config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { blocks, pages } from "../src/lib/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const image = (url: string, alt: string) => ({ url, alt, type: "image" });

const offerIntroHtml = `
<p><strong>Stop Paying Thousands at a Traditional Law Firm... Or Risk Your Business With a Generic Online Filing Service.</strong></p>
<p>When you form your LLC with Biz.Legal, you're not buying paperwork.</p>
<p>You're hiring a California legal team to help you make the right decisions before your business ever opens its doors.</p>
<p>Every consultation, recommendation, document, and confirmation is handled by licensed California attorneys and experienced California paralegals-never an overseas call center, salesperson, or automated questionnaire.</p>
`;

const includedHtml = `
<h3>Here's Everything Included:</h3>
<h4>✓ Attorney Strategy Consultation</h4>
<p><strong>$250 Value</strong></p>
<p>Meet directly with a licensed California attorney to:</p>
<ul>
  <li>Confirm an LLC is the right entity for your business.</li>
  <li>Review your business plan.</li>
  <li>Discuss your proposed business name.</li>
  <li>Ask legal questions before filing anything.</li>
</ul>
<p>One conversation today can prevent expensive mistakes tomorrow.</p>

<h4>✓ Professional California LLC Formation</h4>
<p><strong>$500 Value</strong></p>
<p>Your LLC is professionally prepared by experienced California paralegals and reviewed by a licensed California attorney before filing.</p>
<p>No guessing. No DIY mistakes. No wondering whether you missed something important.</p>

<h4>✓ Custom Attorney-Drafted Operating Agreement</h4>
<p><strong>$2,000 Value</strong></p>
<p>This isn't a fill-in-the-blank template.</p>
<p>Your Operating Agreement is custom drafted based on your attorney consultation and tailored to your ownership structure, management preferences, and long-term business goals.</p>
<p>This is often the single most important legal document your business will ever have.</p>

<h4>✓ EIN &amp; Statement of Information Preparation</h4>
<p><strong>$250 Value</strong></p>
<p>We'll help ensure your company is properly established from the beginning by preparing the necessary post-formation filings and assisting with obtaining your EIN.</p>

<h4>✓ Complete Bank-Ready LLC Package</h4>
<p><strong>$150 Value</strong></p>
<p>Receive an organized set of finalized documents ready to take directly to your bank, accountant, investors, or business partners.</p>
<p>Everything professionally assembled. Nothing left for you to figure out.</p>

<h4>✓ One Year of Registered Agent Service</h4>
<p><strong>$100 Value</strong></p>
<p>Included at no additional charge.</p>

<h4>✓ First-Year Attorney Business Review</h4>
<p><strong>$500 Value</strong></p>
<p>Businesses evolve.</p>
<p>A year after formation, meet again with a licensed California attorney to review your business and identify any recommended legal updates before small issues become expensive problems.</p>

<h4>✓ Quarterly Legal Check-Ins</h4>
<p><strong>$150 Value</strong></p>
<p>We're not interested in disappearing after your LLC is filed.</p>
<p>You'll receive periodic check-ins from our legal team to help keep your business legally healthy as it grows.</p>
`;

const valueTableHtml = `
<h3>Total Professional Legal Value</h3>
<table>
  <thead>
    <tr><th>Service</th><th>Value</th></tr>
  </thead>
  <tbody>
    <tr><td>Attorney Consultation</td><td>$250</td></tr>
    <tr><td>LLC Formation</td><td>$500</td></tr>
    <tr><td>Custom Operating Agreement</td><td>$2,000</td></tr>
    <tr><td>EIN &amp; Statement of Information</td><td>$250</td></tr>
    <tr><td>Bank-Ready Document Package</td><td>$150</td></tr>
    <tr><td>Registered Agent (1 Year)</td><td>$100</td></tr>
    <tr><td>Annual Attorney Review</td><td>$500</td></tr>
    <tr><td>Quarterly Check-Ins</td><td>$150</td></tr>
    <tr><td><strong>Total Value</strong></td><td><strong>$3,900</strong></td></tr>
  </tbody>
</table>
`;

const whyHtml = `
<p>Most online filing companies sell documents.</p>
<p>Traditional law firms often charge thousands of dollars in hourly fees.</p>
<p>Biz.Legal gives you the best of both worlds:</p>
<ul>
  <li>Licensed California attorneys guiding every important decision.</li>
  <li>Experienced California paralegals preparing your documents.</li>
  <li>A custom legal package tailored to your business.</li>
  <li>Flat-fee pricing with no surprise invoices.</li>
  <li>Ongoing support after your company is formed.</li>
</ul>
`;

const blocksToSeed = [
  {
    type: "hero",
    content: {
      eyebrow: "LLC Formation",
      heading: "Build Your Business on the Right Foundation.",
      body:
        "Stop Paying Thousands at a Traditional Law Firm... Or Risk Your Business With a Generic Online Filing Service.",
      primaryCta: { label: "I'm Ready!", href: "/order" },
      secondaryCta: { label: "More Information", href: "/questionnaire" },
      proofItems: ["Licensed California attorneys", "Experienced California paralegals", "$3,900 professional legal value"],
      image: image(
        "/amyersnapa-attachments/iStock-2238258267.jpg",
        "Small business owner reviewing LLC formation documents with biz.legal",
      ),
    },
    style: {
      backgroundColor: "#f8f5ed",
      textColor: "#000000",
      bodyColor: "#4b5563",
      headingSize: "4.75rem",
      bodySize: "1.125rem",
      paddingY: "8rem",
      align: "left",
      uppercase: false,
      primaryCtaBg: "#166534",
      primaryCtaColor: "#ffffff",
      secondaryCtaBorder: "#166534",
      secondaryCtaColor: "#166534",
    },
  },
  {
    type: "richContent",
    content: {
      eyebrow: "High-value formation package",
      heading: "When you form your LLC with Biz.Legal, you're not buying paperwork.",
      body: offerIntroHtml,
      image: image(
        "/amyersnapa-attachments/iStock-2243799864.jpg",
        "California legal team advising a business owner",
      ),
    },
    style: {
      backgroundColor: "#efeadc",
      textColor: "#000000",
      bodyColor: "#374151",
      maxWidth: "90rem",
      paddingY: "5rem",
    },
  },
  {
    type: "richContent",
    content: {
      eyebrow: "Offer stack",
      heading: "Here's Everything Included",
      body: includedHtml,
      image: image(
        "/amyersnapa-attachments/iStock-2241575917.jpg",
        "Completed LLC document package ready for delivery",
      ),
    },
    style: {
      backgroundColor: "#f8f5ed",
      textColor: "#000000",
      bodyColor: "#374151",
      maxWidth: "90rem",
      paddingY: "5rem",
    },
  },
  {
    type: "richContent",
    content: {
      eyebrow: "Value summary",
      heading: "Total Professional Legal Value",
      body: valueTableHtml,
      image: image(
        "/amyersnapa-attachments/iStock-2218831325.jpg",
        "Attorney reviewing the total value of an LLC formation package",
      ),
    },
    style: {
      backgroundColor: "#166534",
      textColor: "#ffffff",
      bodyColor: "rgba(255,255,255,0.86)",
      maxWidth: "90rem",
      paddingY: "5rem",
    },
  },
  {
    type: "richContent",
    content: {
      eyebrow: "Why Business Owners Choose Biz.Legal",
      heading: "Why Business Owners Choose Biz.Legal",
      body: whyHtml,
      image: image(
        "/amyersnapa-attachments/iStock-2243642331.jpg",
        "Business owners choosing Biz.Legal for LLC formation",
      ),
    },
    style: {
      backgroundColor: "#efeadc",
      textColor: "#000000",
      bodyColor: "#374151",
      maxWidth: "90rem",
      paddingY: "5rem",
    },
  },
  {
    type: "ctaBanner",
    content: {
      heading: "Form Your Business With Confidence",
      body:
        "Your LLC is more than paperwork-it's the legal foundation of everything you're building. Don't trust that foundation to an algorithm or a generic template. Build it with experienced California legal professionals who help you get it right the first time.",
      primaryCta: { label: "I'm Ready!", href: "/order" },
      secondaryCta: { label: "More Information", href: "/questionnaire" },
    },
    style: {
      backgroundColor: "#166534",
      textColor: "#ffffff",
      bodyColor: "rgba(255,255,255,0.78)",
      primaryCtaBg: "#ffffff",
      primaryCtaColor: "#166534",
      secondaryCtaBorder: "rgba(255,255,255,0.5)",
      secondaryCtaColor: "#ffffff",
    },
  },
];

async function upsertPage() {
  const slug = "services-llc-formation";
  const title = "LLC Formation - Build Your Business on the Right Foundation";
  const metaDescription =
    "Form your LLC with Biz.Legal's California legal team, attorney strategy consultation, attorney-drafted operating agreement, EIN support, registered agent service, and ongoing legal check-ins.";

  const existing = await db.select().from(pages).where(eq(pages.slug, slug));
  if (existing.length) {
    await db
      .update(pages)
      .set({ title, metaDescription, published: true, updatedAt: new Date() })
      .where(eq(pages.slug, slug));
    return existing[0].id;
  }

  const inserted = await db
    .insert(pages)
    .values({ slug, title, metaDescription, published: true })
    .returning({ id: pages.id });
  return inserted[0].id;
}

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const pageId = await upsertPage();
  await db.delete(blocks).where(eq(blocks.pageId, pageId));

  for (let i = 0; i < blocksToSeed.length; i++) {
    const block = blocksToSeed[i];
    await db.insert(blocks).values({
      pageId,
      type: block.type,
      position: i,
      content: block.content,
      style: block.style,
      visible: true,
    });
  }

  console.log(`Seeded ${blocksToSeed.length} editable CMS blocks for services-llc-formation.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
