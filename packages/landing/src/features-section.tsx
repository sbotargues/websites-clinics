import { FeaturesAnimations } from "./features-section-animations";

interface Feature {
  title: string;
  desc: string;
}

interface FeaturesSectionProps {
  t: {
    features: {
      title: string;
      subtitle: string;
      items: Feature[];
    };
  };
}

/* Simple SVG illustrations per card index */
const illustrations = [
  // 0 – Google / search
  (
    <svg viewBox="0 0 80 80" fill="none" className="w-14 h-14" role="img" aria-hidden="true">
      <circle cx="34" cy="34" r="20" stroke="currentColor" strokeWidth="3" opacity=".25" />
      <line x1="48" y1="48" x2="66" y2="66" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".5" />
      <circle cx="34" cy="34" r="8" fill="currentColor" opacity=".15" />
    </svg>
  ),
  // 1 – Phone / calls
  (
    <svg viewBox="0 0 80 80" fill="none" className="w-14 h-14" role="img" aria-hidden="true">
      <rect x="24" y="8" width="32" height="64" rx="6" stroke="currentColor" strokeWidth="3" opacity=".25" />
      <circle cx="40" cy="60" r="3" fill="currentColor" opacity=".4" />
      <rect x="32" y="20" width="16" height="3" rx="1.5" fill="currentColor" opacity=".2" />
      <path d="M33 36l4 4 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
    </svg>
  ),
  // 2 – Calendar / appointments
  (
    <svg viewBox="0 0 80 80" fill="none" className="w-14 h-14" role="img" aria-hidden="true">
      <rect x="12" y="18" width="56" height="50" rx="6" stroke="currentColor" strokeWidth="3" opacity=".25" />
      <line x1="12" y1="32" x2="68" y2="32" stroke="currentColor" strokeWidth="2" opacity=".2" />
      <line x1="28" y1="10" x2="28" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".4" />
      <line x1="52" y1="10" x2="52" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".4" />
      <circle cx="40" cy="50" r="8" fill="currentColor" opacity=".12" />
      <path d="M36 50l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
    </svg>
  ),
  // 3 – Star / impression
  (
    <svg viewBox="0 0 80 80" fill="none" className="w-14 h-14" role="img" aria-hidden="true">
      <path d="M40 12l8.5 17.2 19 2.8-13.7 13.4 3.2 18.9L40 54.8l-17 9.5 3.2-18.9L12.5 32l19-2.8z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" opacity=".25" />
      <path d="M40 24l4.5 9.1 10 1.5-7.2 7 1.7 10L40 46.8l-9 4.8 1.7-10-7.2-7 10-1.5z" fill="currentColor" opacity=".1" />
    </svg>
  ),
  // 4 – Rocket / speed
  (
    <svg viewBox="0 0 80 80" fill="none" className="w-14 h-14" role="img" aria-hidden="true">
      <path d="M40 10c0 0-20 15-20 40h40c0-25-20-40-20-40z" stroke="currentColor" strokeWidth="3" opacity=".25" />
      <circle cx="40" cy="36" r="6" fill="currentColor" opacity=".15" />
      <path d="M28 54l-8 14h8z" fill="currentColor" opacity=".15" />
      <path d="M52 54l8 14h-8z" fill="currentColor" opacity=".15" />
      <line x1="40" y1="58" x2="40" y2="72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".3" />
    </svg>
  ),
  // 5 – Shield / zero tech
  (
    <svg viewBox="0 0 80 80" fill="none" className="w-14 h-14" role="img" aria-hidden="true">
      <path d="M40 8L14 22v20c0 16 11 28 26 32 15-4 26-16 26-32V22L40 8z" stroke="currentColor" strokeWidth="3" opacity=".25" />
      <path d="M33 42l5 5 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
    </svg>
  ),
];

export function FeaturesSection({ t }: FeaturesSectionProps) {
  return (
    <section id="features" data-features-root className="py-12 sm:py-16 pb-20 sm:pb-28">
      {/* Header */}
      <div className="text-center mb-10 px-4 sm:px-6" data-features-header>
        <h2
          data-animate="fade-up"
          className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4"
        >
          {t.features.title}
        </h2>
        <p
          data-animate="fade-up"
          data-delay="0.1"
          className="text-muted text-lg max-w-xl mx-auto"
        >
          {t.features.subtitle}
        </p>
      </div>

      {/* Horizontal auto-scroll carousel */}
      <div className="overflow-hidden touch-pan-y">
        <div data-features-track className="flex gap-5 w-max cursor-grab active:cursor-grabbing">
          {t.features.items.map((item, i) => (
            <div
              key={i}
              className="w-[260px] sm:w-[300px] shrink-0 rounded-2xl bg-gradient-to-b from-stone-100 to-stone-50 border border-border/40 shadow-sm p-6 flex flex-col items-center text-center gap-3 select-none"
            >
              <div className="text-primary">
                {illustrations[i % illustrations.length]}
              </div>
              <h3 className="text-base font-semibold text-foreground leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <FeaturesAnimations />
    </section>
  );
}
