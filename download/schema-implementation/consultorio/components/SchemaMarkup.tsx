/**
 * SchemaMarkup Component — Consultorio Urbanístico
 * 
 * Componente de React que inyecta todo el Schema markup necesario
 * en el <head> de cada página del Consultorio.
 * 
 * INTEGRACIÓN EN NEXT.JS (App Router):
 * 
 * 1. Copia este archivo y schemas.ts a: /components/schema/
 * 2. En tu layout.tsx principal, importa y usa:
 * 
 *    import SchemaMarkup from '@/components/schema/SchemaMarkup';
 *    
 *    export default function RootLayout({ children }) {
 *      return (
 *        <html lang="es">
 *          <head>
 *            <SchemaMarkup page="home" />
 *          </head>
 *          <body>{children}</body>
 *        </html>
 *      );
 *    }
 * 
 * 3. En páginas específicas del blog, usa la prop page="blog":
 *    <SchemaMarkup page="blog" blogPost={blogPostData} />
 */
import React from 'react';
import {
  homePageSchema,
  breadcrumbServicios,
  breadcrumbLegalizacion,
  breadcrumbPericial,
  breadcrumbBlog,
  breadcrumbTarifas,
  faqSchema,
  howToSchema,
  localBusinessSchema,
  personSchema,
  legalServiceSchema,
  webSiteSchema,
  createSchemaGraph,
} from './schemas';

// Tipo de página para seleccionar los schemas apropiados
type PageType = 'home' | 'servicios' | 'legalizacion' | 'pericial' | 'disciplina' | 'blog' | 'tarifas' | 'cobertura';

interface SchemaMarkupProps {
  page: PageType;
  blogPostData?: Record<string, unknown>; // Datos del artículo para schema Article
}

// Mapa de breadcrumbs por página
const breadcrumbMap: Record<PageType, Record<string, unknown>> = {
  home: breadcrumbServicios, // La home usa el breadcrumb de servicios
  servicios: breadcrumbServicios,
  legalizacion: breadcrumbLegalizacion,
  pericial: breadcrumbPericial,
  disciplina: breadcrumbServicios,
  blog: breadcrumbBlog,
  tarifas: breadcrumbTarifas,
  cobertura: breadcrumbServicios,
};

export default function SchemaMarkup({ page, blogPostData }: SchemaMarkupProps) {
  // Schemas base que aparecen en TODAS las páginas
  const baseSchemas = [webSiteSchema, localBusinessSchema, personSchema, legalServiceSchema];
  
  // Schemas específicos por página
  const pageSchemas: Record<string, unknown>[] = [];
  
  // Agregar breadcrumb correspondiente
  const breadcrumb = breadcrumbMap[page];
  if (breadcrumb) {
    pageSchemas.push(breadcrumb);
  }
  
  // Agregar schemas específicos por página
  switch (page) {
    case 'home':
      pageSchemas.push(faqSchema, howToSchema);
      break;
    case 'servicios':
      pageSchemas.push(faqSchema);
      break;
    case 'legalizacion':
      pageSchemas.push(faqSchema, howToSchema);
      break;
    case 'pericial':
      pageSchemas.push(faqSchema);
      break;
    case 'blog':
      if (blogPostData) {
        pageSchemas.push(blogPostData);
      }
      break;
    case 'tarifas':
      // Las tarifas ya están en localBusiness.hasOfferCatalog
      break;
  }
  
  // Combinar todo en un @graph
  const fullSchema = createSchemaGraph(...baseSchemas, ...pageSchemas);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
    />
  );
}

// ─── HELPER: Crear schema Article para posts del blog ──────
export function createBlogPostSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
  articleBody,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  imageUrl: string;
  articleBody: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    image: imageUrl,
    articleBody: articleBody,
    author: {
      '@id': `${SITE_URL}/#person`,
    },
    publisher: {
      '@id': `${SITE_URL}/#legal-service`,
    },
    inLanguage: 'es-ES',
  };
}

const SITE_URL = 'https://consultorio-urbanistico.vercel.app';
