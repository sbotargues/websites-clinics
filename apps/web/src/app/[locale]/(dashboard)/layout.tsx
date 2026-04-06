import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import { DashboardShell } from "@scope/dashboard";
import { getTranslationsWithFallback } from "@/i18n/safe-translations";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = await getTranslationsWithFallback(locale, "dashboard");

  const t = {
    nav: {
      dashboard: d("navDashboard"),
      settings: d("navSettings"),
      logout: d("navLogout"),
    },
  };

  return (
    <DashboardShell locale={locale} t={t}>
      {children}
    </DashboardShell>
  );
}
