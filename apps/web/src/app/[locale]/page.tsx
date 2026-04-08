import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LandingPage } from "@scope/landing";
import { getLanguageAlternates, localizedUrl } from "@/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = await getTranslations({ locale, namespace: "metadata" });
  const canonical = localizedUrl(locale, "/");

  return {
    title: {
      default: metadata("title"),
      template: metadata("titleTemplate"),
    },
    description: metadata("description"),
    alternates: {
      canonical,
      languages: getLanguageAlternates("/"),
    },
    openGraph: {
      url: canonical,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [nav, hero, demos, features, faq, cta, footer, floatingButtons, brand] = await Promise.all([
    getTranslations("nav"),
    getTranslations("hero"),
    getTranslations("demos"),
    getTranslations("features"),
    getTranslations("faq"),
    getTranslations("cta"),
    getTranslations("footer"),
    getTranslations("floatingButtons"),
    getTranslations("brand"),
  ]);

  const t = {
    nav: {
      demos: nav("demos"),
      features: nav("features"),
      faq: nav("faq"),
      contact: nav("contact"),
      reserve: nav("reserve"),
      ariaOpen: nav("ariaOpen"),
      ariaClose: nav("ariaClose"),
      whatsappMessage: nav("whatsappMessage"),
    },
    brand: {
      logoLine1: brand("logoLine1"),
      logoLine2: brand("logoLine2"),
    },
    hero: {
      badge: hero("badge"),
      titlePre: hero("titlePre"),
      titleHighlight: hero("titleHighlight"),
      titlePost: hero("titlePost"),
      subtitle: hero("subtitle"),
      cta: hero("cta"),
      ctaSecondary: hero("ctaSecondary"),
      floatingCards: [0, 1, 2, 3, 4, 5].map((i) => hero(`floatingCards.${i}`)),
    },
    demos: {
      title: demos("title"),
      subtitle: demos("subtitle"),
      items: [0, 1, 2].map((i) => ({
        title: demos(`items.${i}.title`),
        desc: demos(`items.${i}.desc`),
        link: demos(`items.${i}.link`),
      })),
    },
    features: {
      title: features("title"),
      subtitle: features("subtitle"),
      items: [0, 1, 2, 3, 4, 5].map((i) => ({
        title: features(`items.${i}.title`),
        desc: features(`items.${i}.desc`),
      })),
    },
    faq: {
      title: faq("title"),
      subtitle: faq("subtitle"),
      items: [0, 1, 2, 3, 4, 5, 6].map((i) => ({
        question: faq(`items.${i}.question`),
        answer: faq(`items.${i}.answer`),
      })),
    },
    cta: {
      title: cta("title"),
      subtitle: cta("subtitle"),
      button: cta("button"),
      whatsapp: cta("whatsapp"),
      formLabel: cta("formLabel"),
      email: cta("email"),
      message: cta("message"),
      placeholder: cta("placeholder"),
      send: cta("send"),
      sending: cta("sending"),
      success: cta("success"),
      error: cta("error"),
    },
    footer: {
      rights: footer("rights"),
      privacy: footer("privacy"),
      cookies: footer("cookies"),
      terms: footer("terms"),
    },
    floatingButtons: {
      whatsappAria: floatingButtons("whatsappAria"),
      reserveAria: floatingButtons("reserveAria"),
      contactAria: floatingButtons("contactAria"),
      toggleOpen: floatingButtons("toggleOpen"),
      toggleClose: floatingButtons("toggleClose"),
    },
  };

  const canonical = localizedUrl(locale, "/");
  const faqEntities = t.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  const schemaBlocks = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Webs para Clinicas",
      url: canonical,
      sameAs: ["https://websclinicas.com"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Webs para Clinicas",
      url: canonical,
      inLanguage: locale,
      potentialAction: {
        "@type": "ContactAction",
        target: `${canonical}#contact`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Webs para Clinicas",
      serviceType: "Diseno web y SEO para clinicas dentales",
      url: canonical,
      areaServed: "ES",
      availableLanguage: locale,
      telephone: "+34608162699",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntities,
    },
  ];

  return (
    <>
      {schemaBlocks.map((schema, index) => (
        <script
          key={`ld-json-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <LandingPage locale={locale} t={t} />
    </>
  );
}
