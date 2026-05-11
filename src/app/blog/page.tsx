import PageShell from "@/components/PageShell";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "biz.legal Blog — California LLC Insights from Real Lawyers",
  description:
    "Practical guides on California LLC formation, compliance, taxes, and operating agreements — written by attorneys, not content mills.",
};

const posts = [
  {
    title: "5 mistakes to avoid when forming a California LLC",
    category: "LLC Formation",
    readTime: "6 min",
    excerpt:
      "From choosing the wrong business structure to skipping the Operating Agreement — here are the most common mistakes new LLC owners make and how to avoid them.",
    image:
      "https://images.unsplash.com/photo-1758518730264-9235a1e5416b?auto=format&fit=crop&w=1400&q=80",
    alt: "Attorney reviewing LLC formation paperwork with a client — avoiding California LLC mistakes",
  },
  {
    title: "LLC vs. S-Corp: which is right for your California business?",
    category: "Business Structuring",
    readTime: "8 min",
    excerpt:
      "Both structures offer liability protection, but the tax implications differ significantly. We break down when an LLC makes more sense and when an S-Corp election could save you thousands.",
    image:
      "https://images.unsplash.com/photo-1772588627483-d036793569e8?auto=format&fit=crop&w=1400&q=80",
    alt: "Tax forms and calculator on a desk — LLC vs S-Corp tax comparison",
  },
  {
    title: "The complete California LLC compliance checklist",
    category: "Compliance",
    readTime: "5 min",
    excerpt:
      "Annual franchise tax, biennial Statement of Information, BOI reporting — here's everything you need to stay compliant after forming your LLC in California.",
    image:
      "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=1400&q=80",
    alt: "Compliance checklist printout next to a laptop — California LLC annual compliance",
  },
  {
    title: "How the $800 franchise tax works (and when it's due)",
    category: "Tax",
    readTime: "4 min",
    excerpt:
      "California's annual minimum franchise tax applies to every LLC regardless of income. We explain when it's due, how to pay it, and what happens if you miss the deadline.",
    image:
      "https://images.unsplash.com/photo-1775363949849-cdc2167914a4?auto=format&fit=crop&w=1400&q=80",
    alt: "Tax day marked on a calendar with paperwork — California LLC franchise tax deadline",
  },
  {
    title: "Single-member vs. multi-member LLC: pros and cons",
    category: "LLC Formation",
    readTime: "7 min",
    excerpt:
      "Choosing between a single-member and multi-member LLC affects everything from taxes to management. Here's a practical comparison to help you decide.",
    image:
      "https://images.unsplash.com/photo-1758599543278-32d9d073941e?auto=format&fit=crop&w=1400&q=80",
    alt: "Two business partners shaking hands outside a modern office building — multi-member LLC partnership",
  },
  {
    title: "Why every LLC needs an Operating Agreement",
    category: "Legal",
    readTime: "5 min",
    excerpt:
      "California doesn't require one, but operating without an Operating Agreement means the state's default rules apply — and they may not match your intentions.",
    image:
      "https://images.unsplash.com/photo-1769038947088-62455c949efc?auto=format&fit=crop&w=1400&q=80",
    alt: "Person signing an LLC Operating Agreement with a pen — California LLC contract",
  },
  {
    title: "How to convert a sole proprietorship to a California LLC",
    category: "LLC Formation",
    readTime: "6 min",
    excerpt:
      "Ready to upgrade from sole proprietor to LLC? Here's a step-by-step guide to converting your existing business while maintaining continuity.",
    image:
      "https://images.unsplash.com/photo-1583124252465-d281e51012bf?auto=format&fit=crop&w=1400&q=80",
    alt: "Sole proprietor working at a small business counter — converting to a California LLC",
  },
  {
    title: "Understanding the California LLC annual fee",
    category: "Tax",
    readTime: "4 min",
    excerpt:
      "If your LLC earns over $250,000 in California-source income, you owe an additional annual fee on top of the franchise tax. Here's the fee schedule and how to calculate it.",
    image:
      "https://images.unsplash.com/photo-1772588627342-5ec373e236d8?auto=format&fit=crop&w=1400&q=80",
    alt: "Hands holding tax forms with calculator and laptop — California LLC annual fee calculation",
  },
  {
    title: "What is a registered agent and why do you need one?",
    category: "Compliance",
    readTime: "3 min",
    excerpt:
      "Every California LLC must designate a registered agent. We explain what they do, why it matters, and whether you should use a professional service.",
    image:
      "https://images.unsplash.com/photo-1686853298482-7f3fd1d5b279?auto=format&fit=crop&w=1400&q=80",
    alt: "Row of business mailboxes — California LLC registered agent service",
  },
];

export default function BlogPage() {
  return (
    <PageShell
      cmsSlug="blog"
heroImage="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Shelves of California legal books — biz.legal blog"
      label="Blog"
      title="Insights for California business owners"
      description="Practical guides, legal updates, and expert advice on LLC formation, compliance, and California business law — written by biz.legal attorneys."
    >
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          {/* Featured post */}
          <div className="grid lg:grid-cols-2 gap-6 mb-[4rem]">
            <div className="relative aspect-[16/10] rounded-[1rem] overflow-hidden">
              <Image
                src={posts[0].image}
                alt={posts[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-sans text-[0.8rem] font-bold text-green-800 uppercase tracking-wider">
                {posts[0].category} &middot; {posts[0].readTime} read
              </span>
              <h2 className="font-serif text-[1.875rem] md:text-[2.5rem] leading-[1.1] text-black mt-3 mb-4">
                {posts[0].title}
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-6">
                {posts[0].excerpt}
              </p>
              <Link
                href="/questionnaire"
                className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-white bg-green-800 rounded-full cursor-pointer hover:bg-green-600 transition-colors duration-200 w-fit"
              >
                Read Article
              </Link>
            </div>
          </div>

          {/* Post grid */}
          <div className="border-t-2 border-black pt-6 mb-[3rem]">
            <p className="text-[1rem] font-sans font-bold text-black uppercase">
              All Articles
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[1rem] mb-4 overflow-hidden group-hover:opacity-80 transition-opacity duration-200">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <span className="font-sans text-[0.75rem] font-bold text-green-800 uppercase tracking-wider">
                  {post.category} &middot; {post.readTime} read
                </span>
                <h3 className="font-serif text-[1.25rem] leading-[1.2] text-black mt-2 mb-2 group-hover:opacity-60 transition-opacity duration-200">
                  {post.title}
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.5] line-clamp-3">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
