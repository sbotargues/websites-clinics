import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LandingPage } from "@scope/landing";
import { getLanguageAlternates, localizedUrl } from "@/seo";
import { getSuggestedZoneSlugs, getZone, getZonePageCopy } from "@/lib/service-zones";

type PageParams = { locale: string; city: string };
type HeroMedia = { cityImage: string; dentistImage: string };

function clampSeo(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, Math.max(0, max - 1)).trimEnd()}…`;
}

const DEFAULT_HERO_MEDIA: HeroMedia = {
  cityImage: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80",
  dentistImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
};

const CITY_HERO_MEDIA: Record<string, HeroMedia> = {
  madrid: {
    cityImage: DEFAULT_HERO_MEDIA.cityImage,
    dentistImage: DEFAULT_HERO_MEDIA.dentistImage,
  },
  barcelona: {
    cityImage: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1600&q=80",
    dentistImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
  },
  valencia: {
    cityImage: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=1600&q=80",
    dentistImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
  },
};

export async function generateStaticParams() {
  const locales = ["es", "en", "fr", "de", "it", "pt", "ca", "ru", "nl", "ka"];
  const cities = getSuggestedZoneSlugs();

  return locales.flatMap((locale) => cities.map((city) => ({ locale, city })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, city } = await params;
  const zone = getZone(city);
  const copy = getZonePageCopy(locale, zone);
  const path = `/c/${zone.slug}`;
  const canonical = localizedUrl(locale, path);
  const title = clampSeo(copy.metaTitle, 65);
  const description = clampSeo(copy.metaDescription, 155);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      url: canonical,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale, city } = await params;
  setRequestLocale(locale);

  const zone = getZone(city);
  const copy = getZonePageCopy(locale, zone);
    const heroMedia = CITY_HERO_MEDIA[zone.slug] ?? DEFAULT_HERO_MEDIA;

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
      badge: copy.heroBadge,
      titlePre: copy.heroTitlePre,
      titleHighlight: copy.heroTitleHighlight,
      titlePost: copy.heroTitlePost,
      subtitle: copy.heroSubtitle,
      cta: hero("cta"),
      ctaSecondary: hero("ctaSecondary"),
      floatingCards: [0, 1, 2, 3, 4, 5].map((i) => hero(`floatingCards.${i}`)),
    },
    demos: {
      title: copy.demosTitle,
      subtitle: copy.demosSubtitle,
      items: [0, 1, 2].map((i) => ({
        title: demos(`items.${i}.title`),
        desc: demos(`items.${i}.desc`),
        link: demos(`items.${i}.link`),
      })),
    },
    features: {
      title: copy.featuresTitle,
      subtitle: copy.featuresSubtitle,
      items: [0, 1, 2, 3, 4, 5].map((i) => ({
        title: features(`items.${i}.title`),
        desc: features(`items.${i}.desc`),
      })),
    },
    faq: {
      title: copy.faqTitle,
      subtitle: copy.faqSubtitle,
      items: [0, 1, 2, 3, 4, 5, 6].map((i) => ({
        question: faq(`items.${i}.question`),
        answer: faq(`items.${i}.answer`),
      })),
    },
    cta: {
      title: copy.ctaTitle,
      subtitle: copy.ctaSubtitle,
      button: cta("button"),
      whatsapp: cta("whatsapp"),
      formLabel: cta("formLabel"),
      email: cta("email"),
      message: cta("message"),
      placeholder: copy.ctaPlaceholder,
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

  const path = `/c/${zone.slug}`;
  const canonical = localizedUrl(locale, path);
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
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: localizedUrl(locale, "/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: zone.label,
          item: canonical,
        },
      ],
    },
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
      serviceType: copy.serviceType,
      url: canonical,
      areaServed: [zone.label, ...zone.neighborhoods],
      addressCountry: zone.countryCode,
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
          key={`ld-json-city-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <LandingPage
        locale={locale}
        t={t}
        heroVisual={{
          cityLabel: zone.label,
          cityImage: heroMedia.cityImage,
          dentistImage: heroMedia.dentistImage,
        }}
      />
    </>
  );
}
