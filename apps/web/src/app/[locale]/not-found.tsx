"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { defaultLocale } from "@/i18n/config";

const copy = {
  es: {
    badge: "Error 404",
    title: "Esta pagina no existe",
    description: "La URL que has abierto no esta disponible o se ha movido.",
    cta: "Volver al inicio",
  },
  en: {
    badge: "Error 404",
    title: "This page does not exist",
    description: "The URL you opened is unavailable or has moved.",
    cta: "Back to home",
  },
  fr: {
    badge: "Erreur 404",
    title: "Cette page n'existe pas",
    description: "L'URL ouverte n'est pas disponible ou a ete deplacee.",
    cta: "Retour a l'accueil",
  },
  de: {
    badge: "Fehler 404",
    title: "Diese Seite existiert nicht",
    description: "Die aufgerufene URL ist nicht verfugbar oder wurde verschoben.",
    cta: "Zur Startseite",
  },
  it: {
    badge: "Errore 404",
    title: "Questa pagina non esiste",
    description: "L'URL aperto non e disponibile o e stato spostato.",
    cta: "Torna alla home",
  },
  pt: {
    badge: "Erro 404",
    title: "Esta pagina nao existe",
    description: "O URL aberto nao esta disponivel ou foi movido.",
    cta: "Voltar ao inicio",
  },
  ca: {
    badge: "Error 404",
    title: "Aquesta pagina no existeix",
    description: "L'URL que has obert no esta disponible o s'ha mogut.",
    cta: "Torna a l'inici",
  },
  ru: {
    badge: "Oshibka 404",
    title: "Eta stranica ne sushchestvuet",
    description: "Otkrytyy URL nedostupen ili byl peremeshchen.",
    cta: "Na glavnuyu",
  },
  nl: {
    badge: "Fout 404",
    title: "Deze pagina bestaat niet",
    description: "De URL die je hebt geopend is niet beschikbaar of is verplaatst.",
    cta: "Terug naar home",
  },
  ka: {
    badge: "Error 404",
    title: "Es gverdi ar arsebobs",
    description: "URL romelic gaakvet ar aris xelmisacvdomi an gadatanilia.",
    cta: "Dabruneba mtavarze",
  },
} as const;

export default function LocalizedNotFound() {
  const locale = useLocale();
  const c = copy[(locale as keyof typeof copy) ?? defaultLocale] ?? copy[defaultLocale];
  const homePath = locale === defaultLocale ? "/" : `/${locale}`;

  return (
    <main className="min-h-screen bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">{c.badge}</p>
        <h1 className="mt-4 text-4xl font-heading font-bold text-foreground sm:text-5xl">
          {c.title}
        </h1>
        <p className="mt-4 text-base text-muted">{c.description}</p>
        <Link
          href={homePath}
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white"
        >
          {c.cta}
        </Link>
      </div>
    </main>
  );
}
