import type { DemoTheme, DemoContent } from "./types";

interface Props {
  theme: DemoTheme;
  content: DemoContent;
  columns?: 3 | 4;
}

export function DemoServices({ theme, content, columns = 3 }: Props) {
  const gridCols = columns === 4
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section id="servicios" data-demo-section className="py-20 sm:py-28 px-5 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 data-demo-title className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{content.servicesTitle}</h2>
          {content.servicesSubtitle && (
            <p data-demo-subtitle className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">{content.servicesSubtitle}</p>
          )}
        </div>
        <div className={`grid ${gridCols} gap-4 sm:gap-5`}>
          {content.services.map((s) => (
            <div
              key={s.title}
              data-demo-item
              className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block">{s.icon}</span>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{s.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
