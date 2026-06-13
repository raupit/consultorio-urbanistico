import Link from "next/link";
export const metadata = {
  title: "Aviso Legal · Consultorio Urbanístico · Ana Epitie",
  description: "Aviso legal del Consultorio Urbanístico de Ana Epitie, Perito Judicial Urbanístico (ASPEJURE N.º 02659) en Manresa y el Bages.",
  robots: "noindex, follow",
};
export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-[#F5F2E8] text-[#1a1a1a] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-[#3A4D39] underline underline-offset-2 hover:text-[#5A7D59]">← Volver al inicio</Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-8">Aviso Legal</h1>
        <div className="space-y-6 text-[#444] leading-relaxed text-[15px]">
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">1. Titular del sitio web</h2><p><strong>Titular:</strong> Ana Epitie.<br/><strong>Actividad:</strong> peritación judicial urbanística (ASPEJURE N.º 02659), estudios de viabilidad y asesoramiento urbanístico, e intermediación inmobiliaria como Agente de la Propiedad Inmobiliaria.<br/><strong>Contacto:</strong> anaepitieinmobiliaria@gmail.com · +34 632 831 009.<br/><strong>Ámbito:</strong> Manresa y la comarca del Bages (Cataluña).</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">2. Objeto y carácter de la información</h2><p>La información de este sitio tiene carácter informativo y comercial. No constituye informe técnico, dictamen pericial, asesoramiento jurídico ni garantía de resultado. Cada caso requiere estudio individualizado conforme a la normativa aplicable.</p><p className="mt-2">Los trabajos que requieren proyecto técnico o firma de técnico competente colegiado se realizan en coordinación con dichos profesionales.</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">3. Condiciones de uso</h2><p>El acceso atribuye la condición de usuario e implica la aceptación de estas condiciones. El usuario se compromete a un uso adecuado de los contenidos.</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">4. Propiedad intelectual</h2><p>Los contenidos son titularidad de Ana Epitie o se usan con autorización. Queda prohibida su reproducción sin autorización expresa.</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">5. Responsabilidad</h2><p>El titular no se responsabiliza del mal uso de los contenidos ni de decisiones adoptadas únicamente sobre la base de la información publicada, sin estudio individualizado previo.</p></section>
          <section><h2 className="text-xl font-bold text-[#1a1a1a] mb-2">6. Legislación</h2><p>Legislación española. Resulta de aplicación la Ley 34/2002 (LSSI-CE), entre otras.</p></section>
          <p className="text-sm text-[#777] pt-4 border-t border-[#3A4D39]/10">Última actualización: junio de 2026.</p>
        </div>
      </div>
    </main>
  );
}
