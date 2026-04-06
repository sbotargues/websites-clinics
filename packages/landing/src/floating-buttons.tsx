"use client";

import { useCallback, useState } from "react";

const R = "3.5rem"; // arc radius

interface FloatingButtonsProps {
  t: {
    nav: { whatsappMessage: string };
    floatingButtons: {
      whatsappAria: string;
      reserveAria: string;
      contactAria: string;
      toggleOpen: string;
      toggleClose: string;
    };
  };
}

export function FloatingButtons({ t }: FloatingButtonsProps) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  const ball = "w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]";
  const hidden = "translate-x-0 translate-y-0 scale-0 opacity-0";

  return (
    <div className="fixed bottom-5 right-5 z-[99]">
      {/* WhatsApp — 180° (left) */}
      <a
        href={`https://wa.me/34608162699?text=${encodeURIComponent(t.nav.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
        aria-label={t.floatingButtons.whatsappAria}
        data-track="whatsapp_click" data-track-location="floating"
        className={`absolute bottom-0 right-0 ${ball} bg-[#25D366] text-white ${
          open ? "-translate-x-[3.75rem] -translate-y-[0.25rem] scale-100 opacity-100" : hidden
        }`}
      >
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Calendly — 90° (top) */}
      <a
        href="https://calendly.com/sbotargues/new-meeting"
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
        aria-label={t.floatingButtons.reserveAria}
        data-track="calendly_click" data-track-location="floating"
        className={`absolute bottom-0 right-0 ${ball} bg-foreground text-white ${
          open ? "-translate-x-[0.25rem] -translate-y-[3.75rem] scale-100 opacity-100" : hidden
        }`}
        style={{ transitionDelay: open ? "50ms" : "0ms" }}
      >
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
      </a>

      {/* Contact — 135° (diagonal) */}
      <a
        href="#contact"
        onClick={close}
        aria-label={t.floatingButtons.contactAria}
        data-track="cta_click" data-track-cta="contactar" data-track-location="floating"
        className={`absolute bottom-0 right-0 ${ball} bg-amber-500 text-white ${
          open ? "-translate-x-[2.6rem] -translate-y-[2.6rem] scale-100 opacity-100" : hidden
        }`}
        style={{ transitionDelay: open ? "100ms" : "0ms" }}
      >
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
      </a>

      {/* Main toggle — same size as children, subtle dark */}
      <button
        onClick={toggle}
        aria-label={open ? t.floatingButtons.toggleClose : t.floatingButtons.toggleOpen}
        data-track="floating_menu_toggle"
        className="relative w-9 h-9 rounded-full bg-foreground/90 text-white flex items-center justify-center shadow-md hover:bg-foreground active:scale-90 transition-all duration-200"
      >
        <svg
          className={`w-4 h-4 absolute transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
        <svg
          className={`w-4 h-4 absolute transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
