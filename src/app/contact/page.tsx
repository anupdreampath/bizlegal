"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", form);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-green-800 pt-[7rem] pb-[4rem] md:pt-[9rem] md:pb-[5rem]">
          <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
            <div className="border-t-2 border-white pt-6 mb-6">
              <p className="text-[1rem] font-sans font-bold text-white uppercase">
                Contact
              </p>
            </div>
            <h1 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-white max-w-[50rem]">
              Get in touch with our team
            </h1>
            <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mt-5 max-w-[36rem]">
              Have questions about LLC formation or need help with an
              existing LLC? We&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
          <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-[3rem] lg:gap-[5rem]">
              {/* Left — info */}
              <div>
                <div className="border-t-2 border-black pt-6 mb-8">
                  <p className="text-[1rem] font-sans font-bold text-black uppercase">
                    Contact Information
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-sans font-bold text-[1rem] text-black mb-1">Phone</h3>
                    <p className="font-sans text-[1rem] text-gray-600">(833) 555-0123</p>
                    <p className="font-sans text-[0.85rem] text-gray-400 mt-1">
                      Mon – Fri, 9:00 AM – 6:00 PM PT
                    </p>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[1rem] text-black mb-1">Email</h3>
                    <p className="font-sans text-[1rem] text-gray-600">info@bizlegal.com</p>
                    <p className="font-sans text-[0.85rem] text-gray-400 mt-1">
                      We respond within 1 business day
                    </p>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[1rem] text-black mb-1">Office</h3>
                    <p className="font-sans text-[1rem] text-gray-600">Los Angeles, California</p>
                    <p className="font-sans text-[0.85rem] text-gray-400 mt-1">
                      By appointment only
                    </p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-10 aspect-[4/3] bg-ivory-200 rounded-[1rem] flex items-center justify-center">
                  <p className="text-[0.9rem] font-sans text-gray-400">Map Placeholder</p>
                </div>
              </div>

              {/* Right — form */}
              <div>
                <div className="border-t-2 border-black pt-6 mb-8">
                  <p className="text-[1rem] font-sans font-bold text-black uppercase">
                    Send a Message
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-green-100 rounded-[1rem] p-10 text-center">
                    <h3 className="font-serif text-[1.875rem] text-black mb-3">
                      Message sent
                    </h3>
                    <p className="font-sans text-[1rem] text-gray-600">
                      Thank you for reaching out. Our team will respond
                      within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block font-sans font-bold text-[0.9rem] text-black mb-1.5">
                          Full name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={update("name")}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-sans font-bold text-[0.9rem] text-black mb-1.5">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block font-sans font-bold text-[0.9rem] text-black mb-1.5">
                          Phone (optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={update("phone")}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block font-sans font-bold text-[0.9rem] text-black mb-1.5">
                          Subject
                        </label>
                        <select
                          id="subject"
                          value={form.subject}
                          onChange={update("subject")}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black focus:outline-none focus:border-green-800 transition-colors cursor-pointer"
                        >
                          <option value="">Select a topic...</option>
                          <option value="llc-formation">LLC Formation</option>
                          <option value="llc-management">LLC Management</option>
                          <option value="compliance">Compliance Question</option>
                          <option value="existing-client">Existing Client Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-sans font-bold text-[0.9rem] text-black mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
