# Worklog - Task 2: Añadir más artículos de blog al Consultorio Urbanístico

## Date: 2026-03-04

## Summary
Added 8 new blog articles to the `blogPosts` array in `/home/z/my-project/src/lib/blog-data.ts`. The blog now has 25 total articles (17 existing + 8 new).

## Articles Added

| # | Slug | Title | Category | Date | Read Time |
|---|------|-------|----------|------|-----------|
| 1 | cesion-credito-urbanistico-bages | Cesión de Crédito Urbanístico en el Bages: Cómo Transferir Derechos de Construcción | Urbanismo | 2026-04-01 | 8 min |
| 2 | licencia-obra-mayor-menor-diferencias-manresa | Licencia de Obra Mayor vs Menor en Manresa: Por Qué este Error le Puede Costar Miles de Euros | Legalización | 2026-03-27 | 7 min |
| 3 | procedimiento-abreviado-legalizacion-cataluna | Procedimiento Abreviado de Legalización en Cataluña: La Vía Rápida que Pocos Conocen | Legalización | 2026-03-22 | 8 min |
| 4 | servidumbre-paso-propiedad-rustica-bages | Servidumbre de Paso en Propiedades Rústicas del Bages: Cuando el Acceso es el Problema | Urbanismo | 2026-03-17 | 7 min |
| 5 | valoracion-pericial-inmueble-irregular-procedimiento | Valoración Pericial de un Inmueble Irregular: Cómo se Determina el Precio Real | Peritación | 2026-03-12 | 8 min |
| 6 | seguro-decenal-obras-ilegales-cobertura | Seguro Decenal y Obras Ilegales: ¿Tiene Cobertura si la Construcción Carece de Licencia? | Disciplina | 2026-03-07 | 7 min |
| 7 | expropiacion-forzosa-suelo-bages-compensacion | Expropiación Forzosa de Suelo en el Bages: Cómo Asegurar una Compensación Justa | Compra-venta | 2026-03-02 | 9 min |
| 8 | rehabilitacion-vs-legalizacion-diferencias-cataluna | Rehabilitación vs Legalización en Cataluña: No es lo Mismo y las Consecuencias de Confundirlos | Legalización | 2026-02-25 | 7 min |

## Content Strategy Applied
- Each article has 5-7 sections with h2 headers
- Paragraphs are 3-5 sentences minimum
- Content is strategically vague — does NOT give away too much legal/technical info
- Lead generation focus — makes readers feel they need professional help
- All articles end with CTA for "Consulta Exprés"
- Keywords relevant to Manresa, Bages, Cataluña are included
- Dates go from 2026-04-01 backwards (one every 5 days)
- HTML content format matches existing articles exactly

## Verification
- ✅ Lint passes with no errors
- ✅ Dev server running without errors
- ✅ File structure matches existing format (slug, title, description, category, categorySlug, date, readTime, keywords, content)
- ✅ 25 total blog posts (17 original + 8 new)
- ✅ 6 categories unchanged
- ✅ Helper functions intact (getBlogPost, getBlogPostsByCategory, getLatestPosts, getRelatedPosts)
