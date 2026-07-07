import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ShieldCheck, Star } from "lucide-react";
import CmsHeader from "@/components/cms/CmsHeader";
import CmsFooter from "@/components/cms/CmsFooter";
import { PageRenderer } from "@/components/cms/BlockRenderer";
import { getPageWithBlocks, getThemeSettings } from "@/lib/db/queries";
import { fastImageUrl } from "@/components/cms/imageSource";

const validSlugs = [
  "restaurants",
  "retail",
  "technology",
  "construction",
  "consulting",
  "real-estate",
  "healthcare",
  "ecommerce",
  "cleaning-janitorial",
  "home-services",
  "transportation",
  "professional-services",
];

const heroImages: Record<string, string> = {
  restaurants: "/amyersnapa-attachments/iStock-2238258267.jpg",
  retail: "/amyersnapa-attachments/iStock-2187548708.jpg",
  technology: "/amyersnapa-attachments/iStock-2243799864.jpg",
  construction: "/amyersnapa-attachments/iStock-2161275481.jpg",
  consulting: "/amyersnapa-attachments/iStock-2218831325.jpg",
  "real-estate": "/amyersnapa-attachments/iStock-2243642331.jpg",
  healthcare: "/amyersnapa-attachments/iStock-2239904274.jpg",
  ecommerce: "/amyersnapa-attachments/iStock-2241575917.jpg",
  "cleaning-janitorial": "/amyersnapa-attachments/iStock-2161275481.jpg",
  "home-services": "/amyersnapa-attachments/iStock-2243642331.jpg",
  transportation: "/amyersnapa-attachments/iStock-2238258267.jpg",
  "professional-services": "/amyersnapa-attachments/iStock-2218831325.jpg",
};

function displayName(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = displayName(slug);
  return {
    title: `LLC Formation for ${name}`,
    description: `Form your California LLC with biz.legal — attorney-drafted documents, professional filing, and ongoing support for ${name.toLowerCase()} businesses.`,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlugs.includes(slug)) return notFound();

  const cmsSlug = `industries-${slug}`;
  const [data, theme] = await Promise.all([
    getPageWithBlocks(cmsSlug),
    getThemeSettings(),
  ]);

  const name = displayName(slug);
  const heroImage = heroImages[slug] || "/amyersnapa-attachments/iStock-2243799864.jpg";
  const trustItems = ["Attorney-drafted documents", "Attorney-guided decisions", "Fast delivery"];

  return (
    <>
      <CmsHeader theme={theme} />
      <main className="pt-[5.5rem] md:pt-[6rem]">
        {/* Hero */}
        <section className="bg-green-800 pt-[2.5rem] pb-[3rem] md:pt-[4rem] md:pb-[5rem]">
          <div className="max-w-[90rem] mx-auto px-5 md:px-[4.5rem]">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 mb-6">
                  <BadgeCheck className="w-4 h-4 text-white" />
                  <p className="text-[0.8rem] font-sans font-bold text-white uppercase">Industry</p>
                </div>
                <h1 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-white max-w-[50rem]">
                  LLC Formation for {name}
                </h1>
                <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mt-5 max-w-[36rem]">
                  Form your California LLC with biz.legal — attorney-drafted documents, professional filing, and ongoing support for {name.toLowerCase()} businesses.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-8 max-w-[42rem]">
                  {trustItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-[0.7rem] bg-white/10 border border-white/10 px-3 py-3"
                    >
                      <ShieldCheck className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="font-sans text-[0.8rem] font-bold text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <Link
                    href="/order"
                    className="inline-flex items-center px-6 sm:px-8 py-3.5 text-[1rem] font-sans font-medium rounded-full bg-white text-green-800 transition-colors hover:bg-white/90"
                  >
                    Start Now, Get Protected
                  </Link>
                  <Link
                    href="/questionnaire"
                    className="inline-flex items-center px-6 sm:px-8 py-3.5 text-[1rem] font-sans font-medium rounded-full border border-white text-white transition-colors hover:bg-white/10"
                  >
                    More Information
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden shadow-[0_1.25rem_3rem_rgba(0,0,0,0.18)]">
                  <Image
                    src={fastImageUrl(heroImage)}
                    alt={`${name} business owner forming a California LLC`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
                <div className="absolute left-4 right-4 bottom-4 rounded-[0.8rem] bg-white/95 p-4 shadow-lg">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="font-serif text-[1.25rem] leading-[1.2] text-black">
                    Practical formation support for {name.toLowerCase()} owners who want it done right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CMS blocks */}
        {data?.blocks?.length ? (
          <PageRenderer blocks={data.blocks} />
        ) : (
          <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
            <div className="max-w-[90rem] mx-auto px-5 md:px-[4.5rem]">
              <div className="max-w-[50rem] mx-auto text-center">
                <h2 className="font-serif text-[2.25rem] md:text-[3rem] text-black mb-4">
                  Ready to form your {name.toLowerCase()} LLC?
                </h2>
                <p className="font-sans text-[1.125rem] text-gray-600 mb-8">
                  Get attorney-drafted documents, professional filing, and law firm support from day one.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/order"
                    className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium rounded-full bg-green-800 text-white transition-colors hover:bg-green-900"
                  >
                    Start Now, Get Protected
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium rounded-full border border-green-800 text-green-800 transition-colors hover:bg-green-800/5"
                  >
                    Talk to a Lawyer
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <CmsFooter theme={theme} />
    </>
  );
}
