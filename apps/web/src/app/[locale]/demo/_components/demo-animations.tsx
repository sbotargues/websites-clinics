"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DemoAnimations({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const root = ref.current;

    const ctx = gsap.context(() => {
      // -- Scroll-triggered sections --
      const sections = root.querySelectorAll<HTMLElement>("[data-demo-section]");
      sections.forEach((section) => {
        // Section title + subtitle fade up
        const title = section.querySelector<HTMLElement>("[data-demo-title]");
        const subtitle = section.querySelector<HTMLElement>("[data-demo-subtitle]");

        if (title) {
          gsap.fromTo(title,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: title, start: "top 85%", once: true },
            }
          );
        }
        if (subtitle) {
          gsap.fromTo(subtitle,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.7, delay: 0.1, ease: "power2.out",
              scrollTrigger: { trigger: subtitle, start: "top 85%", once: true },
            }
          );
        }

        // Staggered children (cards, team members, testimonials, etc.)
        const items = section.querySelectorAll<HTMLElement>("[data-demo-item]");
        if (items.length) {
          gsap.fromTo(items,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
              scrollTrigger: { trigger: items[0], start: "top 88%", once: true },
            }
          );
        }
      });

      // -- Contact form slide in --
      const contactForm = root.querySelector<HTMLElement>("[data-demo-form]");
      if (contactForm) {
        gsap.fromTo(contactForm,
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: contactForm, start: "top 85%", once: true },
          }
        );
      }

      // -- Booking card scale in --
      const bookingCard = root.querySelector<HTMLElement>("[data-demo-booking]");
      if (bookingCard) {
        gsap.fromTo(bookingCard,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: bookingCard, start: "top 85%", once: true },
          }
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
