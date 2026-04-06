"use client";

import { useLayoutEffect, useRef } from "react";
import { Button } from "@scope/ui";
import { useScrollAnimation } from "./use-scroll-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  t: {
    hero: {
      badge: string;
      titlePre: string;
      titleHighlight: string;
      titlePost: string;
      subtitle: string;
      cta: string;
      ctaSecondary: string;
      floatingCards: string[];
    };
  };
  locale: string;
}

const floatingCardsLayout = [
  { icon: "📈", x: "left-[4%]", y: "top-[12%]", rotate: "-6deg", delay: 0, row: "top" },
  { icon: "🕐", x: "right-[6%]", y: "top-[8%]", rotate: "4deg", delay: 0.1, row: "top" },
  { icon: "⚡", x: "left-[8%]", y: "top-[48%]", rotate: "-4deg", delay: 0.25, row: "top" },
  { icon: "🤖", x: "left-[2%]", y: "bottom-[22%]", rotate: "5deg", delay: 0.2, row: "bottom" },
  { icon: "📅", x: "right-[3%]", y: "bottom-[18%]", rotate: "-3deg", delay: 0.15, row: "bottom" },
  { icon: "🏆", x: "right-[10%]", y: "top-[45%]", rotate: "6deg", delay: 0.3, row: "bottom" },
];

