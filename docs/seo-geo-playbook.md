# SEO + GEO Playbook (Webs para Clinicas)

Este documento resume lo que ya esta implementado y define el proceso estandar para crear nuevas paginas sin romper SEO, GEO, i18n ni privacidad.

## 1) Estado actual (implementado)

### 1.1 SEO tecnico base
- `apps/web/src/app/sitemap.ts`
  - Genera `sitemap.xml` para todas las locales.
  - Incluye alternates por idioma (`hreflang`) en cada URL.
  - Incluye home, legales y paginas BOFU (`servicios`, `problemas`, `ciudades`).
- `apps/web/src/app/robots.ts`
  - Publica reglas de indexacion.
  - Bloquea rutas internas/no comerciales (`login`, `register`, `dashboard`, `demo/*` y equivalentes por locale).
  - Declara `sitemap` y `host`.
- `apps/web/src/app/manifest.ts`
  - Metadata PWA basica coherente para marca y discoverability.

### 1.2 Canonical + hreflang reutilizable
- `apps/web/src/seo.ts`
  - `localizedPath(locale, path)`
  - `localizedUrl(locale, path)`
  - `getLanguageAlternates(path)` con `x-default`

Esto evita inconsistencias de URL canonica entre rutas con y sin prefijo de locale.

### 1.3 Metadata por pagina
- Home: `apps/web/src/app/[locale]/page.tsx`
  - `generateMetadata` con `title`, `description`, `canonical`, `alternates`, `openGraph.url`.
- Pricing: `apps/web/src/app/[locale]/pricing/page.tsx`
  - Igual que arriba, pero con `robots.index = false` mientras no haya oferta publica cerrada.
- Legales: `privacy/cookies/terms`
  - Metadata localizada + canonical + hreflang.

### 1.4 GEO / Structured data
- Home incluye JSON-LD:
  - `Organization`
  - `WebSite`
  - `ProfessionalService`
  - `FAQPage`
- BOFU incluye JSON-LD por tipo:
  - `Service` + `BreadcrumbList` (servicios)
  - `FAQPage` (problemas)
  - `ProfessionalService` con `areaServed` (ciudades)

### 1.5 Idioma por pais / navegador (primera visita)
- `apps/web/src/middleware.ts`
  - Bots: no se redirigen (para no dañar rastreo).
  - Usuario real en `/` sin cookie: resuelve locale por IP (GE -> ka, etc.) y fallback por `Accept-Language`.
  - Persiste `NEXT_LOCALE` para evitar redirecciones repetidas.

### 1.6 Control de indexacion interno
- `login/register/dashboard/demo viewer` marcadas como noindex.
- `demo embed` ya estaba noindex.

### 1.7 404
- `apps/web/src/app/not-found.tsx`
- `apps/web/src/app/[locale]/not-found.tsx`

404 personalizada global y localizada.

## 2) Politica de privacidad de contenido

Regla obligatoria:
- No publicar en rutas web datos internos de analisis de prospeccion (barrios, listados privados, scoring interno, etc.).

En este repo se elimino la implementacion que exponia analisis locales para evitar riesgo legal/comercial.

## 3) Workflow obligatorio para cualquier pagina nueva

## Paso 1: decidir si la URL es indexable
- Indexable: landings comerciales, contenido publico util para captar demanda.
- No indexable: auth, dashboard, preview, herramientas internas, borradores, contenido incompleto.

Si NO indexable:
- Añadir metadata `robots: { index: false, follow: false }` (o `follow: true` si aplica).

## Paso 2: metadata completa
En la pagina nueva, crear `generateMetadata` con:
- `title`
- `description`
- `alternates.canonical = localizedUrl(locale, path)`
- `alternates.languages = getLanguageAlternates(path)`
- `openGraph.url = canonical`

## Paso 3: i18n de servidor
- `setRequestLocale(locale)`
- usar `getTranslations(...)` en server components
- evitar hardcodes en UI publica

## Paso 4: schema JSON-LD (GEO)
Minimo 1 schema relevante por tipo de pagina.

Guia rapida:
- Landing principal: `Organization`, `WebSite`, `ProfessionalService`
- FAQ: `FAQPage`
- Servicio: `Service`
- Pagina con jerarquia: `BreadcrumbList`
- Localidad: `ProfessionalService` con `areaServed`

## Paso 5: sitemap
Si la pagina es indexable:
- agregar path en `apps/web/src/app/sitemap.ts`

Si no es indexable:
- no incluirla en sitemap.

## Paso 6: robots
Solo añadir en `robots.ts` cuando necesites bloquear patrones completos (ej. seccion interna).

## Paso 7: enlaces internos
Toda landing nueva debe recibir al menos:
- 1 enlace desde home o hub tematico.
- 1 CTA claro a conversion (`#contact`, WhatsApp o reserva).

## Paso 8: QA tecnico
Checklist minima:
- status 200 en URL valida
- status 404 en URL invalida cercana
- canonical correcto
- hreflang completo
- schema valido y visible en HTML
- presencia (o ausencia) en sitemap segun politica
- robots correcto segun tipo de pagina

## 4) Snippet base para nuevas landings indexables

```ts
import type { Metadata } from "next";
import { getLanguageAlternates, localizedUrl } from "@/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = "/mi-ruta";
  const canonical = localizedUrl(locale, path);

  return {
    title: "Titulo comercial",
    description: "Descripcion comercial",
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: { url: canonical },
  };
}
```

## 5) Snippet base para rutas no indexables

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
```

## 6) Comandos utiles de verificacion

```bash
curl -sI http://localhost:3002/no-existe | head -n 3
curl -sI http://localhost:3002/en/any-missing-page | head -n 3
curl -s http://localhost:3002/sitemap.xml | head -n 40
curl -sI http://localhost:3002 | head -n 20
```

## 7) Decision log (resumen)

- Se priorizo SEO tecnico completo antes de escalar contenido.
- Se adopto estrategia GEO con JSON-LD contextual por tipo de landing.
- Se fijo politica de noindex para rutas internas.
- Se elimino por completo la exposicion de analisis privados en frontend publico.

---

Si vas a crear una pagina nueva, reutiliza este playbook como checklist de PR.
