import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { defaultLocale, locales, type Locale } from "./i18n/config";
import { localizedPath } from "./seo";

const handleI18nRouting = createMiddleware(routing);

const BOT_UA_RE = /(googlebot|bingbot|duckduckbot|baiduspider|yandex|slurp|crawler|spider)/i;

const countryToLocale: Partial<Record<string, Locale>> = {
  GE: "ka",
  ES: "es",
  FR: "fr",
  DE: "de",
  IT: "it",
  PT: "pt",
  RU: "ru",
  NL: "nl",
};

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

function getLocaleFromAcceptLanguage(headerValue: string | null): Locale | null {
  if (!headerValue) return null;

  const tags = headerValue
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean) as string[];

  for (const tag of tags) {
    const exact = tag.replace("-", "_") as Locale;
    if (isLocale(exact)) return exact;

    const language = tag.split("-")[0] as Locale;
    if (isLocale(language)) return language;
  }

  return null;
}

function getCountry(req: NextRequest) {
  return (
    req.headers.get("x-vercel-ip-country") ??
    req.headers.get("cf-ipcountry") ??
    ""
  )
    .trim()
    .toUpperCase();
}

function hasLocalePrefix(pathname: string) {
  return locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
}

function resolvePreferredLocale(req: NextRequest): Locale {
  const country = getCountry(req);
  const localeFromCountry = countryToLocale[country];
  if (localeFromCountry) return localeFromCountry;

  return getLocaleFromAcceptLanguage(req.headers.get("accept-language")) ?? defaultLocale;
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = req.headers.get("user-agent") ?? "";
  const isBot = BOT_UA_RE.test(ua);

  if (isBot) {
    return handleI18nRouting(req);
  }

  if (pathname !== "/" || hasLocalePrefix(pathname)) {
    return handleI18nRouting(req);
  }

  const hasLocaleCookie = req.cookies.has("NEXT_LOCALE");
  if (hasLocaleCookie) {
    return handleI18nRouting(req);
  }

  const preferredLocale = resolvePreferredLocale(req);
  if (preferredLocale === defaultLocale) {
    return handleI18nRouting(req);
  }

  const redirectUrl = new URL(localizedPath(preferredLocale, "/"), req.url);
  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set("NEXT_LOCALE", preferredLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};
