"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@scope/ui";
import { LanguageSwitcher } from "./language-switcher";

interface HeaderProps {
  locale: string;
  locales: readonly string[];
  t: {
    nav: {
      demos: string;
      features: string;
      faq: string;
      contact: string;
      reserve: string;
      ariaOpen: string;
      ariaClose: string;
      whatsappMessage: string;
    };
    brand: {
      logoLine1: string;
      logoLine2: string;
    };
  };
}

const links = ["demos", "features", "faq"] as const;

export function Header({ locale, locales, t }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-[101] bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 relative z-[101]">
            <span className="font-heading font-bold text-xl tracking-tight uppercase">
              <span className="text-primary">{t.brand.logoLine1}</span>
              <span className="text-foreground"> {t.brand.logoLine2}</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            <a href="#demos" className="nav-link text-sm text-foreground" data-track="nav_click" data-track-section="demos">{t.nav.demos}</a>
            <a href="#features" className="nav-link text-sm text-foreground" data-track="nav_click" data-track-section="features">{t.nav.features}</a>
            <a href="#faq" className="nav-link text-sm text-foreground" data-track="nav_click" data-track-section="faq">{t.nav.faq}</a>
            <a href="#contact" data-track="cta_click" data-track-cta="contactar" data-track-location="header">
              <Button variant="secondary" size="sm" className="rounded-lg">{t.nav.contact}</Button>
            </a>
            <LanguageSwitcher locale={locale} locales={locales} />
          </div>

          {/* Mobile actions: language switcher + hamburger */}
          <div className="md:hidden relative z-[101] flex items-center gap-2">
            <LanguageSwitcher locale={locale} locales={locales} />
            <button
              className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
              onClick={toggle}
              aria-label={open ? t.nav.ariaClose : t.nav.ariaOpen}
            >
              <span
                className={`block h-[2px] w-6 bg-foreground rounded-full transition-all duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] origin-center ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-foreground rounded-full transition-all duration-200 ${
                  open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-foreground rounded-full transition-all duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] origin-center ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen mobile overlay — clip-path circle reveal from burger position */}
      <div
        className={`md:hidden fixed inset-0 z-[100] bg-white flex flex-col transition-[clip-path] duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
          open
            ? "[clip-path:circle(150%_at_calc(100%-2.5rem)_2rem)]"
            : "[clip-path:circle(0%_at_calc(100%-2.5rem)_2rem)] pointer-events-none"
        }`}
      >
        {/* Spacer for header height */}
        <div className="h-16 shrink-0 border-b border-border" />

        {/* Links + actions in one flow, no flex-1 stretch */}
        <div className="flex flex-col px-8 pt-12 gap-2">
          {links.map((key, i) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={close}
              data-track="nav_click" data-track-section={key}
              className={`group flex items-baseline gap-4 py-3 transition-all duration-300 ease-out ${
                open
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: open ? `${200 + i * 100}ms` : "0ms" }}
            >
              <span className="text-xs font-mono text-muted tabular-nums">0{i + 1}</span>
              <span className="text-3xl font-heading font-bold text-foreground tracking-tight group-active:text-primary transition-colors">
                {t.nav[key]}
              </span>
            </a>
          ))}

          {/* Action buttons right after links */}
          <div
            className={`flex flex-col gap-3 mt-8 transition-all duration-300 ease-out ${
              open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: open ? `${200 + links.length * 100}ms` : "0ms" }}
          >
            <div className="flex gap-3">
              <a
                href={`https://wa.me/34608162699?text=${encodeURIComponent(t.nav.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                data-track="whatsapp_click" data-track-location="mobile_menu"
                className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 bg-[#25D366] text-white font-medium text-sm active:scale-95 transition-transform"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a
                href="https://calendly.com/sbotargues/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                data-track="calendly_click" data-track-location="mobile_menu"
                className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 bg-foreground text-white font-medium text-sm active:scale-95 transition-transform"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
                {t.nav.reserve}
              </a>
            </div>
            <a href="#contact" onClick={close} data-track="cta_click" data-track-cta="contactar" data-track-location="mobile_menu">
              <Button variant="secondary" size="lg" className="w-full rounded-full text-sm">{t.nav.contact}</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
