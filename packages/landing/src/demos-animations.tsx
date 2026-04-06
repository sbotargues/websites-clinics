"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DemosAnimations() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-demos-root]");
    if (!root) return;

    const animateTargets = root.querySelectorAll<HTMLElement>("[data-animate]");
    const svgs = root.querySelectorAll<SVGSVGElement>("svg[data-draw]");
    const btns = root.querySelectorAll<HTMLAnchorElement>("a[data-demo-btn]");

    gsap.set(animateTargets, { autoAlpha: 0 });

    animateTargets.forEach((el) => {
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

    svgs.forEach((svg) => {
      const els = svg.querySelectorAll<SVGElement>("path, rect, line, circle, ellipse");
      els.forEach((el) => {
        if (el.getAttribute("fill") === "currentColor" && !el.getAttribute("stroke")) {
          gsap.set(el, { opacity: 0 });
        } else {
          const len = (el as unknown as SVGGeometryElement).getTotalLength?.();
          if (len) gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svg.closest("[data-card]") || svg,
          start: "top 80%",
          once: true,
        },
      });

      els.forEach((el, i) => {
        if (el.getAttribute("fill") === "currentColor" && !el.getAttribute("stroke")) {
          tl.to(el, { opacity: 1, duration: 0.3 }, i * 0.15);
        } else {
          const len = (el as unknown as SVGGeometryElement).getTotalLength?.();
          if (len) {
            tl.to(el, { strokeDashoffset: 0, duration: 2.5, ease: "power1.inOut" }, i * 0.12);
          }
        }
      });
    });

    const cleanupHover: Array<() => void> = [];

    btns.forEach((btn) => {
      const onEnter = () => {
        gsap.to(btn, { scale: 1.05, duration: 0.25, ease: "back.out(1.7)" });
      };
      const onLeave = () => {
        gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
      };
      btn.addEventListener("mouseenter", onEnter);
      btn.addEventListener("mouseleave", onLeave);
      cleanupHover.push(() => {
        btn.removeEventListener("mouseenter", onEnter);
        btn.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      cleanupHover.forEach((fn) => fn());
      btns.forEach((btn) => {
        gsap.killTweensOf(btn);
      });
    };
  }, []);

  return null;
}
