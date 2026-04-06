export const locales = ["es", "en", "fr", "de", "it", "pt", "ca", "ru", "nl", "ka"] as const;
export const defaultLocale = "es" as const;
export type Locale = (typeof locales)[number];
