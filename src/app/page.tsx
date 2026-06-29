import CmsFooter from "@/components/cms/CmsFooter";
import CmsHeader from "@/components/cms/CmsHeader";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";

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
          <PageRenderer blocks={data.blocks} />
        ) : (
          <section className="bg-ivory-100 pt-[9rem] pb-[5rem]">
            <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
              <h1 className="font-serif text-[3rem] md:text-[5rem] leading-[1.05] text-black">
                WE FORM YOUR LLC FOR YOU
              </h1>
              <p className="font-sans text-[1.125rem] text-gray-600 leading-[1.65] mt-6 max-w-[42rem]">
                Don&apos;t cheap out with DIY services or waste money on
                expensive law firms. You don&apos;t have to compromise,
                we&apos;re your LLC formation solution.
              </p>
            </div>
          </section>
        )}
      </main>
      <CmsFooter theme={theme} />
    </>
  );
}
