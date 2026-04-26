"use client";

// Admin replaces these with actual video links from Instagram, X, TikTok, YouTube Shorts, etc.
const videos = [
  {
    id: 1,
    title: "Why You Need an LLC in California",
    platform: "Instagram",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1606900776690-fd6f2f691ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "LLC vs Sole Proprietorship",
    platform: "YouTube",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1758599543278-32d9d073941e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Top 5 LLC Mistakes to Avoid",
    platform: "TikTok",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1758518730264-9235a1e5416b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "California LLC Tax Benefits",
    platform: "X",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1772588627483-d036793569e8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Protect Your Personal Assets",
    platform: "Instagram",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1767972159674-460283907c21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "LLC Formation Step by Step",
    platform: "YouTube",
    url: "",
    thumbnail: "https://images.unsplash.com/photo-1758518729685-f88df7890776?auto=format&fit=crop&w=1200&q=80",
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
              {/* 9:16 vertical card with thumbnail */}
              <div className="relative aspect-[9/16] rounded-[0.7rem] md:rounded-[1rem] overflow-hidden hover:opacity-80 transition-opacity duration-200">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Platform badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[0.65rem] font-sans font-bold text-white/70 uppercase tracking-wider bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
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
