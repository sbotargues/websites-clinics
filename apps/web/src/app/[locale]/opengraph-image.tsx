import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Webs para Clínicas — Diseño web profesional para dentistas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const titles: Record<string, { pre: string; highlight: string; post: string; sub: string }> = {
    es: { pre: "Tu", highlight: "clínica", post: "merece una web que traiga pacientes", sub: "Diseño web profesional para dentistas" },
    en: { pre: "Your", highlight: "clinic", post: "deserves a website that brings patients", sub: "Professional web design for dentists" },
    fr: { pre: "Votre", highlight: "clinique", post: "mérite un site qui attire des patients", sub: "Conception web professionnelle pour dentistes" },
    de: { pre: "Ihre", highlight: "Klinik", post: "verdient eine Website, die Patienten bringt", sub: "Professionelles Webdesign für Zahnärzte" },
    it: { pre: "La tua", highlight: "clinica", post: "merita un sito che porti pazienti", sub: "Web design professionale per dentisti" },
    pt: { pre: "A sua", highlight: "clínica", post: "merece um site que traga pacientes", sub: "Design web profissional para dentistas" },
    ca: { pre: "La teva", highlight: "clínica", post: "mereix un web que porti pacients", sub: "Disseny web professional per a dentistes" },
    ru: { pre: "Ваша", highlight: "клиника", post: "заслуживает сайт, который приводит пациентов", sub: "Профессиональный веб-дизайн для стоматологов" },
    nl: { pre: "Uw", highlight: "kliniek", post: "verdient een website die patiënten brengt", sub: "Professioneel webdesign voor tandartsen" },
    ka: { pre: "თქვენი", highlight: "კლინიკა", post: "იმსახურებს ვებსაიტს, რომელიც პაციენტებს მოიტანს", sub: "პროფესიონალური ვებ-დიზაინი სტომატოლოგებისთვის" },
  };

  const fallback = { pre: "Tu", highlight: "clínica", post: "merece una web que traiga pacientes", sub: "Diseño web profesional para dentistas" };
  const t = titles[locale as keyof typeof titles] ?? fallback;

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
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <span style={{ color: "#ffffff", fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
              {t.pre}{" "}
            </span>
            <span style={{ color: "#7c3aed", fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
              {t.highlight}
            </span>
          </div>
          <span style={{ color: "#ffffff", fontSize: 56, fontWeight: 700, lineHeight: 1.1, marginTop: "8px" }}>
            {t.post}
          </span>
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 24,
            marginTop: "32px",
          }}
        >
          {t.sub}
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
          websclinicas.com
        </div>
      </div>
    ),
    { ...size }
  );
}
