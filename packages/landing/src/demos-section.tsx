import { Card } from "@scope/ui";
import { DemosAnimations } from "./demos-animations";

interface DemoItem {
  title: string;
  desc: string;
  link: string;
}

interface DemosSectionProps {
  t: {
    demos: {
      title: string;
      subtitle: string;
      items: DemoItem[];
    };
  };
}

const bgColors = [
  "text-emerald-500/25",
  "text-blue-500/25",
  "text-violet-500/25",
];

export function DemosSection({ t }: DemosSectionProps) {
  return (
    <section data-demos-root className="py-16 sm:py-24 pb-24 sm:pb-32 px-4 sm:px-6 bg-muted-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {t.demos.title}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {t.demos.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.demos.items.map((item, i) => (
            <div key={item.title}>
              <Card data-card data-animate="fade-up" data-delay={String(i * 0.12)} className="overflow-hidden hover:shadow-md transition-shadow p-0 flex flex-col h-full relative">
                {/* Background illustration — line draw */}
                <div className={`absolute right-3 bottom-3 w-36 h-36 ${bgColors[i]} pointer-events-none`}>
                  {i === 0 && <BgOnePage />}
                  {i === 1 && <BgMultiPage />}
                  {i === 2 && <BgCalendar />}
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1 relative z-10">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <a
                    data-demo-btn
                    href={`/demo/${i + 1}`}
                    className="nav-link group/btn mt-4 inline-flex items-center gap-1.5 text-[13px] uppercase tracking-normal text-foreground self-start"
                  >
                    <span>{item.link}</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <DemosAnimations />
    </section>
  );
}

/* ---------- SVG illustrations ---------- */

function BgOnePage() {
  return (
    <svg data-draw viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-full h-full">
      <rect x="20" y="16" width="160" height="128" rx="8" />
      <line x1="20" y1="36" x2="180" y2="36" />
      <circle cx="34" cy="26" r="3" fill="currentColor" stroke="none" />
      <circle cx="46" cy="26" r="3" fill="currentColor" stroke="none" />
      <circle cx="58" cy="26" r="3" fill="currentColor" stroke="none" />
      <rect x="72" y="22" width="88" height="8" rx="4" />
      <rect x="40" y="48" width="80" height="6" rx="3" />
      <rect x="40" y="62" width="120" height="4" rx="2" />
      <rect x="40" y="72" width="100" height="4" rx="2" />
      <rect x="40" y="86" width="120" height="40" rx="4" />
      <path d="M60 116 l20-16 l16 10 l20-20 l24 26" />
    </svg>
  );
}

function BgMultiPage() {
  return (
    <svg data-draw viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-full h-full">
      <rect x="50" y="8" width="120" height="96" rx="6" />
      <rect x="62" y="22" width="60" height="4" rx="2" />
      <rect x="62" y="32" width="80" height="3" rx="1.5" />
      <rect x="62" y="40" width="70" height="3" rx="1.5" />
      <rect x="35" y="24" width="120" height="96" rx="6" />
      <rect x="47" y="38" width="60" height="4" rx="2" />
      <rect x="47" y="48" width="80" height="3" rx="1.5" />
      <rect x="47" y="56" width="70" height="3" rx="1.5" />
      <rect x="20" y="40" width="120" height="96" rx="6" />
      <rect x="32" y="54" width="60" height="4" rx="2" />
      <rect x="32" y="64" width="96" height="3" rx="1.5" />
      <rect x="32" y="72" width="80" height="3" rx="1.5" />
      <rect x="32" y="80" width="88" height="3" rx="1.5" />
      <rect x="32" y="92" width="44" height="32" rx="3" />
      <rect x="82" y="92" width="44" height="32" rx="3" />
    </svg>
  );
}

function BgCalendar() {
  return (
    <svg data-draw viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-full h-full">
      <rect x="24" y="16" width="152" height="128" rx="8" />
      <rect x="24" y="16" width="152" height="28" rx="8" />
      <line x1="24" y1="44" x2="176" y2="44" />
      <line x1="60" y1="8" x2="60" y2="20" strokeWidth="2.5" />
      <line x1="100" y1="8" x2="100" y2="20" strokeWidth="2.5" />
      <line x1="140" y1="8" x2="140" y2="20" strokeWidth="2.5" />
      {[0, 1, 2, 3, 4].map((c) => (
        <rect key={`dh-${c}`} x={34 + c * 28} y="50" width="18" height="4" rx="2" fill="currentColor" stroke="none" />
      ))}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <rect key={`d-${r}-${c}`} x={34 + c * 28} y={62 + r * 20} width="18" height="14" rx="3" />
        ))
      )}
      <rect x={34 + 2 * 28} y={62 + 1 * 20} width="18" height="14" rx="3" fill="currentColor" stroke="none" />
      <path d="M94 87 l3 3 l5-6" stroke="white" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
