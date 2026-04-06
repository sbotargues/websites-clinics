import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SignupPage } from "@scope/signup";
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
  const reg = await getTranslationsWithFallback(locale, "register");

  const t = {
    title: reg("title"),
    name: reg("name"),
    email: reg("email"),
    password: reg("password"),
    submit: reg("submit"),
    hasAccount: reg("hasAccount"),
    login: reg("login"),
  };

  return <SignupPage t={t} locale={locale} />;
}
