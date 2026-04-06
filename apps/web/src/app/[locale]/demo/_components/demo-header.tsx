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
  const i18n = getDemoI18n(locale);
  const links = navItems ?? ["Servicios", "Equipo", "Contacto"];
  const isMultiPage = !!basePath;

  return (
    <header className={`sticky top-0 z-50 ${theme.headerBg}`}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a
          href={isMultiPage ? basePath : "#inicio"}
          className={`${theme.brandColor} font-bold text-lg sm:text-xl tracking-tight truncate max-w-[200px] sm:max-w-none`}
        >
          {content.clinicName}
        </a>
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
        <a
          href={isMultiPage ? `${basePath}/contacto` : "#contacto"}
          className={`${theme.btnPrimary} text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors font-medium`}
        >
          {i18n.header.requestAppointment}
        </a>
      </nav>
    </header>
  );
}
