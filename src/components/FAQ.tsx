"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to form an LLC in California?",
    answer:
      "Standard processing with the California Secretary of State typically takes 5-7 business days. We also offer expedited options that can have your LLC formed in as little as 24 hours. Once you submit your request through our questionnaire, we begin preparing your documents immediately.",
  },
  {
    question: "What documents are included with LLC formation?",
    answer:
      "Our LLC formation service includes Articles of Organization filing, a customized Operating Agreement, EIN/Tax ID acquisition from the IRS, an Initial Statement of Information, and a complete organizational binder with all your founding documents.",
  },
  {
    question: "Do I need to be a California resident?",
    answer:
      "No, you do not need to be a California resident to form an LLC in the state. However, you will need a registered agent with a physical California address. We provide registered agent services as part of our offerings.",
  },
  {
    question: "What is the difference between an LLC and a corporation?",
    answer:
      "An LLC offers more flexibility in management structure and tax treatment compared to a corporation. LLCs provide personal liability protection without the formalities of corporate governance like board meetings and shareholder requirements. We'll help determine which structure best fits your business.",
  },
  {
    question: "How much does it cost to maintain a California LLC?",
    answer:
      "California requires an annual Franchise Tax of $800 paid to the Franchise Tax Board, plus a biennial Statement of Information filing fee of $20. Our management services handle these filings and ensure your LLC stays compliant with all state requirements.",
  },
  {
    question: "Do you charge for the initial consultation?",
    answer:
      "No, there is no charge to submit a request. Complete our questionnaire and our team will review your submission, then reach out to discuss your specific needs and provide a customized plan for your LLC formation or management.",
  },
  {
    question: "Can I convert my sole proprietorship to an LLC?",
    answer:
      "Yes, we regularly help business owners convert sole proprietorships to LLCs. The process involves forming the LLC, transferring business assets, updating licenses and permits, and notifying relevant parties. We guide you through every step.",
  },
  {
    question: "What ongoing compliance is required for a California LLC?",
    answer:
      "California LLCs must file a Statement of Information every two years, pay the annual $800 franchise tax, maintain a registered agent, and keep proper records. Our management services handle all of these requirements for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory-200 py-[4rem] md:py-[6rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-[3rem] lg:gap-[5rem]">
          {/* Left column */}
          <div>
            {/* Section label */}
            <div className="border-t-2 border-black pt-6 mb-[2rem]">
              <p className="text-[1rem] font-sans font-bold text-black uppercase">
                FAQ
              </p>
            </div>

            <h2 className="font-serif text-[2.75rem] md:text-[3.25rem] leading-[1.05] text-black mb-5">
              Frequently asked questions
            </h2>
            <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-6">
              Find answers to common questions about California LLC
              formation and management.
            </p>

            {/* Image placeholder */}
            <div className="hidden lg:block mt-8">
              <div className="aspect-[4/3] rounded-[1rem] overflow-hidden">
                <img src="/images/services/happy-owner.svg" alt="California LLC formation" className="w-full h-full object-cover rounded-[1rem]" />
              </div>
            </div>
          </div>

          {/* Right column — accordion */}
          <div>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-t border-gray-200 last:border-b"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between py-6 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans font-bold text-[1rem] text-black pr-8 group-hover:opacity-60 transition-opacity duration-200">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    ) : (
                      <Plus className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="pb-6">
                      <p className="font-sans text-[1rem] text-gray-600 leading-[1.6]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
