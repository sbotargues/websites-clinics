import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getLanguageAlternates, localizedPath, localizedUrl } from "@/seo";
import {
  getBofuCopy,
  getServicePage,
  servicePages,
} from "@/content/bofu";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    servicePages.map((item) => ({ locale, slug: item.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = getServicePage(slug);
  if (!data) return {};

  const path = `/servicios/${slug}`;
  const canonical = localizedUrl(locale, path);

  return {
    title: `${data.keyword} | ${getBofuCopy(locale).serviceHeading}`,
    description: `${getBofuCopy(locale).introLabel}: ${data.keyword}.`,
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      url: canonical,
    },
  };
}

export default async function ServiceBofuPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const data = getServicePage(slug);
  if (!data) notFound();
  setRequestLocale(locale);

  const copy = getBofuCopy(locale);
  const homePath = localizedPath(locale, "/");
  const contactPath = `${localizedPath(locale, "/")}#contact`;
  const pageUrl = localizedUrl(locale, `/servicios/${slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.keyword,
    serviceType: data.keyword,
    provider: {
      "@type": "Organization",
      name: "Webs para Clinicas",
      url: localizedUrl(locale, "/"),
    },
    areaServed: "ES",
    url: pageUrl,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.breadcrumbHome,
        item: localizedUrl(locale, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.serviceHeading,
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white px-5 py-12 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="mx-auto max-w-3xl">
        <a href={homePath} className="text-sm text-muted hover:text-foreground">
          {copy.breadcrumbHome}
        </a>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">{copy.introLabel}</p>
        <h1 className="mt-3 text-3xl font-heading font-bold text-foreground sm:text-4xl">
          {copy.serviceHeading}: {data.keyword}
        </h1>
        <p className="mt-5 text-base text-muted">
          {copy.introLabel}. {copy.bulletSeo}
        </p>

        <section className="mt-10 rounded-2xl border border-border bg-muted/20 p-6">
          <h2 className="text-xl font-semibold text-foreground">{copy.whyUsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>{copy.bulletFast}</li>
            <li>{copy.bulletSeo}</li>
            <li>{copy.bulletGeo}</li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl bg-black p-6 text-white">
          <h2 className="text-xl font-semibold">{copy.ctaTitle}</h2>
          <p className="mt-2 text-sm text-white/80">{copy.ctaText}</p>
          <a
            href={contactPath}
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
          >
            {copy.ctaButton}
          </a>
        </section>
      </div>
    </main>
  );
}
