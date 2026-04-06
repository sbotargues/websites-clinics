import { defaultLocale } from "./config";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import deMessages from "@/messages/de.json";
import itMessages from "@/messages/it.json";
import ptMessages from "@/messages/pt.json";
import caMessages from "@/messages/ca.json";
import ruMessages from "@/messages/ru.json";
import nlMessages from "@/messages/nl.json";
import kaMessages from "@/messages/ka.json";

type TranslateFn = (key: string) => string;

const allMessages: Record<string, Record<string, unknown>> = {
  es: esMessages as Record<string, unknown>,
  en: enMessages as Record<string, unknown>,
  fr: frMessages as Record<string, unknown>,
  de: deMessages as Record<string, unknown>,
  it: itMessages as Record<string, unknown>,
  pt: ptMessages as Record<string, unknown>,
  ca: caMessages as Record<string, unknown>,
  ru: ruMessages as Record<string, unknown>,
  nl: nlMessages as Record<string, unknown>,
  ka: kaMessages as Record<string, unknown>,
};

function readPath(obj: unknown, keyPath: string): unknown {
  if (!obj || typeof obj !== "object") return undefined;

  return keyPath.split(".").reduce<unknown>((acc, key) => {
    if (!acc || typeof acc !== "object") return undefined;
    return (acc as Record<string, unknown>)[key];
  }, obj);
}

export async function getTranslationsWithFallback(
  locale: string,
  namespace: string
): Promise<TranslateFn> {
  const primaryNamespace = readPath(allMessages[locale], namespace);
  const fallbackNamespace = readPath(allMessages[defaultLocale], namespace);

  return ((key: string) => {
    const primaryValue = readPath(primaryNamespace, key);
    if (typeof primaryValue === "string") return primaryValue;

    const fallbackValue = readPath(fallbackNamespace, key);
    if (typeof fallbackValue === "string") return fallbackValue;

    return key;
  }) as TranslateFn;
}
