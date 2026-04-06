"use client";

import { useEffect } from "react";

export function DemoViewTracker({ demoId }: { demoId: string }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "demo_view", demo_id: demoId });
  }, [demoId]);

  return null;
}
