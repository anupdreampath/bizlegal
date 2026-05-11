import HeroBlock from "./blocks/Hero";
import TrustBarBlock from "./blocks/TrustBar";
import ServicesBlock from "./blocks/Services";
import WhyChooseUsBlock from "./blocks/WhyChooseUs";
import ProcessBlock from "./blocks/Process";
import TestimonialsBlock from "./blocks/Testimonials";
import FaqBlock from "./blocks/Faq";
import CtaBannerBlock from "./blocks/CtaBanner";
import type { CmsBlock } from "./types";

const REGISTRY: Record<string, any> = {
  hero: HeroBlock,
  trustBar: TrustBarBlock,
  services: ServicesBlock,
  whyChooseUs: WhyChooseUsBlock,
  process: ProcessBlock,
  testimonials: TestimonialsBlock,
  faq: FaqBlock,
  ctaBanner: CtaBannerBlock,
};

export const BLOCK_TYPES = Object.keys(REGISTRY);

export function BlockRenderer({ block }: { block: CmsBlock }) {
  if (!block.visible) return null;
  const Cmp = REGISTRY[block.type];
  if (!Cmp) {
    return (
      <div className="bg-yellow-100 text-yellow-900 p-4 text-center">
        Unknown block type: {block.type}
      </div>
    );
  }
  return <Cmp blockId={block.id} content={block.content} style={block.style} />;
}

export function PageRenderer({ blocks }: { blocks: CmsBlock[] }) {
  return (
    <>
      {blocks.map((b) => (
        <BlockRenderer key={b.id} block={b} />
      ))}
    </>
  );
}
