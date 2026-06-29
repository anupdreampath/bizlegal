import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import { CmsMedia } from "../CmsMedia";

export default function ComparisonBlock({ content, style, blockId }: any) {
  const s = style || {};
  const leftItems = content.leftItems || [];
  const rightItems = content.rightItems || [];

  return (
    <section
      data-block-id={blockId}
      data-block-type="comparison"
      className="py-[4rem] md:py-[6rem]"
      style={{ backgroundColor: s.backgroundColor || "#f8f5ed" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-[3rem] lg:gap-[5rem] items-start">
          <div>
            <div className="border-t-2 pt-6 mb-[2rem]" style={{ borderColor: s.textColor || "#000" }}>
              <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#000" }}>
                {content.eyebrow}
              </p>
            </div>
            <h2
              className="font-serif leading-[1.05] mb-6"
              style={{ color: s.textColor || "#000", fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }}
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

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-[1rem] bg-white p-6 border border-black/5">
              <HelpCircle className="w-6 h-6 mb-5" style={{ color: s.accentColor || "#166534" }} />
              <h3 className="font-serif text-[2rem] leading-[1.1] mb-5" style={{ color: s.textColor || "#000" }}>
                {content.leftTitle}
              </h3>
              <ul className="space-y-4">
                {leftItems.map((item: string) => (
                  <li key={item} className="font-sans text-sm leading-[1.55]" style={{ color: s.bodyColor || "#4b5563" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1rem] p-6" style={{ backgroundColor: s.panelColor || "#166534" }}>
              <CheckCircle2 className="w-6 h-6 text-white mb-5" />
              <h3 className="font-serif text-[2rem] leading-[1.1] text-white mb-5">
                {content.rightTitle}
              </h3>
              <ul className="space-y-4">
                {rightItems.map((item: string) => (
                  <li key={item} className="flex gap-3 font-sans text-sm leading-[1.55] text-white/85">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {content.image?.url && (
              <div className="md:col-span-2 relative aspect-[16/8] rounded-[1rem] overflow-hidden">
                <CmsMedia image={content.image} fill className="object-cover" />
                <div className="absolute inset-x-4 bottom-4 rounded-[0.8rem] bg-white/95 p-4 shadow-lg max-w-[32rem]">
                  <p className="font-sans text-[0.75rem] font-bold uppercase text-green-800 mb-1">
                    {content.mediaEyebrow || "Video guide"}
                  </p>
                  <p className="font-serif text-[1.25rem] leading-[1.2] text-black">
                    {content.mediaTitle || "Which businesses need an LLC?"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
