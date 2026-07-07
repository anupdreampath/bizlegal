import { notFound } from "next/navigation";
import CmsHeader from "@/components/cms/CmsHeader";
import CmsFooter from "@/components/cms/CmsFooter";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";

export const metadata = {
  title: "Cookie Policy — biz.legal",
  description: "Learn how biz.legal uses cookies and similar technologies.",
};

export default async function CookiePolicyPage() {
  const [data, theme] = await Promise.all([
    getPageWithBlocks("cookies"),
    getThemeSettings(),
  ]);

  if (!data?.blocks?.length) return notFound();

  return (
    <>
      <CmsHeader theme={theme} />
      <main>{data && <PageRenderer blocks={data.blocks} />}</main>
      <CmsFooter theme={theme} />
    </>
  );
}
