import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LoginPage } from "@scope/login";
import { getTranslationsWithFallback } from "@/i18n/safe-translations";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const login = await getTranslationsWithFallback(locale, "login");

  const t = {
    title: login("title"),
    email: login("email"),
    password: login("password"),
    submit: login("submit"),
    noAccount: login("noAccount"),
    register: login("register"),
  };

  return <LoginPage t={t} locale={locale} />;
}
