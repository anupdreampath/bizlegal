import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import CmsHeader from "@/components/cms/CmsHeader";
import CmsFooter from "@/components/cms/CmsFooter";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [data, theme] = await Promise.all([
    getPageWithBlocks("home"),
    getThemeSettings(),
  ]);

  return (
    <>
      <CmsHeader theme={theme} />
      <main>
        {data ? (
          <PageRenderer blocks={data.blocks as any} />
        ) : (
          <div className="p-10 text-center">No homepage content. Visit /admin to set up.</div>
        )}
      </main>
      <CmsFooter theme={theme} />
    </>
  );
}
