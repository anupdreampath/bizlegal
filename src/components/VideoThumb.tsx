"use client";

import { Play } from "lucide-react";

const variants: Record<string, { from: string; to: string }> = {
  green: { from: "from-green-800", to: "to-green-900" },
  dark: { from: "from-gray-800", to: "to-gray-900" },
  blue: { from: "from-sky-800", to: "to-sky-900" },
  red: { from: "from-red-900", to: "to-red-950" },
  purple: { from: "from-purple-800", to: "to-purple-900" },
  teal: { from: "from-teal-800", to: "to-teal-900" },
  amber: { from: "from-amber-800", to: "to-amber-900" },
};

export default function VideoThumb({
  title,
  duration,
  variant = "dark",
}: {
  title: string;
  duration: string;
  variant?: keyof typeof variants;
}) {
  const v = variants[variant] || variants.dark;
  return (
    <div
      className={`aspect-video bg-gradient-to-br ${v.from} ${v.to} rounded-[1rem] flex flex-col items-center justify-center gap-4 cursor-pointer group relative overflow-hidden`}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-3">
        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <Play className="w-6 h-6 text-white/80" />
        </div>
        <p className="text-[0.95rem] font-sans font-medium text-white/80 text-center px-8 leading-snug max-w-[20rem]">
          {title}
        </p>
        <span className="text-[0.75rem] font-sans text-white/40">
          {duration}
        </span>
      </div>
    </div>
  );
}
