import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";

const validSlugs = [
  "restaurants",
  "retail",
  "technology",
  "construction",
  "consulting",
  "real-estate",
  "healthcare",
  "ecommerce",
  "cleaning-janitorial",
  "home-services",
  "transportation",
  "professional-services",
];

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlugs.includes(slug)) return notFound();

  return (
    <PageShell
      cmsSlug={`industries-${slug}`}
      heroImage="/amyersnapa-attachments/iStock-2243799864.jpg"
      heroAlt={`${slug.replace(/-/g, " ")} business owner forming a California LLC`}
      label="Industries"
      title={`LLC Formation for ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`}
      description={`Form your California LLC with biz.legal — attorney-drafted documents, professional filing, and ongoing support for ${slug.replace(/-/g, " ")} businesses.`}
      heroVariant="mobileHomepage"
    >
      <></>
    </PageShell>
  );
}
