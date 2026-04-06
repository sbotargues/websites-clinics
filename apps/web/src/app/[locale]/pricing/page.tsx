import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PricingPage } from "@scope/landing";
import { getLanguageAlternates, localizedUrl } from "@/seo";
import { locales } from "@/i18n/config";
import { getTranslationsWithFallback } from "@/i18n/safe-translations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const [nav, metadata] = await Promise.all([
    getTranslationsWithFallback(locale, "nav"),
    getTranslationsWithFallback(locale, "metadata"),
  ]);

  const canonical = localizedUrl(locale, "/pricing");

  return {
    title: nav("pricing"),
    description: metadata("description"),
    alternates: {
      canonical,
      languages: getLanguageAlternates("/pricing"),
    },
    openGraph: {
      url: canonical,
    },
    robots: {
      index: false,
      follow: true,
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

  const [nav, pricing, footer, brand] = await Promise.all([
    getTranslationsWithFallback(locale, "nav"),
    getTranslationsWithFallback(locale, "pricing"),
    getTranslationsWithFallback(locale, "footer"),
    getTranslationsWithFallback(locale, "brand"),
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
    pricing: {
      title: pricing("title"),
      subtitle: pricing("subtitle"),
      perMonth: pricing("perMonth"),
      features: pricing("features"),
      cta: pricing("cta"),
      popular: pricing("popular"),
    },
    footer: {
      rights: footer("rights"),
      privacy: footer("privacy"),
      cookies: footer("cookies"),
      terms: footer("terms"),
    },
  };

  return <PricingPage locale={locale} locales={locales} t={t} />;
}
