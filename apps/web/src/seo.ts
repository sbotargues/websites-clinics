import { defaultLocale, locales } from "@/i18n/config";

const FALLBACK_SITE_URL = "https://websclinicas.com";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL
).replace(/\/$/, "");

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  const prefixed = path.startsWith("/") ? path : `/${path}`;
  return prefixed.replace(/\/$/, "") || "/";
}

export function localizedPath(locale: string, path = "/") {
  const normalizedPath = normalizePath(path);
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  return normalizedPath === "/"
    ? `${localePrefix || "/"}`
    : `${localePrefix}${normalizedPath}`;
}

export function localizedUrl(locale: string, path = "/") {
  return new URL(localizedPath(locale, path), `${siteUrl}/`).toString();
}

export function getLanguageAlternates(path = "/") {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, localizedUrl(locale, path)])
  ) as Record<string, string>;

  languages["x-default"] = localizedUrl(defaultLocale, path);
  return languages;
}
