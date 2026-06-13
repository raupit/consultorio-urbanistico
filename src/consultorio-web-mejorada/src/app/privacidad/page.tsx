import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad · Consultorio Urbanístico · Ana Epitie",
  description:
    "Política de privacidad del Consultorio Urbanístico de Ana Epitie, Perito Judicial Urbanístico en Manresa y el Bages. Tratamiento de datos conforme al RGPD.",
  robots: "noindex, follow",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#F5F2E8] text-[#1a1a1a] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-sm text-[#3A4D39] underline underline-offset-2 hover:text-[#5A7D59]"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-8">
          Política de Privacidad
        </h1>

        <div className="space-y-6 text-[#444] leading-relaxed text-[15px]">
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              1. Responsable del tratamiento
            </h2>
            <p>
              <strong>Responsable:</strong> Ana Epitie, Perito Judicial
              Urbanístico (ASPEJURE N.º 02659) y Agente de la Propiedad
              Inmobiliaria, con ámbito de actuación principal en Manresa y la
              comarca del Bages (Cataluña).
            </p>
            <p className="mt-2">
              <strong>Contacto:</strong> anaepitieinmobiliaria@gmail.com ·
              Teléfono: +34 632 831 009.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              2. Datos que se tratan
            </h2>
            <p>
              Los datos facilitados voluntariamente a través de los formularios
              de este sitio web o por WhatsApp/teléfono: nombre, teléfono,
              dirección de correo electrónico y la información que la persona
              interesada incluya en su mensaje (por ejemplo, datos relativos a
              su propiedad o consulta urbanística).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              3. Finalidad del tratamiento
            </h2>
            <p>
              Atender la consulta planteada, valorar si el caso encaja con los
              servicios del Consultorio Urbanístico, preparar en su caso una
              consulta o presupuesto, y mantener la comunicación profesional
              necesaria. No se utilizan los datos para finalidades distintas ni
              se elaboran perfiles automatizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              4. Base jurídica
            </h2>
            <p>
              El consentimiento de la persona interesada al enviar el
              formulario o contactar voluntariamente (art. 6.1.a RGPD) y la
              aplicación de medidas precontractuales a petición del interesado
              (art. 6.1.b RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              5. Conservación de los datos
            </h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para atender
              la consulta y, si se formaliza una relación profesional, durante
              la vigencia de la misma. Posteriormente se conservarán bloqueados
              durante los plazos de prescripción legalmente exigibles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              6. Destinatarios y encargados
            </h2>
            <p>
              No se ceden datos a terceros con fines comerciales. Para la
              gestión de los formularios se utiliza el servicio Formspree, Inc.
              como encargado del tratamiento, y para el alojamiento web el
              servicio Vercel, Inc.; ambos pueden implicar transferencias
              internacionales amparadas en cláusulas contractuales tipo y en el
              Marco de Privacidad de Datos UE-EE. UU. cuando resulta de
              aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              7. Derechos de las personas interesadas
            </h2>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión,
              oposición, limitación del tratamiento y portabilidad escribiendo
              a <strong>anaepitieinmobiliaria@gmail.com</strong>, acreditando su
              identidad. Asimismo, puede presentar una reclamación ante la
              Agencia Española de Protección de Datos (www.aepd.es) si
              considera que el tratamiento no se ajusta a la normativa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              8. Normativa aplicable
            </h2>
            <p>
              Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y
              Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
              Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              9. Cookies
            </h2>
            <p>
              Este sitio web utiliza únicamente las cookies técnicas necesarias
              para su funcionamiento. Si en el futuro se incorporan cookies de
              análisis o publicidad, se informará y se solicitará el
              consentimiento previo mediante un aviso de cookies.
            </p>
          </section>

          <p className="text-sm text-[#777] pt-4 border-t border-[#3A4D39]/10">
            Última actualización: junio de 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
