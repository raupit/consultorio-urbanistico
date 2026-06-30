'use client'

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  AlertTriangle,
  Users,
  TreePine,
  Building2,
  Shield,
  FileText,
  Gavel,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  MapPin,
  Mail,
  Menu,
  X,
  Star,
  TrendingDown,
  Euro,
  Calendar,
  BookOpen,
  Instagram,
  Linkedin,
  Home,
  Scale,
  Stamp,
  Bot,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";

/* ────────────────────────────────────────
   DATA
   ──────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Situaciones habituales", href: "#testimonios" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Preguntas", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "🧮 Simulador de Suelo", href: "/calculadora" },
  {
    label: "Inmobiliaria",
    href: "https://ana-epitie-inmobiliaria-z.vercel.app",
    external: true,
  },
];

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Obras ilegales",
    desc: "Ampliaciones sin licencia, naves ilegales, masías con construcciones fuera de ordenación. Tu propiedad vale un 30-40% menos de lo que podría.",
    stat: "Alto",
    statLabel: "riesgo de rebaja en la venta",
  },
  {
    icon: Users,
    title: "Herencias bloqueadas",
    desc: "Varios herederos, unos quieren vender y otros no. Obras sin legalizar que nadie quiere asumir. La propiedad se estanca y pierde valor con los años.",
    stat: "Años",
    statLabel: "de bloqueo si no se actúa",
  },
  {
    icon: TreePine,
    title: "Terreno sin salida",
    desc: "Tienes suelo rústico que ha sido recalificado pero no sabes cómo monetizarlo. Mientras tanto, pagas IBI sin rentabilidad.",
    stat: "0€",
    statLabel: "ingresos del suelo ocioso",
  },
  {
    icon: Building2,
    title: "Vender con descuento",
    desc: "Una propiedad con dudas urbanísticas publicada en portales atrae ofertas a la baja. O aclaras su situación o negocias en inferioridad.",
    stat: "Fuerte",
    statLabel: "descuento exigido por compradores",
  },
];

const SERVICES = [
  {
    icon: Home,
    title: "Estudio de Legalización de Obras",
    desc: "Estudio si tu obra sin licencia es legalizable según el planeamiento vigente. Si es viable, coordino la tramitación con los técnicos colegiados que redactan y firman el proyecto. Si no lo es, analizo las vías para que conserves tu edificación. Cada caso requiere estudio individualizado.",
    features: ["Estudio de viabilidad previo", "Análisis del planeamiento (POUM)", "Coordinación con técnicos colegiados", "Alternativas si no procede"],
  },
  {
    icon: Scale,
    title: "Informe Pericial Judicial Urbanístico",
    desc: "Dictamen pericial para procedimientos judiciales y administrativos en materia urbanística: infracciones y expedientes de disciplina, situaciones de fuera de ordenación, interpretación del planeamiento y discrepancias sobre la legalidad de las construcciones. Con ratificación ante el juzgado cuando es necesaria.",
    features: ["Dictamen pericial urbanístico", "Disciplina e infracciones urbanísticas", "Interpretación del planeamiento (POUM)", "Ratificación ante el juzgado"],
  },
  {
    icon: Stamp,
    title: "Asesoramiento en Disciplina Urbanística",
    desc: "Análisis técnico-urbanístico de expedientes de disciplina y situaciones de fuera de ordenación. Estudio la viabilidad urbanística del inmueble o terreno y coordino con técnicos colegiados y, cuando procede, con tu abogado.",
    features: ["Análisis de expedientes", "Situaciones de fuera de ordenación", "Viabilidad urbanística", "Coordinación con técnicos y abogados"],
  },
];

const STEPS = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Consulta tu caso",
    desc: "Envíame tu caso por el formulario o por WhatsApp. Primera orientación sobre si puedo ayudarte, sin compromiso.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Estudio pericial",
    desc: "Elaboro el informe urbanístico completo: estado legal, viabilidad de legalización y situación respecto al planeamiento.",
  },
  {
    num: "03",
    icon: Shield,
    title: "Resolvemos el problema",
    desc: "Si es legalizable, coordino la tramitación con técnicos colegiados. Si no, estudio las vías para conservar tu edificación o elaboro el informe que da seguridad al comprador.",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "Vendes al precio real",
    desc: "Con la situación urbanística aclarada y documentada, defiendes el precio con criterio técnico. Si quieres, mi agencia inmobiliaria gestiona la venta.",
    link: {
      text: "Ana Epitie Inmobiliaria",
      href: "https://ana-epitie-inmobiliaria-z.vercel.app",
    },
  },
];

const STATS = [
  { value: "N.º 02659", label: "Perito ASPEJURE", icon: FileText },
  { value: "API", label: "Agente de la Propiedad Inmobiliaria", icon: TrendingDown },
  { value: "24h", label: "Respuesta en días laborables", icon: Clock },
  { value: "50€", label: "Consulta deducible del servicio", icon: Euro },
];

const CASES = [
  {
    title: "Masía con ampliaciones sin licencia",
    location: "Situación frecuente en el Bages",
    desc: "Masías con anexos, garajes o ampliaciones construidos hace décadas sin permiso. Estudio si son legalizables o si procede la situación de fuera de ordenación, antes de poner la propiedad en el mercado.",
    stats: [
      { value: "POUM", label: "Planeamiento" },
      { value: "Licencias", label: "Antecedentes" },
      { value: "Catastro", label: "Concordancia" },
    ],
  },
  {
    title: "Herencia con discrepancias registrales",
    location: "Situación frecuente en el Bages",
    desc: "Inmuebles heredados donde el Registro, el Catastro y la realidad física no coinciden: excesos de cabida, construcciones no declaradas, datos desactualizados que bloquean la venta en notaría.",
    stats: [
      { value: "Registro", label: "Verificación" },
      { value: "Cabida", label: "Excesos" },
      { value: "Fiscal", label: "Actualización" },
    ],
  },
  {
    title: "Suelo rústico sin aprovechamiento claro",
    location: "Situación frecuente en el Bages",
    desc: "Terrenos cuyo propietario desconoce qué permite el planeamiento: usos admitidos, posibilidad de edificar o rehabilitar, segregaciones. El estudio de viabilidad define qué se puede hacer y qué no.",
    stats: [
      { value: "Usos", label: "Permitidos" },
      { value: "Viabilidad", label: "Urbanística" },
      { value: "Valor", label: "Potencial" },
    ],
  },
  {
    title: "Venta bloqueada por dudas urbanísticas",
    location: "Situación frecuente en el Bages",
    desc: "Operaciones que se caen o se negocian muy a la baja porque el comprador detecta irregularidades. El informe técnico previo permite anticiparse y defender el precio con documentación.",
    stats: [
      { value: "Informe", label: "Técnico previo" },
      { value: "Defensa", label: "Del precio" },
      { value: "Seguridad", label: "Para el comprador" },
    ],
  },
];

const MUNICIPALITIES = [
  "Manresa", "Cardona", "Sallent", "Artés", "Navarcles",
  "Sant Fruitós de Bages", "Santpedor", "Callús", "Suria", "Balsareny",
  "Avinyó", "Calders", "Mura", "Talamanca", "El Pont de Vilomara",
  "Rajadell", "Sant Joan de Vilatorrada", "Sant Vicenç de Castellet",
  "Fonollosa", "Gaià", "Santa Maria d'Oló", "Oristà", "Olost",
  "Prats de Lluçanès", "Navàs", "Castellbell i el Vilar", "Castellgalí",
  "Marganell", "Monistrol de Montserrat",
];

const BLOG_POSTS = [
  {
    slug: "legalizacion-obras-sin-licencia-manresa",
    title: "Cómo legalizar una obra sin licencia en Manresa",
    excerpt: "Guía sobre el proceso de legalización de obras sin licencia. Requisitos, plazos y pasos a seguir en el Bages.",
    category: "Legalización",
    date: "20 May 2026",
  },
  {
    slug: "herencia-con-conflicto-urbanistico-bages",
    title: "Herencias con conflicto urbanístico en el Bages",
    excerpt: "Cuando el patrimonio heredado se convierte en problema. Soluciones prácticas para desbloquear tu herencia.",
    category: "Herencias",
    date: "10 May 2026",
  },
  {
    slug: "asimilacion-fuera-de-ordenacion-bages",
    title: "Asimilación a fuera de ordenación en el Bages",
    excerpt: "La última opción para conservar tu propiedad cuando la legalización no es posible. Cómo funciona.",
    category: "Legalización",
    date: "15 May 2026",
  },
  {
    slug: "comprar-masia-obras-ilegales-riesgos",
    title: "Comprar una masía con obras ilegales: los riesgos",
    excerpt: "Lo que conviene revisar antes de comprar una masía en Cataluña. Riesgos urbanísticos y cómo anticiparse.",
    category: "Compra-venta",
    date: "5 May 2026",
  },
  {
    slug: "suelo-urbanizable-rustico-diferences-bages",
    title: "Suelo urbanizable vs suelo rústico en el Bages",
    excerpt: "Por qué esta diferencia es clave para tu propiedad. Lo que permite y prohíbe cada tipo de suelo.",
    category: "Urbanismo",
    date: "1 May 2026",
  },
  {
    slug: "vender-propiedad-irregularidades-urbanisticas",
    title: "Vender una propiedad con irregularidades urbanísticas",
    excerpt: "Cómo defender el valor real de tu propiedad cuando tiene irregularidades. Tus opciones, explicadas.",
    category: "Compra-venta",
    date: "25 Apr 2026",
  },
];

const PRICING = [
  {
    title: "Consulta Telemática",
    price: "50€",
    desc: "Primera orientación profesional sobre tu caso",
    features: [
      "Análisis de tu situación urbanística",
      "Orientación sobre viabilidad",
      "Presupuesto personalizado",
      "Sin compromiso de contratación",
      "50€ se descuentan si continuas",
    ],
    highlighted: false,
  },
  {
    title: "Estudio de Viabilidad",
    price: "200-500€",
    desc: "Análisis detallado según superficie, municipio y complejidad del caso",
    features: [
      "Estudio completo del planeamiento",
      "Análisis de viabilidad de legalización",
      "Valoración urbanística",
      "Informe por escrito",
      "Consulta incluida",
    ],
    highlighted: true,
  },
  {
    title: "Informe Pericial Judicial Urbanístico",
    price: "500-2.000€",
    desc: "Dictamen pericial urbanístico. Precio según complejidad del caso y municipio",
    features: [
      "Dictamen pericial urbanístico completo",
      "Válido en procedimientos judiciales y administrativos",
      "Disciplina, infracciones y fuera de ordenación",
      "Interpretación del planeamiento",
      "Ratificación ante el juzgado si es necesaria",
    ],
    highlighted: false,
  },
];

/* ────────────────────────────────────────
   ANIMATIONS
   ──────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────── */

