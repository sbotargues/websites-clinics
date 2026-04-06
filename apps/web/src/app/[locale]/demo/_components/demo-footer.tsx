import type { DemoContent } from "./types";
import { getDemoI18n } from "./demo-i18n";

interface Props {
  content: DemoContent;
  locale?: string;
}

export function DemoFooter({ content, locale = "es" }: Props) {
  const i18n = getDemoI18n(locale);
  return (
    <footer className="border-t border-gray-200 bg-white py-8 sm:py-10 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-sm">
        <p className="text-gray-900 font-semibold text-sm">{content.clinicName}</p>
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} {content.clinicName}. {i18n.footer.rights}</p>
      </div>
    </footer>
  );
}
