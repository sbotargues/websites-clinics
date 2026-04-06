import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getLegalCopy } from "./legal-content";
import { CookieConsent } from "./_components/cookie-consent";

// Pre-import all messages
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import deMessages from "@/messages/de.json";
import itMessages from "@/messages/it.json";
import ptMessages from "@/messages/pt.json";
import caMessages from "@/messages/ca.json";
import ruMessages from "@/messages/ru.json";
import nlMessages from "@/messages/nl.json";
import kaMessages from "@/messages/ka.json";

type LocaleMessages = Record<string, unknown>;

const allMessages: Record<string, LocaleMessages> = {
  es: esMessages,
  en: enMessages,
  fr: frMessages,
  de: deMessages,
  it: itMessages,
  pt: ptMessages,
  ca: caMessages,
  ru: ruMessages,
  nl: nlMessages,
  ka: kaMessages,
};

const ogLocaleMap: Record<string, string> = {
  es: "es_ES", en: "en_US", fr: "fr_FR", de: "de_DE",
  it: "it_IT", pt: "pt_PT", ca: "ca_ES", ru: "ru_RU", nl: "nl_NL", ka: "ka_GE",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const candidate = allMessages[locale as keyof typeof allMessages];
  const messages = (candidate ?? esMessages) as typeof esMessages;
  const m = messages.metadata;

  return {
    title: { default: m.title, template: m.titleTemplate },
    description: m.description,
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] ?? "es_ES",
      siteName: m.title.split(" — ")[0],
      title: m.title,
      description: m.description,
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const legal = getLegalCopy(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={allMessages[locale]}>
      {children}
      <CookieConsent locale={locale} copy={legal.banner} />
    </NextIntlClientProvider>
  );
}
