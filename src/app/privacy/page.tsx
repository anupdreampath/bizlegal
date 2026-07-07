import { notFound } from "next/navigation";
import CmsHeader from "@/components/cms/CmsHeader";
import CmsFooter from "@/components/cms/CmsFooter";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";

export const metadata = {
  title: "Privacy Policy — biz.legal",
  description: "Learn how biz.legal collects, uses, and protects your personal information.",
};

export default async function PrivacyPolicyPage() {
  const [data, theme] = await Promise.all([
    getPageWithBlocks("privacy"),
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
