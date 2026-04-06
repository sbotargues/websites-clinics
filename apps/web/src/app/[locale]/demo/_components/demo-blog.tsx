import type { DemoTheme, DemoContent } from "./types";
import { getDemoI18n } from "./demo-i18n";

interface Props {
  theme: DemoTheme;
  content: DemoContent;
  locale?: string;
}

export function DemoBlog({ theme, content, locale = "es" }: Props) {
  const i18n = getDemoI18n(locale);
  if (!content.blogPosts) return null;

  return (
    <section id="blog" data-demo-section className="py-20 sm:py-28 px-5 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 data-demo-title className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-14">
          {content.blogTitle || i18n.defaults.blogTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {content.blogPosts.map((post) => (
            <div key={post.title} data-demo-item className="bg-white rounded-xl overflow-hidden border border-gray-100">
              <div className={`h-28 sm:h-32 bg-gradient-to-br ${theme.gradientFrom} to-white flex items-center justify-center text-2xl sm:text-3xl`}>
                📝
              </div>
              <div className="p-4 sm:p-5">
                <span className={`text-xs ${theme.accentText} font-medium`}>{post.cat}</span>
                <h3 className="font-semibold text-gray-900 text-sm mt-1 mb-1.5 sm:mb-2">{post.title}</h3>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
