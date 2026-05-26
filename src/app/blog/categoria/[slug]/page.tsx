import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPostsByCategory, blogCategories } from "@/lib/blog-data";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogCategories.map(cat => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = blogCategories.find(c => c.slug === slug);
  if (!cat) return { title: "Categoría no encontrada" };
  return {
    title: `${cat.name} | Blog Consultorio Urbanístico - Ana Epitie`,
    description: `Artículos sobre ${cat.name} en Manresa y el Bages. Consultorio Urbanístico Ana Epitie. Perito Judicial Urbanístico ASPEJURE N.º 02659.`,
    keywords: [cat.name.toLowerCase(), "urbanismo", "Bages", "Manresa", "perito urbanístico", "Ana Epitie"],
    alternates: {
      canonical: `https://consultorio-urbanistico.vercel.app/blog/categoria/${cat.slug}`,
    },
    openGraph: {
      title: `${cat.name} | Blog Consultorio Urbanístico`,
      description: `Artículos sobre ${cat.name} en Manresa y el Bages. Perito Judicial Urbanístico Ana Epitie.`,
      url: `https://consultorio-urbanistico.vercel.app/blog/categoria/${cat.slug}`,
      type: "website",
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${cat.name} | Consultorio Urbanístico`,
      description: `Artículos sobre ${cat.name} en Manresa y el Bages.`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const cat = blogCategories.find(c => c.slug === slug);
  if (!cat) notFound();
  const posts = getBlogPostsByCategory(slug);

  return (
    <div className="min-h-screen bg-[#030305] text-white">
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
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-400">{cat.name}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">{cat.name}</span>
          </h1>
          <p className="text-lg text-slate-400 font-light mb-12">Artículos sobre {cat.name.toLowerCase()} en Manresa y el Bages</p>

          <div className="space-y-6">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-[#D4A574]/25 transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#D4A574]/15 text-[#D4A574] border border-[#D4A574]/20">{post.category}</span>
                  <time className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-medium mb-2 group-hover:text-[#D4A574] transition-colors">{post.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{post.description}</p>
                <div className="mt-4 text-[#D4A574] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Leer más →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C9956B]" />
            </div>
            <span className="text-sm font-medium">Ana Epitie</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
