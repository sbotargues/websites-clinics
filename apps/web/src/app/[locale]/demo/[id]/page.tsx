import type { Metadata } from "next";
import { getDemoI18n } from "../_components/demo-i18n";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const TOTAL_DEMOS = 3;
export default async function DemoViewer({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const i18n = getDemoI18n(locale);
  const numId = Number(id);
  const prevId = numId > 1 ? numId - 1 : null;
  const nextId = numId < TOTAL_DEMOS ? numId + 1 : null;

  const embedUrl = `/${locale}/demo/${id}/embed`;

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Preview toolbar */}
      <div className="flex-shrink-0 border-b border-gray-800 bg-gray-900 px-3 sm:px-4 flex items-center justify-between h-12 md:h-14">
        {/* Left: back to landing */}
        <div className="flex items-center">
          <a
            href={`/${locale}#demos`}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm px-2 py-1.5 rounded-lg hover:bg-gray-800"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>{i18n.toolbar.back}</span>
          </a>
        </div>

        {/* Center: demo navigation with clear arrows */}
        <div className="flex items-center gap-0.5 sm:gap-2">
          {prevId ? (
            <a
              href={`/${locale}/demo/${prevId}`}
              className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
              title={i18n.demoLabels[String(prevId)]}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          ) : (
            <span className="w-8" />
          )}

          <span className="text-sm font-medium text-gray-200 px-1 sm:px-3 whitespace-nowrap tabular-nums">
            {numId}/{TOTAL_DEMOS}
          </span>

          {nextId ? (
            <a
              href={`/${locale}/demo/${nextId}`}
              className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
              title={i18n.demoLabels[String(nextId)]}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ) : (
            <span className="w-8" />
          )}
        </div>

        {/* Right: CTA buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.528 5.862L.06 23.706l5.994-1.574A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.964 0-3.832-.53-5.47-1.484l-.392-.232-3.554.934.948-3.467-.256-.404A9.785 9.785 0 012.18 12c0-5.418 4.402-9.82 9.82-9.82 5.418 0 9.82 4.402 9.82 9.82 0 5.418-4.402 9.82-9.82 9.82z" />
            </svg>
            <span className="hidden sm:inline">{i18n.toolbar.whatsapp}</span>
          </a>
          <a
            href={`/${locale}#contact`}
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-colors font-medium"
          >
            <span>{i18n.toolbar.cta}</span>
          </a>
        </div>
      </div>

      {/* iframe with demo content */}
      <iframe
        src={embedUrl}
        className="flex-1 w-full border-0"
        title={`Demo ${id}`}
      />
    </div>
  );
}
