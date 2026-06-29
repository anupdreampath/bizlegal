import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { CmsMedia } from "../CmsMedia";

export default function VideoCtaBlock({ content, style, blockId }: any) {
  const s = style || {};

  return (
    <section
      data-block-id={blockId}
      data-block-type="videoCta"
      className="py-[4rem] md:py-[6rem]"
      style={{ backgroundColor: s.backgroundColor || "#efeadc" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-[3rem] lg:gap-[5rem] items-center">
          <div className="relative aspect-[16/9] rounded-[1rem] overflow-hidden bg-black">
            <CmsMedia image={content.image} fill className="object-cover opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-green-800 shadow-xl">
                <Play className="w-8 h-8 fill-current ml-1" />
              </span>
            </div>
          </div>
          <div>
            <div className="border-t-2 pt-6 mb-[2rem]" style={{ borderColor: s.textColor || "#000" }}>
              <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#000" }}>
                {content.eyebrow}
              </p>
            </div>
            <h2
              className="font-serif leading-[1.05] mb-6"
              style={{ color: s.textColor || "#000", fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
            >
              {content.heading}
            </h2>
            <p className="font-sans text-base md:text-[1.05rem] leading-[1.7] mb-8" style={{ color: s.bodyColor || "#4b5563" }}>
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
      </div>
    </section>
  );
}
