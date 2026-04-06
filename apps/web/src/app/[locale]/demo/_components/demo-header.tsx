"use client";

import { useCallback, useEffect, useState } from "react";
import type { DemoTheme, DemoContent } from "./types";
import { getDemoI18n } from "./demo-i18n";

interface Props {
  theme: DemoTheme;
  content: DemoContent;
  navItems?: string[];
  /** Base path for multi-page links (e.g. "/es/demo/2/embed") */
  basePath?: string;
  /** Current page slug for active state */
  currentPage?: string;
  locale?: string;
}

/** Turn a nav label into a URL-safe slug */
function toSlug(label: string) {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export function DemoHeader({ theme, content, navItems, basePath, currentPage, locale = "es" }: Props) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const i18n = getDemoI18n(locale);
  const links = navItems ?? ["Servicios", "Equipo", "Contacto"];
  const isMultiPage = !!basePath;

  return (
    <>
      <header className={`sticky top-0 z-50 ${theme.headerBg}`}>
        <nav className="max-w-6xl mx-auto px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <a
            href={isMultiPage ? basePath : "#inicio"}
            className={`${theme.brandColor} font-bold text-lg sm:text-xl tracking-tight truncate max-w-[200px] sm:max-w-none`}
          >
            {content.clinicName}
          </a>

          {/* Desktop nav */}
          <div className={`hidden md:flex items-center gap-6 text-sm ${theme.navText}`}>
            {links.map((label) => {
              const slug = toSlug(label);
              const href = isMultiPage ? `${basePath}/${slug}` : `#${slug}`;
              const isActive = isMultiPage && currentPage === slug;
              return (
                <a
                  key={label}
                  href={href}
                  className={`${theme.navHover} transition-colors ${isActive ? "font-medium text-gray-900" : ""}`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href={isMultiPage ? `${basePath}/contacto` : "#contacto"}
              className={`${theme.btnPrimary} text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors font-medium`}
            >
              {i18n.header.requestAppointment}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[60] w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            onClick={toggle}
            aria-label={open ? "Cerrar menu" : "Abrir menu"}
          >
            <span
              className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] origin-center ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-200 ${
                open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu — rendered OUTSIDE <header> to avoid backdrop-filter containing block */}
      <div
        className={`md:hidden fixed inset-0 z-[9999] bg-white text-gray-900 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Top bar area with close button */}
        <div className="h-14 sm:h-16 flex items-center justify-between px-5 sm:px-6 border-b border-gray-200">
          <span className={`${theme.brandColor} font-bold text-lg`}>{content.clinicName}</span>
          <button
            className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            onClick={close}
            aria-label="Cerrar menu"
          >
            <span className="block h-[2px] w-6 bg-gray-900 rounded-full translate-y-[7px] rotate-45" />
            <span className="block h-[2px] w-6 bg-gray-900 rounded-full opacity-0" />
            <span className="block h-[2px] w-6 bg-gray-900 rounded-full -translate-y-[7px] -rotate-45" />
          </button>
        </div>

        <div className="px-8 pt-8 flex flex-col gap-2">
          {links.map((label, i) => {
            const slug = toSlug(label);
            const href = isMultiPage ? `${basePath}/${slug}` : `#${slug}`;
            const isActive = isMultiPage && currentPage === slug;

            return (
              <a
                key={label}
                href={href}
                onClick={close}
                className={`group flex items-baseline gap-4 py-3 transition-all duration-300 ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                } ${isActive ? "text-gray-900" : "text-gray-700"}`}
                style={{ transitionDelay: open ? `${100 + i * 50}ms` : "0ms" }}
              >
                <span className="text-xs font-mono text-gray-400 tabular-nums">0{i + 1}</span>
                <span className="text-3xl font-bold tracking-tight">{label}</span>
              </a>
            );
          })}

          <div
            className={`mt-8 transition-all duration-300 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? `${100 + links.length * 50}ms` : "0ms" }}
          >
            <a
              href={isMultiPage ? `${basePath}/contacto` : "#contacto"}
              onClick={close}
              className={`${theme.btnPrimary} w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium`}
            >
              {i18n.header.requestAppointment}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
