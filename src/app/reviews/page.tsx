import PageShell from "@/components/PageShell";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah Martinez", role: "Founder, Martinez Design Co.", rating: 5, quote: "The entire LLC formation process was seamless. They handled everything from filing to compliance, and I was up and running within days." },
  { name: "James Chen", role: "CEO, Pacific Tech Solutions", rating: 5, quote: "Their expertise in California business law gave me confidence that my LLC was structured properly from day one. Highly recommend." },
  { name: "Amanda Foster", role: "Owner, Coastal Wellness Studio", rating: 5, quote: "I was overwhelmed by the paperwork until I found Biz Legal. They made forming my LLC straightforward and stress-free." },
  { name: "David Park", role: "Managing Partner, Park & Associates", rating: 5, quote: "The ongoing management services are invaluable. They keep my LLC compliant and handle all the annual filings." },
  { name: "Maria Gonzalez", role: "Founder, Sol Catering LLC", rating: 5, quote: "As a first-time business owner I had no idea where to start. Biz Legal walked me through every step and explained everything clearly." },
  { name: "Robert Kim", role: "Real Estate Investor", rating: 5, quote: "I have multiple investment LLCs and Biz Legal manages compliance for all of them. Responsive, organized, and always on top of deadlines." },
  { name: "Priya Patel", role: "Consultant, Patel Advisory Group", rating: 5, quote: "Converting my sole proprietorship to an LLC was painless. They handled the paperwork, licenses, and even my EIN transfer." },
  { name: "Kevin O'Brien", role: "Co-founder, Westside Media", rating: 5, quote: "Our multi-member LLC needed a complex Operating Agreement. Biz Legal drafted one that covered everything — distributions, voting, exit clauses." },
];

export default function ReviewsPage() {
  return (
    <PageShell
      cmsSlug="reviews"
heroImage="https://images.unsplash.com/photo-1727908147396-6ec82c6f4e2d?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Happy customer holding a smiley-face cup — biz.legal client reviews"
      label="Reviews"
      title="What our clients say"
      description="Hear from California business owners who trusted Biz Legal with their LLC formation and management."
    >
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          {/* Stats bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-[4rem] pb-[3rem] border-b border-gray-200">
            {[
              { number: "5,000+", label: "LLCs formed" },
              { number: "98%", label: "Client satisfaction" },
              { number: "4.9/5", label: "Average rating" },
              { number: "500+", label: "5-star reviews" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-[2rem] text-black">{stat.number}</p>
                <p className="font-sans text-[0.85rem] text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Review grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-ivory-200 rounded-[1rem] p-6 md:p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <blockquote className="font-serif text-[1.25rem] leading-[1.35] text-black mb-6">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <div className="w-10 h-10 bg-ivory-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[0.75rem] font-sans font-bold text-gray-600">
                      {review.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[0.9rem] text-black">{review.name}</p>
                    <p className="font-sans text-[0.8rem] text-gray-600">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
