"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Global click listener for elements with data-track attribute.
 * Pushes { event, ...data-track-* params } to dataLayer.
 */
export function TrackingListener() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!el) return;

      const event = el.dataset.track!;
      const params: Record<string, string> = {};
      for (const [key, val] of Object.entries(el.dataset)) {
        if (key.startsWith("track") && key !== "track" && val) {
          // Convert "trackDemoId" → "demo_id"
          const paramKey = key
            .slice(5) // remove "track" prefix
            .replace(/([A-Z])/g, "_$1")
            .toLowerCase()
            .replace(/^_/, "");
          params[paramKey] = val;
        }
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event, ...params });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
