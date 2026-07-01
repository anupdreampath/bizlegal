import CmsFooter from "@/components/cms/CmsFooter";
import CmsHeader from "@/components/cms/CmsHeader";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "LLC Formation - Build Your Business on the Right Foundation | biz.legal",
  description:
    "Form your LLC with Biz.Legal's California legal team, attorney strategy consultation, attorney-drafted operating agreement, EIN support, registered agent service, and ongoing legal check-ins.",
};

export default async function LLCFormationPage() {
  const [data, theme] = await Promise.all([
    getPageWithBlocks("services-llc-formation"),
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
