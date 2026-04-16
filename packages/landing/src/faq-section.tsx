interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  t: {
    faq: {
      title: string;
      subtitle: string;
      items: FAQItem[];
    };
  };
}

export function FAQSection({ t }: FAQSectionProps) {
  return (
    <section className="py-16 sm:py-24 pb-20 sm:pb-28 px-4 sm:px-6 bg-muted-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {t.faq.title}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-border/60 px-6 sm:px-8">
          {t.faq.items.map((item, i) => (
            <details key={i} className="group border-b border-border/50 last:border-b-0">
              <summary className="list-none w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer">
                <span className="text-sm sm:text-base font-medium text-foreground pr-4 group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-border/60 flex items-center justify-center transition-all duration-300 group-open:bg-primary group-open:border-primary group-open:rotate-45 group-hover:border-primary/50">
                  <svg
                    className="w-3 h-3 transition-colors duration-300 text-muted group-open:text-white group-hover:text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="pb-5 sm:pb-6 pr-10">
                <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
