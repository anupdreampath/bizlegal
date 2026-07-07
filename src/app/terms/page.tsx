import { notFound } from "next/navigation";
import CmsHeader from "@/components/cms/CmsHeader";
import CmsFooter from "@/components/cms/CmsFooter";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";

export const metadata = {
  title: "Terms of Use — biz.legal",
  description: "Read the terms and conditions for using biz.legal services.",
};

export default async function TermsOfUsePage() {
  const [data, theme] = await Promise.all([
    getPageWithBlocks("terms"),
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
