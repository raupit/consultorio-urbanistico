# Instalación del Schema Markup - Consultorio Urbanístico

## Archivos incluidos

| Archivo | Destino en tu proyecto |
|---------|----------------------|
| `SchemaMarkup.tsx` | `src/components/SchemaMarkup.tsx` |
| `metadata.ts` | Integrar en `src/app/layout.tsx` o `src/app/page.tsx` |

## Pasos de instalación

### 1. Copiar SchemaMarkup.tsx
```bash
cp SchemaMarkup.tsx src/components/SchemaMarkup.tsx
```

### 2. Integrar metadata en layout.tsx

Abre `src/app/layout.tsx` y añade la metadata:

```tsx
import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://consultorio-urbanistico.vercel.app'),
  title: 'Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages',
  description: 'Perito Judicial Urbanístico Ana Epitie (Diploma Numerario N.º 02659). Especializada en legalización de obras, asimilación a fuera de ordenación, informes periciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña.',
  keywords: ['perito judicial', 'urbanismo', 'Manresa', 'Bages', 'POUM', 'legalización', 'masía', 'Ana Epitie', 'perito urbanístico'],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://consultorio-urbanistico.vercel.app/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://consultorio-urbanistico.vercel.app',
    siteName: 'Consultorio Urbanístico - Ana Epitie',
    title: 'Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages',
    description: 'Legalización de obras, informes periciales y disciplina urbanística en Manresa y el Bages.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages',
    description: 'Legalización de obras, informes periciales y disciplina urbanística.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <SchemaMarkup />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 3. Verificar

1. Haz `npm run build && npm run dev`
2. Abre la página en el navegador
3. Click derecho → Ver código fuente → Busca `application/ld+json`
4. Valida en: https://search.google.com/test/rich-results

## Schemas implementados

| # | Tipo de Schema | Propósito |
|---|---------------|-----------|
| 1 | **ProfessionalService** | Negocio principal - rich results para servicios profesionales |
| 2 | **LegalService** | Tipo adicional - mejor categorización en Google |
| 3 | **Person** | Ana Epitie - Knowledge Panel personal |
| 4 | **WebSite** | Con SearchAction - sitio de búsqueda interno |
| 5 | **WebPage** | Página principal con fecha de publicación |
| 6 | **BreadcrumbList** | Navegación jerárquica |
| 7 | **FAQPage** | 7 preguntas - rich snippets en Google (¡MUY importante!) |
| 8 | **HowTo** | Proceso de legalización paso a paso - rich snippet visual |

## NOTA IMPORTANTE sobre URLs

Cuando tengas tu dominio propio (jueves), reemplaza TODAS las ocurrencias de:
- `https://consultorio-urbanistico.vercel.app` → `https://tu-dominio.es`

Busca y reemplaza en:
1. `SchemaMarkup.tsx` - Todas las URLs en @id, url, sameAs, etc.
2. `metadata.ts` o `layout.tsx` - metadataBase, canonical, openGraph.url

## Después de instalar

Siguientes pasos del plan:
- ✅ 2.2.2 Schema markup (este paso)
- ⬜ 2.2.1 Meta descriptions + OG tags (se incluye en la metadata)
- ⬜ 2.2.3 Sitemap.xml + robots.txt
- ⬜ 2.3.1 Cross-linking entre webs
