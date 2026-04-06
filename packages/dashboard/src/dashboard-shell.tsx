import { APP_NAME } from "@scope/shared";

interface DashboardShellProps {
  children: React.ReactNode;
  locale: string;
  t: { nav: { dashboard: string; settings: string; logout: string } };
}

export function DashboardShell({ children, locale, t }: DashboardShellProps) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  const brandInitials = APP_NAME
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);

  const brand = locale === "en"
    ? {
        name: "The Dental Atelier",
        claim: "Web experiences crafted to fill your agenda",
      }
    : {
        name: "Atelier Dental",
        claim: "Webs de autor que convierten visitas en citas",
      };

  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href={`${prefix}/dashboard`} className="group flex min-w-0 items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/25 to-transparent text-[11px] font-semibold tracking-[0.16em] text-gold transition-transform duration-300 group-hover:-translate-y-0.5">
              {brandInitials}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-white tracking-tight">{brand.name}</span>
              <span className="block truncate text-[11px] text-white/50">{brand.claim}</span>
            </span>
          </a>

          <div className="flex items-center gap-2 text-sm">
            <a
              href={`${prefix}/dashboard`}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/10 hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold/80 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(199,168,90,0.6)]" />
              <span>{t.nav.dashboard}</span>
            </a>
            <a
              href={`${prefix}/dashboard/settings`}
              className="group inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.08] hover:text-white"
            >
              <span>{t.nav.settings}</span>
            </a>
            <a
              href={`${prefix}/`}
              className="group inline-flex items-center rounded-full border border-gold/35 bg-gold/10 px-3 py-1.5 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/20 hover:text-gold-light hover:shadow-[0_0_18px_rgba(199,168,90,0.2)]"
            >
              <span>{t.nav.logout}</span>
            </a>
          </div>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>
    </div>
  );
}
