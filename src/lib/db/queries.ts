import { db } from "./client";
import { pages, blocks, themeSettings } from "./schema";
import { eq, asc } from "drizzle-orm";

export async function getPageWithBlocks(slug: string) {
  const page = await db.select().from(pages).where(eq(pages.slug, slug)).limit(1);
  if (!page.length) return null;
  const list = await db
    .select()
    .from(blocks)
    .where(eq(blocks.pageId, page[0].id))
    .orderBy(asc(blocks.position));
  return { page: page[0], blocks: list };
}

export async function getAllPages() {
  return db.select().from(pages).orderBy(asc(pages.slug));
}

export async function getThemeSettings() {
  const list = await db.select().from(themeSettings);
  const map: Record<string, any> = {};
  for (const t of list) {
    map[t.key] = t.value;
  }
  return map;
}

export async function getThemeSetting(key: string) {
  const list = await db
    .select()
    .from(themeSettings)
    .where(eq(themeSettings.key, key))
    .limit(1);
  return list[0]?.value ?? null;
}
