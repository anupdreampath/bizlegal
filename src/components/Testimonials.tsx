"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Founder, Martinez Design Co.",
    quote:
      "The entire LLC formation process was seamless. They handled everything from filing to compliance, and I was up and running within days. Couldn't recommend them more.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "CEO, Pacific Tech Solutions",
    quote:
      "Their expertise in California business law gave me confidence that my LLC was structured properly from day one. The team was responsive and knowledgeable throughout.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "Owner, Coastal Wellness Studio",
    quote:
      "I was overwhelmed by the paperwork until I found Biz Legal. They made forming my LLC straightforward and stress-free. The ongoing compliance support is a huge bonus.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Managing Partner, Park & Associates",
    quote:
      "The ongoing management services are invaluable. They keep my LLC compliant and handle all the annual filings. One less thing to worry about as a business owner.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setActive((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const current = testimonials[active];

  return (
    <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        {/* Section label */}
        <div className="border-t-2 border-black pt-6 mb-[3rem] md:mb-[4rem]">
          <p className="text-[1rem] md:text-[1.125rem] font-sans font-bold text-black uppercase">
            Reviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-[3rem] md:gap-[5rem] items-start">
          {/* Left — heading + nav */}
          <div>
            <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] text-black mb-8">
              Trusted by California business owners
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: "5,000+", label: "LLCs formed" },
                { number: "98%", label: "Satisfaction rate" },
                { number: "10+", label: "Years experience" },
                { number: "4.9/5", label: "Average rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[2rem] text-black">
                    {stat.number}
                  </p>
                  <p className="font-sans text-[0.85rem] text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right — testimonial card */}
          <div className="bg-ivory-200 rounded-[1rem] p-[2rem] md:p-[2.5rem]">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-black text-black"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-[1.5rem] md:text-[1.875rem] leading-[1.3] text-black mb-10">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 bg-ivory-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[0.85rem] font-sans font-bold text-gray-600">
                  {current.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-sans font-bold text-[1rem] text-black">
                  {current.name}
                </p>
                <p className="font-sans text-[0.85rem] text-gray-600">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 cursor-pointer ${
                    i === active ? "bg-black" : "bg-gray-200 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
