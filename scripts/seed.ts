import { config } from "dotenv";
config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { pages, blocks, themeSettings } from "../src/lib/db/schema";
import { footerRevision, headerRevision, homeRevisionBlocks } from "./revision-content";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function upsertPage(slug: string, title: string, metaDescription: string) {
  const existing = await db.select().from(pages).where(eq(pages.slug, slug));
  if (existing.length) {
    await db
      .update(pages)
      .set({ title, metaDescription, updatedAt: new Date() })
      .where(eq(pages.slug, slug));
    return existing[0].id;
  }
  const inserted = await db
    .insert(pages)
    .values({ slug, title, metaDescription })
    .returning({ id: pages.id });
  return inserted[0].id;
}

async function replaceBlocks(
  pageId: number,
  list: Array<{ type: string; content: any; style?: any }>,
) {
  await db.delete(blocks).where(eq(blocks.pageId, pageId));
  for (let i = 0; i < list.length; i++) {
    const b = list[i];
    await db.insert(blocks).values({
      pageId,
      type: b.type,
      position: i,
      content: b.content,
      style: b.style ?? {},
    });
  }
}

async function upsertTheme(key: string, value: any) {
  const existing = await db.select().from(themeSettings).where(eq(themeSettings.key, key));
  if (existing.length) {
    await db.update(themeSettings).set({ value, updatedAt: new Date() }).where(eq(themeSettings.key, key));
  } else {
    await db.insert(themeSettings).values({ key, value });
  }
}

const cmsPages = [
  {
    slug: "about",
    path: "/about",
    title: "About biz.legal — Real California Lawyers, Online Speed",
    label: "About",
    heading: "A law firm with the speed of an online platform",
    body:
      "biz.legal is run by lawyers, but built like a tech company, so California business owners get real legal advice without the traditional law firm bill.",
    image: "/amyersnapa-attachments/iStock-2243799864.jpg",
  },
  {
    slug: "how-it-works",
    path: "/how-it-works",
    title: "How It Works — California LLC Formation Process",
    label: "How It Works",
    heading: "From questionnaire to filed LLC, we handle the details",
    body:
      "Tell us about your business, get attorney review, approve your plan, and receive your completed formation documents through your secure portal.",
    image: "/amyersnapa-attachments/iStock-2218831325.jpg",
  },
  {
    slug: "reviews",
    path: "/reviews",
    title: "Reviews — California Business Owners Trust biz.legal",
    label: "Reviews",
    heading: "Trusted by California entrepreneurs",
    body:
      "Business owners choose biz.legal for attorney-guided LLC formation, responsive support, and clear next steps.",
    image: "/amyersnapa-attachments/iStock-2241575917.jpg",
  },
  {
    slug: "faq",
    path: "/faq",
    title: "FAQ — California LLC Formation Questions",
    label: "FAQ",
    heading: "Frequently asked questions",
    body:
      "Answers to common questions about California LLC formation, timelines, fees, registered agents, and attorney support.",
    image: "/amyersnapa-attachments/iStock-2241575917.jpg",
  },
  {
    slug: "careers",
    path: "/careers",
    title: "Careers — Join biz.legal",
    label: "Careers",
    heading: "Build legal services for modern entrepreneurs",
    body:
      "Join a team combining legal expertise with online efficiency for California business owners.",
    image: "/amyersnapa-attachments/iStock-2243799864.jpg",
  },
  {
    slug: "services-llc-formation",
    path: "/services/llc-formation",
    title: "LLC Formation — California LLCs Done Right",
    label: "LLC Formation",
    heading: "Build your business on the right foundation",
    body:
      "Stop paying thousands at a traditional law firm, and do not risk your business with a generic online filing service. Biz.Legal gives you licensed California attorney guidance, professional filing, a custom Operating Agreement, and ongoing support.",
    image: "/amyersnapa-attachments/iStock-2238258267.jpg",
  },
  {
    slug: "services-llc-management",
    path: "/services/llc-management",
    title: "LLC Management — Ongoing California Compliance",
    label: "LLC Management",
    heading: "Keep your LLC compliant after formation",
    body:
      "We help manage filings, deadlines, records, and legal upkeep so your California LLC stays in good standing.",
    image: "/amyersnapa-attachments/iStock-2243642331.jpg",
  },
  {
    slug: "services-registered-agent",
    path: "/services/registered-agent",
    title: "Registered Agent — California Registered Agent Service",
    label: "Registered Agent",
    heading: "Reliable registered agent service for your California LLC",
    body:
      "Meet California requirements with a physical registered agent address, document handling, and timely notifications.",
    image: "/amyersnapa-attachments/iStock-2218831325.jpg",
  },
  {
    slug: "services-business-structuring",
    path: "/services/business-structuring",
    title: "Business Structuring — Choose the Right Entity",
    label: "Business Structuring",
    heading: "Choose the business structure that fits your goals",
    body:
      "Get attorney guidance on LLCs, corporations, ownership, tax considerations, and California-specific requirements.",
    image: "/amyersnapa-attachments/iStock-2243799864.jpg",
  },
  {
    slug: "resources-llc-guide",
    path: "/resources/llc-guide",
    title: "California LLC Guide — Start and Maintain Your LLC",
    label: "LLC Guide",
    heading: "A practical guide to California LLCs",
    body:
      "Learn the core steps, costs, documents, deadlines, and legal decisions involved in forming and running a California LLC.",
    image: "/amyersnapa-attachments/iStock-2238258267.jpg",
  },
  {
    slug: "resources-california-business-law",
    path: "/resources/california-business-law",
    title: "California Business Law Resources",
    label: "Business Law",
    heading: "Business law basics for California entrepreneurs",
    body:
      "Explore California-specific legal topics that affect entity formation, operations, compliance, contracts, and liability protection.",
    image: "/amyersnapa-attachments/iStock-2218831325.jpg",
  },
];

