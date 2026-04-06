"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const root = ref.current;
    const ctx = gsap.context(() => {
      const elements = root.querySelectorAll<HTMLElement>("[data-animate]");

      // Hide targets before first paint so there is no visible flash.
      gsap.set(elements, { autoAlpha: 0 });

      elements.forEach((el) => {
        const type = el.getAttribute("data-animate") || "fade-up";
        const delay = parseFloat(el.getAttribute("data-delay") || "0");

        const from: gsap.TweenVars = { autoAlpha: 0 };
        if (type === "fade-up") from.y = 40;
        if (type === "fade-left") from.x = -40;
        if (type === "fade-right") from.x = 40;
        if (type === "scale") {
          from.scale = 0.95;
          from.y = 20;
        }

        gsap.fromTo(el, from, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return ref;
}
