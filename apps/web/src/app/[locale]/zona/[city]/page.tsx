import { permanentRedirect } from "next/navigation";

export default async function LegacyZoneRedirect({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;

  permanentRedirect(`/${locale}/c/${city}`);
}
