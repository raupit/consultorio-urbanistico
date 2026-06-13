import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories, getLatestPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Consultorio Urbanístico - Ana Epitie",
  description: "Artículos sobre legalización de obras, peritación judicial urbanística, herencias con conflicto urbanístico y disciplina urbanística en Manresa y el Bages.",
  alternates: { canonical: "https://consultorio-urbanistico.vercel.app/blog" },
};

export default function BlogPage() {
  const latestPosts = getLatestPosts(10);

  return (
    <div className="min-h-screen bg-[#030305] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030305]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#D4A574]/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C9956B]" />
            </div>
            <span className="text-sm font-medium tracking-wide text-[#D4A574]">CONSULTORIO URBANÍSTICO</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#servicios" className="text-sm text-slate-400 hover:text-white transition-colors">Servicios</Link>
            <Link href="/blog" className="text-sm text-white font-medium">Blog</Link>
            <Link href="https://www.anaepitieinmobiliaria.es" target="_blank" className="text-sm text-[#D4A574] hover:text-[#F2D4B0] transition-colors">Inmobiliaria</Link>
            <a href="tel:+34632831009" className="text-sm text-slate-400 hover:text-white transition-colors">+34 632 831 009</a>
            <a href="/#contacto" className="bg-gradient-to-r from-[#D4A574] to-[#C9956B] text-[#030305] text-xs font-semibold px-5 py-2.5 rounded-full hover:scale-105 transition-transform">Consulta Exprés</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-[#D4A574]/60 mb-4 block">Blog Urbanístico</span>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">Protege el valor de tu propiedad</span>
            <br />
            <span className="font-serif-display italic bg-gradient-to-r from-[#D4A574] via-[#F2D4B0] to-[#C9956B] bg-clip-text text-transparent">con información profesional</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
            Artículos sobre urbanismo, legalización y peritación en Manresa y el Bages. Siempre desde la perspectiva profesional: cada caso es único y requiere análisis personalizado.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          <Link href="/blog" className="px-4 py-2 rounded-full bg-[#D4A574]/15 border border-[#D4A574]/30 text-[#D4A574] text-sm font-medium">
            Todos
          </Link>
          {blogCategories.map(cat => (
            <Link key={cat.slug} href={`/blog/categoria/${cat.slug}`} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm hover:border-[#D4A574]/30 hover:text-[#D4A574] transition-colors">
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className={`bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#D4A574]/25 transition-all duration-300 hover:transform hover:-translate-y-1 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <div className={`bg-gradient-to-br from-[#D4A574]/8 to-transparent ${index === 0 ? 'h-48' : 'h-36'} flex items-center justify-center relative`}>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#D4A574]/15 text-[#D4A574] border border-[#D4A574]/20">{post.category}</span>
                  </div>
                  <div className="text-[#D4A574]/20 text-6xl font-serif-display italic">
                    {index === 0 ? '⚖' : ''}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                    <span className="text-xs text-slate-600">·</span>
                    <span className="text-xs text-slate-500">{post.readTime} lectura</span>
                  </div>
                  <h2 className="text-lg font-medium mb-2 group-hover:text-[#D4A574] transition-colors leading-snug">{post.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{post.description}</p>
                  <div className="mt-4 text-[#D4A574] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer más <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#D4A574]/10 to-[#D4A574]/5 border border-[#D4A574]/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">¿Tiene una duda urbanística?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">Cada caso es distinto. La información general no sustituye al análisis personalizado. Consulte con un perito judicial urbanístico antes de tomar decisiones.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#contacto" className="bg-gradient-to-r from-[#D4A574] to-[#C9956B] text-[#030305] font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform inline-flex items-center gap-2">
              Consulta Exprés — 50€ deducibles
            </a>
            <a href="tel:+34632831009" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              +34 632 831 009
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <a href="https://www.anaepitieinmobiliaria.es" target="_blank" className="hover:text-[#D4A574] transition-colors">Inmobiliaria</a>
            <a href="https://www.smartvalora.com" target="_blank" className="hover:text-[#D4A574] transition-colors">SmartValora</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
