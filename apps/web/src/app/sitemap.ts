import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { localizedUrl } from "@/seo";

const INDEXABLE_PATHS = [
  "/",
  "/privacy",
  "/cookies",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    INDEXABLE_PATHS.map((path) => ({
      url: localizedUrl(locale, path),
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.2,
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [altLocale, localizedUrl(altLocale, path)])
        ),
      },
    }))
  );
}
