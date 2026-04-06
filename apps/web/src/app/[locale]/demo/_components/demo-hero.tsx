import type { DemoTheme, DemoContent } from "./types";

interface Props {
  theme: DemoTheme;
  content: DemoContent;
  layout?: "centered" | "split";
  /** Base path for multi-page link targets */
  basePath?: string;
}

export function DemoHero({ theme, content, layout = "centered", basePath }: Props) {
  const ctaHref = basePath ? `${basePath}/contacto` : "#contacto";
  const servicesHref = basePath ? `${basePath}/servicios` : "#servicios";

  if (layout === "split") {
    return (
      <section id="inicio" className="min-h-[calc(100vh-4rem)] flex items-center px-5 sm:px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16">
          <div>
            {content.location && (
              <span className={`${theme.accentText} text-xs sm:text-sm font-semibold mb-2 sm:mb-3 block`}>
                📍 {content.location}
              </span>
            )}
            <h1 data-demo-hero-title className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              {content.heroTitle}
            </h1>
            <p data-demo-hero-subtitle className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed">
              {content.heroSubtitle}
            </p>
            <div data-demo-hero-buttons className="flex flex-col sm:flex-row gap-3">
              <a href={ctaHref} className={`${theme.btnPrimary} px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors font-medium text-sm sm:text-base text-center`}>
                {content.heroCta}
              </a>
              <a href={servicesHref} className={`${theme.btnSecondary} px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors font-medium text-sm sm:text-base text-center`}>
                {content.heroCtaSecondary}
              </a>
            </div>
            {content.stats && (
              <div data-demo-hero-stats className="mt-8 sm:mt-10 flex gap-6 sm:gap-8">
                {content.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {content.heroImage ? (
            <img
              data-demo-hero-image
              src={content.heroImage}
              alt={content.clinicName}
              className="rounded-2xl aspect-[4/3] object-cover w-full"
            />
          ) : (
            <div data-demo-hero-image className={`bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} rounded-2xl aspect-[4/3] flex items-center justify-center`}>
              <span className="text-6xl sm:text-8xl">🏥</span>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-5 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto w-full py-12 sm:py-16">
        <h1 data-demo-hero-title className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          {content.heroTitle}
        </h1>
        <p data-demo-hero-subtitle className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          {content.heroSubtitle}
        </p>
        <div data-demo-hero-buttons className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={ctaHref} className={`${theme.btnPrimary} px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors font-medium text-sm sm:text-base`}>
            {content.heroCta}
          </a>
          <a href={`tel:${content.phone.replace(/\s/g, "")}`} className={`${theme.btnSecondary} px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors font-medium text-sm sm:text-base`}>
            📞 {content.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
