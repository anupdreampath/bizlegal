import CmsFooter from "@/components/cms/CmsFooter";
import CmsHeader from "@/components/cms/CmsHeader";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact - Talk to a California Lawyer | biz.legal",
  description:
    "Questions about LLC formation, registered agent service, or ongoing compliance? Talk to the biz.legal team.",
};

export default async function ContactPage() {
  const [data, theme] = await Promise.all([
    getPageWithBlocks("contact"),
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
