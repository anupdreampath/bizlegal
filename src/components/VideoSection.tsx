"use client";

import { Play } from "lucide-react";

// Admin replaces these with actual video links from Instagram, X, TikTok, YouTube Shorts, etc.
const videos = [
  {
    id: 1,
    title: "Why You Need an LLC in California",
    platform: "Instagram",
    url: "",
  },
  {
    id: 2,
    title: "LLC vs Sole Proprietorship",
    platform: "YouTube",
    url: "",
  },
  {
    id: 3,
    title: "Top 5 LLC Mistakes to Avoid",
    platform: "TikTok",
    url: "",
  },
  {
    id: 4,
    title: "California LLC Tax Benefits",
    platform: "X",
    url: "",
  },
  {
    id: 5,
    title: "Protect Your Personal Assets",
    platform: "Instagram",
    url: "",
  },
  {
    id: 6,
    title: "LLC Formation Step by Step",
    platform: "YouTube",
    url: "",
  },
];

export default function VideoSection() {
  return (
    <section className="bg-purple-900 py-[4rem] md:py-[5.5rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        {/* Section label */}
        <div className="border-t-2 border-white pt-6 mb-[3rem] md:mb-[4rem]">
          <p className="text-[1rem] md:text-[1.125rem] font-sans font-bold text-white uppercase">
            Learn & Explore
          </p>
        </div>

        {/* Heading */}
        <div className="max-w-[42.5rem] mb-[3rem] md:mb-[4rem]">
          <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-white">
            Expert insights in bite-sized videos
          </h2>
          <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/60 leading-[1.6] mt-5">
            Quick, expert advice on LLC formation, management, and California
            business law from our team.
          </p>
        </div>

        {/* Video grid — short-form vertical ratio */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url || "#"}
              target={video.url ? "_blank" : undefined}
              rel={video.url ? "noopener noreferrer" : undefined}
              className="group block cursor-pointer"
            >
              {/* 9:16 vertical card */}
              <div className="relative aspect-[9/16] bg-purple-700 rounded-[0.7rem] md:rounded-[1rem] overflow-hidden hover:opacity-80 transition-opacity duration-200">
                {/* Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <Play className="w-5 h-5 text-white/50" />
                  </div>
                  <p className="text-[0.7rem] font-sans text-white/30 text-center">
                    Video
                  </p>
                </div>

                {/* Platform badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[0.65rem] font-sans font-bold text-white/50 uppercase tracking-wider">
                    {video.platform}
                  </span>
                </div>
              </div>

              {/* Title */}
              <p className="mt-3 text-[0.85rem] font-sans font-medium text-white/70 leading-snug line-clamp-2">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
