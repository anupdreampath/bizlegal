import { config } from "dotenv";
config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { blocks, pages, themeSettings } from "../src/lib/db/schema";
import { footerRevision, headerRevision, homeRevisionBlocks } from "./revision-content";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function upsertTheme(key: string, value: unknown) {
  const existing = await db.select().from(themeSettings).where(eq(themeSettings.key, key));
  if (existing.length) {
    await db
      .update(themeSettings)
      .set({ value, updatedAt: new Date() })
      .where(eq(themeSettings.key, key));
    return;
  }
  await db.insert(themeSettings).values({ key, value });
}

async function upsertHomePage() {
  const title = "biz.legal - We Form Your LLC For You";
  const metaDescription =
    "California LLC formation handled by lawyers with professional filing, attorney-drafted documents, and fast delivery.";
  const existing = await db.select().from(pages).where(eq(pages.slug, "home"));
  if (existing.length) {
    await db
      .update(pages)
      .set({ title, metaDescription, published: true, updatedAt: new Date() })
      .where(eq(pages.slug, "home"));
    return existing[0].id;
  }
  const inserted = await db
    .insert(pages)
    .values({ slug: "home", title, metaDescription, published: true })
    .returning({ id: pages.id });
  return inserted[0].id;
}

async function replaceHomeBlocks(pageId: number) {
  await db.delete(blocks).where(eq(blocks.pageId, pageId));
  for (let i = 0; i < homeRevisionBlocks.length; i++) {
    const block = homeRevisionBlocks[i];
    await db.insert(blocks).values({
      pageId,
      type: block.type,
      position: i,
      content: block.content,
      style: block.style ?? {},
      visible: true,
    });
  }
}

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  await upsertTheme("header", headerRevision);
  await upsertTheme("footer", footerRevision);
  const homeId = await upsertHomePage();
  await replaceHomeBlocks(homeId);

  for (const slug of ["services-compliance", "resources-tax-requirements", "blog"]) {
    await db.delete(pages).where(eq(pages.slug, slug));
  }

  console.log(`Applied ${homeRevisionBlocks.length} revised home blocks to Neon.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
