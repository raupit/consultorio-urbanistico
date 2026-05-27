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
  { label: "Casos de éxito", href: "#testimonios" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Consultorio IA", href: "#ia" },
  { label: "Blog", href: "#blog" },
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
    stat: "-40%",
    statLabel: "pérdida de valor",
  },
  {
    icon: Users,
    title: "Herencias bloqueadas",
    desc: "4 hermanos, 2 quieren vender, 2 no. Obras sin legalizar que nadie quiere asumir. La propiedad se estanca años y pierde valor.",
    stat: "73%",
    statLabel: "de herencias con conflicto",
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
    desc: "Si pones tu propiedad ilegal en Idealista, los compradores te piden un 40% de descuento. O la legalizas o pierdes dinero.",
    stat: "-40%",
    statLabel: "descuento medio exigido",
  },
];

const SERVICES = [
  {
    icon: Home,
    title: "Legalización de Obras",
    desc: "Estudiamos si tu obra sin licencia se puede legalizar. Si es viable, tramitamos todo el proceso. Si no lo es, buscamos la vía para que puedas conservar tu propiedad. Cada caso requiere estudio individualizado.",
    features: ["Estudio previo", "Tramitación completa", "Gestión ante el ayuntamiento", "Alternativas si no procede"],
  },
  {
    icon: Scale,
    title: "Informe Pericial Judicial",
    desc: "Dictamen pericial judicial de valoración para procedimientos judiciales: herencias, división de cosa común, ejecuciones hipotecarias. Válido ante juzgados.",
    features: ["Dictamen pericial de valoración", "Válido judicialmente", "Deslinde de cuotas", "Peritaje herencias"],
  },
  {
    icon: Stamp,
    title: "Disciplina Urbanística y Sanciones",
    desc: "Cuando la legalización no es posible, tramitamos los procedimientos necesarios para que puedas conservar tu edificación. También analizamos la viabilidad urbanística del terreno y coordinamos con técnicos colegiados.",
    features: ["Conservación de la propiedad", "Trámites municipales", "Análisis de viabilidad", "Coordinación con técnicos colegiados"],
  },
];

const STEPS = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Consulta tu caso",
    desc: "Chatea con nuestra IA (2 consultas gratis) o llámanos. Te damos una primera orientación sin compromiso.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Estudio pericial",
    desc: "Realizamos el informe completo: estado legal, viabilidad de legalización (si aplica) y valoración.",
  },
  {
    num: "03",
    icon: Shield,
    title: "Resolvemos el problema",
    desc: "Si es legalizable, tramitamos la legalización. Si no, gestionamos los trámites necesarios para conservar tu propiedad o generamos el informe que da seguridad jurídica al comprador.",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "Vendes al precio real",
    desc: "Con el problema resuelto, tu propiedad recupera el 30-40% de valor perdido. A través de nuestra inmobiliaria asociada, vendemos sin ruido al precio real de mercado.",
    link: {
      text: "Ana Epitie Inmobiliaria",
      href: "https://ana-epitie-inmobiliaria-z.vercel.app",
    },
  },
];

const STATS = [
  { value: "200+", label: "Informes periciales", icon: FileText },
  { value: "30-40%", label: "Valor recuperado", icon: TrendingDown },
  { value: "6 meses", label: "Plazo medio", icon: Clock },
  { value: "0€", label: "CPL inicial", icon: Euro },
];

