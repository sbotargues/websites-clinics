interface CityInsightsSectionProps {
  cityData: {
    cityLabel: string;
    clinicFocus: string;
    panelLabel: string;
    panelText: string;
    clinicLabel: string;
    seoTitle: string;
    seoText: string;
    conversionTitle: string;
    conversionText: string;
  };
}

export function CityInsightsSection({ cityData }: CityInsightsSectionProps) {
  return (
    <section className="px-4 sm:px-6 py-5 sm:py-6 bg-muted-bg/55">
      <div className="max-w-6xl mx-auto grid gap-3 sm:grid-cols-2">
        <div className="rounded-[2rem] border border-border/60 bg-white/85 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.2)] backdrop-blur-sm">
          <p className="text-[11px] font-heading font-semibold uppercase tracking-[0.18em] text-primary">
            {cityData.panelLabel}
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-foreground">
            {cityData.cityLabel}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {cityData.panelText}
          </p>
        </div>

        <div className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-6 shadow-[0_30px_80px_-50px_rgba(16,185,129,0.25)]">
          <p className="text-[11px] font-heading font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {cityData.clinicLabel}
          </p>
          <h3 className="mt-3 text-2xl font-heading font-bold leading-[1.15] text-foreground">
            {cityData.clinicFocus}
          </h3>
        </div>

        <div className="rounded-[2rem] border border-border/60 bg-white/90 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.18)]">
          <p className="text-[11px] font-heading font-semibold uppercase tracking-[0.18em] text-primary">
            {cityData.seoTitle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            {cityData.seoText}
          </p>
        </div>

        <div className="rounded-[2rem] border border-border/60 bg-white/90 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.18)]">
          <p className="text-[11px] font-heading font-semibold uppercase tracking-[0.18em] text-primary">
            {cityData.conversionTitle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            {cityData.conversionText}
          </p>
        </div>
      </div>
    </section>
  );
}
