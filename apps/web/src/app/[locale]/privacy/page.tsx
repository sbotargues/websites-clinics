import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getLegalCopy } from "../legal-content";
import { LegalDocument } from "../_components/legal-document";
import { getLanguageAlternates, localizedUrl } from "@/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const legal = getLegalCopy(locale);
  const canonical = localizedUrl(locale, "/privacy");

  return {
    title: legal.privacy.title,
    description: legal.privacy.intro,
    alternates: {
      canonical,
      languages: getLanguageAlternates("/privacy"),
    },
    openGraph: {
      url: canonical,
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const legal = getLegalCopy(locale);

  return (
    <LegalDocument
      locale={locale}
      header={legal.header}
      links={legal.links}
      title={legal.privacy.title}
      updatedLabel={legal.privacy.updatedLabel}
      updatedValue={legal.privacy.updatedValue}
      intro={legal.privacy.intro}
      sections={legal.privacy.sections}
    />
  );
}
