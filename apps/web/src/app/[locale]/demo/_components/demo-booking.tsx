import type { DemoTheme, DemoContent } from "./types";
import { getDemoI18n } from "./demo-i18n";

interface Props {
  theme: DemoTheme;
  content: DemoContent;
  locale?: string;
}

const availableTimes = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "16:00", "16:30", "17:00", "17:30", "18:00"];

export function DemoBooking({ theme, content, locale = "es" }: Props) {
  const i18n = getDemoI18n(locale);

  return (
    <section id="reservas" data-demo-section className="py-20 sm:py-28 px-5 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 data-demo-title className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{i18n.booking.title}</h2>
          <p data-demo-subtitle className="text-sm sm:text-base text-gray-500">{i18n.booking.subtitle}</p>
        </div>

        <div data-demo-booking className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Step indicators */}
          <div className="flex border-b border-gray-100">
            {[
              `1. ${i18n.booking.stepTreatment}`,
              `2. ${i18n.booking.stepDateTime}`,
              `3. ${i18n.booking.stepData}`,
            ].map((step, i) => (
              <div
                key={step}
                className={`flex-1 py-3 sm:py-4 text-center text-xs sm:text-sm font-medium ${
                  i === 0 ? `${theme.accentBg} ${theme.accentText}` : "text-gray-400"
                }`}
              >
                {step}
              </div>
            ))}
          </div>

          <div className="p-5 sm:p-8">
            {/* Treatment selection */}
            <div className="mb-6 sm:mb-8">
              <label className="text-sm font-medium text-gray-700 block mb-3">{i18n.booking.selectTreatment}</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {i18n.booking.treatments.map((t, i) => (
                  <button
                    key={t}
                    className={`text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-xs sm:text-sm transition-colors ${
                      i === 0
                        ? `${theme.accentBorder} ${theme.accentBg} ${theme.accentText} font-medium`
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Date selector (mock calendar) */}
            <div className="mb-6 sm:mb-8">
              <label className="text-sm font-medium text-gray-700 block mb-3">{i18n.booking.pickDate}</label>
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                {i18n.booking.days.map((d, i) => (
                  <button
                    key={d}
                    className={`flex-shrink-0 w-16 sm:w-20 py-2.5 sm:py-3 rounded-lg border text-center text-xs sm:text-sm transition-colors ${
                      i === 2
                        ? `${theme.btnPrimary} border-transparent`
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time slots */}
            <div className="mb-6 sm:mb-8">
              <label className="text-sm font-medium text-gray-700 block mb-3">{i18n.booking.availableTime}</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {availableTimes.map((time, i) => (
                  <button
                    key={time}
                    className={`py-2 rounded-lg border text-xs sm:text-sm transition-colors ${
                      i === 3
                        ? `${theme.btnPrimary} border-transparent`
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Confirm button */}
            <button className={`w-full ${theme.btnPrimary} py-3 rounded-lg text-sm font-medium transition-colors`}>
              {i18n.booking.confirm} →
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">{i18n.booking.confirmation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
