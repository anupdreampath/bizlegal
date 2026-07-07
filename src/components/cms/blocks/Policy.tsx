"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PolicyContent = {
  heading?: string;
  lastUpdated?: string;
  body?: string;
};

type PolicyStyle = {
  backgroundColor?: string;
  textColor?: string;
  bodyColor?: string;
};

function asContent(value: unknown): PolicyContent {
  return value && typeof value === "object" && !Array.isArray(value) ? value as PolicyContent : {};
}

function asStyle(value: unknown): PolicyStyle {
  return value && typeof value === "object" && !Array.isArray(value) ? value as PolicyStyle : {};
}

export default function PolicyBlock({ content, style }: { blockId: number; content: unknown; style: unknown }) {
  const c = asContent(content);
  const s = asStyle(style);
  const bg = s.backgroundColor || "#f8f5ed";
  const textColor = s.textColor || "#000000";
  const bodyColor = s.bodyColor || "#4b5563";

  return (
    <section style={{ backgroundColor: bg }} className="min-h-screen">
      {/* Simple header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem] py-5 flex items-center justify-between">
          <Link href="/" className="font-serif text-[1.5rem]" style={{ color: textColor }}>
            biz.legal
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.9rem] font-sans hover:opacity-60 transition-opacity"
            style={{ color: bodyColor }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[48rem] mx-auto px-6 py-[4rem] md:py-[5rem]">
        {c.heading && (
          <h1 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] mb-4" style={{ color: textColor }}>
            {c.heading}
          </h1>
        )}
        {c.lastUpdated && (
          <p className="font-sans text-[0.9rem] mb-[3rem]" style={{ color: bodyColor }}>
            Last updated: {c.lastUpdated}
          </p>
        )}
        {c.body && (
          <div
            className="cms-policy-body font-sans text-[1rem] leading-[1.7] space-y-6"
            style={{ color: bodyColor }}
            dangerouslySetInnerHTML={{ __html: c.body }}
          />
        )}
      </div>
    </section>
  );
}
