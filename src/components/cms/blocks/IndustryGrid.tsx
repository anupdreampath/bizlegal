import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fastImageUrl } from "../imageSource";

const fallbackImages = [
  "/amyersnapa-attachments/iStock-2238258267.jpg",
  "/amyersnapa-attachments/iStock-2187548708.jpg",
  "/amyersnapa-attachments/iStock-2243799864.jpg",
  "/amyersnapa-attachments/iStock-2161275481.jpg",
  "/amyersnapa-attachments/iStock-2218831325.jpg",
  "/amyersnapa-attachments/iStock-2241575917.jpg",
];

export default function IndustryGridBlock({ content, style, blockId }: any) {
  const s = style || {};
  const items = content.items || [];

  return (
    <section
      data-block-id={blockId}
      data-block-type="industryGrid"
      className="py-[3rem] md:py-[4.25rem]"
      style={{ backgroundColor: s.backgroundColor || "#f8f5ed" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="border-t-2 pt-5 mb-[1.5rem]" style={{ borderColor: s.textColor || "#000" }}>
          <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#000" }}>
            {content.eyebrow}
          </p>
        </div>
        <div className="mb-[1.75rem] md:mb-[2.25rem]">
          <div className="max-w-[38rem]">
            <h2
              className="font-serif leading-[1.05] mb-4"
              style={{ color: s.textColor || "#000", fontSize: "clamp(2.35rem, 4.1vw, 3.75rem)" }}
            >
              {content.heading}
            </h2>
            <p className="font-sans text-base md:text-[1.02rem] leading-[1.65] mb-6" style={{ color: s.bodyColor || "#4b5563" }}>
              {content.body}
            </p>
            {content.cta?.label && (
              <Link
                href={content.cta.href || "#"}
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-sans font-medium rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: s.ctaBg || "#166534", color: s.ctaColor || "#fff" }}
              >
                {content.cta.label} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {items.map((item: any, idx: number) => (
            <Link
              key={item.name || idx}
              href={item.href || "#"}
              className="group relative aspect-square rounded-[0.9rem] overflow-hidden bg-green-950 border border-black/5 shadow-sm"
            >
              <Image
                src={fastImageUrl(item.image?.url || fallbackImages[idx % fallbackImages.length])}
                alt={item.image?.alt || item.name || "California LLC industry"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="eager"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-serif text-[1.75rem] md:text-[2rem] leading-[1.05] text-white">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="font-sans text-sm md:text-[0.95rem] leading-[1.55] mt-3 text-white/82">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
