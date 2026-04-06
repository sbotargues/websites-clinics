import { defaultLocale, type Locale } from "@/i18n/config";

type BofuCopy = {
  serviceHeading: string;
  problemHeading: string;
  cityHeading: string;
  introLabel: string;
  whyUsTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  bulletFast: string;
  bulletSeo: string;
  bulletGeo: string;
  breadcrumbHome: string;
};

const copyByLocale: Record<Locale, BofuCopy> = {
  es: {
    serviceHeading: "Servicio",
    problemHeading: "Problema",
    cityHeading: "Ciudad",
    introLabel: "Solucion de captacion para clinicas dentales",
    whyUsTitle: "Por que funciona",
    ctaTitle: "Quieres activarlo en tu clinica",
    ctaText: "Te montamos un plan en 7 dias con web, SEO local y GEO para IA.",
    ctaButton: "Hablar por WhatsApp",
    bulletFast: "Implementacion rapida y sin bloquear tu agenda.",
    bulletSeo: "Arquitectura SEO local para captar busquedas con intencion.",
    bulletGeo: "Contenido preparado para respuestas de IA y buscadores generativos.",
    breadcrumbHome: "Inicio",
  },
  en: {
    serviceHeading: "Service",
    problemHeading: "Problem",
    cityHeading: "City",
    introLabel: "Patient acquisition solution for dental clinics",
    whyUsTitle: "Why it works",
    ctaTitle: "Want this activated for your clinic",
    ctaText: "We deploy your plan in 7 days with website, local SEO and GEO.",
    ctaButton: "Talk on WhatsApp",
    bulletFast: "Fast implementation with zero disruption.",
    bulletSeo: "Local SEO architecture for high-intent demand.",
    bulletGeo: "Content optimized for AI-generated answers.",
    breadcrumbHome: "Home",
  },
  fr: {
    serviceHeading: "Service",
    problemHeading: "Probleme",
    cityHeading: "Ville",
    introLabel: "Solution d acquisition de patients pour cliniques dentaires",
    whyUsTitle: "Pourquoi cela fonctionne",
    ctaTitle: "Vous voulez cela pour votre clinique",
    ctaText: "Mise en place en 7 jours avec site, SEO local et GEO.",
    ctaButton: "Parler sur WhatsApp",
    bulletFast: "Implementation rapide sans perturber votre equipe.",
    bulletSeo: "SEO local pour capter les recherches a forte intention.",
    bulletGeo: "Contenu prepare pour les moteurs IA.",
    breadcrumbHome: "Accueil",
  },
  de: {
    serviceHeading: "Leistung",
    problemHeading: "Problem",
    cityHeading: "Stadt",
    introLabel: "Patientengewinnung fur Zahnarztpraxen",
    whyUsTitle: "Warum es funktioniert",
    ctaTitle: "Mochten Sie das fur Ihre Praxis",
    ctaText: "In 7 Tagen mit Website, lokalem SEO und GEO live.",
    ctaButton: "Per WhatsApp sprechen",
    bulletFast: "Schnelle Umsetzung ohne Betriebsstorung.",
    bulletSeo: "Lokale SEO-Architektur fur starke Nachfrage.",
    bulletGeo: "Inhalte fur KI-Suchergebnisse optimiert.",
    breadcrumbHome: "Start",
  },
  it: {
    serviceHeading: "Servizio",
    problemHeading: "Problema",
    cityHeading: "Citta",
    introLabel: "Soluzione di acquisizione pazienti per cliniche dentali",
    whyUsTitle: "Perche funziona",
    ctaTitle: "Vuoi attivarlo per la tua clinica",
    ctaText: "In 7 giorni con sito, SEO locale e GEO.",
    ctaButton: "Parla su WhatsApp",
    bulletFast: "Implementazione rapida senza bloccare il team.",
    bulletSeo: "SEO locale per ricerche ad alta intenzione.",
    bulletGeo: "Contenuto ottimizzato per motori IA.",
    breadcrumbHome: "Home",
  },
  pt: {
    serviceHeading: "Servico",
    problemHeading: "Problema",
    cityHeading: "Cidade",
    introLabel: "Solucao de captacao para clinicas dentarias",
    whyUsTitle: "Porque funciona",
    ctaTitle: "Quer ativar isto na sua clinica",
    ctaText: "Implementamos em 7 dias com site, SEO local e GEO.",
    ctaButton: "Falar no WhatsApp",
    bulletFast: "Implementacao rapida sem travar a operacao.",
    bulletSeo: "SEO local para procura com intencao.",
    bulletGeo: "Conteudo preparado para motores generativos.",
    breadcrumbHome: "Inicio",
  },
  ca: {
    serviceHeading: "Servei",
    problemHeading: "Problema",
    cityHeading: "Ciutat",
    introLabel: "Solucio de captacio per a cliniques dentals",
    whyUsTitle: "Per que funciona",
    ctaTitle: "Ho vols activar a la teva clinica",
    ctaText: "Ho despleguem en 7 dies amb web, SEO local i GEO.",
    ctaButton: "Parlar per WhatsApp",
    bulletFast: "Implementacio rapida sense aturar el dia a dia.",
    bulletSeo: "SEO local per captar cerques amb intencio.",
    bulletGeo: "Contingut preparat per cercadors d IA.",
    breadcrumbHome: "Inici",
  },
  ru: {
    serviceHeading: "Usluga",
    problemHeading: "Problema",
    cityHeading: "Gorod",
    introLabel: "Privlechenie pacientov dlya stomatologicheskih klinik",
    whyUsTitle: "Pochemu eto rabotaet",
    ctaTitle: "Hotite zapustit eto dlya kliniki",
    ctaText: "Zapusk za 7 dney: sayt, lokalnoe SEO i GEO.",
    ctaButton: "Napisat v WhatsApp",
    bulletFast: "Bystraya realizaciya bez ostanovki raboty.",
    bulletSeo: "Lokalnaya SEO-struktura pod poisk s namereniem.",
    bulletGeo: "Kontent podgotovlen dlya generativnyh sistem.",
    breadcrumbHome: "Glavnaya",
  },
  nl: {
    serviceHeading: "Dienst",
    problemHeading: "Probleem",
    cityHeading: "Stad",
    introLabel: "Patient acquisitie voor tandartspraktijken",
    whyUsTitle: "Waarom dit werkt",
    ctaTitle: "Wil je dit voor je praktijk",
    ctaText: "Binnen 7 dagen live met website, lokale SEO en GEO.",
    ctaButton: "Praat via WhatsApp",
    bulletFast: "Snelle implementatie zonder verstoring.",
    bulletSeo: "Lokale SEO voor zoekopdrachten met intentie.",
    bulletGeo: "Content geoptimaliseerd voor AI-antwoorden.",
    breadcrumbHome: "Home",
  },
  ka: {
    serviceHeading: "Servisi",
    problemHeading: "Problema",
    cityHeading: "Kalaki",
    introLabel: "Pacientebis mozidva stomatologiuri klinikebistvis",
    whyUsTitle: "Ratom mushaobs",
    ctaTitle: "Ginda es sheqmna shens klinikashi",
    ctaText: "7 dghe-shi gavushvebt: vebsaiti, lokaluri SEO da GEO.",
    ctaButton: "WhatsApp-ze dagvikavshirdit",
    bulletFast: "Srapi danergva shecherebis gareshe.",
    bulletSeo: "Lokaluri SEO miznobrivi motkhovnistyis.",
    bulletGeo: "Kontenti AI-pasuxebistvis momzadebulia.",
    breadcrumbHome: "Mtavari",
  },
};

export const servicePages = [
  { slug: "web-dental", keyword: "web para clinica dental" },
  { slug: "seo-local-dental", keyword: "seo local para dentistas" },
  { slug: "geo-ia-clinicas", keyword: "geo para buscadores con IA" },
] as const;

export const problemPages = [
  { slug: "no-aparezco-en-google", keyword: "no aparezco en Google" },
  { slug: "pocas-citas-desde-la-web", keyword: "pocas citas desde la web" },
  { slug: "mi-competencia-sale-primero", keyword: "mi competencia sale primero" },
] as const;

export const cityPages = [
  { slug: "barcelona", keyword: "Barcelona" },
  { slug: "valencia", keyword: "Valencia" },
  { slug: "madrid", keyword: "Madrid" },
] as const;

export function getBofuCopy(locale: string) {
  return copyByLocale[(locale as Locale) ?? defaultLocale] ?? copyByLocale[defaultLocale];
}

export function getServicePage(slug: string) {
  return servicePages.find((item) => item.slug === slug) ?? null;
}

export function getProblemPage(slug: string) {
  return problemPages.find((item) => item.slug === slug) ?? null;
}

export function getCityPage(slug: string) {
  return cityPages.find((item) => item.slug === slug) ?? null;
}
