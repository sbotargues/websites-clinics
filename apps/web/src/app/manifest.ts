import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Webs para Clinicas",
    short_name: "WebsClinicas",
    description:
      "Diseno web, SEO y captacion digital para clinicas dentales.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    lang: "es",
  };
}
