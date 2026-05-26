import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPost, getRelatedPosts, blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: `${post.title} | Consultorio Urbanístico`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://consultorio-urbanistico.vercel.app/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://consultorio-urbanistico.vercel.app/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Ana Epitie"],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Ana Epitie",
      "jobTitle": "Perito Judicial Urbanístico",
      "url": "https://consultorio-urbanistico.vercel.app"
    },
    "publisher": {
      "@type": "ProfessionalService",
      "name": "Consultorio Urbanístico - Ana Epitie",
      "url": "https://consultorio-urbanistico.vercel.app"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://consultorio-urbanistico.vercel.app/blog/${post.slug}`
    },
    "keywords": post.keywords.join(", "),
    "articleSection": post.category,
    "inLanguage": "es"
  };

  return (
    <div className="min-h-screen bg-[#030305] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030305]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#D4A574]/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C9956B]" />
            </div>
            <span className="text-sm font-medium tracking-wide text-[#D4A574]">CONSULTORIO</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">Inicio</Link>
            <Link href="/blog" className="text-sm text-white font-medium">Blog</Link>
            <a href="tel:+34632831009" className="text-sm text-slate-400 hover:text-white transition-colors">+34 632 831 009</a>
            <a href="/#contacto" className="bg-gradient-to-r from-[#D4A574] to-[#C9956B] text-[#030305] text-xs font-semibold px-5 py-2.5 rounded-full hover:scale-105 transition-transform">Consulta Exprés</a>
          </div>
        </div>
      </nav>

      <article className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-[200px]">{post.category}</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#D4A574]/15 text-[#D4A574] border border-[#D4A574]/20">{post.category}</span>
            <time className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            <span className="text-sm text-slate-600">·</span>
            <span className="text-sm text-slate-500">{post.readTime} lectura</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">{post.title}</span>
          </h1>

          <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4A574]/20 to-[#D4A574]/5 border border-[#D4A574]/20 flex items-center justify-center text-[#D4A574] font-serif-display italic text-lg">AE</div>
            <div>
              <p className="text-sm font-medium">Ana Epitie</p>
              <p className="text-xs text-slate-500">Perito Judicial Urbanístico · ASPEJURE N.º 02659</p>
            </div>
          </div>

          <div className="prose prose-invert prose-slate max-w-none [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-white [&_h3]:text-xl [&_h3]:font-medium [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-white/90 [&_p]:text-base [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-5 [&_ul]:space-y-2 [&_ul]:mb-6 [&_ul]:ml-4 [&_li]:text-slate-300 [&_li]:leading-relaxed [&_strong]:text-white [&_strong]:font-medium [&_a]:text-[#D4A574] [&_a]:hover:text-[#F2D4B0] [&_a]:transition-colors" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-16 bg-gradient-to-br from-[#D4A574]/10 to-[#D4A574]/5 border border-[#D4A574]/20 rounded-2xl p-8 md:p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-[#D4A574]/15 border border-[#D4A574]/25 flex items-center justify-center mx-auto mb-5">
              <svg className="w-6 h-6 text-[#D4A574]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <h3 className="text-xl md:text-2xl font-medium mb-3">¿Le afecta este problema?</h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">Cada caso es distinto y requiere un análisis personalizado. No tome decisiones sin información profesional.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#contacto" className="bg-gradient-to-r from-[#D4A574] to-[#C9956B] text-[#030305] font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform text-sm inline-flex items-center gap-2">
                Consulta Exprés — 50€ deducibles
              </a>
              <a href="tel:+34632831009" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">+34 632 831 009</a>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-lg font-medium mb-6">Artículos relacionados</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedPosts.map(rp => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-[#D4A574]/25 transition-all">
                    <span className="text-[9px] font-semibold tracking-widest uppercase text-[#D4A574]/70">{rp.category}</span>
                    <h4 className="text-sm font-medium mt-2 mb-2 group-hover:text-[#D4A574] transition-colors leading-snug">{rp.title}</h4>
                    <span className="text-xs text-slate-500">{rp.readTime} lectura</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C9956B]" />
            </div>
            <span className="text-sm font-medium">Ana Epitie</span>
            <span className="text-xs text-slate-500">Perito Judicial Urbanístico · ASPEJURE N.º 02659</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <a href="tel:+34632831009" className="hover:text-white transition-colors">+34 632 831 009</a>
            <a href="https://ana-epitie-inmobiliaria-z.vercel.app" target="_blank" className="hover:text-[#D4A574] transition-colors">Inmobiliaria</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
