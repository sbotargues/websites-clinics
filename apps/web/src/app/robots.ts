import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/seo";

const PRIVATE_PATHS = ["/login", "/register", "/dashboard", "/demo/*"];

export default function robots(): MetadataRoute.Robots {
  const disallow = locales.flatMap((l) =>
    PRIVATE_PATHS.map((p) => `/${l}${p}`)
  );

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
