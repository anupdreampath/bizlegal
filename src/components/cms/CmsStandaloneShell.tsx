"use client";

import { useEffect, useState } from "react";
import CmsHeader from "./CmsHeader";
import CmsFooter from "./CmsFooter";

export default function CmsStandaloneShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Record<string, unknown>>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/theme")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.theme) setTheme(data.theme);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <CmsHeader theme={theme} />
      <main>{children}</main>
      <CmsFooter theme={theme} />
    </>
  );
}
