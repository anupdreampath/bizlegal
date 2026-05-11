"use client";

import { useSyncExternalStore } from "react";
import type { ComponentType } from "react";
import HeroBlock from "./blocks/Hero";
import TrustBarBlock from "./blocks/TrustBar";
import ServicesBlock from "./blocks/Services";
import WhyChooseUsBlock from "./blocks/WhyChooseUs";
import ProcessBlock from "./blocks/Process";
import TestimonialsBlock from "./blocks/Testimonials";
import FaqBlock from "./blocks/Faq";
import CtaBannerBlock from "./blocks/CtaBanner";
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
  services: ServicesBlock,
  whyChooseUs: WhyChooseUsBlock,
  process: ProcessBlock,
  testimonials: TestimonialsBlock,
  faq: FaqBlock,
  ctaBanner: CtaBannerBlock,
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
    <Cmp
      blockId={block.id}
      content={mergeDeviceData(block.content, device)}
      style={mergeDeviceData(block.style, device)}
    />
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
