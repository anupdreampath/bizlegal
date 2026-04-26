import Image from "next/image";

const businesses = [
  {
    name: "Restaurants",
    blurb:
      "From neighborhood cafés to full-service restaurants, we form LLCs that protect your kitchen and your future.",
    photo:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "California restaurant interior with set tables — restaurant LLC formation",
    credit: "Photo by Jason Leung on Unsplash",
  },
  {
    name: "Retail",
    blurb:
      "Brick-and-mortar shops across California rely on us to get their LLC structured right from day one.",
    photo:
      "https://images.unsplash.com/photo-1546213290-e1b492ab3eee?auto=format&fit=crop&w=1200&q=80",
    alt: "Customer browsing inside a California retail store — retail LLC formation",
    credit: "Photo by Korie Cull on Unsplash",
  },
  {
    name: "Ecommerce",
    blurb:
      "Online sellers and DTC brands trust our attorney-drafted entities to handle multi-state exposure.",
    photo:
      "https://images.unsplash.com/photo-1449247666642-264389f5f5b1?auto=format&fit=crop&w=1200&q=80",
    alt: "Person packing an ecommerce shipping box — online business LLC formation",
    credit: "Photo by Bench Accounting on Unsplash",
  },
  {
    name: "Consulting",
    blurb:
      "Solo consultants and boutique firms get clean liability separation and a credible legal foundation.",
    photo:
      "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=1200&q=80",
    alt: "Consultants reviewing documents in a meeting — consulting LLC formation",
    credit: "Photo by Sebastian Herrmann on Unsplash",
  },
  {
    name: "Beauty",
    blurb:
      "Salons, estheticians, and beauty studios — we form entities tailored to licensed professionals.",
    photo:
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1200&q=80",
    alt: "Hair stylist serving a client in a California salon — beauty business LLC formation",
    credit: "Photo by Lindsay Cash on Unsplash",
  },
  {
    name: "The Trades",
    blurb:
      "Contractors, electricians, plumbers, and roofers — formed correctly and registered statewide.",
    photo:
      "https://images.unsplash.com/photo-1743610350670-db2f1cc54620?auto=format&fit=crop&w=1200&q=80",
    alt: "Tradespeople using power tools on a construction site — contractor LLC formation",
    credit: "Photo by LXS Photography on Unsplash",
  },
  {
    name: "Childcare",
    blurb:
      "Family daycare and preschools — we navigate licensing-aware structures so you can focus on the kids.",
    photo:
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=1200&q=80",
    alt: "Children sitting on a classroom carpet — childcare business LLC formation",
    credit: "Photo by Unsplash contributor",
  },
  {
    name: "Specialty Services",
    blurb:
      "Coffee roasters, fitness studios, creative shops — bespoke LLCs for one-of-a-kind businesses.",
    photo:
      "https://images.unsplash.com/photo-1716808681381-52cf8055b02d?auto=format&fit=crop&w=1200&q=80",
    alt: "Specialty coffee shop counter with a pour-over cup — specialty services LLC formation",
    credit: "Photo by Unsplash contributor",
  },
];

export default function BusinessesGallery() {
  return (
    <section
      id="businesses-served"
      className="bg-ivory-100 py-[4rem] md:py-[6rem]"
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        {/* Section label */}
        <div className="border-t-2 border-black pt-6 mb-[2rem]">
          <p className="text-[1rem] md:text-[1.125rem] font-sans font-bold text-black uppercase">
            Who We Help
          </p>
        </div>

        {/* Heading */}
        <div className="max-w-[48rem] mb-[3rem] md:mb-[4rem]">
          <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.5rem] leading-[1.05] text-black">
            California businesses we form LLCs for
          </h2>
          <p className="font-sans text-[1rem] md:text-[1.125rem] text-gray-600 leading-[1.6] mt-6 max-w-[36rem]">
            From restaurants to retail, the trades to consulting — biz.legal
            forms California LLCs across every industry, with attorney review
            built into every step.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businesses.map((b) => (
            <figure
              key={b.name}
              className="group rounded-[1rem] overflow-hidden bg-white border border-black/5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={b.photo}
                  alt={b.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="font-serif text-[1.5rem] leading-[1.15] text-black mb-2">
                  {b.name}
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.55]">
                  {b.blurb}
                </p>
                <p className="font-sans text-[0.7rem] text-gray-400 mt-3">
                  {b.credit}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
