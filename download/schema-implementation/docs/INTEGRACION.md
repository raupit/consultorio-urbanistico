# Guía de Integración: Schema Markup + Open Graph

## Archivos incluidos

```
schema-implementation/
├── consultorio/                    # Next.js (App Router)
│   ├── components/
│   │   ├── JsonLd.tsx             # Componente base para inyectar JSON-LD
│   │   ├── SchemaMarkup.tsx       # Componente principal con selección por página
│   │   └── schemas.ts            # Definiciones de todos los schemas
│   └── app/
│       └── metadata.ts           # Open Graph + Twitter Cards + canonical
│
├── inmobiliaria/                   # HTML estático
│   └── schema-and-meta.html      # Todo en uno: meta tags + JSON-LD
│
└── docs/
    └── INTEGRACION.md            # Esta guía
```

---

## 🏗️ CONSULTORIO URBANÍSTICO (Next.js)

### Paso 1: Copiar archivos

Copia estos archivos a tu proyecto Next.js:

```bash
# En la raíz de tu proyecto consultorio-urbanistico/
cp components/JsonLd.tsx       →  src/components/schema/JsonLd.tsx
cp components/SchemaMarkup.tsx →  src/components/schema/SchemaMarkup.tsx
cp components/schemas.ts       →  src/components/schema/schemas.ts
cp app/metadata.ts             →  src/app/metadata.ts
```

### Paso 2: Integrar en layout.tsx

```tsx
// src/app/layout.tsx
import SchemaMarkup from '@/components/schema/SchemaMarkup';
import { generateBaseMetadata } from './metadata';

export const metadata = generateBaseMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <SchemaMarkup page="home" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Paso 3: Metadata por página

Para páginas de servicio específicas:

```tsx
// Ejemplo: app/page.tsx (home)
import { generateBaseMetadata } from './metadata';
import SchemaMarkup from '@/components/schema/SchemaMarkup';

export const metadata = generateBaseMetadata();

export default function HomePage() {
  return (
    <>
      <SchemaMarkup page="home" />
      {/* ... contenido existente ... */}
    </>
  );
}
```

### Paso 4: Blog posts

```tsx
// app/blog/[slug]/page.tsx
import SchemaMarkup, { createBlogPostSchema } from '@/components/schema/SchemaMarkup';
import { generateBlogMetadata } from '@/app/metadata';

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return generateBlogMetadata({
    title: post.title,
    description: post.excerpt,
    slug: params.slug,
    publishedTime: post.date,
    modifiedTime: post.modifiedDate,
    imageUrl: post.image,
  });
}

export default function BlogPost({ params }) {
  const post = await getPost(params.slug);
  const blogSchema = createBlogPostSchema({
    title: post.title,
    description: post.excerpt,
    url: `https://consultorio-urbanistico.vercel.app/blog/${params.slug}`,
    datePublished: post.date,
    dateModified: post.modifiedDate,
    imageUrl: post.image,
    articleBody: post.content,
  });

  return (
    <>
      <SchemaMarkup page="blog" blogPostData={blogSchema} />
      {/* ... contenido del post ... */}
    </>
  );
}
```

### Paso 5: Sitemap

Crea `app/sitemap.ts`:

```tsx
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://consultorio-urbanistico.vercel.app', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://consultorio-urbanistico.vercel.app/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    // Añade más URLs según crezca la web
  ];
}
```

### Paso 6: robots.txt

Crea `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://consultorio-urbanistico.vercel.app/sitemap.xml
```

---

## 🏠 ANA EPITIE INMOBILIARIA (HTML estático)

### Paso 1: Abrir tu archivo HTML principal

Abre el archivo index.html (o el archivo principal) de tu web.

### Paso 2: Pegar los meta tags

Copia todo el bloque de meta tags del archivo `schema-and-meta.html`
y pégalo ANTES del `</head>` de tu HTML.

Las líneas a copiar son todas las que empiezan con:
- `<link rel="canonical"`
- `<meta name="description"`
- `<meta name="keywords"`
- `<meta name="robots"`
- `<meta property="og:`
- `<meta name="twitter:`

### Paso 3: Pegar el JSON-LD

Copia el bloque `<script type="application/ld+json">...</script>`
y pégalo también ANTES del `</head>`.

### Paso 4: Crear imágenes OG

Necesitas crear estas imágenes y subirlas a tu sitio:

| Imagen | Tamaño | Uso |
|--------|--------|-----|
| `og-image.png` | 1200x630px | Open Graph (Facebook, LinkedIn, etc.) |
| `logo.png` | 512x512px | Schema logo |
| `ana-epitie.jpg` | 400x400px | Schema Person (foto profesional) |

### Paso 5: Actualizar URLs

Cuando migres a dominio propio, busca y reemplaza:
- `https://ana-epitie-inmobiliaria-z.vercel.app/` → tu nuevo dominio (ej: `https://anaepitie.es/`)

---

## ✅ Verificación post-integración

Después de implementar, verifica con estas herramientas:

1. **Google Rich Results Test**
   https://search.google.com/test/rich-results
   - Introduce la URL de tu web
   - Debería detectar: LocalBusiness, FAQPage, Person

2. **Schema Markup Validator**
   https://validator.schema.org/
   - Introduce la URL
   - Verifica que no hay errores

3. **Facebook Sharing Debugger**
   https://developers.facebook.com/tools/debug/
   - Verifica que el OG image se muestra correctamente

4. **Twitter Card Validator**
   https://cards-dev.twitter.com/validator
   - Verifica la preview del card

5. **Google Search Console**
   - Enviar el sitemap.xml
   - Monitorear "Mejoras > Datos estructurados"

---

## 📊 Schemas implementados por web

| Schema Type | Consultorio | Inmobiliaria |
|-------------|:-----------:|:------------:|
| WebSite + SearchAction | ✅ | ✅ |
| WebPage | ✅ | ✅ |
| LocalBusiness | ✅ | ✅ |
| RealEstateAgent | — | ✅ |
| LegalService | ✅ | — |
| Person (con credenciales) | ✅ | ✅ |
| FAQPage (8 preguntas) | ✅ | ✅ (6) |
| HowTo (4 pasos) | ✅ | — |
| BreadcrumbList | ✅ | ✅ |
| OfferCatalog | ✅ | ✅ |
| AggregateRating | ✅ | ✅ |
| Open Graph | ✅ | ✅ |
| Twitter Cards | ✅ | ✅ |
| Canonical URL | ✅ | ✅ |
| Meta description | ✅ | ✅ |
| Sitemap.xml | ✅ | — |
| robots.txt | ✅ | — |

---

## ⚠️ IMPORTANTE: Actualizar cuando migres de dominio

Cuando pases de .vercel.app a tu dominio propio (.es):

1. Buscar y reemplazar todas las URLs en:
   - `schemas.ts` (Consultorio): variable `SITE_URL`
   - `metadata.ts` (Consultorio): variable `SITE_URL`
   - `schema-and-meta.html` (Inmobiliaria): todas las URLs

2. Actualizar canonical URLs

3. Configurar redirecciones 301 en Vercel desde el .vercel.app al .es

4. Re-verificar en Google Search Console con el nuevo dominio
