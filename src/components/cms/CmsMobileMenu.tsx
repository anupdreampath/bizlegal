"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type LinkItem = { label?: string; href?: string };

export default function CmsMobileMenu({
  links,
  ctaLabel,
  ctaHref,
  textColor,
  backgroundColor,
  ctaBackground,
  ctaTextColor,
}: {
  links: LinkItem[];
  ctaLabel: string;
  ctaHref: string;
  textColor: string;
  backgroundColor: string;
  ctaBackground: string;
  ctaTextColor: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((next) => !next)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm"
        style={{ color: textColor }}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          className="absolute left-4 right-4 top-[4.75rem] rounded-[1rem] border border-black/10 p-4 shadow-2xl"
          style={{ backgroundColor }}
        >
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href || "#"}
                onClick={() => setOpen(false)}
                className="rounded-[0.65rem] px-4 py-3 text-base font-medium"
                style={{ color: textColor }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium"
            style={{ backgroundColor: ctaBackground, color: ctaTextColor }}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
