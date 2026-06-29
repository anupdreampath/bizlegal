import Image from "next/image";

const businesses = [
  {
    name: "Restaurants",
    blurb:
      "From neighborhood cafés to full-service restaurants, we form LLCs that protect your kitchen and your future.",
    photo: "/amyersnapa-attachments/iStock-2238258267.jpg",
    alt: "Cafe owner meeting with an advisor about forming a California LLC",
    credit: "biz.legal client-service imagery",
  },
  {
    name: "Retail",
    blurb:
      "Brick-and-mortar shops across California rely on us to get their LLC structured right from day one.",
    photo: "/amyersnapa-attachments/iStock-2187548708.jpg",
    alt: "Retail shop customer at checkout — retail LLC formation",
    credit: "biz.legal client-service imagery",
  },
  {
    name: "Ecommerce",
    blurb:
      "Online sellers and DTC brands trust our attorney-drafted entities to handle multi-state exposure.",
    photo: "/amyersnapa-attachments/iStock-2241575917.jpg",
    alt: "Online seller packing customer orders — ecommerce LLC formation",
    credit: "biz.legal client-service imagery",
  },
  {
    name: "Consulting",
    blurb:
      "Solo consultants and boutique firms get clean liability separation and a credible legal foundation.",
    photo: "/amyersnapa-attachments/iStock-2243799864.jpg",
    alt: "Consultants planning business structure in a meeting — consulting LLC formation",
    credit: "biz.legal client-service imagery",
  },
  {
    name: "Beauty",
    blurb:
      "Salons, estheticians, and beauty studios — we form entities tailored to licensed professionals.",
    photo: "/amyersnapa-attachments/iStock-2243642331.jpg",
    alt: "Production shop owner on the phone near equipment — specialty business LLC formation",
    credit: "biz.legal client-service imagery",
  },
  {
    name: "The Trades",
    blurb:
      "Contractors, electricians, plumbers, and roofers — formed correctly and registered statewide.",
    photo: "/amyersnapa-attachments/iStock-2161275481.jpg",
    alt: "Landscaping crew unloading equipment — contractor LLC formation",
    credit: "biz.legal client-service imagery",
  },
  {
    name: "Childcare",
    blurb:
      "Family daycare and preschools — we navigate licensing-aware structures so you can focus on the kids.",
    photo: "/amyersnapa-attachments/iStock-2243799864.jpg",
    alt: "Small team reviewing plans together — childcare business LLC formation",
    credit: "biz.legal client-service imagery",
  },
  {
    name: "Specialty Services",
    blurb:
      "Coffee roasters, fitness studios, creative shops — bespoke LLCs for one-of-a-kind businesses.",
    photo: "/amyersnapa-attachments/iStock-2239904274.jpg",
    alt: "Service business owner maintaining a commercial space — specialty services LLC formation",
    credit: "biz.legal client-service imagery",
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