export function HeroSection({ t, locale }: HeroProps) {
  const animRef = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;
    const ctx = gsap.context(() => {

      // Set perspective on the section for 3D tilt
      gsap.set(section, { perspective: 800 });

      // Hero text entrance animation
      const title = section.querySelector<HTMLElement>("[data-hero-title]");
      const subtitle = section.querySelector<HTMLElement>("[data-hero-subtitle]");
      const buttons = section.querySelector<HTMLElement>("[data-hero-buttons]");

      if (title) {
      // Wrap each word for animation, but preserve full HTML elements (like data-highlight span)
      const text = title.innerHTML;
      // Match: full elements with content (<span ...>...</span>) OR individual words
      const wrapped = text.replace(/(<span[^>]*>.*?<\/span>)|(\S+)/g, (match, element, word) => {
        if (element) {
          return `<span class="inline-block overflow-hidden pb-2"><span class="hero-word inline-block">${element}</span></span>`;
        }
        return `<span class="inline-block overflow-hidden pb-2"><span class="hero-word inline-block">${word}</span></span>`;
      });
        title.innerHTML = wrapped;
        const words = title.querySelectorAll(".hero-word");
        gsap.fromTo(words,
          { y: "110%", rotationX: -40 },
          { y: "0%", rotationX: 0, duration: 0.8, stagger: 0.06, ease: "power3.out", delay: 0.1 }
        );
      }
      if (subtitle) {
        gsap.fromTo(subtitle,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.6, ease: "power2.out" }
        );
      }
      if (buttons) {
        gsap.fromTo(buttons,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.85, ease: "power2.out" }
        );
      }

      // Floating cards entrance animation
      const cards = section.querySelectorAll<HTMLElement>("[data-float-card]");
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, scale: 0.6, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7, delay: 0.5 + i * 0.1, ease: "back.out(1.4)" }
        );
      });

      // Cursor-driven perspective tilt on floating cards
      const quickRotateX = gsap.quickTo(cards, "rotationX", { duration: 0.6, ease: "power3" });
      const quickRotateY = gsap.quickTo(cards, "rotationY", { duration: 0.6, ease: "power3" });

      // Per-card quickTo for individual parallax offset
      const cardQuickX = Array.from(cards).map((card) =>
        gsap.quickTo(card, "x", { duration: 0.8, ease: "power3" })
      );
      const cardQuickY = Array.from(cards).map((card) =>
        gsap.quickTo(card, "y", { duration: 0.8, ease: "power3" })
      );

      // "clínica" highlight — 3D tilt (desktop only)
      const highlight = section.querySelector<HTMLElement>("[data-highlight]");
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      let hRX: ReturnType<typeof gsap.quickTo> | null = null;
      let hRY: ReturnType<typeof gsap.quickTo> | null = null;
      let hScale: ReturnType<typeof gsap.quickTo> | null = null;

      if (highlight && isDesktop) {
        gsap.set(highlight, { transformPerspective: 600 });
        hRX = gsap.quickTo(highlight, "rotationX", { duration: 0.5, ease: "power3" });
        hRY = gsap.quickTo(highlight, "rotationY", { duration: 0.5, ease: "power3" });
        hScale = gsap.quickTo(highlight, "scale", { duration: 0.4, ease: "power3" });
      }

      const onPointerMove = (e: PointerEvent) => {
        const ratioX = e.clientX / window.innerWidth;
        const ratioY = e.clientY / window.innerHeight;

        // Shared tilt on cards
        quickRotateX(gsap.utils.interpolate(8, -8, ratioY));
        quickRotateY(gsap.utils.interpolate(-8, 8, ratioX));

        // Individual parallax offset based on depth factor
        cards.forEach((_, i) => {
          const depth = 1 + (i % 3) * 0.5;
          cardQuickX[i]?.((ratioX - 0.5) * 30 * depth);
          cardQuickY[i]?.((ratioY - 0.5) * 20 * depth);
        });

        // "clínica" tilt
        if (hRX && hRY && hScale) {
          hRX(gsap.utils.interpolate(25, -25, ratioY));
          hRY(gsap.utils.interpolate(-25, 25, ratioX));
          hScale(1.1);
        }
      };

      const onPointerLeave = () => {
        quickRotateX(0);
        quickRotateY(0);
        cards.forEach((_, i) => {
          cardQuickX[i]?.(0);
          cardQuickY[i]?.(0);
        });
        if (hRX && hRY && hScale) {
          hRX(0);
          hRY(0);
          hScale(1);
        }
      };

      section.addEventListener("pointermove", onPointerMove);
      section.addEventListener("pointerleave", onPointerLeave);

      const cleanup = () => {
        section.removeEventListener("pointermove", onPointerMove);
        section.removeEventListener("pointerleave", onPointerLeave);
      };

      // Parallax on scroll for decorative elements
      const decorative = section.querySelectorAll("[data-parallax]");
      decorative.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax") || "0.3");
        gsap.to(el, {
          y: () => window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return cleanup;
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-0 md:min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center justify-start pt-24 md:pt-0 md:justify-center px-4 sm:px-6">
      {/* Subtle glow — parallax */}
      <div data-parallax="0.15" className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Desktop: floating absolute cards */}
      {floatingCardsLayout.map((card, i) => (
        <div
          key={i}
          data-float-card
          className={`absolute ${card.x} ${card.y} hidden lg:flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-border shadow-lg rounded-xl px-4 py-2.5 pointer-events-none opacity-0`}
          style={{ rotate: card.rotate, transformStyle: "preserve-3d" }}
        >
          <span className="text-lg">{card.icon}</span>
          <span className="text-sm font-heading font-semibold text-foreground whitespace-nowrap">{t.hero.floatingCards[i]}</span>
        </div>
      ))}

      {/* Mobile: top row of cards — hidden on mobile for space */}
      <div className="hidden lg:hidden">
        {floatingCardsLayout.filter(c => c.row === "top").map((card, _i, arr) => {
          const i = floatingCardsLayout.indexOf(card);
          return (
            <div
              key={i}
              data-float-card
              className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-border shadow-md rounded-lg px-2.5 py-1.5 opacity-0"
              style={{ rotate: card.rotate }}
            >
              <span className="text-base">{card.icon}</span>
              <span className="text-xs font-heading font-semibold text-foreground whitespace-nowrap">{t.hero.floatingCards[i]}</span>
            </div>
          );
        })}
      </div>

      <div ref={animRef} className="max-w-4xl mx-auto text-center relative z-10">
        <h1 data-hero-title className="text-4xl sm:text-6xl font-heading font-bold text-foreground leading-[1.08] tracking-tight mb-8 text-balance">
          {t.hero.titlePre} <span data-highlight className="text-primary inline-block cursor-default relative shimmer">{t.hero.titleHighlight}</span> {t.hero.titlePost}
        </h1>
        <p data-hero-subtitle className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-12 opacity-0">
          {t.hero.subtitle}
        </p>
        <div data-hero-buttons className="flex flex-col sm:flex-row gap-4 sm:justify-center opacity-0">
          <a href="#demos" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto rounded-full">{t.hero.cta}</Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-full">{t.hero.ctaSecondary}</Button>
          </a>
        </div>
      </div>

      {/* Mobile: bottom row of cards — hidden on mobile for space */}
      <div className="hidden lg:hidden">
        {floatingCardsLayout.filter(c => c.row === "bottom").map((card) => {
          const i = floatingCardsLayout.indexOf(card);
          return (
            <div
              key={i}
              data-float-card
              className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-border shadow-md rounded-lg px-2.5 py-1.5 opacity-0"
              style={{ rotate: card.rotate }}
            >
              <span className="text-base">{card.icon}</span>
              <span className="text-xs font-heading font-semibold text-foreground whitespace-nowrap">{t.hero.floatingCards[i]}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
