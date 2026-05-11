"use client";

import { useEffect, useRef } from "react";

const VISITOR_KEY = "biz_visitor_id";

function getVisitorId() {
  const existing = localStorage.getItem(VISITOR_KEY);
  if (existing) return existing;
  const next = crypto.randomUUID();
  localStorage.setItem(VISITOR_KEY, next);
  return next;
}

export default function AnalyticsTracker() {
  const pageViewId = useRef<number | null>(null);
  const sessionId = useRef<number | null>(null);
  const startedAt = useRef<number>(Date.now());
  const maxScroll = useRef(0);

  useEffect(() => {
    const visitorId = getVisitorId();
    const path = window.location.pathname + window.location.search;

    async function start() {
      const sessionRes = await fetch("/api/analytics/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorId,
          landingPage: path,
          referrer: document.referrer,
          utm: Object.fromEntries(new URLSearchParams(window.location.search)),
        }),
      });
      const sessionData = await sessionRes.json();
      sessionId.current = sessionData.sessionId;

      const pageRes = await fetch("/api/analytics/page-view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorId,
          sessionId: sessionId.current,
          path,
          title: document.title,
          referrer: document.referrer,
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
        }),
      });
      const pageData = await pageRes.json();
      pageViewId.current = pageData.pageViewId;
    }

    function updateScrollDepth() {
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const depth = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      maxScroll.current = Math.max(maxScroll.current, depth);
    }

    function sendEvent(eventType: string, metadata: Record<string, unknown>) {
      if (!sessionId.current) return;
      navigator.sendBeacon(
        "/api/analytics/event",
        JSON.stringify({
          visitorId,
          sessionId: sessionId.current,
          pageViewId: pageViewId.current,
          eventType,
          path,
          metadata,
        }),
      );
    }

    function captureClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const label = target?.closest("a,button")?.textContent?.trim().slice(0, 120) || target?.tagName || "";
      sendEvent("click", { label });
      if (!sessionId.current || !pageViewId.current) return;
      navigator.sendBeacon(
        "/api/analytics/heatmap",
        JSON.stringify({
          visitorId,
          sessionId: sessionId.current,
          pageViewId: pageViewId.current,
          path,
          eventType: "click",
          x: Math.round(event.clientX),
          y: Math.round(event.clientY),
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
        }),
      );
    }

    function finish() {
      const durationSeconds = Math.max(1, Math.round((Date.now() - startedAt.current) / 1000));
      navigator.sendBeacon(
        "/api/analytics/page-view",
        JSON.stringify({
          pageViewId: pageViewId.current,
          durationSeconds,
          maxScrollDepth: maxScroll.current,
          endedAt: new Date().toISOString(),
        }),
      );
    }

    start().catch(() => undefined);
    updateScrollDepth();
    window.addEventListener("scroll", updateScrollDepth, { passive: true });
    window.addEventListener("click", captureClick, { passive: true });
    window.addEventListener("pagehide", finish);

    return () => {
      finish();
      window.removeEventListener("scroll", updateScrollDepth);
      window.removeEventListener("click", captureClick);
      window.removeEventListener("pagehide", finish);
    };
  }, []);

  return null;
}
