# Resumen del Negocio — Webs para Clínicas Dentales

## Stack Técnico Recomendado

| Categoría | Herramienta | Plan | Coste |
|-----------|------------|------|-------|
| **Framework** | Next.js 15 + React 19 | Open-source | Gratis |
| **Hosting** | Vercel | Pro | $20/mes |
| **CMS** | Sanity | Free | Gratis |
| **Calendario** | Calendly | Free (del cliente) | Gratis |
| **Dominio** | Proveedor (Namecheap, etc.) | Por cliente | ~12€/año |
| **SSL** | Vercel (automático) | Incluido | Gratis |

---

## 1. Hosting — Vercel

| Plan | Precio | Incluye |
|------|--------|---------|
| **Hobby** | Gratis | 1 proyecto personal, sin uso comercial |
| **Pro** ✅ | $20/mes | Builds rápidos, crédito de uso incluido, equipo, múltiples proyectos, custom domains |
| **Enterprise** | Custom | Soporte dedicado, SLA |

**Alternativas investigadas:**
- **Cloudflare Pages**: Gratis generoso para SSG, buena opción si no necesitas SSR
- **Hetzner VPS**: ~€5/mes, control total pero mantienes tú el servidor

**Recomendación**: Vercel Pro ($20/mes). Un solo plan sirve para muchos proyectos/clientes.

---

## 2. CMS — Gestión de Contenido

### Sanity ✅ (Recomendado)

| Plan | Precio | Incluye |
|------|--------|---------|
| **Free** ✅ | Gratis | 20 usuarios, 2 datasets, 10.000 documentos, 1M peticiones CDN/mes, 100GB ancho de banda |
| **Growth** | $15/usuario/mes | 50 usuarios, 25.000 documentos |
| **Enterprise** | Custom | Sin límites |

**¿Por qué Sanity?** El free tier es enormemente generoso. Una clínica dental típica tiene <50 páginas y <100 documentos. Podrías gestionar 100+ clínicas dentro del free tier.

### Payload CMS (Alternativa sólida)

| Plan | Precio | Incluye |
|------|--------|---------|
| **Self-hosted** | Gratis | 100% open-source (MIT), nativo Next.js, panel admin incluido |
| **Enterprise** | Custom | Soporte dedicado, SSO, visual editing |

**Nota**: Payload fue adquirido por Figma. Se instala directamente dentro de tu app Next.js (sin servicio externo). Necesita base de datos (MongoDB o PostgreSQL).

### Descartados

| CMS | Plan mínimo útil | Motivo descarte |
|-----|-------------------|-----------------|
| **Contentful** | Lite = €300/mes | Demasiado caro para pequeñas webs |
| **Storyblok** | Growth = €99/mes | Free solo 1 usuario, caro para escalar |

---

## 3. Calendario / Citas

### Calendly ✅ (Recomendado para empezar)

| Plan | Precio | Incluye |
|------|--------|---------|
| **Free** ✅ | Gratis | 1 tipo de evento, 1 calendario conectado, embed con widget/iframe |
| **Standard** | $10/usuario/mes | Tipos ilimitados, integraciones, recordatorios |
| **Teams** | $16/usuario/mes | Round-robin, reportes |
| **Enterprise** | ~$15.000/año | SSO, SAML, API avanzada |

**Modelo**: Cada cliente (dentista) usa su propia cuenta gratuita de Calendly. Tú solo embebes el widget en su web. Compatible con Google Calendar y Outlook.

### Cal.com (Alternativa sin coste)

| Plan | Precio | Incluye |
|------|--------|---------|
| **Self-hosted** | Gratis | Open-source (AGPLv3), necesita PostgreSQL + Node.js |
| **Cloud** | Desde $0 | Versión hosted limitada |

**Nota**: Cal.com es el "Calendly open-source". Self-hosted = 0€/mes pero necesitas mantener servidor. Licencia AGPLv3 (debes compartir código fuente si haces modificaciones).

---

## 4. Mantenimiento — ¿Qué necesito hacer?

| Tarea | Frecuencia | ¿Quién? | Coste |
|-------|-----------|---------|-------|
| DNS + dominio del cliente | Al crear web + renovar anual | Tú | ~€12/año/cliente |
| Certificado SSL | Automático | Vercel | Gratis |
| Actualizar dependencias (npm) | Cada 2-3 meses | Tú | Tu tiempo |
| Editar contenido (textos, fotos) | Según necesite | **Cliente** (via CMS) | Gratis |
| Cambios de diseño/estructura | Según necesite | Tú | Tu servicio |
| Backups | Automático (Sanity) / Manual (Payload) | Automático | Gratis |

### ¿El cliente depende de mí?
- **Para contenido**: NO. El cliente edita textos, fotos, horarios desde el panel del CMS.
- **Para diseño/estructura**: SÍ. Cambios de layout, nuevas secciones, etc. = tu negocio recurrente.
- **Para dominio/hosting**: Parcialmente. Puedes transferirle el dominio si se va.

---

## 5. Estructura de Costes

### Tus costes fijos mensuales
| Concepto | Coste |
|----------|-------|
| Vercel Pro | $20/mes (~€18/mes) |
| Tu dominio propio | ~€1/mes |
| **Total fijo** | **~€19/mes** |

### Coste por cliente
| Concepto | Coste |
|----------|-------|
| Dominio del cliente | ~€1/mes (€12/año) |
| Sanity CMS | €0 (free tier) |
| Calendly | €0 (cuenta del cliente) |
| SSL | €0 (Vercel) |
| **Total por cliente** | **~€1/mes** |

### Ejemplo con 15 clientes
| | Mensual |
|--|---------|
| Tus costes totales | €19 + (15 × €1) = **€34/mes** |
| Si cobras €50/mes/cliente | 15 × €50 = **€750/mes** |
| Si cobras €100/mes/cliente | 15 × €100 = **€1.500/mes** |
| **Margen** | **>95%** |

---

## Resumen Ejecutivo

```
Tu stack:  Next.js + Vercel + Sanity + Calendly
Tu coste:  ~€34/mes (con 15 clientes)
Tu ingreso: €750-1.500/mes (mantenimiento)
             + diseño web inicial por proyecto
Margen:    >95%
```

El cliente edita su contenido, tú controlas el diseño. Sin dependencia de plataformas caras.