async function seedSimpleCmsPage(page: (typeof cmsPages)[number]) {
  const pageId = await upsertPage(page.slug, page.title, page.body);
  await replaceBlocks(pageId, [
    {
      type: "hero",
      content: {
        eyebrow: page.label,
        heading: page.heading,
        body: page.body,
        primaryCta: { label: "Get Started", href: "/questionnaire" },
        secondaryCta: { label: "Contact Us", href: "/contact" },
        image: { url: page.image, alt: page.heading, type: "image" },
      },
      style: {
        backgroundColor: "#166534",
        textColor: "#ffffff",
        bodyColor: "rgba(255,255,255,0.75)",
        headingSize: "4.75rem",
        bodySize: "1.125rem",
        paddingY: "9rem",
        align: "left",
        uppercase: false,
        primaryCtaBg: "#ffffff",
        primaryCtaColor: "#166534",
        secondaryCtaBorder: "#ffffff",
        secondaryCtaColor: "#ffffff",
      },
    },
  ]);
}

async function main() {
  await upsertTheme("brand", {
    logoText: "biz.legal",
    logoAccentColor: "#166534",
    primaryColor: "#166534",
    primaryHoverColor: "#22c55e",
    accentColor: "#15803d",
    backgroundColor: "#f8f5ed",
    textColor: "#000000",
    mutedTextColor: "#4b5563",
    fontSerif: "Playfair Display",
    fontSans: "Inter",
  });

  await upsertTheme("header", headerRevision);

  await upsertTheme("footer", footerRevision);

  const homeId = await upsertPage(
    "home",
    "biz.legal - We Form Your LLC For You",
    "California LLC formation handled by lawyers with professional filing, attorney-drafted documents, and fast delivery.",
  );

  await replaceBlocks(homeId, homeRevisionBlocks);


  for (const page of cmsPages) {
    await seedSimpleCmsPage(page);
  }

  console.log("✓ Seed complete");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
