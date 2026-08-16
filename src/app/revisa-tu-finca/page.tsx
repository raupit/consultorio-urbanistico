'use client'

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, CheckCircle2, FileSearch, Home, MapPin, MessageSquare, Shield, TreePine } from "lucide-react";

const cases = [
  {
    icon: Home,
    title: "Masías y fincas",
    text: "Revisamos construcciones, ampliaciones, usos, accesos y situación urbanística antes de vender, comprar o invertir.",
  },
  {
    icon: FileSearch,
    title: "Catastro y Registro",
    text: "Detectamos discrepancias de superficies, cabidas, linderos y documentación que no coincide con la realidad física.",
  },
  {
    icon: TreePine,
    title: "Terrenos",
    text: "Analizamos clasificación, uso, aprovechamiento y posibilidades reales según el planeamiento aplicable.",
  },
  {
    icon: Building2,
    title: "Edificios",
    text: "Comprobamos reformas, cambios de uso, antecedentes y viabilidad urbanística para tomar decisiones con información.",
  },
];

export default function RevisaTuFincaPage() {
  return (
    <main className="min-h-screen bg-[#F5F2E8] text-[#1a1a1a]">
      <header className="sticky top-0 z-40 border-b border-[#3A4D39]/10 bg-[#F5F2E8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/revisa-tu-finca" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3A4D39] font-black text-[#F5F2E8]">R</div>
            <div className="leading-tight">
              <div className="font-black tracking-tight">Revisa Tu Finca</div>
              <div className="text-xs text-[#667063]">by Consultorio Urbanístico</div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/calculadora" className="hidden text-sm font-bold text-[#3A4D39] hover:underline md:inline-flex">
              Simulador de suelo
            </Link>
            <Link href="/" className="hidden text-sm font-bold text-[#3A4D39] hover:underline sm:inline-flex">
              Consultorio Urbanístico
            </Link>
            <a
              href="https://wa.me/34632831009?text=Hola%20Ana%2C%20quiero%20revisar%20mi%20finca%20o%20propiedad."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white"
            >
              <MessageSquare className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="bg-[#3A4D39] text-[#F5F2E8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold text-[#D4AF37]">
              <Shield className="h-4 w-4" /> Diagnóstico urbanístico del inmueble
            </div>

            <h1 className="text-4xl font-black leading-[1.02] tracking-tight md:text-6xl">
              Tu finca, bien documentada,
              <span className="block font-serif italic text-[#D4AF37]">vale más.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d5d0c4]">
              Antes de vender, comprar, heredar o invertir, revisa qué dice realmente el planeamiento y si Catastro, Registro y realidad física encajan. Revisa Tu Finca es el servicio de diagnóstico de Consultorio Urbanístico para detectar problemas y oportunidades antes de tomar una decisión.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/34632831009?text=Hola%20Ana%2C%20quiero%20revisar%20mi%20finca%20o%20propiedad."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8860B] px-7 py-4 font-black text-white shadow-lg"
              >
                Revisar mi finca <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/calculadora"
                className="inline-flex items-center justify-center rounded-full border border-[#F5F2E8]/25 bg-[#F5F2E8]/10 px-7 py-4 font-black text-[#F5F2E8]"
              >
                Probar simulador de suelo
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><strong>Uso</strong><br/><span className="text-white/60">Qué puedes hacer</span></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><strong>Situación</strong><br/><span className="text-white/60">Qué consta</span></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><strong>Potencial</strong><br/><span className="text-white/60">Qué valor tiene</span></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-[#D4AF37]/30" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/ana-epitie-masia.jpg"
                alt="Revisa Tu Finca - diagnóstico urbanístico"
                width={500}
                height={650}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#3A4D39]/10 bg-white py-10">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl font-black text-[#3A4D39] md:text-3xl">¿Sabes cuánto aprovechamiento urbanístico tiene tu suelo?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#666]">Usa el Simulador de Aprovechamiento Urbanístico como primera orientación y, si necesitas una revisión real del caso, pásame la finca.</p>
          <Link href="/calculadora" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#B8860B] px-7 py-4 font-black text-white">
            Abrir simulador <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#3A4D39]">Qué revisamos</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Antes de que una duda se convierta en un problema de venta.</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl border border-[#3A4D39]/10 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3A4D39]/10 text-[#3A4D39]"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#666]">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#3A4D39]">Cómo funciona</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Tres preguntas que conviene responder.</h2>
          </div>
          <div className="space-y-3">
            {[
              "¿Qué permite realmente el planeamiento en esta finca?",
              "¿Coinciden Catastro, Registro y realidad física?",
              "¿Hay algo que pueda bloquear, abaratar o limitar una operación?",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3 rounded-2xl bg-[#F5F2E8] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B8860B]" />
                <span className="font-bold leading-6">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2d3d2c] py-16 text-[#F5F2E8]">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <MapPin className="mx-auto h-7 w-7 text-[#D4AF37]" />
          <h2 className="mt-4 text-3xl font-black md:text-5xl">¿Quieres que revise tu finca?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#c5c0b4]">Envíame la ubicación, referencia catastral o la documentación que tengas y te indico el siguiente paso.</p>
          <a
            href="https://wa.me/34632831009?text=Hola%20Ana%2C%20quiero%20revisar%20mi%20finca%20o%20propiedad."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-black text-white"
          >
            <MessageSquare className="h-5 w-5" /> Escríbeme por WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-[#243023] px-5 py-8 text-center text-sm text-[#c5c0b4]">
        <p>Revisa Tu Finca · un servicio de Consultorio Urbanístico · Ana Epitie · ASPEJURE Nº 02659</p>
        <div className="mt-3 flex justify-center gap-4">
          <Link href="/">Consultorio Urbanístico</Link>
          <Link href="/calculadora">Simulador</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </footer>
    </main>
  );
}

