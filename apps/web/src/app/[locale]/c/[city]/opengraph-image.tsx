import { ImageResponse } from "next/og";
import { getZone } from "@/lib/service-zones";

export const runtime = "edge";
export const alt = "Diseño web para clínicas dentales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  const zone = getZone(city);

  const labels: Record<string, { pre: string; post: string; sub: string }> = {
    es: { pre: "Web para clínicas en", post: "Diseño web y SEO local para dentistas", sub: "websclinicas.com" },
    en: { pre: "Websites for clinics in", post: "Web design & local SEO for dentists", sub: "websclinicas.com" },
    fr: { pre: "Sites web pour cliniques à", post: "Conception web & SEO local pour dentistes", sub: "websclinicas.com" },
    de: { pre: "Websites für Kliniken in", post: "Webdesign & lokales SEO für Zahnärzte", sub: "websclinicas.com" },
    it: { pre: "Siti web per cliniche a", post: "Web design & SEO locale per dentisti", sub: "websclinicas.com" },
    pt: { pre: "Sites para clínicas em", post: "Web design & SEO local para dentistas", sub: "websclinicas.com" },
    ca: { pre: "Webs per a clíniques a", post: "Disseny web & SEO local per a dentistes", sub: "websclinicas.com" },
    ru: { pre: "Сайты для клиник в", post: "Веб-дизайн и локальное SEO для стоматологов", sub: "websclinicas.com" },
    nl: { pre: "Websites voor klinieken in", post: "Webdesign & lokale SEO voor tandartsen", sub: "websclinicas.com" },
    ka: { pre: "ვებსაიტები კლინიკებისთვის", post: "ვებ-დიზაინი და ლოკალური SEO სტომატოლოგებისთვის", sub: "websclinicas.com" },
  };

  const fallback = { pre: "Web para clínicas en", post: "Diseño web y SEO local para dentistas", sub: "websclinicas.com" };
  const t = labels[locale] ?? fallback;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0B0B0B 0%, #1a1a2e 100%)",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <span style={{ color: "#7c3aed", fontSize: 28, fontWeight: 700 }}>WEBS</span>
          <span style={{ color: "#ffffff", fontSize: 28, fontWeight: 700 }}>CLÍNICAS</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#ffffff", fontSize: 42, fontWeight: 700, lineHeight: 1.2 }}>
            {t.pre}
          </span>
          <span style={{ color: "#7c3aed", fontSize: 64, fontWeight: 700, lineHeight: 1.1, marginTop: "8px" }}>
            {zone.label}
          </span>
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 24,
            marginTop: "32px",
          }}
        >
          {t.post}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "40px",
            color: "#71717a",
            fontSize: 18,
          }}
        >
          {t.sub}
        </div>
      </div>
    ),
    { ...size },
  );
}
