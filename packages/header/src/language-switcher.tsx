"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const LOCALE_LABELS: Record<string, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
  ca: "Català",
  ru: "Русский",
  nl: "Nederlands",
  ka: "ქართული",
};

interface LanguageSwitcherProps {
  locale: string;
  locales: readonly string[];
}

export function LanguageSwitcher({ locale, locales }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  const setLocaleCookie = useCallback((nextLocale: string) => {
    // Keep next-intl locale selection stable even when navigating to "/" (default locale path).
    document.cookie = `NEXT_LOCALE=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open, close]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors px-2 py-1.5 rounded-lg hover:bg-muted-bg"
      >
        <svg
          className="w-5 h-5 sm:w-4 sm:h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="hidden sm:inline uppercase text-xs font-medium">{locale}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-activedescendant={`lang-${locale}`}
          className="absolute right-0 top-full mt-1 min-w-[160px] bg-white border border-border rounded-xl shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {locales.map((loc) => (
            <li key={loc} role="option" aria-selected={loc === locale} id={`lang-${loc}`}>
              <a
                href={loc === "es" ? "/" : `/${loc}`}
                onClick={() => {
                  setLocaleCookie(loc);
                  close();
                  if (typeof window !== "undefined") {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ event: "language_switch", language: loc });
                  }
                }}
                className={`flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                  loc === locale
                    ? "text-primary font-medium bg-primary/5"
                    : "text-foreground hover:bg-muted-bg"
                }`}
              >
                <span>{LOCALE_LABELS[loc]}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
