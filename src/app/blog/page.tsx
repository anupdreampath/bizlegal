import PageShell from "@/components/PageShell";
import Link from "next/link";

const posts = [
  { title: "5 mistakes to avoid when forming a California LLC", category: "LLC Formation", readTime: "6 min", excerpt: "From choosing the wrong business structure to skipping the Operating Agreement — here are the most common mistakes new LLC owners make and how to avoid them." },
  { title: "LLC vs. S-Corp: which is right for your California business?", category: "Business Structuring", readTime: "8 min", excerpt: "Both structures offer liability protection, but the tax implications differ significantly. We break down when an LLC makes more sense and when an S-Corp election could save you thousands." },
  { title: "The complete California LLC compliance checklist", category: "Compliance", readTime: "5 min", excerpt: "Annual franchise tax, biennial Statement of Information, BOI reporting — here's everything you need to stay compliant after forming your LLC in California." },
  { title: "How the $800 franchise tax works (and when it's due)", category: "Tax", readTime: "4 min", excerpt: "California's annual minimum franchise tax applies to every LLC regardless of income. We explain when it's due, how to pay it, and what happens if you miss the deadline." },
  { title: "Single-member vs. multi-member LLC: pros and cons", category: "LLC Formation", readTime: "7 min", excerpt: "Choosing between a single-member and multi-member LLC affects everything from taxes to management. Here's a practical comparison to help you decide." },
  { title: "Why every LLC needs an Operating Agreement", category: "Legal", readTime: "5 min", excerpt: "California doesn't require one, but operating without an Operating Agreement means the state's default rules apply — and they may not match your intentions." },
  { title: "How to convert a sole proprietorship to a California LLC", category: "LLC Formation", readTime: "6 min", excerpt: "Ready to upgrade from sole proprietor to LLC? Here's a step-by-step guide to converting your existing business while maintaining continuity." },
  { title: "Understanding the California LLC annual fee", category: "Tax", readTime: "4 min", excerpt: "If your LLC earns over $250,000 in California-source income, you owe an additional annual fee on top of the franchise tax. Here's the fee schedule and how to calculate it." },
  { title: "What is a registered agent and why do you need one?", category: "Compliance", readTime: "3 min", excerpt: "Every California LLC must designate a registered agent. We explain what they do, why it matters, and whether you should use a professional service." },
];

export default function BlogPage() {
  return (
    <PageShell
      label="Blog"
      title="Insights for California business owners"
      description="Practical guides, legal updates, and expert advice on LLC formation, compliance, and California business law."
    >
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          {/* Featured post */}
          <div className="grid lg:grid-cols-2 gap-6 mb-[4rem]">
            <div className="aspect-[16/10] bg-ivory-200 rounded-[1rem] flex items-center justify-center">
              <p className="text-[0.9rem] font-sans text-gray-400">Featured Image Placeholder</p>
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
              <span className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-white bg-green-800 rounded-full cursor-pointer hover:bg-green-600 transition-colors duration-200 w-fit">
                Read Article
              </span>
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
              <article
                key={post.title}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-ivory-200 rounded-[1rem] mb-4 flex items-center justify-center group-hover:opacity-80 transition-opacity duration-200">
                  <p className="text-[0.8rem] font-sans text-gray-400">Image</p>
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
