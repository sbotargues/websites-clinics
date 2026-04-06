"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FeaturesAnimations() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-features-root]");
    const header = root?.querySelector<HTMLElement>("[data-features-header]");
    const track = root?.querySelector<HTMLDivElement>("[data-features-track]");
    if (!root || !header || !track) return;

    const animateTargets = header.querySelectorAll<HTMLElement>("[data-animate]");
    gsap.set(animateTargets, { autoAlpha: 0 });

    animateTargets.forEach((el) => {
      const delay = parseFloat(el.getAttribute("data-delay") || "0");
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    const original = track.innerHTML;
    track.innerHTML = original + original;

    const totalWidth = track.scrollWidth / 2;
    let autoTween: gsap.core.Tween;

    autoTween = gsap.to(track, {
      x: -totalWidth,
      duration: totalWidth / 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => x % totalWidth),
      },
    });

    const pause = () => autoTween.pause();
    const resume = () => autoTween.resume();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    let isDragging = false;
    let startX = 0;
    let startScrollX = 0;

    const getX = () => gsap.getProperty(track, "x") as number;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      startScrollX = getX();
      autoTween.pause();
      track.setPointerCapture(e.pointerId);
      track.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      let newX = startScrollX + dx;
      newX = newX % totalWidth;
      gsap.set(track, { x: newX });
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      track.releasePointerCapture(e.pointerId);
      track.style.cursor = "";
      const currentX = getX();
      autoTween.kill();
      autoTween = gsap.to(track, {
        x: currentX - totalWidth,
        duration: (totalWidth + (currentX % totalWidth)) / 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => {
            let val = x % totalWidth;
            if (val > 0) val -= totalWidth;
            return val;
          }),
        },
      });
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
      autoTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
