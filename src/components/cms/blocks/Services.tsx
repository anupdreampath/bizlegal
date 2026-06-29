import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { fastImageUrl } from "../imageSource";

const cardImages = [
  "/amyersnapa-attachments/iStock-2238258267.jpg",
  "/amyersnapa-attachments/iStock-2243799864.jpg",
  "/amyersnapa-attachments/iStock-2218831325.jpg",
  "/amyersnapa-attachments/iStock-2243642331.jpg",
];

export default function ServicesBlock({ content, style, blockId }: any) {
  const s = style || {};
  return (
    <section
      data-block-id={blockId}
      data-block-type="services"
      className="py-[4rem] md:py-[5.5rem]"
      style={{ backgroundColor: s.backgroundColor || "#166534" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="border-t-2 pt-6 mb-[3rem] md:mb-[4rem]" style={{ borderColor: s.textColor || "#fff" }}>
          <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#fff" }}>
            {content.eyebrow}
          </p>
        </div>
        <div className="max-w-[42.5rem] mb-[3rem] md:mb-[4rem]">
          <h2
            className="font-serif leading-[1.05]"
            style={{
              color: s.textColor || "#fff",
              fontSize: "clamp(2.75rem, 5vw, " + (s.headingSize || "4.75rem") + ")",
            }}
          >
            {content.heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {(content.cards || []).map((card: any, idx: number) => (
            <div
              key={idx}
              className="group rounded-[0.7rem] md:rounded-[1rem] overflow-hidden bg-white"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={fastImageUrl(card.image?.url || cardImages[idx % cardImages.length])}
                  alt={card.image?.alt || card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="eager"
                  unoptimized
                />
              </div>
              <div className="p-[1.5rem] pb-[2rem] md:p-[2rem] md:pb-[2.5rem]" style={{ backgroundColor: s.cardBackgroundColor || "#22c55e" }}>
                <h3 className="font-serif text-[1.875rem] md:text-[2.25rem] leading-[1.1] mb-4" style={{ color: s.cardTextColor || "#fff" }}>
                  {card.title}
                </h3>
                <p className="font-sans text-base md:text-[1.05rem] leading-[1.55] mb-8" style={{ color: s.cardTextColor || "rgba(255,255,255,0.85)" }}>
                  {card.description}
                </p>
                {card.cta?.label && (
                  <Link
                    href={card.cta.href || "#"}
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-sans font-medium rounded-full transition-opacity duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: s.ctaBg || "#fff",
                      color: s.ctaColor || "#166534",
                    }}
                  >
                    {card.cta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