const CASES = [
  {
    title: "Masia Can Calderó",
    location: "Manresa",
    desc: "Masía del siglo XVIII con ampliaciones sin licencia. Tras el estudio pericial, se obtuvo la declaración que permitió conservar la edificación.",
    stats: [
      { value: "+35%", label: "Valor recuperado" },
      { value: "5 meses", label: "Plazo" },
      { value: "100%", label: "Conservada" },
    ],
  },
  {
    title: "Finca La Culla",
    location: "Sant Fruitós de Bages",
    desc: "Finca rústica con nave ilegal. Se tramitó la asimilación a fuera de ordenación y se recuperó el valor total de la propiedad.",
    stats: [
      { value: "+40%", label: "Valor recuperado" },
      { value: "4 meses", label: "Plazo" },
      { value: "100%", label: "Conservada" },
    ],
  },
  {
    title: "Terreno Salient Nord",
    location: "Sallent",
    desc: "Suelo rústico recalificado sin salida. Se obtuvo la licencia de parcelación y el propietario pudo vender las parcelas al precio de mercado.",
    stats: [
      { value: "+55%", label: "Valor recuperado" },
      { value: "8 meses", label: "Plazo" },
      { value: "3 parcelas", label: "Vendidas" },
    ],
  },
  {
    title: "Nave Industrial Cal Pau",
    location: "Navarcles",
    desc: "Nave industrial construida sin licencia en suelo urbanizable. Se tramitó la legalización y la propiedad pasó a valer su precio real.",
    stats: [
      { value: "+30%", label: "Valor recuperado" },
      { value: "6 meses", label: "Plazo" },
      { value: "Legalizada", label: "Situación" },
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
    title: "Cómo legalizar una masía en Cataluña",
    excerpt: "Guía completa sobre el proceso de legalización de obras sin licencia en masías catalanas. Requisitos, plazos y pasos a seguir.",
    category: "Legalización",
    date: "20 May 2026",
  },
  {
    slug: "herencia-con-conflicto-urbanistico-bages",
    title: "Cómo conservar tu propiedad cuando la herencia no es clara",
    excerpt: "El 73% de las herencias con inmuebles en el Bages presentan conflictos urbanísticos. Soluciones prácticas para desbloquear tu herencia.",
    category: "Herencias",
    date: "10 May 2026",
  },
  {
    slug: "asimilacion-fuera-de-ordenacion-bages",
    title: "He heredado una propiedad con problemas urbanísticos: ¿qué hago?",
    excerpt: "Pasos a seguir cuando heredas una propiedad con irregularidades urbanísticas. Cómo proteger tu patrimonio heredado.",
    category: "Herencias",
    date: "15 May 2026",
  },
  {
    slug: "certificado-habitabilidad-bages",
    title: "Certificado de habitabilidad: por qué lo necesitas",
    excerpt: "Todo lo que debes saber sobre el certificado de habitabilidad en el Bages. Cuándo es obligatorio y cómo obtenerlo.",
    category: "Trámites",
    date: "5 May 2026",
  },
  {
    slug: "casa-prefabricada-terreno-rustico",
    title: "¿Se puede poner una casa prefabricada en un terreno rústico?",
    excerpt: "Análisis de la normativa urbanística sobre viviendas prefabricadas en suelo rústico. Lo que dice la ley y lo que puedes hacer.",
    category: "Legalización",
    date: "1 May 2026",
  },
  {
    slug: "suelo-rustico-bages-reforma",
    title: "Suelo rústico en el Bages: cuándo se puede reformar",
    excerpt: "Condiciones y requisitos para reformar construcciones en suelo rústico del Bages. Qué permite y qué prohíbe el planeamiento.",
    category: "Legalización",
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
    desc: "Análisis detallado de la situación urbanística de tu propiedad",
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
    title: "Informe Pericial Judicial",
    price: "500-2.000€",
    desc: "Dictamen pericial judicial de valoración con validez ante juzgados",
    features: [
      "Dictamen pericial completo",
      "Válido en procedimientos judiciales",
      "Valoración de la propiedad",
      "Deslinde de cuotas",
      "Asistencia a juicio si necesario",
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
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.telefono || !rgpdChecked) return;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
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
                Proteja su patrimonio
                <br />
                <span className="font-serif italic text-[#D4AF37]">en el Bages</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-base md:text-lg text-[#c5c0b4] max-w-xl leading-relaxed">
                Ana Epitie, Perito Judicial Urbanística (ASPEJURE N.º 02659).
                Propiedades con problemas urbanísticos valen un{" "}
                <span className="text-[#F5F2E8] font-semibold">30-40% menos</span>. Con el informe
                pericial adecuado, recuperas ese valor. Te ayudo a estudiar tu caso, regularizar la
                situación si es posible y vender sin perder dinero.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  onClick={scrollToContact}
                  className="bg-[#B8860B] hover:bg-[#9a7209] text-white font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-[#B8860B]/25"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Consulta Exprés (50€ Deducibles)
                </Button>
                <Button
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-[#F5F2E8]/30 text-[#F5F2E8] hover:bg-[#F5F2E8]/10 font-semibold text-base h-14 px-8 rounded-full"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Pregunta a la IA
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { value: "+200", label: "Informes periciales" },
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
                    src="/ana-epitie.jpg"
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
              Tu propiedad tiene un problema urbanístico.
              <br />
              <span className="font-serif italic text-[#3A4D39]">Nosotros tenemos la solución.</span>
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
              Eliminamos el problema legal.
              <br />
              <span className="font-serif italic text-[#3A4D39]">Tú vendes al precio real.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[#666] max-w-xl mx-auto">
              Resolvemos los problemas urbanísticos de tu propiedad para que puedas vender al precio
              real de mercado. Conocemos la normativa de cada municipio de la comarca del Bages.
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
              De problema legal a venta segura
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
                  Te llamamos en menos de 2 horas laborables
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-[#F5F2E8]">¡Solicitud recibida!</h4>
                  <p className="text-sm text-[#c5c0b4] mt-2">
                    Te llamaremos en menos de 2 horas laborables.
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
                    Consulta Exprés — Te llamamos en 2h
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
                Casos de éxito
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
              Ellos recuperaron el valor.
              <br />
              <span className="font-serif italic text-[#3A4D39]">Tú también puedes.</span>
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

      {/* ═══════════════ IA ═══════════════ */}
      <section id="ia" className="py-20 md:py-28 bg-[#F5F2E8]">
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
                <Bot className="w-3.5 h-3.5" />
                Inteligencia Artificial
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
              2 consultas gratis con la{" "}
              <span className="font-serif italic text-[#3A4D39]">IA experta en urbanismo del Bages</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mx-auto"
          >
            <div className="rounded-2xl border border-[#3A4D39]/15 bg-white p-8">
              {/* Chat simulation */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3A4D39] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-[#F5F2E8]" />
                  </div>
                  <div className="bg-[#F5F2E8] rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-sm text-[#1a1a1a]">Hola, soy la IA del Consultorio Urbanístico. ¿En qué puedo ayudarte con tu propiedad en el Bages?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-[#3A4D39] rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <p className="text-sm text-[#F5F2E8]">Tengo una masía con una ampliación sin licencia, ¿se puede legalizar?</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#B8860B] flex items-center justify-center flex-shrink-0">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3A4D39] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-[#F5F2E8]" />
                  </div>
                  <div className="bg-[#F5F2E8] rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-sm text-[#1a1a1a]">Depende del tipo de obra y del planeamiento del municipio. Te recomiendo una consulta exprés para estudiar tu caso concreto. Las 2 primeras consultas conmigo son gratuitas.</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={scrollToContact}
                  className="bg-[#3A4D39] hover:bg-[#2d3d2c] text-[#F5F2E8] font-bold rounded-full px-8 h-12"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Pregunta a la IA — 2 consultas gratis
                </Button>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F2E8]">
              Tu propiedad vale más{" "}
              <span className="font-serif italic text-[#D4AF37]">de lo que crees.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-lg mx-auto"
          >
            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#2d3d2c] p-8">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input
                  placeholder="Nombre *"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="bg-[#1a2a1a] border-[#D4AF37]/15 text-[#F5F2E8] placeholder:text-[#9a978a] h-11 rounded-xl focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/20"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input
                    type="tel"
                    placeholder="Teléfono *"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="bg-[#1a2a1a] border-[#D4AF37]/15 text-[#F5F2E8] placeholder:text-[#9a978a] h-11 rounded-xl focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/20"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#1a2a1a] border-[#D4AF37]/15 text-[#F5F2E8] placeholder:text-[#9a978a] h-11 rounded-xl focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/20"
                  />
                </div>
                <textarea
                  placeholder="Mensaje (opcional)"
                  rows={3}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full bg-[#1a2a1a] border border-[#D4AF37]/15 text-[#F5F2E8] placeholder:text-[#9a978a] rounded-xl px-3 py-2 text-sm focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/20 focus:outline-none resize-none"
                />
                <Button
                  type="submit"
                  disabled={!formData.nombre || !formData.telefono}
                  className="w-full bg-[#B8860B] hover:bg-[#9a7209] text-white font-bold text-base h-12 rounded-full shadow-lg shadow-[#B8860B]/20 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar consulta
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ INMOBILIARIA ═══════════════ */}
      <section className="py-20 md:py-28 bg-[#F5F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl border border-[#3A4D39]/15 bg-white p-8 md:p-10 text-center">
              <motion.div variants={fadeUp}>
                <div className="w-16 h-16 rounded-2xl bg-[#3A4D39]/10 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-[#3A4D39]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
                  ¿Tu propiedad ya está legalizada?{" "}
                  <span className="font-serif italic text-[#3A4D39]">Ana Epitie Inmobiliaria la vende.</span>
                </h2>
                <p className="text-[#666] max-w-xl mx-auto mb-6">
                  Si tu propiedad ya no tiene problemas urbanísticos, nuestra inmobiliaria asociada
                  puede ayudarte a venderla al precio real de mercado, sin descuentos ni complicaciones.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {[
                    "Vendemos tu propiedad legalizada",
                    "Gestionamos todo el proceso",
                    "Precio real de mercado",
                  ].map((item) => (
                    <div key={item} className="flex items-center justify-center gap-2 text-sm text-[#3A4D39]">
                      <CheckCircle2 className="w-4 h-4 text-[#3A4D39] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="bg-[#B8860B] hover:bg-[#9a7209] text-white font-bold rounded-full px-8 h-12"
                >
                  <a href="https://ana-epitie-inmobiliaria-z.vercel.app" target="_blank" rel="noopener noreferrer">
                    Ir a Ana Epitie Inmobiliaria
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-[#2d3d2c] text-[#c5c0b4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#3A4D39] flex items-center justify-center">
                  <Gavel className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="leading-tight">
                  <span className="font-bold text-[#F5F2E8] text-sm block">ANA EPITIE</span>
                  <span className="text-[10px] text-[#D4AF37]">Perito Judicial Urbanístico</span>
                </div>
              </div>
              <p className="text-sm text-[#9a978a] leading-relaxed">
                Consultorio Urbanístico Bages - Ana Epitie. Especialista en legalización de obras, informes periciales y disciplina urbanística.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-[#F5F2E8] mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicios" className="hover:text-[#D4AF37] transition-colors">Legalización de Obras</a></li>
                <li><a href="#servicios" className="hover:text-[#D4AF37] transition-colors">Informe Pericial Judicial</a></li>
                <li><a href="#servicios" className="hover:text-[#D4AF37] transition-colors">Disciplina Urbanística</a></li>
                <li><a href="#tarifas" className="hover:text-[#D4AF37] transition-colors">Tarifas</a></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-[#F5F2E8] mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#cobertura" className="hover:text-[#D4AF37] transition-colors">Cobertura</a></li>
                <li><a href="#testimonios" className="hover:text-[#D4AF37] transition-colors">Casos de éxito</a></li>
                <li><a href="#blog" className="hover:text-[#D4AF37] transition-colors">Blog</a></li>
                <li><a href="https://ana-epitie-inmobiliaria-z.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1">Inmobiliaria <ExternalLink className="w-3 h-3" /></a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-[#F5F2E8] mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <a href="tel:+34632831009" className="hover:text-[#D4AF37] transition-colors">+34 632 831 009</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <a href="mailto:info@peritourbanistic.cat" className="hover:text-[#D4AF37] transition-colors">info@peritourbanistic.cat</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Manresa, Bages
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.instagram.com/anaepitie_perito" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3A4D39] flex items-center justify-center hover:bg-[#5A7D59] transition-colors">
                  <Instagram className="w-4 h-4 text-[#F5F2E8]" />
                </a>
                <a href="https://www.linkedin.com/in/ana-epitie" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3A4D39] flex items-center justify-center hover:bg-[#5A7D59] transition-colors">
                  <Linkedin className="w-4 h-4 text-[#F5F2E8]" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#3A4D39]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#9a978a]">
              © {new Date().getFullYear()} Consultorio Urbanístico - Ana Epitie. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#9a978a]">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Aviso Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
