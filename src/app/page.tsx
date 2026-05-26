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
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

/* ────────────────────────────────────────
   DATA
   ──────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Casos de éxito", href: "#testimonios" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "Cobertura", href: "#cobertura" },
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
    icon: Shield,
    title: "Legalización de Obras",
    desc: "Estudiamos si tu obra sin licencia se puede legalizar. Si es viable, tramitamos todo el proceso. Si no lo es, buscamos la vía para que puedas conservar tu propiedad. Cada caso requiere estudio individualizado.",
    features: ["Estudio previo", "Tramitación completa", "Gestión ante el ayuntamiento", "Alternativas si no procede"],
  },
  {
    icon: FileText,
    title: "Informe Pericial Judicial",
    desc: "Dictamen pericial judicial de valoración para procedimientos judiciales: herencias, división de cosa común, ejecuciones hipotecarias. Válido ante juzgados.",
    features: ["Dictamen pericial de valoración", "Válido judicialmente", "Deslinde de cuotas", "Peritaje herencias"],
  },
  {
    icon: Gavel,
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

const MUNICIPALITIES = [
  "Manresa", "Cardona", "Sallent", "Artés", "Navarcles",
  "Sant Fruitós de Bages", "Santpedor", "Callús", "Suria", "Balsareny",
  "Avinyó", "Calders", "Mura", "Talamanca", "El Pont de Vilomara",
  "Rajadell", "Sant Joan de Vilatorrada", "Sant Vicenç de Castellet",
  "Fonollosa", "Gaià", "Santa Maria d'Oló", "Oristà", "Olost",
  "Prats de Lluçanès",
];

const BLOG_POSTS = [
  {
    slug: "obra-sin-licencia-consecuencias",
    title: "Obra sin licencia: las consecuencias que nadie te explica",
    excerpt: "Descubre los riesgos reales de tener una obra sin licencia en tu propiedad. Las multas, la pérdida de valor y las limitaciones que te afectan.",
    category: "Legalización",
    date: "15 Ene 2025",
  },
  {
    slug: "herencia-con-obra-ilegal",
    title: "Herencia con obra ilegal: por qué no puedes vender",
    excerpt: "Cuando heredas una propiedad con obras sin legalizar, te encuentras con un problema que bloquea la venta. Aquí te explico por qué.",
    category: "Herencias",
    date: "8 Ene 2025",
  },
  {
    slug: "fuera-de-ordenacion-bages",
    title: "Fuera de ordenación: tu masía puede valer mucho más",
    excerpt: "La asimilación a fuera de ordenación puede ser la solución para tu masía del Bages. Descubre si tu propiedad es candidata.",
    category: "Asimilación",
    date: "2 Ene 2025",
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", telefono: "", email: "" });
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
    <div className="min-h-screen bg-[#030305] text-[#f0ebe3] font-sans">
      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030305]/80 backdrop-blur-xl border-b border-[#D4A574]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A574] to-[#C9956B] flex items-center justify-center">
                <Gavel className="w-5 h-5 text-[#030305]" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-[#f0ebe3] text-sm tracking-tight block">ANA EPITIE</span>
                <span className="text-[10px] text-[#D4A574] font-medium leading-none">Perito Judicial Urbanístico</span>
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
                    className="text-sm font-medium text-[#D4A574] hover:text-[#F2D4B0] transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-[#8a8a9a] hover:text-[#D4A574] transition-colors"
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
                className="hidden md:flex items-center gap-1.5 text-[#D4A574] font-bold text-sm hover:text-[#F2D4B0] transition-colors"
              >
                <Phone className="w-4 h-4" />
                632 831 009
              </a>
              <Button
                onClick={scrollToContact}
                className="bg-[#D4A574] hover:bg-[#C9956B] text-[#030305] text-xs font-semibold rounded-full px-4 h-8 shadow-lg shadow-[#D4A574]/20"
              >
                <Phone className="w-3 h-3 mr-1" />
                Consulta Exprés
              </Button>
              <button
                className="lg:hidden p-2 text-[#D4A574]"
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
              className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#D4A574]/10"
            >
              <div className="px-4 py-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="block text-sm font-medium text-[#8a8a9a] hover:text-[#D4A574] transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label} {link.external && <ExternalLink className="w-3 h-3 inline" />}
                  </a>
                ))}
                <a
                  href="tel:+34632831009"
                  className="block text-sm font-bold text-[#D4A574] py-2"
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
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#030305] via-[#080812] to-[#030305]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#D4A574]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9956B]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A574]/[0.02] rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A574]/20 bg-[#D4A574]/5 px-4 py-1.5 text-xs font-medium text-[#D4A574]">
                <Shield className="w-3.5 h-3.5" />
                Perito Judicial Urbanístico · ASPEJURE N.º 02659
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="text-[#f0ebe3]">Proteja su patrimonio</span>
              <br />
              <span className="font-serif italic text-[#D4A574]">en el Bages</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-[#8a8a9a] max-w-2xl mx-auto leading-relaxed">
              Propiedades con problemas urbanísticos valen un{" "}
              <span className="text-[#f0ebe3] font-semibold">30-40% menos</span>. Con el informe
              pericial adecuado, recuperas ese valor. Te ayudo a estudiar tu caso, regularizar la
              situación si es posible y vender sin perder dinero.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button
                onClick={scrollToContact}
                className="bg-[#D4A574] hover:bg-[#C9956B] text-[#030305] font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-[#D4A574]/25"
              >
                <Phone className="w-4 h-4 mr-2" />
                Consulta Exprés (50€ Deducibles)
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border-[#D4A574]/30 text-[#f0ebe3] hover:bg-[#D4A574]/10 font-semibold text-base h-14 px-8 rounded-full"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Pregunta a la IA
              </Button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
            >
              {[
                { value: "200+", label: "Informes periciales", icon: FileText },
                { value: "30-40%", label: "Valor recuperado", icon: TrendingDown },
                { value: "6 meses", label: "Plazo medio", icon: Clock },
                { value: "0€", label: "CPL inicial", icon: Euro },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-4 h-4 text-[#D4A574] mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-[#D4A574]">{stat.value}</p>
                  <p className="text-xs text-[#8a8a9a] mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ PROBLEMAS ═══════════════ */}
      <section id="servicios" className="py-20 md:py-28 bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                Problemas que te cuestan dinero
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Tu propiedad tiene un problema urbanístico.
              <br />
              <span className="font-serif italic text-[#D4A574]">Nosotros tenemos la solución.</span>
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
                className="group rounded-2xl border border-[#D4A574]/10 bg-[#0a0a0f] p-6 hover:border-[#D4A574]/30 hover:bg-[#0f0f18] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/10 group-hover:bg-[#D4A574]/10 flex items-center justify-center transition-colors mb-4">
                  <problem.icon className="w-5 h-5 text-red-400 group-hover:text-[#D4A574] transition-colors" />
                </div>
                <h3 className="font-bold text-[#f0ebe3] mb-2">{problem.title}</h3>
                <p className="text-sm text-[#8a8a9a] leading-relaxed mb-4">{problem.desc}</p>
                <div className="pt-3 border-t border-[#D4A574]/10">
                  <p className="text-2xl font-bold text-red-400">{problem.stat}</p>
                  <p className="text-xs text-[#8a8a9a]">{problem.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SERVICIOS ═══════════════ */}
      <section className="py-20 md:py-28 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4A574]/20 bg-[#D4A574]/5 px-3 py-1 text-xs font-medium text-[#D4A574] mb-4">
                <Shield className="w-3.5 h-3.5" />
                Servicios profesionales
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Eliminamos el problema legal.
              <br />
              <span className="font-serif italic text-[#D4A574]">Tú vendes al precio real.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[#8a8a9a] max-w-xl mx-auto">
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
                className="group rounded-[20px] border border-[#D4A574]/15 bg-[#0a0a0f] p-8 hover:border-[#D4A574]/35 hover:shadow-xl hover:shadow-[#D4A574]/5 transition-all duration-300 flex flex-col"
              >
                <div className="flex flex-col items-center text-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4A574]/10 group-hover:bg-[#D4A574]/15 flex items-center justify-center transition-colors">
                    <service.icon className="w-7 h-7 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#f0ebe3]">{service.title}</h3>
                    <p className="text-sm text-[#8a8a9a] mt-2 leading-relaxed">{service.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5 text-xs text-[#8a8a9a]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A574] flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-[#D4A574] hover:bg-[#C9956B] text-[#030305] font-semibold rounded-full"
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
      <section id="como-funciona" className="py-20 md:py-28 bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4A574]/20 bg-[#D4A574]/5 px-3 py-1 text-xs font-medium text-[#D4A574] mb-4">
                <Clock className="w-3.5 h-3.5" />
                Proceso en 4 pasos
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              De problema legal a venta segura
              <br />
              <span className="font-serif italic text-[#D4A574]">en 4 pasos</span>
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
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-[#D4A574]/30 to-transparent" />
                )}
                <div className="relative">
                  <span className="text-5xl font-black text-[#D4A574]/10 absolute -top-3 -left-1">
                    {step.num}
                  </span>
                  <div className="relative w-14 h-14 rounded-2xl bg-[#D4A574]/10 border border-[#D4A574]/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#D4A574]" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-[#f0ebe3]">{step.title}</h3>
                <p className="text-sm text-[#8a8a9a] leading-relaxed">
                  {step.desc}{" "}
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4A574] hover:text-[#F2D4B0] underline underline-offset-2 inline-flex items-center gap-1"
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
            <div className="rounded-2xl border border-[#D4A574]/20 bg-[#0a0a0f] p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#f0ebe3]">Consulta Exprés</h3>
                <p className="text-sm text-[#8a8a9a] mt-1">
                  Te llamamos en menos de 2 horas laborables
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-[#D4A574] mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-[#f0ebe3]">¡Solicitud recibida!</h4>
                  <p className="text-sm text-[#8a8a9a] mt-2">
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
                      className="bg-[#111118] border-[#D4A574]/15 text-[#f0ebe3] placeholder:text-[#8a8a9a] h-11 rounded-xl focus:border-[#D4A574]/40 focus:ring-[#D4A574]/20"
                    />
                    <Input
                      type="tel"
                      placeholder="Teléfono *"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="bg-[#111118] border-[#D4A574]/15 text-[#f0ebe3] placeholder:text-[#8a8a9a] h-11 rounded-xl focus:border-[#D4A574]/40 focus:ring-[#D4A574]/20"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email (opcional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#111118] border-[#D4A574]/15 text-[#f0ebe3] placeholder:text-[#8a8a9a] h-11 rounded-xl focus:border-[#D4A574]/40 focus:ring-[#D4A574]/20"
                  />
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="rgpd"
                      checked={rgpdChecked}
                      onCheckedChange={(checked) => setRgpdChecked(checked === true)}
                      className="border-[#D4A574]/30 data-[state=checked]:bg-[#D4A574] data-[state=checked]:border-[#D4A574] mt-0.5"
                    />
                    <Label htmlFor="rgpd" className="text-xs text-[#8a8a9a] leading-relaxed cursor-pointer">
                      He leído y acepto la política de privacidad. Autorizo el tratamiento de mis
                      datos para que el Consultorio Urbanístico me contacte.
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    disabled={!rgpdChecked || !formData.nombre || !formData.telefono}
                    className="w-full bg-[#D4A574] hover:bg-[#C9956B] text-[#030305] font-bold text-base h-12 rounded-full shadow-lg shadow-[#D4A574]/20 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Consulta Exprés — Te llamamos en 2h
                  </Button>
                  <p className="text-xs text-center text-[#8a8a9a]">
                    50€ · Deducibles del servicio completo
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CASOS DE ÉXITO ═══════════════ */}
      <section id="testimonios" className="py-20 md:py-28 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4A574]/20 bg-[#D4A574]/5 px-3 py-1 text-xs font-medium text-[#D4A574] mb-4">
                <Star className="w-3.5 h-3.5" />
                Casos de éxito
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Resultados reales,{" "}
              <span className="font-serif italic text-[#D4A574]">propiedades recuperadas</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <div className="rounded-2xl border border-[#D4A574]/15 bg-[#0a0a0f] overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A574]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#f0ebe3]">Masia Can Calderó</h3>
                    <p className="text-sm text-[#D4A574]">Manresa · Comarca del Bages</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-[#8a8a9a] leading-relaxed">
                    Masía del siglo XVIII con ampliaciones sin licencia realizadas en los años 90. La
                    familia llevaba 3 años intentando vender sin éxito — los compradores exigían un
                    40% de descuento por las irregularidades urbanísticas.
                  </p>
                  <p className="text-[#8a8a9a] leading-relaxed">
                    Tras el estudio pericial, se determinó que las ampliaciones eran asimilables a
                    fuera de ordenación. Se tramitó el procedimiento correspondiente y se obtuvo la
                    declaración que permitió la conservación de la edificación.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-[#111118]">
                    <p className="text-2xl font-bold text-[#D4A574]">+35%</p>
                    <p className="text-xs text-[#8a8a9a] mt-1">Valor recuperado</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-[#111118]">
                    <p className="text-2xl font-bold text-[#D4A574]">5 mes</p>
                    <p className="text-xs text-[#8a8a9a] mt-1">Plazo resolución</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-[#111118]">
                    <p className="text-2xl font-bold text-[#D4A574]">100%</p>
                    <p className="text-xs text-[#8a8a9a] mt-1">Edificación conservada</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ TARIFAS ═══════════════ */}
      <section id="tarifas" className="py-20 md:py-28 bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4A574]/20 bg-[#D4A574]/5 px-3 py-1 text-xs font-medium text-[#D4A574] mb-4">
                <Euro className="w-3.5 h-3.5" />
                Tarifas transparentes
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Empieza por una{" "}
              <span className="font-serif italic text-[#D4A574]">consulta exprés</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-lg mx-auto"
          >
            <div className="rounded-2xl border-2 border-[#D4A574]/30 bg-[#0a0a0f] p-8 md:p-10 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4A574]/5 rounded-full blur-[60px]" />

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4A574]/10 mb-6">
                  <Phone className="w-8 h-8 text-[#D4A574]" />
                </div>
                <h3 className="text-2xl font-bold text-[#f0ebe3] mb-2">Consulta Exprés</h3>
                <p className="text-[#8a8a9a] text-sm mb-6">
                  Primera orientación profesional sobre tu caso
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#D4A574]">50€</span>
                  <p className="text-sm text-[#D4A574] mt-1 font-medium">Deducibles del servicio completo</p>
                </div>

                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Análisis de tu situación urbanística",
                    "Orientación sobre viabilidad",
                    "Presupuesto personalizado",
                    "Sin compromiso de contratación",
                    "50€ se descuentan si continuas",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#8a8a9a]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-[#D4A574] hover:bg-[#C9956B] text-[#030305] font-bold text-base h-12 rounded-full shadow-lg shadow-[#D4A574]/20"
                >
                  Solicitar Consulta Exprés
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ COBERTURA ═══════════════ */}
      <section id="cobertura" className="py-20 md:py-28 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4A574]/20 bg-[#D4A574]/5 px-3 py-1 text-xs font-medium text-[#D4A574] mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Zona de cobertura
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Toda la comarca{" "}
              <span className="font-serif italic text-[#D4A574]">del Bages</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[#8a8a9a] max-w-xl mx-auto">
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
            <div className="rounded-2xl border border-[#D4A574]/15 bg-[#0a0a0f] p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-[#D4A574]" />
                <h3 className="font-bold text-lg text-[#f0ebe3]">Municipios atendidos</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-2">
                {MUNICIPALITIES.map((muni) => (
                  <div
                    key={muni}
                    className="flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-[#D4A574] transition-colors py-1.5 px-2 rounded-lg hover:bg-[#D4A574]/5 cursor-default"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D4A574] flex-shrink-0" />
                    {muni}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[#D4A574]/10 text-center">
                <p className="text-sm text-[#8a8a9a]">
                  ¿No ves tu municipio?{" "}
                  <button
                    onClick={scrollToContact}
                    className="text-[#D4A574] hover:text-[#F2D4B0] underline underline-offset-2"
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
      <section id="blog" className="py-20 md:py-28 bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4A574]/20 bg-[#D4A574]/5 px-3 py-1 text-xs font-medium text-[#D4A574] mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                Blog urbanístico
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Artículos que te{" "}
              <span className="font-serif italic text-[#D4A574]">abren los ojos</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {BLOG_POSTS.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeUp}
                className="group rounded-2xl border border-[#D4A574]/10 bg-[#0a0a0f] overflow-hidden hover:border-[#D4A574]/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-[#D4A574] bg-[#D4A574]/10 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#8a8a9a] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#f0ebe3] mb-3 group-hover:text-[#D4A574] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#8a8a9a] leading-relaxed mb-4">{post.excerpt}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#D4A574] hover:text-[#F2D4B0] transition-colors"
                  >
                    Leer más
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-[#020204] border-t border-[#D4A574]/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A574] to-[#C9956B] flex items-center justify-center">
                  <Gavel className="w-5 h-5 text-[#030305]" />
                </div>
                <div className="leading-tight">
                  <span className="font-bold text-[#f0ebe3] text-sm tracking-tight block">ANA EPITIE</span>
                  <span className="text-[10px] text-[#D4A574] font-medium leading-none">
                    Perito Judicial Urbanístico
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#8a8a9a] leading-relaxed">
                Especializada en legalización de obras, informes periciales judiciales y disciplina
                urbanística en la comarca del Bages, Cataluña.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-[#f0ebe3] mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+34632831009"
                    className="flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-[#D4A574] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +34 632 831 009
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@anaepitie.com"
                    className="flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-[#D4A574] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    contacto@anaepitie.com
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-sm text-[#8a8a9a]">
                    <MapPin className="w-4 h-4" />
                    Manresa 08240, Bages, Cataluña
                  </span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-[#f0ebe3] mb-4">Servicios</h4>
              <ul className="space-y-2">
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <a
                      href="#servicios"
                      className="text-sm text-[#8a8a9a] hover:text-[#D4A574] transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cross-links */}
            <div>
              <h4 className="font-bold text-[#f0ebe3] mb-4">Más servicios</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://ana-epitie-inmobiliaria-z.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#8a8a9a] hover:text-[#D4A574] transition-colors inline-flex items-center gap-1"
                  >
                    Ana Epitie Inmobiliaria
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://smartvalora.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#8a8a9a] hover:text-[#D4A574] transition-colors inline-flex items-center gap-1"
                  >
                    SmartValora
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://valorafiscal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#8a8a9a] hover:text-[#D4A574] transition-colors inline-flex items-center gap-1"
                  >
                    ValoraFiscal
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>

              <h4 className="font-bold text-[#f0ebe3] mb-3 mt-6">Síguenos</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/anaepitie_perito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#D4A574]/10 flex items-center justify-center text-[#D4A574] hover:bg-[#D4A574]/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ana-epitie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#D4A574]/10 flex items-center justify-center text-[#D4A574] hover:bg-[#D4A574]/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-[#D4A574]/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#8a8a9a]">
              © {new Date().getFullYear()} Consultorio Urbanístico — Ana Epitie. Perito Judicial
              Urbanístico ASPEJURE N.º 02659. Todos los derechos reservados.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1 text-xs text-[#8a8a9a] hover:text-[#D4A574] transition-colors"
            >
              <ChevronUp className="w-3 h-3" />
              Volver arriba
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
