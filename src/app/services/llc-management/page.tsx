import CmsFooter from "@/components/cms/CmsFooter";
import CmsHeader from "@/components/cms/CmsHeader";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Continuing Legal Support - Ongoing California Legal Support | biz.legal",
  description:
    "Most law firms and legal websites sell you on formation, and leave you high and dry. We provide continuing legal advice and support on an ongoing basis after your formation.",
};

export default async function ContinuingLegalSupportPage() {
  const [data, theme] = await Promise.all([
    getPageWithBlocks("services-llc-management"),
    getThemeSettings(),
  ]);

  return (
    <>
      <CmsHeader theme={theme} />
      <main>{data ? <PageRenderer blocks={data.blocks} /> : null}</main>
      <CmsFooter theme={theme} />
    </>
  );
}
