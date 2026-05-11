import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import CmsPageRuntime from "./cms/CmsPageRuntime";

export default function PageShell({
  children,
  label,
  title,
  description,
  heroImage,
  heroAlt,
  cmsSlug,
}: {
  children: React.ReactNode;
  label: string;
  title: string;
  description?: string;
  heroImage?: string;
  heroAlt?: string;
  cmsSlug?: string;
}) {
  const fallback = (
    <>
      {/* Page hero */}
      <section className="bg-green-800 pt-[7rem] pb-[4rem] md:pt-[9rem] md:pb-[5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className={heroImage ? "grid lg:grid-cols-2 gap-10 items-center" : ""}>
            <div>
              <div className="border-t-2 border-white pt-6 mb-6">
                <p className="text-[1rem] font-sans font-bold text-white uppercase">
                  {label}
                </p>
              </div>
              <h1 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-white max-w-[50rem]">
                {title}
              </h1>
              {description && (
                <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mt-5 max-w-[36rem]">
                  {description}
                </p>
              )}
            </div>
            {heroImage && (
              <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
                <Image
                  src={heroImage}
                  alt={heroAlt || title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Page content */}
      {children}
    </>
  );

  return (
    <>
      <Header />
      <main>
        <CmsPageRuntime slug={cmsSlug} fallback={fallback}>
          {children}
        </CmsPageRuntime>
      </main>
      <Footer />
    </>
  );
}
