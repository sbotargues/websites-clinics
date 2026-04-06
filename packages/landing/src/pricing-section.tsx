import { PLANS, type Plan } from "@scope/shared";
import { Button, Card } from "@scope/ui";

interface PricingSectionProps {
  t: {
    pricing: {
      title: string;
      subtitle: string;
      perMonth: string;
      features: string;
      cta: string;
      popular: string;
    };
  };
  locale: string;
}

export function PricingSection({ t, locale }: PricingSectionProps) {
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{t.pricing.title}</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              t={t}
              locale={locale}
              isPopular={plan.id === "pro"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  t,
  locale,
  isPopular,
}: {
  plan: Plan;
  t: PricingSectionProps["t"];
  locale: string;
  isPopular: boolean;
}) {
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <Card className={`flex flex-col ${isPopular ? "border-gold/40 ring-1 ring-gold/20" : ""}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
        {isPopular && (
          <span className="px-2 py-0.5 bg-gold/10 text-gold text-xs font-semibold rounded-full">
            {t.pricing.popular}
          </span>
        )}
      </div>
      <p className="text-sm text-white/40 mb-6">{plan.description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${plan.price}</span>
        <span className="text-white/40 text-sm ml-1">/{t.pricing.perMonth}</span>
      </div>
      <ul className="space-y-2.5 mb-8 flex-1">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2 text-sm text-white/60">
            <svg className="w-4 h-4 text-green mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feat}
          </li>
        ))}
      </ul>
      <a href={`${prefix}/register`}>
        <Button variant={isPopular ? "primary" : "secondary"} className="w-full">
          {t.pricing.cta}
        </Button>
      </a>
    </Card>
  );
}
