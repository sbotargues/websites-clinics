import type { DemoTheme, DemoContent } from "./types";
import { getDemoI18n } from "./demo-i18n";

interface Props {
  theme: DemoTheme;
  content: DemoContent;
  locale?: string;
}

export function DemoTestimonials({ theme, content, locale = "es" }: Props) {
  const i18n = getDemoI18n(locale);
  if (!content.testimonials) return null;

  return (
    <section id="testimonios" data-demo-section className={`py-20 sm:py-28 px-5 sm:px-6 ${theme.accentBg}`}>
      <div className="max-w-5xl mx-auto">
        <h2 data-demo-title className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-14">
          {content.testimonialsTitle || i18n.defaults.testimonialsTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {content.testimonials.map((t) => (
            <div key={t.name} data-demo-item className="bg-white rounded-xl p-5 sm:p-6 shadow-sm">
              <p className="text-sm text-gray-500 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className={`w-10 h-10 rounded-full ${theme.avatarBg} flex items-center justify-center text-xs font-medium ${theme.avatarText}`}>
                    {t.name[0]}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
