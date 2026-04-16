import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { localizedUrl } from "@/seo";
import { getSuggestedZoneSlugs } from "@/lib/service-zones";

const STATIC_PATHS = [
  "/",
  "/privacy",
  "/cookies",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const zoneSlugs = getSuggestedZoneSlugs();

  const staticEntries = locales.flatMap((locale) =>
    STATIC_PATHS.map((path) => {
      const freq: "weekly" | "monthly" = path === "/" ? "weekly" : "monthly";
      return {
        url: localizedUrl(locale, path),
        lastModified: now,
        changeFrequency: freq,
        priority: path === "/" ? 1 : 0.2,
        alternates: {
          languages: Object.fromEntries(
            locales.map((altLocale) => [altLocale, localizedUrl(altLocale, path)])
          ),
        },
      };
    })
  );

  const cityEntries = locales.flatMap((locale) =>
    zoneSlugs.map((slug) => {
      const path = `/c/${slug}`;
      return {
        url: localizedUrl(locale, path),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((altLocale) => [altLocale, localizedUrl(altLocale, path)])
          ),
        },
      };
    })
  );

  return [...staticEntries, ...cityEntries];
}
