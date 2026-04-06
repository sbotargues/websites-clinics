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
  const canonical = localizedUrl(locale, "/cookies");

  return {
    title: legal.cookies.title,
    description: legal.cookies.intro,
    alternates: {
      canonical,
      languages: getLanguageAlternates("/cookies"),
    },
    openGraph: {
      url: canonical,
    },
  };
}

export default async function CookiesPage({
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
      title={legal.cookies.title}
      updatedLabel={legal.cookies.updatedLabel}
      updatedValue={legal.cookies.updatedValue}
      intro={legal.cookies.intro}
      sections={legal.cookies.sections}
    />
  );
}
