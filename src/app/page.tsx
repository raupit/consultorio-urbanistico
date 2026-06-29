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
    slug: "suelo-urbanizable-rustico-diferencias-bages",
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
                <span className="text-[#F5F2E8] font-semibold">se vende mejor, más rápido
