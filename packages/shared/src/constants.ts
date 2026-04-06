import type { Plan } from "./types";

export const APP_NAME = "Webs para Clínicas";

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses getting online",
    price: 497,
    currency: "EUR",
    interval: "one-time",
    features: [
      "One-page website",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "1 revision round",
    ],
    stripePriceId: "price_starter",
    maxLicenses: 1,
  },
  {
    id: "pro",
    name: "Professional",
    description: "For businesses that want to stand out",
    price: 997,
    currency: "EUR",
    interval: "one-time",
    features: [
      "Up to 5 pages",
      "Custom design",
      "SEO optimization",
      "Google Analytics",
      "3 revision rounds",
      "CMS integration",
    ],
    stripePriceId: "price_pro",
    maxLicenses: 1,
  },
  {
    id: "elite",
    name: "Premium",
    description: "Full digital presence for serious businesses",
    price: 1997,
    currency: "EUR",
    interval: "one-time",
    features: [
      "Unlimited pages",
      "E-commerce ready",
      "Advanced SEO",
      "Speed optimization",
      "Unlimited revisions",
      "12 months support",
      "Google Business setup",
    ],
    stripePriceId: "price_elite",
    maxLicenses: 1,
  },
];
