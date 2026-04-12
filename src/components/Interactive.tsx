"use client";

import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";

export function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-sans font-bold text-[1rem] text-black pr-6 group-hover:opacity-60 transition-opacity">{title}</span>
        <ChevronDown className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  );
}

export function Takeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-100 border-l-4 border-green-800 rounded-r-[1rem] p-5 my-6">
      <p className="font-sans text-[0.8rem] font-bold text-green-800 uppercase tracking-wider mb-1">Key Takeaway</p>
      <p className="font-sans text-[0.95rem] text-gray-800 leading-[1.6]">{children}</p>
    </div>
  );
}

export function ImagePlaceholder({ label, aspect = "4/3", src }: { label: string; aspect?: string; src?: string }) {
  if (src) {
    return (
      <div className="rounded-[1rem] overflow-hidden" style={{ aspectRatio: aspect }}>
        <img src={src} alt={label} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-[1rem] flex flex-col items-center justify-center gap-3 p-6 relative overflow-hidden" style={{ aspectRatio: aspect }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative w-12 h-12 bg-white/10 rounded-[0.7rem] flex items-center justify-center">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
        </svg>
      </div>
      <p className="relative text-[0.85rem] font-sans text-white/50 text-center px-4">{label}</p>
    </div>
  );
}

const videoVariants: Record<string, string> = {
  green: "from-green-800 to-green-900",
  dark: "from-gray-800 to-gray-900",
  blue: "from-sky-800 to-sky-900",
  red: "from-red-900 to-red-950",
  purple: "from-purple-800 to-purple-900",
  teal: "from-teal-800 to-teal-900",
};

export function VideoPlaceholder({ label, duration, variant = "dark" }: { label: string; duration?: string; variant?: string }) {
  const gradient = videoVariants[variant] || videoVariants.dark;
  return (
    <div className={`aspect-video bg-gradient-to-br ${gradient} rounded-[1rem] flex flex-col items-center justify-center gap-3 cursor-pointer group relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
        <Play className="w-6 h-6 text-white/80" />
      </div>
      <p className="relative text-[0.95rem] font-sans font-medium text-white/70 text-center px-8 leading-snug max-w-[20rem]">{label}</p>
      {duration && <span className="relative text-[0.75rem] font-sans text-white/35">{duration}</span>}
    </div>
  );
}

export function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-ivory-200 rounded-[1rem] p-5">
      <p className="font-serif text-[1.5rem] text-black">{number}</p>
      <p className="font-sans text-[0.75rem] text-gray-600 mt-1">{label}</p>
    </div>
  );
}

export function ChapterBadge({ number }: { number: string }) {
  return (
    <div className="border-t-2 border-black pt-6 mb-6">
      <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">Chapter {number}</p>
    </div>
  );
}

export function ChapterBadgeLight({ number }: { number: string }) {
  return (
    <div className="border-t-2 border-white pt-6 mb-6">
      <p className="text-[0.8rem] font-sans font-bold text-white/50 uppercase tracking-wider">Chapter {number}</p>
    </div>
  );
}
