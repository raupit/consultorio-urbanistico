/**
 * SEO Metadata para Consultorio Urbanístico
 *
 * INSTALACIÓN:
 * 1. Copia este contenido a tu src/app/layout.tsx o src/app/page.tsx
 * 2. Si usas layout.tsx, añade la metadata con export const metadata
 * 3. Si prefieres page.tsx, usa generateMetadata() para mayor flexibilidad
 *
 * OPCION A: En layout.tsx (metadata estática)
 * ─────────────────────────────────────────────
 * import type { Metadata } from 'next';
 * export const metadata: Metadata = { ... } // pega el objeto de abajo
 *
 * OPCION B: En page.tsx (metadata dinámica)
 * ─────────────────────────────────────────────
 * import type { Metadata } from 'next';
 * export async function generateMetadata(): Promise<Metadata> { return { ... } }
 */

import type { Metadata } from 'next';

const SITE_URL = 'https://consultorio-urbanistico.vercel.app';
const SITE_NAME = 'Consultorio Urbanístico - Ana Epitie';
const SITE_DESCRIPTION = 'Perito Judicial Urbanístico Ana Epitie (Diploma Numerario N.º 02659). Especializada en legalización de obras, asimilación a fuera de ordenación, informes periciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña.';
const SITE_IMAGE = `${SITE_URL}/logo.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Meta básicos ──
  title: {
    default: 'Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages',
    template: '%s | Consultorio Urbanístico Ana Epitie',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'perito judicial',
    'urbanismo',
    'Manresa',
    'Bages',
    'POUM',
    'legalización',
    'legalización de obras',
    'masía',
    'suelo urbanizable',
    'Ana Epitie',
    'perito urbanístico',
    'informe pericial',
    'disciplina urbanística',
    'asimilación fuera de ordenación',
    'ASPEJURE',
    'peritación judicial',
    'Cataluña',
  ],
  authors: [{ name: 'Ana Epitie', url: SITE_URL }],
  creator: 'Ana Epitie',
  publisher: 'Consultorio Urbanístico - Ana Epitie',
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

  // ── Canonical ──
  alternates: {
    canonical: SITE_URL,
    languages: {
      'es': SITE_URL,
      'ca': SITE_URL, // TODO: Añadir /ca cuando haya versión catalana
    },
  },

  // ── Open Graph ──
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages',
    description: 'Legalización de obras, informes periciales judiciales y disciplina urbanística en Manresa y el Bages. Ana Epitie, Perito Judicial Urbanístico ASPEJURE N.º 02659.',
    images: [
      {
        url: SITE_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Ana Epitie - Perito Judicial Urbanístico en Manresa, Bages',
      },
    ],
  },

  // ── Twitter Card ──
  twitter: {
    card: 'summary_large_image',
    title: 'Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages',
    description: 'Legalización de obras, informes periciales y disciplina urbanística. ASPEJURE N.º 02659.',
    images: [SITE_IMAGE],
  },

  // ── Verification (añadir cuando tengas cuentas) ──
  // verification: {
  //   google: 'TU_CODIGO_VERIFICACION_GOOGLE',
  //   yandex: 'TU_CODIGO_YANDEX',
  // },

  // ── Icons ──
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },

  // ── Otros ──
  category: 'Legal Services',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

/**
 * ============================================================
 * EJEMPLO DE INTEGRACIÓN EN page.tsx
 * ============================================================
 *
 * // src/app/page.tsx
 * import type { Metadata } from 'next';
 * import SchemaMarkup from '@/components/SchemaMarkup';
 * import LandingPage from '@/components/landing/LandingPage';
 *
 * // Pega aquí la metadata o impórtala
 * export const metadata: Metadata = { ... };
 *
 * export default function Home() {
 *   return (
 *     <>
 *       <SchemaMarkup />
 *       <LandingPage />
 *     </>
 *   );
 * }
 *
 * ============================================================
 * EJEMPLO DE INTEGRACIÓN EN layout.tsx
 * ============================================================
 *
 * // src/app/layout.tsx
 * import type { Metadata } from 'next';
 * import './globals.css';
 * import SchemaMarkup from '@/components/SchemaMarkup';
 *
 * export const metadata: Metadata = { ... };
 *
 * export default function RootLayout({
 *   children,
 * }: {
 *   children: React.ReactNode;
 * }) {
 *   return (
 *     <html lang="es">
 *       <head>
 *         <SchemaMarkup />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 */
