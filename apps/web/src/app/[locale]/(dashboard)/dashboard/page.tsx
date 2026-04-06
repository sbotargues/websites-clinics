import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { DashboardPage } from "@scope/dashboard";
import { getTranslationsWithFallback } from "@/i18n/safe-translations";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = await getTranslationsWithFallback(locale, "dashboard");

  const t = {
    title: d("title"),
    subscription: d("subscription"),
    licenses: d("licenses"),
    noLicenses: d("noLicenses"),
    plan: d("plan"),
    status: d("status"),
    key: d("key"),
    account: d("account"),
    bot: d("bot"),
    expires: d("expires"),
    manageBilling: d("manageBilling"),
  };

  // Mock data — will be replaced with real auth+data calls
  return <DashboardPage t={t} locale={locale} subscription={null} licenses={[]} />;
}