export default function ConsultorioHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [rgpdChecked, setRgpdChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.telefono || !rgpdChecked) return;
    setFormSending(true);
    setFormError(false);
    try {
      const res = await fetch("https://formspree.io/f/mojbnkdb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, origen: "consultorio-urbanistico", fecha: new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" }) }),
      });
      if (res.ok) { setFormSubmitted(true); setFormData({ nombre: "", telefono: "", email: "", mensaje: "" }); setRgpdChecked(false); }
      else setFormError(true);
    } catch { setFormError(true); } finally { setFormSending(false); }
  };

  return (
    <div className="min-h-screen bg-[#F5F2E8] text-[#1a1a1a] font-sans">
      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2E8]/95 backdrop-blur-xl border-b border-[#3A4D39]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#3A4D39] flex items-center justify-center">
                <Gavel className="w-5 h-5 text-[#F5F2E8]" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-[#1a1a1a] text-sm tracking-tight block">ANA EPITIE</span>
                <span className="text-[10px] text-[#3A4D39] font-medium leading-none">Perito Judicial Urbanístico</span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-5">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#3A4D39] hover:text-[#5A7D59] transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-[#555] hover:text-[#3A4D39] transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Phone + CTA */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+34632831009"
                className="hidden md:flex items-center gap-1.5 text-[#3A4D39] font-bold text-sm hover:text-[#5A7D59] transition-colors"
              >
                <Phone className="w-4 h-4" />
                632 831 009
              </a>
              <Button
                onClick={scrollToContact}
                className="bg-[#3A4D39] hover:bg-[#2d3d2c] text-[#F5F2E8] text-xs font-semibold rounded-full px-4 h-8 shadow-lg shadow-[#3A4D39]/20"
              >
                <Phone className="w-3 h-3 mr-1" />
                Consulta Exprés
              </Button>
              <button
                className="lg:hidden p-2 text-[#3A4D39]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menú"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#F5F2E8]/95 backdrop-blur-xl border-b border-[#3A4D39]/15"
            >
              <div className="px-4 py-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="block text-sm font-medium text-[#555] hover:text-[#3A4D39] transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label} {link.external && <ExternalLink className="w-3 h-3 inline" />}
                  </a>
                ))}
                <a
                  href="tel:+34632831009"
                  className="block text-sm font-bold text-[#3A4D39] py-2"
                >
                  <Phone className="w-4 h-4 inline mr-1" />
                  +34 632 831 009
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-20 md:pt-24 bg-[#3A4D39] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[70vh]">
            {/* Left - Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="py-12 md:py-16"
            >
              <motion.div variants={fadeUp} className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#B8860B]/30 bg-[#B8860B]/10 px-4 py-1.5 text-xs font-medium text-[#D4AF37]">
                  <Shield className="w-3.5 h-3.5" />
                  Perito Judicial Urbanístico · ASPEJURE N.º 02659
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#F5F2E8]"
              >
                Tu finca, bien documentada,
                <br />
                <span className="font-serif italic text-[#D4AF37]">vale más.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-base md:text-lg text-[#c5c0b4] max-w-xl leading-relaxed">
                Una propiedad con su situación urbanística clara y demostrable{" "}
                <span className="text-[#F5F2E8] font-semibold">se vende mejor, más rápido y con menos sorpresas</span>.
                Soy Ana Epitie, Perito Judicial Urbanística (ASPEJURE N.º 02659) y Agente de la
                Propiedad Inmobiliaria en el Bages. Estudio tu caso, resuelvo las dudas legales y
                te acompaño en toda la venta.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  onClick={scrollToContact}
                  className="bg-[#B8860B] hover:bg-[#9a7209] text-white font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-[#B8860B]/25"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Envíame tu caso — Respuesta en 24h
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-[#F5F2E8]/30 text-[#F5F2E8] hover:bg-[#F5F2E8]/10 font-semibold text-base h-14 px-8 rounded-full"
                >
                  <a href="https://wa.me/34632831009?text=Hola%20Ana%2C%20quiero%20consultarte%20una%20propiedad%20con%20dudas%20urban%C3%ADsticas." target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp directo
                  </a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { value: "ASPEJURE", label: "Perito N.º 02659" },
                  { value: "Judicial", label: "Dictamen pericial" },
                  { value: "Bages", label: "Especialista urbanismo" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mb-1" />
                    <p className="text-sm font-bold text-[#F5F2E8]">{stat.value}</p>
                    <p className="text-xs text-[#9a978a]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="relative w-full max-w-md">
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                  <Image
                    src="/ana-epitie-masia.jpg"
                    alt="Ana Epitie - Perito Judicial Urbanístico"
                    width={500}
                    height={650}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Overlay badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3A4D39] to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[#F5F2E8] font-bold text-sm">Ana Epitie</p>
                        <p className="text-[#D4AF37] text-xs">ASPEJURE N.º 02659</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CALCULADORA BANNER ═══════════════ */}
      <section className="py-10 bg-[#F5F2E8] border-y border-[#3A4D39]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3A4D39] mb-3">
            ¿Sabes cuánto dinero oculto hay en tu suelo?
          </h2>
          <p className="text-base text-[#555] mb-6 max-w-2xl mx-auto">
            Usa nuestro Simulador de Aprovechamiento Urbanístico gratuito y descubre el valor real de tu parcela según el POUM en 10 segundos.
          </p>
          <a 
            href="/calculadora" 
            className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9a7209] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-[#B8860B]/25 transition-colors text-lg"
          >
            🧮 Probar Simulador Gratis
          </a>
        </div>
      </section>

      {/* ═══════════════ PROBLEMAS ═══════════════ */}
      <section id="servicios" className="py-20 md:py-28 bg-[#F5F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                Problemas que te cuestan dinero
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
              Cada mes sin resolverlo, el problema se hace más caro.
              <br />
              <span className="font-serif italic text-[#3A4D39]">Y el comprador lo sabe.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PROBLEMS.map((problem) => (
              <motion.div
                key={problem.title}
                variants={fadeUp}
                className="group rounded-2xl border border-[#3A4D39]/10 bg-white p-6 hover:border-[#3A4D39]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/10 group-hover:bg-[#3A4D39]/10 flex items-center justify-center transition-colors mb-4">
                  <problem.icon className="w-5 h-5 text-red-500 group-hover:text-[#3A4D39] transition-colors" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{problem.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-4">{problem.desc}</p>
                <div className="pt-3 border-t border-[#3A4D39]/10">
                  <p className="text-2xl font-bold text-red-500">{problem.stat}</p>
                  <p className="text-xs text-[#666]">{problem.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SERVICIOS ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3A4D39]/20 bg-[#3A4D39]/5 px-3 py-1 text-xs font-medium text-[#3A4D39] mb-4">
                <Shield className="w-3.5 h-3.5" />
                Servicios profesionales
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
              Encauzo el problema urbanístico.
              <br />
              <span className="font-serif italic text-[#3A4D39]">Tú defiendes el precio real.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[#666] max-w-xl mx-auto">
              Estudio la situación urbanística de tu propiedad y, cuando el trámite lo requiere, trabajo
              con técnicos colegiados. Conozco la normativa de los municipios de la comarca del Bages.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group rounded-[20px] border border-[#3A4D39]/10 bg-[#F5F2E8] p-8 hover:border-[#3A4D39]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex flex-col items-center text-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#3A4D39]/10 group-hover:bg-[#3A4D39]/15 flex items-center justify-center transition-colors">
                    <service.icon className="w-7 h-7 text-[#3A4D39]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a1a1a]">{service.title}</h3>
                    <p className="text-sm text-[#666] mt-2 leading-relaxed">{service.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5 text-xs text-[#666]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3A4D39] flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-[#3A4D39] hover:bg-[#2d3d2c] text-[#F5F2E8] font-semibold rounded-full"
                >
                  Solicitar {service.title}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CÓMO FUNCIONA ═══════════════ */}
      <section id="como-funciona" className="py-20 md:py-28 bg-[#3A4D39]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#D4AF37] mb-4">
                <Clock className="w-3.5 h-3.5" />
                Proceso en 4 pasos
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F2E8]">
              De la duda al precio defendido
              <br />
              <span className="font-serif italic text-[#D4AF37]">en 4 pasos</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {STEPS.map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="relative space-y-4">
                {/* Connector line */}
                {step.num !== "04" && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                )}
                <div className="relative">
                  <span className="text-5xl font-black text-[#D4AF37]/10 absolute -top-3 -left-1">
                    {step.num}
                  </span>
                  <div className="relative w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-[#F5F2E8]">{step.title}</h3>
                <p className="text-sm text-[#c5c0b4] leading-relaxed">
                  {step.desc}{" "}
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:text-[#F2D4B0] underline underline-offset-2 inline-flex items-center gap-1"
                    >
                      {step.link.text}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            ref={contactRef}
            className="max-w-2xl mx-auto"
          >
            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#2d3d2c] p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#F5F2E8]">Consulta Exprés</h3>
                <p className="text-sm text-[#c5c0b4] mt-1">
                  Te contacto en menos de 24 horas laborables
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-[#F5F2E8]">¡Solicitud recibida!</h4>
                  <p className="text-sm text-[#c5c0b4] mt-2">
                    Te contactaré en menos de 24 horas laborables.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                      placeholder="Nombre *"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="bg-[#1a2a1a] border-[#D4AF37]/15 text-[#F5F2E8] placeholder:text-[#9a978a] h-11 rounded-xl focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/20"
                    />
                    <Input
                      type="tel"
                      placeholder="Teléfono *"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="bg-[#1a2a1a] border-[#D4AF37]/15 text-[#F5F2E8] placeholder:text-[#9a978a] h-11 rounded-xl focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/20"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email (opcional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#1a2a1a] border-[#D4AF37]/15 text-[#F5F2E8] placeholder:text-[#9a978a] h-11 rounded-xl focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/20"
                  />
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="rgpd"
                      checked={rgpdChecked}
                      onCheckedChange={(checked) => setRgpdChecked(checked === true)}
                      className="border-[#D4AF37]/30 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:border-[#D4AF37] mt-0.5"
                    />
                    <Label htmlFor="rgpd" className="text-xs text-[#c5c0b4] leading-relaxed cursor-pointer">
                      He leído y acepto la política de privacidad. Autorizo el tratamiento de mis
                      datos para que el Consultorio Urbanístico me contacte.
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    disabled={!rgpdChecked || !formData.nombre || !formData.telefono}
                    className="w-full bg-[#B8860B] hover:bg-[#9a7209] text-white font-bold text-base h-12 rounded-full shadow-lg shadow-[#B8860B]/20 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Consulta Exprés — Respuesta en 24h
                  </Button>
                  <p className="text-xs text-center text-[#9a978a]">
                    50€ · Deducibles del servicio completo
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ ESTADÍSTICAS ═══════════════ */}
      <section className="py-16 bg-[#F5F2E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <stat.icon className="w-5 h-5 text-[#3A4D39] mx-auto mb-2" />
                <p className="text-3xl md:text-4xl font-bold text-[#3A4D39]">{stat.value}</p>
                <p className="text-sm text-[#666] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CASOS DE ÉXITO ═══════════════ */}
      <section id="testimonios" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3A4D39]/20 bg-[#3A4D39]/5 px-3 py-1 text-xs font-medium text-[#3A4D39] mb-4">
                <Star className="w-3.5 h-3.5" />
                Situaciones habituales
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
              Situaciones que estudio
              <br />
              <span className="font-serif italic text-[#3A4D39]">cada semana en el Bages.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CASES.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="rounded-2xl border border-[#3A4D39]/10 bg-[#F5F2E8] p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3A4D39]/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#3A4D39]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-sm">{c.title}</h3>
                    <p className="text-xs text-[#3A4D39]">{c.location}</p>
                  </div>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">{c.desc}</p>
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#3A4D39]/10">
                  {c.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-sm font-bold text-[#3A4D39]">{s.value}</p>
                      <p className="text-[10px] text-[#666]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ COBERTURA ═══════════════ */}
      <section id="cobertura" className="py-20 md:py-28 bg-[#3A4D39]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#D4AF37] mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Cobertura total
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F2E8]">
              Cobertura Total{" "}
              <span className="font-serif italic text-[#D4AF37]">del Bages</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[#c5c0b4] max-w-xl mx-auto">
              Conocemos la normativa urbanística de cada municipio. Si tu propiedad está en el
              Bages, podemos ayudarte.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#2d3d2c] p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-bold text-lg text-[#F5F2E8]">Ayuntamientos del Bages</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-2">
                {MUNICIPALITIES.map((muni) => (
                  <a
                    key={muni}
                    href={`/municipio/${muni.toLowerCase().replace(/\s+/g, '-').replace(/[àá]/g, 'a').replace(/[èé]/g, 'e').replace(/[òó]/g, 'o').replace(/[ïí]/g, 'i').replace(/[üú]/g, 'u')}`}
                    className="flex items-center gap-2 text-sm text-[#c5c0b4] hover:text-[#D4AF37] transition-colors py-1.5 px-2 rounded-lg hover:bg-[#D4AF37]/5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                    {muni}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[#D4AF37]/10 text-center">
                <p className="text-sm text-[#c5c0b4]">
                  ¿No ves tu municipio?{" "}
                  <button
                    onClick={scrollToContact}
                    className="text-[#D4AF37] hover:text-[#F2D4B0] underline underline-offset-2"
                  >
                    Consúltanos
                  </button>{" "}
                  — También atendemos comarcas limítrofes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ BLOG ═══════════════ */}
      <section id="blog" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3A4D39]/20 bg-[#3A4D39]/5 px-3 py-1 text-xs font-medium text-[#3A4D39] mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                Blog urbanístico
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
              Guías y artículos sobre{" "}
              <span className="font-serif italic text-[#3A4D39]">urbanismo en el Bages</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {BLOG_POSTS.map((post) => (
              <motion.div
                key={post.slug}
                variants={fadeUp}
                className="group rounded-2xl border border-[#3A4D39]/10 bg-[#F5F2E8] p-6 hover:border-[#3A4D39]/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block text-xs font-medium text-[#3A4D39] bg-[#3A4D39]/10 px-2 py-0.5 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-[#1a1a1a] mb-2 group-hover:text-[#3A4D39] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#999]">{post.date}</span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-[#3A4D39] hover:text-[#5A7D59] inline-flex items-center gap-1"
                  >
                    Leer más
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ TARIFAS ═══════════════ */}
      <section id="tarifas" className="py-20 md:py-28 bg-[#F5F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3A4D39]/20 bg-[#3A4D39]/5 px-3 py-1 text-xs font-medium text-[#3A4D39] mb-4">
                <Euro className="w-3.5 h-3.5" />
                Servicios profesionales de pago
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
              Tarifas{" "}
              <span className="font-serif italic text-[#3A4D39]">transparentes</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {PRICING.map((plan) => (
              <motion.div
                key={plan.title}
                variants={fadeUp}
                className={`rounded-2xl border p-8 flex flex-col relative overflow-hidden ${
                  plan.highlighted
                    ? "border-[#3A4D39]/30 bg-[#3A4D39] text-[#F5F2E8] shadow-xl shadow-[#3A4D39]/20"
                    : "border-[#3A4D39]/10 bg-white text-[#1a1a1a]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-[#B8860B] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`font-bold text-lg ${plan.highlighted ? "text-[#F5F2E8]" : "text-[#1a1a1a]"}`}>
                    {plan.title}
                  </h3>
                  <p className={`text-sm mt-1 ${plan.highlighted ? "text-[#c5c0b4]" : "text-[#666]"}`}>
                    {plan.desc}
                  </p>
                  <p className={`text-4xl font-bold mt-4 ${plan.highlighted ? "text-[#D4AF37]" : "text-[#3A4D39]"}`}>
                    {plan.price}
                  </p>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-[#c5c0b4]" : "text-[#666]"}`}>
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-[#D4AF37]" : "text-[#3A4D39]"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className={`w-full font-semibold rounded-full h-12 ${
                    plan.highlighted
                      ? "bg-[#B8860B] hover:bg-[#9a7209] text-white"
                      : "bg-[#3A4D39] hover:bg-[#2d3d2c] text-[#F5F2E8]"
                  }`}
                >
                  Solicitar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CONTACT CTA ═══════════════ */}
      <section className="py-20 md:py-28 bg-[#3A4D39]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F2E8] mb-6">
              ¿Hablamos de tu propiedad?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#c5c0b4] mb-8 max-w-xl mx-auto">
              Sin compromiso. Te escucho y te oriento sobre los pasos a seguir para que tu propiedad esté lista para vender al precio que merece.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                className="bg-[#B8860B] hover:bg-[#9a7209] text-white font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-[#B8860B]/25"
              >
                <Phone className="w-4 h-4 mr-2" />
                Solicitar Consulta Exprés
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-[#F5F2E8]/30 text-[#F5F2E8] hover:bg-[#F5F2E8]/10 font-semibold text-base h-14 px-8 rounded-full"
              >
                <a href="https://wa.me/34632831009" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d3d2c] text-[#F5F2E8] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#3A4D39] flex items-center justify-center border border-[#D4AF37]/20">
              <Gavel className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="text-left leading-tight">
              <span className="font-bold text-[#F5F2E8] text-sm block">ANA EPITIE</span>
              <span className="text-[10px] text-[#D4AF37] font-medium leading-none">Perito Judicial Urbanístico</span>
                          <div className="text-left leading-tight">
              <span className="font-bold text-[#F5F2E8] text-sm block">ANA EPITIE</span>
              <span className="text-[10px] text-[#D4AF37] font-medium leading-none">Perito Judicial Urbanístico</span>
            </div>
          </div>
          
          {/* AÑADE ESTA LÍNEA PARA QUE SALGA EL CORREO */}
          <a href="mailto:ana@consultoriourbanistico.com" className="text-sm text-[#c5c0b4] hover:text-[#D4AF37] transition-colors mb-4 inline-block">
            ✉️ ana@consultoriourbanistico.com
          </a>

          <p className="text-xs text-[#9a978a] mb-4">
            </div>
          </div>
          <p className="text-xs text-[#9a978a] mb-4">
            © {new Date().getFullYear()} Consultorio Urbanístico. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-4 text-xs text-[#c5c0b4]">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
