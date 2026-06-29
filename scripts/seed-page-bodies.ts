import { config } from "dotenv";
config({ path: ".env.local" });

import { readFileSync } from "fs";
import { eq, asc } from "drizzle-orm";

const pageFiles = [
  { slug: "about", file: "src/app/about/page.tsx", title: "About biz.legal - Real California Lawyers, Online Speed" },
  { slug: "how-it-works", file: "src/app/how-it-works/page.tsx", title: "How It Works - California LLC Formation Process" },
  { slug: "reviews", file: "src/app/reviews/page.tsx", title: "Reviews - California Business Owners Trust biz.legal" },
  { slug: "blog", file: "src/app/blog/page.tsx", title: "Blog - California LLC Resources" },
  { slug: "faq", file: "src/app/faq/page.tsx", title: "FAQ - California LLC Formation Questions" },
  { slug: "careers", file: "src/app/careers/page.tsx", title: "Careers - Join biz.legal" },
  { slug: "services-llc-formation", file: "src/app/services/llc-formation/page.tsx", title: "LLC Formation - California LLCs Done Right" },
  { slug: "services-llc-management", file: "src/app/services/llc-management/page.tsx", title: "LLC Management - Ongoing California Compliance" },
  { slug: "services-registered-agent", file: "src/app/services/registered-agent/page.tsx", title: "Registered Agent - California Registered Agent Service" },
  { slug: "services-compliance", file: "src/app/services/compliance/page.tsx", title: "Compliance - California LLC Deadlines and Filings" },
  { slug: "services-business-structuring", file: "src/app/services/business-structuring/page.tsx", title: "Business Structuring - Choose the Right Entity" },
  { slug: "resources-llc-guide", file: "src/app/resources/llc-guide/page.tsx", title: "California LLC Guide - Start and Maintain Your LLC" },
  { slug: "resources-tax-requirements", file: "src/app/resources/tax-requirements/page.tsx", title: "California LLC Tax Requirements" },
  { slug: "resources-california-business-law", file: "src/app/resources/california-business-law/page.tsx", title: "California Business Law Resources" },
  { slug: "contact", file: "src/app/contact/page.tsx", title: "Contact - Talk to a California Lawyer" },
  { slug: "signup", file: "src/app/signup/page.tsx", title: "Sign Up - Create Your Client Portal" },
  { slug: "booking", file: "src/app/booking/page.tsx", title: "Booking - Reserve a Consultation Slot" },
  { slug: "privacy", file: "src/app/privacy/page.tsx", title: "Privacy Policy" },
  { slug: "terms", file: "src/app/terms/page.tsx", title: "Terms of Use" },
  { slug: "cookies", file: "src/app/cookies/page.tsx", title: "Cookie Policy" },
  { slug: "login", file: "src/app/login/page.tsx", title: "Login" },
];

function decodeEntities(value: string) {
  return value
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, "\"")
    .replace(/&amp;/g, "&")
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-")
    .replace(/&#x2713;/g, "✓");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function extractEditableText(file: string) {
  const source = readFileSync(file, "utf8");
  const values = new Set<string>();

  const tagPattern = /<(h1|h2|h3|p|li|span|strong)[^>]*>([\s\S]*?)<\/\1>/g;
  let tagMatch: RegExpExecArray | null;
  while ((tagMatch = tagPattern.exec(source))) {
    const value = decodeEntities(tagMatch[2])
      .replace(/{["'`]?\\s*["'`]?}/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/{[^}]*}/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (value.length >= 8 && !/[<>{}=]/.test(value)) values.add(value);
  }

  const literalPattern = /(["'`])((?:(?!\1)[\s\S]){12,}?)\1/g;
  let match: RegExpExecArray | null;
  while ((match = literalPattern.exec(source))) {
    const value = decodeEntities(match[2])
      .replace(/\s+/g, " ")
      .trim();
    if (!value) continue;
    if (/^(use client|use server)$/.test(value)) continue;
    if (/^(https?:|\/|#)/.test(value)) continue;
    if (/^[a-z0-9_\-:/.[\]\s%()]+$/i.test(value) && /className|px-|py-|text-|grid|flex|rounded|border/.test(value)) continue;
    if (/[<>{}=]/.test(value)) continue;
    if (value.length >= 12) values.add(value);
  }

  const paragraphs = Array.from(values)
    .filter((value) => value.length < 700)
    .slice(0, 80);

  if (!paragraphs.length) return "<p>Edit this page content.</p>";
  return paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n");
}

async function main() {
  const [{ db }, { blocks, pages }] = await Promise.all([
    import("../src/lib/db/client"),
    import("../src/lib/db/schema"),
  ]);

  for (const page of pageFiles) {
    let rows = await db.select().from(pages).where(eq(pages.slug, page.slug)).limit(1);
    if (!rows.length) {
      rows = await db
        .insert(pages)
        .values({
          slug: page.slug,
          title: page.title,
          metaDescription: `Editable content for ${page.title}.`,
        })
        .returning();
    }
    const pageId = rows[0].id;
    const existingBlocks = await db.select().from(blocks).where(eq(blocks.pageId, pageId)).orderBy(asc(blocks.position));
    const body = extractEditableText(page.file);
    const rich = existingBlocks.find((block) => block.type === "richContent");
    const position = existingBlocks.length ? Math.max(...existingBlocks.map((block) => block.position)) + 1 : 0;
    const content = {
      eyebrow: "Editable Page Body",
      heading: titleFromSlug(page.slug),
      body,
    };
    const style = {
      backgroundColor: "#f8f5ed",
      textColor: "#000000",
      bodyColor: "#4b5563",
      maxWidth: "62rem",
      paddingY: "5rem",
    };

    await db.update(pages).set({ title: page.title, updatedAt: new Date() }).where(eq(pages.slug, page.slug));

    if (rich) {
      await db.update(blocks).set({ content, style, visible: true, updatedAt: new Date() }).where(eq(blocks.id, rich.id));
    } else {
      await db.insert(blocks).values({
        pageId,
        type: "richContent",
        position,
        content,
        style,
        visible: true,
      });
    }
  }

  console.log(`Seeded editable page bodies for ${pageFiles.length} CMS pages.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
