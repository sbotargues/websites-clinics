import { notFound } from "next/navigation";
import {
  DemoHeader,
  DemoHero,
  DemoServices,
  DemoTeam,
  DemoTestimonials,
  DemoGallery,
  DemoBlog,
  DemoBooking,
  DemoContact,
  DemoFooter,
  DemoAnimations,
  themes,
  demoContents,
  demoThemeMap,
  demoLayouts,
  getDemoI18n,
  localizeDemoContent,
} from "../../../_components";
import type { DemoTheme, DemoContent } from "../../../_components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string; page?: string[] }>;
}) {
  const resolvedParams = await params;
  const content = demoContents[resolvedParams.id];
  if (!content) return {};
  const pageSlug = resolvedParams.page?.[0];
  const suffix = pageSlug ? ` — ${pageSlug.charAt(0).toUpperCase() + pageSlug.slice(1)}` : "";
  const i18n = getDemoI18n(resolvedParams.locale);
  return {
    title: `${i18n.embed.demoTitlePrefix} — ${content.clinicName}${suffix}`,
    robots: "noindex, nofollow",
  };
}

// Map section keys → components
const sectionComponents: Record<string, React.FC<any>> = {
  hero: DemoHero,
  services: DemoServices,
  team: DemoTeam,
  testimonials: DemoTestimonials,
  gallery: DemoGallery,
  blog: DemoBlog,
  booking: DemoBooking,
  contact: DemoContact,
  footer: DemoFooter,
};

/* ─── Multi-page: Home (hero + services preview + CTA) ─── */
function MultiPageHome({
  theme,
  content,
  layout,
  basePath,
  locale,
}: {
  theme: DemoTheme;
  content: DemoContent;
  layout: (typeof demoLayouts)[string];
  basePath: string;
  locale: string;
}) {
  const i18n = getDemoI18n(locale);
  const previewServices = content.services.slice(0, 3);

  return (
    <>
      <DemoHero theme={theme} content={content} layout={layout.heroLayout} basePath={basePath} />

      {/* Services preview */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 data-demo-title className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {content.servicesTitle}
            </h2>
            {content.servicesSubtitle && (
              <p data-demo-subtitle className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
                {content.servicesSubtitle}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {previewServices.map((s) => (
              <div
                key={s.title}
                data-demo-item
                className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl sm:text-3xl mb-2 block">{s.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{s.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={`${basePath}/servicios`}
              className={`${theme.btnSecondary} inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors`}
            >
              {i18n.embed.viewAllServices}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {content.contactTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6">{content.contactSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${basePath}/contacto`}
              className={`${theme.btnPrimary} px-6 py-3 rounded-lg transition-colors font-medium text-sm sm:text-base`}
            >
              {content.heroCta}
            </a>
            <a
              href={`tel:${content.phone.replace(/\s/g, "")}`}
              className={`${theme.btnSecondary} px-6 py-3 rounded-lg transition-colors font-medium text-sm sm:text-base`}
            >
              📞 {content.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Single section page wrapper (for multi-page sub-pages) ─── */
function SingleSectionPage({
  sectionKey,
  theme,
  content,
  layout,
  locale,
}: {
  sectionKey: string;
  theme: DemoTheme;
  content: DemoContent;
  layout: (typeof demoLayouts)[string];
  locale: string;
}) {
  const Component = sectionComponents[sectionKey];
  if (!Component) return notFound();

  const extraProps: Record<string, unknown> = {};
  if (sectionKey === "hero") extraProps.layout = layout.heroLayout;
  if (sectionKey === "services") extraProps.columns = layout.serviceColumns;

  return <Component theme={theme} content={content} locale={locale} {...extraProps} />;
}

/* ─── Main page component ─── */
export default async function DemoEmbed({
  params,
}: {
  params: Promise<{ id: string; locale: string; page?: string[] }>;
}) {
  const resolvedParams = await params;
  const rawContent = demoContents[resolvedParams.id];
  const themeName = demoThemeMap[resolvedParams.id];
  const layout = demoLayouts[resolvedParams.id];
  if (!rawContent || !themeName || !layout) notFound();

  const content = localizeDemoContent(rawContent, resolvedParams.locale, resolvedParams.id);

  const theme = themes[themeName];
  if (!theme) notFound();
  const pageSlug = resolvedParams.page?.[0] ?? "";
  const basePath = `/${resolvedParams.locale}/demo/${resolvedParams.id}/embed`;

  // ── Multi-page demo ──
  if (layout.multiPage) {
    // Validate page slug
    if (pageSlug && layout.pageMap && !layout.pageMap[pageSlug]) {
      notFound();
    }

    const sectionKey = pageSlug && layout.pageMap ? layout.pageMap[pageSlug] : null;

    return (
      <div className="min-h-screen bg-white overflow-x-hidden">
        <DemoHeader
          theme={theme}
          content={content}
          navItems={layout.navItems}
          basePath={basePath}
          currentPage={pageSlug}
          locale={resolvedParams.locale}
        />
        <DemoAnimations>
          {sectionKey ? (
            <SingleSectionPage
              sectionKey={sectionKey}
              theme={theme}
              content={content}
              layout={layout}
              locale={resolvedParams.locale}
            />
          ) : (
            <MultiPageHome
              theme={theme}
              content={content}
              layout={layout}
              basePath={basePath}
              locale={resolvedParams.locale}
            />
          )}
        </DemoAnimations>
        <DemoFooter content={content} locale={resolvedParams.locale} />
      </div>
    );
  }

  // ── Single-page demo (demo 1) ──
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <DemoHeader theme={theme} content={content} navItems={layout.navItems} locale={resolvedParams.locale} />
      <DemoAnimations>
        {layout.sections.map((section) => {
          const Component = sectionComponents[section];
          if (!Component) return null;

          const extraProps: Record<string, unknown> = {};
          if (section === "hero") extraProps.layout = layout.heroLayout;
          if (section === "services") extraProps.columns = layout.serviceColumns;
          if (section === "footer") {
            return <DemoFooter key={section} content={content} locale={resolvedParams.locale} />;
          }

          return <Component key={section} theme={theme} content={content} locale={resolvedParams.locale} {...extraProps} />;
        })}
      </DemoAnimations>
    </div>
  );
}
