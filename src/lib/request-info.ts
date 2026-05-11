import type { NextRequest } from "next/server";

export function getRequestInfo(req: NextRequest) {
  const headers = req.headers;
  const forwardedFor = headers.get("x-forwarded-for") || "";
  const ipAddress =
    headers.get("x-real-ip") ||
    headers.get("x-vercel-forwarded-for") ||
    forwardedFor.split(",")[0]?.trim() ||
    null;

  return {
    ipAddress,
    city: decodeHeader(headers.get("x-vercel-ip-city")),
    region: decodeHeader(headers.get("x-vercel-ip-country-region")),
    country: decodeHeader(headers.get("x-vercel-ip-country")),
    timezone: decodeHeader(headers.get("x-vercel-ip-timezone")),
    userAgent: headers.get("user-agent"),
  };
}

function decodeHeader(value: string | null) {
  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function parseDevice(userAgent: string | null) {
  const ua = userAgent || "";
  const deviceType = /Mobile|Android|iPhone/i.test(ua)
    ? "mobile"
    : /iPad|Tablet/i.test(ua)
      ? "tablet"
      : "desktop";
  const browser = /Edg\//.test(ua)
    ? "Edge"
    : /Chrome\//.test(ua)
      ? "Chrome"
      : /Safari\//.test(ua)
        ? "Safari"
        : /Firefox\//.test(ua)
          ? "Firefox"
          : null;
  const os = /Windows/i.test(ua)
    ? "Windows"
    : /Mac OS X/i.test(ua)
      ? "macOS"
      : /Android/i.test(ua)
        ? "Android"
        : /iPhone|iPad/i.test(ua)
          ? "iOS"
          : null;

  return { deviceType, browser, os };
}
