"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { CmsMedia } from "../CmsMedia";

type Cta = { label?: string; href?: string };

type RichContent = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  image?: { url?: string; alt?: string; type?: "image" | "video" };
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

type RichStyle = {
  backgroundColor?: string;
  textColor?: string;
  bodyColor?: string;
  maxWidth?: string;
  paddingY?: string;
  primaryCtaBg?: string;
  primaryCtaColor?: string;
  secondaryCtaBorder?: string;
  secondaryCtaColor?: string;
  accordionMobile?: boolean;
};

function asContent(value: unknown): RichContent {
  return value && typeof value === "object" && !Array.isArray(value) ? value as RichContent : {};
}

function asStyle(value: unknown): RichStyle {
  return value && typeof value === "object" && !Array.isArray(value) ? value as RichStyle : {};
}

type Section = {
  title: string;
  html: string;
  id: string;
};

function parseH3Sections(html: string): { intro: string; sections: Section[] } {
  if (typeof window === "undefined") return { intro: html, sections: [] };
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, "text/html");
  const root = doc.body.firstChild as HTMLElement;
  if (!root) return { intro: html, sections: [] };

  const children = Array.from(root.children);
  const sections: Section[] = [];
  let introHtml = "";
  let currentBuffer: Element[] = [];
  let currentTitle: string | null = null;
  let currentId: string | null = null;

  const flushIntro = () => {
    if (!currentTitle && currentBuffer.length) {
      const tmp = document.createElement("div");
      currentBuffer.forEach((el) => tmp.appendChild(el.cloneNode(true)));
      introHtml += tmp.innerHTML;
      currentBuffer = [];
    }
  };

  const flushSection = () => {
    if (currentTitle && currentBuffer.length) {
      const tmp = document.createElement("div");
      currentBuffer.forEach((el) => tmp.appendChild(el.cloneNode(true)));
      sections.push({ title: currentTitle, html: tmp.innerHTML, id: currentId || `section-${sections.length}` });
      currentBuffer = [];
      currentTitle = null;
      currentId = null;
    }
  };

  for (const child of children) {
    if (child.tagName === "H3") {
      flushIntro();
      flushSection();
      currentTitle = child.textContent || `Section ${sections.length + 1}`;
      currentId = (child as HTMLElement).id || `section-${sections.length}`;
    } else {
      currentBuffer.push(child);
    }
  }
  flushIntro();
  flushSection();

  return { intro: introHtml, sections };
}

export default function RichContentBlock({ content, style }: { blockId: number; content: unknown; style: unknown }) {
  const c = asContent(content);
  const s = asStyle(style);
  const textColor = s.textColor || "#000000";
  const bodyColor = s.bodyColor || "#4b5563";
  const bg = s.backgroundColor || "#f8f5ed";
  const enableAccordion = s.accordionMobile !== false; // default true for mobile

  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { intro, sections } = useMemo(() => parseH3Sections(c.body || ""), [c.body]);
  const hasSections = sections.length > 0;

  const toggle = (id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      className="px-5 sm:px-6 md:px-[4.5rem]"
      style={{
        backgroundColor: bg,
        paddingTop: s.paddingY || "5rem",
        paddingBottom: s.paddingY || "5rem",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: s.maxWidth || "72rem" }}>
        {/* Mobile-first image */}
        {c.image?.url && (
          <div className="lg:hidden mb-8 rounded-[1rem] overflow-hidden shadow-[0_1rem_2rem_rgba(0,0,0,0.1)]">
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <CmsMedia
                image={{ url: c.image.url, alt: c.image.alt || "", type: c.image.type || "image" }}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr_0.42fr] gap-8 lg:gap-12 items-start">
          <div className="max-w-none">
            {c.eyebrow && (
              <p className="mb-3 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: textColor }}>
                {c.eyebrow}
              </p>
            )}
            {c.heading && (
              <h2 className="font-serif text-[1.85rem] sm:text-[2.25rem] md:text-[2.75rem] leading-[1.08] mb-6 sm:mb-8" style={{ color: textColor }}>
                {c.heading}
              </h2>
            )}

            {hasSections && enableAccordion && isMobile ? (
              <div className="space-y-3">
                {intro && (
                  <div
                    className="cms-rich-content-visual font-sans text-[1rem] leading-[1.75]"
                    style={{ color: bodyColor }}
                    dangerouslySetInnerHTML={{ __html: intro }}
                  />
                )}
                {sections.map((section) => {
                  const isOpen = !!open[section.id];
                  return (
                    <div key={section.id} className="relative rounded-[1rem] overflow-hidden shadow-sm">
                      <div
                        className="absolute inset-0 rounded-[1rem] pointer-events-none"
                        style={{ border: "1px solid currentColor", backgroundColor: "currentColor", opacity: 0.08 }}
                      />
                      <button
                        onClick={() => toggle(section.id)}
                        className="relative w-full flex items-center justify-between gap-4 p-4 text-left cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-sans text-[1rem] font-bold leading-[1.3]" style={{ color: textColor }}>
                          {section.title}
                        </span>
                        <ChevronDown
                          className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                          style={{ color: textColor, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </button>
                      {isOpen && (
                        <div
                          className="relative px-4 pb-4 cms-rich-content-visual font-sans text-[0.95rem] leading-[1.7]"
                          style={{ color: bodyColor }}
                          dangerouslySetInnerHTML={{ __html: section.html }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                className="cms-rich-content-visual font-sans text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] leading-[1.75] sm:leading-[1.8]"
                style={{ color: bodyColor }}
                dangerouslySetInnerHTML={{ __html: c.body || "" }}
              />
            )}

            {(c.primaryCta?.label || c.secondaryCta?.label) && (
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
                {c.primaryCta?.label && (
                  <Link
                    href={c.primaryCta.href || "/contact"}
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 text-[0.95rem] sm:text-[1rem] font-sans font-medium rounded-full transition-colors duration-200 cursor-pointer"
                    style={{
                      backgroundColor: s.primaryCtaBg || "#166534",
                      color: s.primaryCtaColor || "#ffffff",
                    }}
                  >
                    {c.primaryCta.label}
                  </Link>
                )}
                {c.secondaryCta?.label && (
                  <Link
                    href={c.secondaryCta.href || "/contact"}
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 text-[0.95rem] sm:text-[1rem] font-sans font-medium border-2 rounded-full transition-colors duration-200 cursor-pointer"
                    style={{
                      borderColor: s.secondaryCtaBorder || "#166534",
                      color: s.secondaryCtaColor || "#166534",
                    }}
                  >
                    {c.secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Desktop sticky image card */}
          <aside className="hidden lg:block rounded-[1rem] overflow-hidden bg-white border border-black/5 shadow-sm sticky top-24">
            <div className="relative aspect-[4/3]">
              <CmsMedia
                image={c.image?.url ? { url: c.image.url, alt: c.image.alt || "", type: c.image.type || "image" } : undefined}
                fill
                sizes="(max-width: 1024px) 0vw, 35vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-5">
              <p className="font-sans text-[0.75rem] font-bold uppercase text-green-800 mb-2">
                biz.legal approach
              </p>
              <p className="font-serif text-[1.25rem] leading-[1.25] text-black">
                Legal structure, filing details, and business next steps kept in one clear path.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
