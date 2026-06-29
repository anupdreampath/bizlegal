"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsBlock({ content, style, blockId }: any) {
  const s = style || {};
  const items = content.items || [];
  const [active, setActive] = useState(0);
  if (!items.length) return null;
  const current = items[active];
  const prev = () => setActive((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setActive((c) => (c === items.length - 1 ? 0 : c + 1));

  return (
    <section
      data-block-id={blockId}
      data-block-type="testimonials"
      className="py-[4rem] md:py-[6rem]"
      style={{ backgroundColor: s.backgroundColor || "#f8f5ed" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="border-t-2 pt-6 mb-[3rem] md:mb-[4rem]" style={{ borderColor: s.textColor || "#000" }}>
          <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#000" }}>
            {content.eyebrow}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-[3rem] md:gap-[5rem] items-start">
          <div>
            <h2 className="font-serif leading-[1.05] mb-8" style={{ color: s.textColor || "#000", fontSize: "clamp(2.75rem, 5vw, 3.5rem)" }}>
              {content.heading}
            </h2>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {(content.stats || []).map((stat: any, i: number) => (
                <div key={i}>
                  <p className="font-serif text-[2rem]" style={{ color: s.textColor || "#000" }}>{stat.number}</p>
                  <p className="font-sans text-sm" style={{ color: s.bodyColor || "#4b5563" }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={prev} className="w-12 h-12 border rounded-full flex items-center justify-center transition-colors duration-200" style={{ borderColor: s.textColor || "#000", color: s.textColor || "#000" }} aria-label="Previous">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-12 h-12 border rounded-full flex items-center justify-center transition-colors duration-200" style={{ borderColor: s.textColor || "#000", color: s.textColor || "#000" }} aria-label="Next">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="rounded-[1rem] p-[2rem] md:p-[2.5rem]" style={{ backgroundColor: s.cardBg || "#efeadc" }}>
            <div className="flex gap-1 mb-6">
              {Array.from({ length: current.rating || 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5" style={{ fill: s.textColor || "#000", color: s.textColor || "#000" }} />
              ))}
            </div>
            <blockquote className="font-serif text-[1.5rem] md:text-[1.875rem] leading-[1.3] mb-10" style={{ color: s.textColor || "#000" }}>
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: current.color || "#166534" }}>
                <span className="text-sm font-sans font-bold text-white">
                  {(current.name || "")
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-sans font-bold text-base" style={{ color: s.textColor || "#000" }}>{current.name}</p>
                <p className="font-sans text-sm" style={{ color: s.bodyColor || "#4b5563" }}>{current.role}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              {items.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-2.5 h-2.5 rounded-full transition-colors duration-200"
                  style={{ backgroundColor: i === active ? (s.textColor || "#000") : "#d1d5db" }}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-[3rem]">
          {items.slice(0, 3).map((item: any) => (
            <article key={item.name} className="rounded-[1rem] p-6" style={{ backgroundColor: s.cardBg || "#efeadc" }}>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.rating || 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ fill: s.textColor || "#000", color: s.textColor || "#000" }} />
                ))}
              </div>
              <blockquote className="font-serif text-[1.25rem] leading-[1.3] mb-8" style={{ color: s.textColor || "#000" }}>
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <p className="font-sans font-bold text-sm" style={{ color: s.textColor || "#000" }}>{item.name}</p>
              <p className="font-sans text-sm" style={{ color: s.bodyColor || "#4b5563" }}>{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
