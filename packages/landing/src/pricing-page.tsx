import { Header } from "@scope/header";
import { Footer } from "@scope/footer";
import { PricingSection } from "./pricing-section";

interface PricingPageProps {
  locale: string;
  locales: readonly string[];
  t: {
    nav: {
      demos: string;
      features: string;
      faq: string;
      contact: string;
      reserve: string;
      ariaOpen: string;
      ariaClose: string;
      whatsappMessage: string;
    };
    brand: {
      logoLine1: string;
      logoLine2: string;
    };
    pricing: {
      title: string;
      subtitle: string;
      perMonth: string;
      features: string;
      cta: string;
      popular: string;
    };
    footer: {
      rights: string;
      privacy: string;
      cookies: string;
      terms: string;
    };
  };
}

export function PricingPage({ locale, locales, t }: PricingPageProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header locale={locale} locales={locales} t={{ nav: t.nav, brand: t.brand }} />
      <main>
        <PricingSection t={t} locale={locale} />
      </main>
      <Footer locale={locale} t={{ footer: t.footer }} />
    </div>
  );
}
