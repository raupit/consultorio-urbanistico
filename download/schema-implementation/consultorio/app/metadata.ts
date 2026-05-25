/**
 * Metadata Configuration — Consultorio Urbanístico
 * 
 * Implementación de Open Graph, Twitter Cards, meta descriptions y 
 * canonical URLs usando la Metadata API de Next.js (App Router).
 * 
 * INTEGRACIÓN:
 * Copia este archivo a /app/metadata.ts y usa las funciones
 * exportadas en tus layout.tsx y page.tsx.
 * 
 * Ejemplo en app/layout.tsx:
 *   import { generateBaseMetadata } from './metadata';
 *   export const metadata = generateBaseMetadata();
 * 
 * Ejemplo en app/blog/[slug]/page.tsx:
 *   import { generateBlogMetadata } from '@/app/metadata';
 *   export async function generateMetadata({ params }) {
 *     return generateBlogMetadata(postData);
 *   }
 */
import type { Metadata } from 'next';

const SITE_URL = 'https://consultorio-urbanistico.vercel.app';
const SITE_NAME = 'Consultorio Urbanístico - Ana Epitie';

// ─── METADATA BASE (para layout.tsx) ───────────────────────
export function generateBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'Perito Judicial Urbanístico · Ana Epitie Manresa Bages',
      template: `%s | Consultorio Urbanístico Ana Epitie`,
    },
    description: 'Perito Judicial Urbanístico Ana Epitie (Diploma Numerario N.º 02659). Especializada en legalización de obras, asimilación a fuera de ordenación, informes periciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña.',
    keywords: [
      'perito judicial urbanístico',
      'legalización de obras',
      'asimilación fuera de ordenación',
      'informe pericial urbanístico',
      'Manresa',
      'Bages',
      'Cataluña',
      'urbanismo',
      'obra sin licencia',
      'masía ilegal',
      'certificado habilitación urbanística',
      'perito urbanístico Barcelona',
      'legalizar masía',
      'suelo rústico Bages',
    ],
    authors: [{ name: 'Ana Epitie', url: SITE_URL }],
    creator: 'Ana Epitie',
    publisher: 'Ana Epitie',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
      languages: {
        'es-ES': SITE_URL,
        'ca-ES': SITE_URL, // TODO: cuando haya versión en catalán
      },
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      alternateLocale: 'ca_ES',
      url: SITE_URL,
      siteName: SITE_NAME,
      title: 'Perito Judicial Urbanístico · Ana Epitie Manresa Bages',
      description: 'Perito Judicial Urbanístico Ana Epitie (ASPEJURE N.º 02659). Legalización de obras, informes periciales y viabilidad urbanística en el Bages.',
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Consultorio Urbanístico - Ana Epitie, Perito Judicial Urbanístico del Bages',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Perito Judicial Urbanístico · Ana Epitie Manresa Bages',
      description: 'Perito Judicial Urbanístico Ana Epitie (ASPEJURE N.º 02659). Legalización de obras, informes periciales y viabilidad urbanística en el Bages.',
      images: [`${SITE_URL}/og-image.png`],
    },
    verification: {
      // TODO: Añadir códigos de verificación cuando se configuren
      // google: 'TU_CODIGO_VERIFICACION_GOOGLE',
    },
  };
}

// ─── METADATA PARA PÁGINAS ESPECÍFICAS ─────────────────────
export function generateServiceMetadata(
  service: 'legalizacion' | 'pericial' | 'disciplina'
): Metadata {
  const serviceData = {
    legalizacion: {
      title: 'Legalización de Obras sin Licencia en el Bages',
      description: 'Servicio de legalización de obras sin licencia en Manresa y la comarca del Bages. Estudiamos si tu obra se puede legalizar y tramitamos todo el proceso ante el ayuntamiento. Perito Judicial Urbanístico Ana Epitie.',
      keywords: 'legalización de obras, obra sin licencia, legalizar masía, legalizar ampliación, Manresa, Bages',
    },
    pericial: {
      title: 'Informe Pericial Judicial Urbanístico en el Bages',
      description: 'Dictamen pericial judicial de valoración para procedimientos judiciales: herencias, división de cosa común, ejecuciones hipotecarias. Válido ante juzgados. Perito Judicial Urbanístico Ana Epitie (ASPEJURE N.º 02659).',
      keywords: 'informe pericial judicial, peritaje urbanístico, perito judicial, valoración inmueble, herencia, Bages',
    },
    disciplina: {
      title: 'Disciplina Urbanística y Sanciones en el Bages',
      description: 'Cuando la legalización no es posible, tramitamos los procedimientos para conservar tu edificación. Análisis de viabilidad urbanística y coordinación con técnicos colegiados. Perito Judicial Ana Epitie.',
      keywords: 'disciplina urbanística, sanción urbanística, conservación edificación, fuera de ordenación, Bages',
    },
  };
  
  const data = serviceData[service];
  const url = `${SITE_URL}/#${service}`;
  
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: url,
      siteName: SITE_NAME,
      title: data.title,
      description: data.description,
      images: [`${SITE_URL}/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

// ─── METADATA PARA BLOG POSTS ──────────────────────────────
export function generateBlogMetadata({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  imageUrl,
}: {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  imageUrl?: string;
}): Metadata {
  const url = `${SITE_URL}/blog/${slug}`;
  
  return {
    title: title,
    description: description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      locale: 'es_ES',
      url: url,
      siteName: SITE_NAME,
      title: title,
      description: description,
      publishedTime: publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: ['Ana Epitie'],
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : [`${SITE_URL}/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: imageUrl ? [imageUrl] : [`${SITE_URL}/og-image.png`],
    },
  };
}

// ─── SITEMAP DINÁMICO ──────────────────────────────────────
// Genera el sitemap.xml para Google Search Console
// Colocar en: app/sitemap.ts
export const sitemapEntries = [
  { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
  { url: `${SITE_URL}/#servicios`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: `${SITE_URL}/#legalizacion`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: `${SITE_URL}/#pericial`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: `${SITE_URL}/#disciplina`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: `${SITE_URL}/#blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: `${SITE_URL}/#tarifas`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: `${SITE_URL}/#cobertura`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  // TODO: Añadir URLs de blog posts individuales cuando existan
];
