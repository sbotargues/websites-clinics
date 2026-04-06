import type { DemoTheme, DemoContent } from "./types";
import { getDemoI18n } from "./demo-i18n";

interface Props {
  theme: DemoTheme;
  content: DemoContent;
  withForm?: boolean;
  locale?: string;
}

export function DemoContact({ theme, content, withForm = true, locale = "es" }: Props) {
  const i18n = getDemoI18n(locale);
  return (
    <section id="contacto" data-demo-section className="py-20 sm:py-28 px-5 sm:px-6">
      <div className={`max-w-5xl mx-auto ${withForm ? "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" : ""}`}>
        <div>
          <h2 data-demo-title className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{content.contactTitle}</h2>
          <p data-demo-subtitle className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">{content.contactSubtitle}</p>
          <div className="space-y-3 sm:space-y-4 text-sm text-gray-600">
            <p>📍 {content.address}</p>
            <p>📞 {content.phone}</p>
            <p>📧 {content.email}</p>
            <p>🕐 {content.hours}</p>
          </div>
        </div>
        {withForm && (
          <div data-demo-form className="bg-gray-50 rounded-2xl p-5 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{i18n.contact.name}</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-200" placeholder={i18n.contact.namePlaceholder} />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{i18n.contact.phone}</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-200" placeholder={i18n.contact.phonePlaceholder} />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{i18n.contact.message}</label>
                <textarea className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-200" rows={3} placeholder={i18n.contact.messagePlaceholder} />
              </div>
              <button className={`w-full ${theme.btnPrimary} py-2.5 rounded-lg transition-colors text-sm font-medium`}>
                {i18n.contact.send}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
