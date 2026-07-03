import CmsFooter from "@/components/cms/CmsFooter";
import CmsHeader from "@/components/cms/CmsHeader";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Registered Agent - California Registered Agent Service | biz.legal",
  description:
    "California law requires every LLC to have a registered agent. We provide reliable, professional representation so you never miss a legal document or state notice.",
};

export default async function RegisteredAgentPage() {
  const [data, theme] = await Promise.all([
    getPageWithBlocks("services-registered-agent"),
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
