import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { CmsMedia } from "../CmsMedia";

export default function WhyChooseUsBlock({ content, style, blockId }: any) {
  const s = style || {};
  const cta = content.cta || {};
  return (
    <section
      data-block-id={blockId}
      data-block-type="whyChooseUs"
      className="py-[4rem] md:py-[6rem]"
      style={{ backgroundColor: s.backgroundColor || "#f8f5ed" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid md:grid-cols-2 gap-[3rem] md:gap-[5rem] items-start">
          <div>
            <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
              <CmsMedia image={content.image} fill className="object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-[0.8rem] bg-white/95 p-4 shadow-lg">
                <p className="font-sans text-[0.75rem] font-bold uppercase text-green-800 mb-1">
                  Built for real businesses
                </p>
                <p className="font-serif text-[1.25rem] leading-[1.2] text-black">
                  Practical legal support before, during, and after formation.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="border-t-2 pt-6 mb-[2rem]" style={{ borderColor: s.textColor || "#000" }}>
              <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#000" }}>
                {content.eyebrow}
              </p>
            </div>
            <h2
              className="font-serif leading-[1.05] mb-[2.5rem] whitespace-pre-line"
              style={{ color: s.textColor || "#000", fontSize: "clamp(2.5rem, 4.5vw, 3.25rem)" }}
            >
              {content.heading}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {(content.features || []).map((f: any, i: number) => (
                <div key={i} className="bg-white rounded-[1rem] p-5 border border-black/5">
                  <ShieldCheck className="w-5 h-5 text-green-800 mb-4" />
                  <h3 className="font-sans text-base font-bold mb-2" style={{ color: s.textColor || "#000" }}>
                    {f.title}
                  </h3>
                  <p className="font-sans text-base leading-[1.6]" style={{ color: s.bodyColor || "#4b5563" }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
            {cta.label && (
              <div className="mt-8">
                <Link
                  href={cta.href || "/contact"}
                  className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium rounded-full transition-colors duration-200 cursor-pointer"
                  style={{
                    backgroundColor: s.ctaBg || "#166534",
                    color: s.ctaColor || "#ffffff",
                  }}
                >
                  {cta.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
