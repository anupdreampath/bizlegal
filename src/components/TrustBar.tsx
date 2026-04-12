"use client";

const logos = [
  "Forbes",
  "Bloomberg Law",
  "Inc.",
  "The New York Times",
  "Entrepreneur",
  "USA Today",
];

export default function TrustBar() {
  const marqueeItems = [...logos, ...logos];

  return (
    <section className="bg-ivory-200 py-[3rem] md:py-[4rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        {/* Label centered above the line */}
        <p className="text-[1rem] font-sans font-bold uppercase text-black text-center mb-5">
          As Featured In
        </p>

        {/* Divider line */}
        <div className="border-t-2 border-black mb-8" />
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ivory-200 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ivory-200 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {marqueeItems.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-10 md:px-14"
            >
              <span className="text-[1.25rem] md:text-[1.5rem] font-serif text-gray-400 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
