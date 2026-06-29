"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { CmsMedia } from "../CmsMedia";

export default function FaqBlock({ content, style, blockId }: any) {
  const s = style || {};
  const items = content.items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      data-block-id={blockId}
      data-block-type="faq"
      className="py-[4rem] md:py-[6rem]"
      style={{ backgroundColor: s.backgroundColor || "#efeadc" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-[3rem] lg:gap-[5rem]">
          <div>
            <div className="border-t-2 pt-6 mb-[2rem]" style={{ borderColor: s.textColor || "#000" }}>
              <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#000" }}>{content.eyebrow}</p>
            </div>
            <h2 className="font-serif leading-[1.05] mb-5" style={{ color: s.textColor || "#000", fontSize: "clamp(2.5rem, 4.5vw, 3.25rem)" }}>
              {content.heading}
            </h2>
            <p className="font-sans text-base leading-[1.6] mb-6" style={{ color: s.bodyColor || "#4b5563" }}>
              {content.body}
            </p>
            {content.image?.url && (
              <div className="hidden lg:block mt-8">
                <div className="aspect-[4/3] rounded-[1rem] overflow-hidden">
                  <CmsMedia image={content.image} fill={false} width={1400} height={1050} className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>
          <div>
            {items.map((faq: any, i: number) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-t border-gray-200 last:border-b">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans font-bold text-base pr-8 group-hover:opacity-60 transition-opacity duration-200" style={{ color: s.textColor || "#000" }}>
                      {faq.question}
                    </span>
                    {isOpen ? <Minus className="w-5 h-5 flex-shrink-0 mt-0.5" /> : <Plus className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                  </button>
                  {isOpen && (
                    <div className="pb-6">
                      <p className="font-sans text-base leading-[1.6]" style={{ color: s.bodyColor || "#4b5563" }}>
                        {faq.answer}
                      </p>
                      {faq.cta?.label && (
                        <Link
                          href={faq.cta.href || "#"}
                          className="inline-flex items-center px-6 py-3 mt-5 text-sm font-sans font-medium rounded-full transition-opacity hover:opacity-90"
                          style={{ backgroundColor: s.ctaBg || "#166534", color: s.ctaColor || "#ffffff" }}
                        >
                          {faq.cta.label}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
