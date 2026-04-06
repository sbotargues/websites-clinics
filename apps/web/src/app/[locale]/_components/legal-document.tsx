import type { ReactNode } from "react";

type Section = {
  heading: string;
  paragraphs: string[];
};

type DocumentProps = {
  header: {
    brandLine1: string;
    brandLine2: string;
    home: string;
  };
  title: string;
  updatedLabel: string;
  updatedValue: string;
  intro: string;
  sections: Section[];
  links: {
    privacy: string;
    cookies: string;
    terms: string;
  };
  locale: string;
};

function linkFor(locale: string, slug: string) {
  return locale === "es" ? `/${slug}` : `/${locale}/${slug}`;
}

function homePath(locale: string) {
  return locale === "es" ? "/" : `/${locale}`;
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-sm text-muted hover:text-foreground transition-colors">
      {children}
    </a>
  );
}

export function LegalDocument({
  header,
  title,
  updatedLabel,
  updatedValue,
  intro,
  sections,
  links,
  locale,
}: DocumentProps) {
  return (
    <main className="min-h-screen bg-surface px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 border border-border rounded-2xl bg-white px-4 py-3 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <a href={homePath(locale)} className="font-heading font-bold text-lg tracking-tight uppercase">
            <span className="text-primary">{header.brandLine1}</span>
            <span className="text-foreground"> {header.brandLine2}</span>
          </a>
          <a
            href={homePath(locale)}
            className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted-bg transition-colors"
          >
            {header.home}
          </a>
        </header>

        <nav className="mb-8 flex flex-wrap gap-5">
          <NavLink href={linkFor(locale, "privacy")}>{links.privacy}</NavLink>
          <NavLink href={linkFor(locale, "cookies")}>{links.cookies}</NavLink>
          <NavLink href={linkFor(locale, "terms")}>{links.terms}</NavLink>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">{title}</h1>
          <p className="text-sm text-muted">{updatedLabel}: {updatedValue}</p>
        </header>

        <p className="text-base text-muted leading-relaxed mb-8">{intro}</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm sm:text-base text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
