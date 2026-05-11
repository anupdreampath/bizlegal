import PageShell from "@/components/PageShell";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <PageShell
      cmsSlug="faq"
heroImage="https://images.unsplash.com/photo-1758518729685-f88df7890776?auto=format&fit=crop&w=1400&q=80"
      heroAlt="California business owners in a consultation meeting with a biz.legal attorney"
      label="FAQ"
      title="Frequently asked questions"
      description="Answers to common questions about California LLC formation, management, and compliance."
    >
      <div className="py-[2rem] md:py-[3rem]">
        <FAQ />
      </div>
    </PageShell>
  );
}
