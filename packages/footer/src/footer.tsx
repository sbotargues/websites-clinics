import { APP_NAME } from "@scope/shared";

interface FooterProps {
  locale: string;
  t: {
    footer: {
      rights: string;
      privacy: string;
      cookies: string;
      terms: string;
    };
  };
}

export function Footer({ locale, t }: FooterProps) {
  const localizedPath = (slug: string) => (locale === "es" ? `/${slug}` : `/${locale}/${slug}`);

  return (
    <footer className="border-t border-border bg-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} {APP_NAME}. {t.footer.rights}</p>
        <div className="flex items-center gap-6">
          <a href={localizedPath("privacy")} className="hover:text-foreground transition-colors">{t.footer.privacy}</a>
          <a href={localizedPath("cookies")} className="hover:text-foreground transition-colors">{t.footer.cookies}</a>
          <a href={localizedPath("terms")} className="hover:text-foreground transition-colors">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}
