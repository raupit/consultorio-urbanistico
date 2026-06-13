import Link from "next/link";
export const metadata = {
  title: "Política de Privacidad · Consultorio Urbanístico · Ana Epitie",
  description: "Política de privacidad del Consultorio Urbanístico de Ana Epitie, Perito Judicial Urbanístico en Manresa y el Bages. Tratamiento de datos conforme al RGPD.",
  robots: "noindex, follow",
};
export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#F5F2E8] text-[#1a1a1a] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-[#3A4D39] underline underline-offset-2 hover:text-[#5A7D59]">← Volver al inicio</Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-8">Política de Privacidad</h1>
        <div className="space-y-6 text-[#444] leading-relaxed text-[15px]">
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">1. Responsable del tratamiento</h2><p><strong>Responsable:</strong> Ana Epitie, Perito Judicial Urbanístico (ASPEJURE N.º 02659) y Agente de la Propiedad Inmobiliaria, con ámbito de actuación principal en Manresa y la comarca del Bages (Cataluña).</p><p className="mt-2"><strong>Contacto:</strong> anaepitieinmobiliaria@gmail.com · Teléfono: +34 632 831 009.</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">2. Datos que se tratan</h2><p>Los datos facilitados voluntariamente mediante los formularios o por WhatsApp/teléfono: nombre, teléfono, correo electrónico y la información que la persona interesada incluya en su mensaje.</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">3. Finalidad</h2><p>Atender la consulta, valorar si el caso encaja con los servicios del Consultorio Urbanístico, preparar en su caso una consulta o presupuesto y mantener la comunicación profesional necesaria. No se elaboran perfiles automatizados.</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">4. Base jurídica</h2><p>El consentimiento de la persona interesada (art. 6.1.a RGPD) y la aplicación de medidas precontractuales a su petición (art. 6.1.b RGPD).</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">5. Conservación</h2><p>Los datos se conservarán el tiempo necesario para atender la consulta y, en su caso, durante la relación profesional. Después se conservarán bloqueados durante los plazos legales exigibles.</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">6. Destinatarios</h2><p>No se ceden datos con fines comerciales. Se emplea Formspree, Inc. para la gestión de formularios y Vercel, Inc. para el alojamiento, como encargados del tratamiento, con las garantías de transferencia internacional aplicables.</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">7. Derechos</h2><p>Puede ejercer acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <strong>anaepitieinmobiliaria@gmail.com</strong>. También puede reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">8. Normativa</h2><p>Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 (LOPDGDD).</p></section>
          <p className="text-sm text-[#777] pt-4 border-t border-[#3A4D39]/10">Última actualización: junio de 2026.</p>
        </div>
      </div>
    </main>
  );
}
