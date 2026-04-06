import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { localizedUrl } from "@/seo";
import { cityPages, problemPages, servicePages } from "@/content/bofu";

const INDEXABLE_PATHS = [
  "/",
  "/privacy",
  "/cookies",
  "/terms",
  ...servicePages.map((item) => `/servicios/${item.slug}`),
  ...problemPages.map((item) => `/problemas/${item.slug}`),
  ...cityPages.map((item) => `/ciudades/${item.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    INDEXABLE_PATHS.map((path) => ({
      url: localizedUrl(locale, path),
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority:
        path === "/"
          ? 1
          : path.startsWith("/servicios") || path.startsWith("/problemas")
            ? 0.8
            : path.startsWith("/ciudades")
              ? 0.7
              : 0.2,
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [altLocale, localizedUrl(altLocale, path)])
        ),
      },
    }))
  );
}
