import PageShell from "@/components/PageShell";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <PageShell
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
