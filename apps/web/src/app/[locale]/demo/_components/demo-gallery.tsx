import type { DemoTheme, DemoContent } from "./types";
import { getDemoI18n } from "./demo-i18n";

interface Props {
  theme: DemoTheme;
  content: DemoContent;
  locale?: string;
}

export function DemoGallery({ theme, content, locale = "es" }: Props) {
  const i18n = getDemoI18n(locale);
  if (!content.galleryItems) return null;

  return (
    <section id="galeria" data-demo-section className="py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 data-demo-title className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-14">
          {content.galleryTitle || i18n.defaults.galleryTitle}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {content.galleryItems.map((item, i) => (
            <div
              key={item.label}
              data-demo-item
              className={`rounded-xl overflow-hidden relative ${i < 2 ? "aspect-[3/2] lg:col-span-2" : "aspect-square"}`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-3">
                <span className="text-white text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
