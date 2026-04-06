"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animated tooth SVG that draws itself on scroll.
 * Positioned as a decorative background element.
 */
export function ToothDraw({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
      },
    });

    paths.forEach((path, i) => {
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "none",
        },
        i * 0.2
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Crown outline */}
      <path
        d="M20 75 C20 35, 35 10, 60 10 C85 10, 100 35, 100 75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Crown cusps (bumpy top) */}
      <path
        d="M30 75 C30 60, 42 52, 48 58 C52 62, 56 50, 60 48 C64 50, 68 62, 72 58 C78 52, 90 60, 90 75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Left root */}
      <path
        d="M32 75 C30 100, 28 125, 35 150"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Right root */}
      <path
        d="M88 75 C90 100, 92 125, 85 150"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Crown bottom connection */}
      <path
        d="M20 75 C20 80, 32 82, 32 75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M88 75 C88 82, 100 80, 100 75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Middle root hint */}
      <path
        d="M55 78 C55 95, 60 110, 60 120"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
