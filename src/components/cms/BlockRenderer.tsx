"use client";

import { useSyncExternalStore } from "react";
import type { ComponentType } from "react";
import HeroBlock from "./blocks/Hero";
import TrustBarBlock from "./blocks/TrustBar";
import ComparisonBlock from "./blocks/Comparison";
import ServicesBlock from "./blocks/Services";
import WhyChooseUsBlock from "./blocks/WhyChooseUs";
import VideoCtaBlock from "./blocks/VideoCta";
import ProcessBlock from "./blocks/Process";
import IndustryGridBlock from "./blocks/IndustryGrid";
import TestimonialsBlock from "./blocks/Testimonials";
import FaqBlock from "./blocks/Faq";
import CtaBannerBlock from "./blocks/CtaBanner";
import RichContentBlock from "./blocks/RichContent";
import ContactFormBlock from "./blocks/ContactForm";
import BookingFormBlock from "./blocks/BookingForm";
import AuthFormBlock from "./blocks/AuthForm";
import StatusPageBlock from "./blocks/StatusPage";
import QuestionnaireBlock from "./blocks/Questionnaire";
import PolicyBlock from "./blocks/Policy";
import type { CmsBlock } from "./types";

type DeviceMode = "desktop" | "mobile";
type JsonObject = Record<string, unknown>;
type CmsBlockComponent = ComponentType<{
  blockId: number;
  content: unknown;
  style: unknown;
}>;

const REGISTRY: Record<string, CmsBlockComponent> = {
  hero: HeroBlock,
  trustBar: TrustBarBlock,
  comparison: ComparisonBlock,
  services: ServicesBlock,
  whyChooseUs: WhyChooseUsBlock,
  videoCta: VideoCtaBlock,
  process: ProcessBlock,
  industryGrid: IndustryGridBlock,
  testimonials: TestimonialsBlock,
  faq: FaqBlock,
  ctaBanner: CtaBannerBlock,
  richContent: RichContentBlock,
  contactForm: ContactFormBlock,
  bookingForm: BookingFormBlock,
  authForm: AuthFormBlock,
  statusPage: StatusPageBlock,
  questionnaire: QuestionnaireBlock,
  policy: PolicyBlock,
};

export const BLOCK_TYPES = Object.keys(REGISTRY);

function isObject(value: unknown): value is JsonObject {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function mergeDeviceData(base: unknown, device: DeviceMode) {
  if (!isObject(base)) return base;
  const responsive = isObject(base._responsive) ? base._responsive : {};
  const deviceOverride = isObject(responsive[device]) ? responsive[device] : {};
  const baseValues = { ...base };
  delete baseValues._responsive;
  return { ...baseValues, ...deviceOverride };
}

function getDeviceVisibility(block: CmsBlock, device: DeviceMode) {
  const style = isObject(block.style) ? block.style : {};
  const visibility = isObject(style._visibility) ? style._visibility : {};
  const visible = visibility[device];
  return typeof visible === "boolean" ? visible : block.visible;
}

function useDeviceMode(): DeviceMode {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const query = window.matchMedia("(max-width: 767px)");
      query.addEventListener("change", callback);
      return () => query.removeEventListener("change", callback);
    },
    () => {
      if (typeof window === "undefined") return "desktop";
      return window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop";
    },
    () => "desktop",
  );
}

export function BlockRenderer({ block }: { block: CmsBlock }) {
  const device = useDeviceMode();
  if (!getDeviceVisibility(block, device)) return null;
  const Cmp = REGISTRY[block.type];
  if (!Cmp) {
    return (
      <div className="bg-yellow-100 text-yellow-900 p-4 text-center">
        Unknown block type: {block.type}
      </div>
    );
  }
  return (
    <div
      data-cms-block-id={block.id}
      data-cms-block-type={block.type}
      suppressHydrationWarning
    >
      <Cmp
        blockId={block.id}
        content={mergeDeviceData(block.content, device)}
        style={mergeDeviceData(block.style, device)}
      />
    </div>
  );
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
