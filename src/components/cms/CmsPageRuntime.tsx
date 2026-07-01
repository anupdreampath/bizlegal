"use client";

import { useEffect, useState } from "react";
import { PageRenderer } from "./BlockRenderer";
import type { CmsBlock } from "./types";

type CmsPageResponse = {
  page: { slug: string; title: string };
  blocks: CmsBlock[];
};

export default function CmsPageRuntime({
  slug,
  fallback,
}: {
  slug?: string;
  fallback: React.ReactNode;
}) {
  const [data, setData] = useState<CmsPageResponse | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!slug) {
      return;
    }

    let cancelled = false;
    fetch(`/api/pages/${slug}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((next) => {
        if (!cancelled) setData(next);
      })
      .finally(() => {
        if (!cancelled) setLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!slug) return <>{fallback}</>;
  if (!loaded) return null;
  if (!data?.blocks?.length) return <>{fallback}</>;

  return (
    <>
      <PageRenderer blocks={data.blocks} />
    </>
  );
}
