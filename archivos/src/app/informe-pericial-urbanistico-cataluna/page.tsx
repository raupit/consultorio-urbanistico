import type { Metadata } from "next";
import Link from "next/link";

const BASE = "https://www.consultoriourbanistico.com";
const PATH = "/informe-pericial-urbanistico-cataluna";
const PATH_CA = "/ca/informe-pericial-urbanistic-catalunya";

export const metadata: Metadata = {
  title: "Informe pericial urbanístico en Cataluña: precio y cómo contratar [2026]",
  description:
    "Qué es un informe pericial urbanístico, cuánto cuesta en Cataluña en 2026, cuándo lo necesitas y cómo elegir perito. Guía de Ana Epitie, perito judicial urbanístico (ASPEJURE N.º 02659).",
  keywords: [
    "informe pericial urbanístico",
    "perito urbanístico Cataluña",
    "perito judicial urbanismo",
    "precio informe pericial",
    "dictamen pericial urbanístico",
    "fuera de ordenación",
    "TRLUC",
  ],
  alternates: {
    canonical: `${BASE}${PATH}`,
    languages: { es: `${BASE}${PATH}`, ca: `${BASE}${PATH_CA}` },
  },
  openGraph: {
    title: "Informe pericial urbanístico en Cataluña: qué es, cuánto cuesta y cómo contratar [Guía 2026]",
    description:
      "Guía completa: precio, marco normativo catalán (TRLUC), perito de parte vs judicial, proceso paso a paso y preguntas frecuentes.",
    url: `${BASE}${PATH}`,
    type: "article",
    publishedTime: "2026-07-15",
    authors: ["Ana Epitie"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Informe pericial urbanístico en Cataluña: qué es, cuánto cuesta y cómo contratar un perito [Guía 2026]",
      datePublished: "2026-07-15",
      dateModified: "2026-07-15",
      inLanguage: "es",
      author: { "@id": `${BASE}#ana-epitie` },
      publisher: { "@id": `${BASE}#org` },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}${PATH}` },
    },
    {
      "@type": "Person",
      "@id": `${BASE}#ana-epitie`,
      name: "Ana Epitie",
      jobTitle: "Perito Judicial Urbanístico y Agente de la Propiedad Inmobiliaria (API)",
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "Perito Judicial Urbanístico ASPEJURE N.º 02659" },
        { "@type": "EducationalOccupationalCredential", name: "Agente de la Propiedad Inmobiliaria (API)" },
      ],
      areaServed: "Cataluña",
      url: BASE,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE}#org`,
      name: "Consultorio Urbanístico — Ana Epitie",
      url: BASE,
      telephone: "+34632831009",
      address: { "@type": "PostalAddress", addressLocality: "Manresa", addressRegion: "Barcelona", addressCountry: "ES" },
      areaServed: "Cataluña",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto tarda un informe pericial urbanístico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entre 2 y 4 semanas en casos estándar, desde que el perito dispone de toda la documentación. Los encargos urgentes suelen llevar recargo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Un informe de parte vale en juicio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La Ley de Enjuiciamiento Civil lo regula como prueba en su artículo 335. Su peso depende del rigor técnico, la metodología y la defensa en la ratificación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Quién paga al perito?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El perito de parte lo paga quien lo contrata. El de designación judicial se financia mediante provisión de fondos de la parte solicitante, sin perjuicio de la condena en costas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Sirve el informe ante el ayuntamiento o la Agència Tributària de Catalunya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Se utiliza también en vía administrativa: expedientes de disciplina urbanística, expropiaciones y valoraciones periciales contradictorias frente a comprobaciones de valores.",
          },
        },
      ],
    },
  ],
};

export default function InformePericialCataluna() {
  return (
    <div className="min-h-screen bg-[#F5F2E8] text-[#1a1a1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2E8]/95 backdrop-blur-xl border-b border-[#3A4D39]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="leading-tight">
            <span className="font-bold text-[#1a1a1a] text-sm tracking-tight block">ANA EPITIE</span>
            <span className="text-[10px] text-[#3A4D39] font-medium leading-none">Perito Judicial Urbanístico</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href={PATH_CA} className="text-xs font-semibold text-[#3A4D39] border border-[#3A4D39]/30 rounded-full px-3 py-1 hover:bg-[#3A4D39]/5 transition-colors">
              CA
            </Link>
            <a
              href="https://wa.me/34632831009?text=PERITO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B8860B] hover:bg-[#9a7209] text-white text-xs font-semibold rounded-full px-4 py-2 transition-colors"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </nav>

      <article className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium text-[#3A4D39] mb-3">
            Actualizado: julio de 2026 · Por Ana Epitie, Perito Judicial Urbanístico (ASPEJURE N.º 02659) y API
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#1a1a1a] mb-6">
            Informe pericial urbanístico en Cataluña: qué es, cuánto cuesta y cómo contratar un perito{" "}
            <span className="font-serif italic text-[#3A4D39]">[Guía 2026]</span>
          </h1>

          <div className="space-y-5 text-[#333] leading-relaxed text-[15px]">
            <p className="text-base font-medium text-[#1a1a1a]">
              Un informe pericial urbanístico en Cataluña cuesta habitualmente <strong>entre 500 € y 2.000 € + IVA</strong>,
              según la complejidad del caso, el municipio y si requiere ratificación ante el juzgado. Lo elabora un perito
              con especialidad urbanística —de parte o de designación judicial— y sirve como prueba en litigios sobre
              clasificación de suelo, disciplina urbanística, expropiaciones, valoraciones contradictorias y conflictos
              sobre fincas rústicas y masías.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">
              ¿Qué es un informe pericial urbanístico (y en qué se diferencia de uno de patologías)?
            </h2>
            <p>
              Un informe pericial urbanístico es un dictamen técnico, regulado como medio de prueba por los artículos 335 y
              siguientes de la Ley de Enjuiciamiento Civil, cuyo objeto de estudio es <strong>el suelo y su régimen
              jurídico-urbanístico</strong>: clasificación y calificación, aprovechamiento, edificabilidad, legalidad de
              construcciones, planeamiento aplicable y valoraciones vinculadas a todo lo anterior.
            </p>
            <p>
              No debe confundirse con el informe pericial arquitectónico de patologías (grietas, humedades, vicios
              constructivos), que estudia <strong>el edificio</strong>. La confusión es frecuente y cara: un perito de
              edificación excelente puede no dominar el planeamiento municipal ni la normativa autonómica del suelo, y en
              un pleito urbanístico eso se nota en la sala.
            </p>
            <p>
              En Cataluña, el marco de referencia es el <strong>Texto refundido de la Ley de urbanismo (Decreto Legislativo
              1/2010)</strong> y el planeamiento de cada municipio (POUM, planes parciales y especiales). El perito
              urbanístico debe trabajar con esa normativa autonómica y local, no solo con la legislación estatal del suelo.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">¿Cuándo lo necesitas?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Expedientes de disciplina urbanística</strong>: órdenes de derribo, obras sin licencia o excediendo licencia, restauración de la legalidad.</li>
              <li><strong>Construcciones en fuera de ordenación o volumen disconforme</strong>: determinar el régimen aplicable y qué obras se admiten.</li>
              <li><strong>Masías y edificaciones en suelo no urbanizable</strong>: viabilidad de rehabilitación o cambio de uso conforme al catálogo de masías del municipio.</li>
              <li><strong>Expropiaciones</strong>: contradicción del justiprecio.</li>
              <li><strong>Valoración pericial contradictoria</strong> frente a comprobaciones de valores de la Agència Tributària de Catalunya (ITP, sucesiones, donaciones).</li>
              <li><strong>Herencias y divisiones de cosa común</strong> con suelo rústico o urbanizable.</li>
              <li><strong>Deslindes y conflictos de lindes</strong> en fincas rústicas, en coordinación con topógrafo cuando procede.</li>
              <li><strong>Responsabilidad patrimonial de la Administración</strong> por cambios de planeamiento o retrasos en licencias.</li>
            </ul>
            <p>
              Si tu caso implica <em>edificio</em> y <em>suelo</em> a la vez (una masía con obras discutidas, por ejemplo),
              lo correcto es acotar el objeto de la pericia por escrito antes de encargar nada. Un informe con objeto mal
              definido es la primera causa de dictámenes inútiles.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">¿Cuánto cuesta un informe pericial urbanístico en 2026?</h2>
            <p>
              No existe tarifa oficial: cada perito fija su precio según el encargo. Como referencia de mercado, el precio
              medio del informe pericial de arquitecto se sitúa en torno a los 1.400 € según los datos de presupuestos que
              publica Certicalia, con horquillas generales desde unos 300 € hasta varios miles según complejidad. Mis
              tarifas, publicadas en esta web:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#3A4D39]/15 rounded-xl overflow-hidden">
                <thead className="bg-[#3A4D39] text-[#F5F2E8]">
                  <tr>
                    <th className="text-left p-3 font-semibold">Servicio</th>
                    <th className="text-left p-3 font-semibold">Precio</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t border-[#3A4D39]/10">
                    <td className="p-3">Consulta telemática (primera orientación)</td>
                    <td className="p-3 font-bold text-[#3A4D39]">50 € (deducibles del servicio)</td>
                  </tr>
                  <tr className="border-t border-[#3A4D39]/10">
                    <td className="p-3">Estudio de viabilidad urbanística</td>
                    <td className="p-3 font-bold text-[#3A4D39]">200 – 500 €</td>
                  </tr>
                  <tr className="border-t border-[#3A4D39]/10">
                    <td className="p-3">Informe pericial judicial urbanístico</td>
                    <td className="p-3 font-bold text-[#3A4D39]">500 – 2.000 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Factores que mueven el precio: superficie y número de fincas, volumen de documentación (planeamiento,
              expediente administrativo), trabajo de campo y desplazamientos, urgencia y, sobre todo, si habrá{" "}
              <strong>ratificación judicial</strong> (artículo 347 LEC).
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">
              Quién puede actuar como perito y cómo se designa en Cataluña
            </h2>
            <p>
              <strong>Perito de parte:</strong> lo contratas directamente tú o tu abogado. El dictamen se aporta, con
              carácter general, junto con la demanda o la contestación (artículo 336 LEC). Tiene plena validez como prueba;
              el juez valora su solvencia técnica y la imparcialidad del razonamiento.
            </p>
            <p>
              <strong>Perito de designación judicial:</strong> lo nombra el juzgado a partir de las listas que remiten cada
              año los colegios profesionales y asociaciones de peritos al Departament de Justícia de la Generalitat.
              Asociaciones como ASPEJURE y colegios como el COAC integran esas listas.
            </p>
            <p>
              Ambas vías exigen lo mismo del informe: metodología explícita, fuentes normativas citadas, conclusiones
              motivadas y disposición a defenderlo en sala. En la práctica, la mayoría de litigios urbanísticos bien
              planteados empiezan con un buen informe de parte; el perito judicial llega después, si llega.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">Cómo elegir perito urbanístico: criterios objetivos</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Acreditación verificable</strong>: número de colegiación o de asociación pericial comprobable.</li>
              <li><strong>Especialidad urbanística real</strong>: referencias de informes sobre suelo, planeamiento o disciplina, no solo de patologías de edificación.</li>
              <li><strong>Dominio de la normativa catalana y del planeamiento municipal concreto</strong>: el TRLUC y el POUM de tu municipio deciden el caso.</li>
              <li><strong>Experiencia en ratificación</strong>: un informe brillante mal defendido en sala pierde valor probatorio.</li>
              <li><strong>Presupuesto por escrito con objeto acotado</strong>: qué incluye, qué no, plazos y si la ratificación va aparte.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">¿Dónde encontrar un perito urbanístico en Cataluña?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Listas oficiales del Departament de Justícia</strong> (vía colegios y asociaciones como COAC o ASPEJURE): garantía de acreditación; operan por designación judicial.</li>
              <li><strong>Colegios profesionales</strong>: bolsas de peritos colegiados; el filtrado por especialidad urbanística lo haces tú.</li>
              <li><strong>Gabinetes periciales y tasadoras</strong>: capacidad y marca; el perito concreto asignado puede variar.</li>
              <li><strong>Plataformas de presupuestos</strong> (Certicalia, Cronoshare, Habitissimo): comparas precio rápido; la especialización urbanística no siempre está garantizada.</li>
              <li>
                <strong>Peritos urbanísticos especializados con trato directo</strong>: la especialidad urbanística es de las
                más escasas del ámbito pericial — la gran mayoría de peritos son de edificación y patologías, no de suelo y
                planeamiento. Es mi caso: soy perito judicial urbanístico (ASPEJURE N.º 02659) y API, con actuaciones tanto
                por designación judicial a través de las listas oficiales como perito de parte, con ratificación en sala.
                Trato directo con quien firma y defiende el dictamen: quien estudia tu propiedad es quien sabe qué vale y
                cómo defenderla.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">El proceso, paso a paso</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Consulta inicial</strong>: defines el problema y el objetivo con tu abogado. En mi caso, consulta telemática de 50 € deducibles del servicio.</li>
              <li><strong>Acotación del objeto y presupuesto por escrito.</strong></li>
              <li><strong>Recopilación documental</strong>: nota simple, catastro, POUM y normas del municipio, expediente administrativo, licencias.</li>
              <li><strong>Trabajo de campo</strong>: visita a la finca, mediciones, reportaje fotográfico.</li>
              <li><strong>Redacción del dictamen</strong>: metodología, normativa aplicada, análisis y conclusiones motivadas.</li>
              <li><strong>Entrega y, si procede, ratificación en sala</strong> (art. 347 LEC).</li>
            </ol>
            <p>Plazo habitual: 2 a 4 semanas desde la entrega de la documentación completa, salvo urgencias.</p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">Preguntas frecuentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[#1a1a1a]">¿Cuánto tarda un informe pericial urbanístico?</h3>
                <p>Entre 2 y 4 semanas en casos estándar, desde que el perito dispone de toda la documentación. Los encargos urgentes suelen llevar recargo.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a]">¿Un informe de parte vale en juicio?</h3>
                <p>Sí. La LEC lo regula expresamente como prueba (art. 335). Su peso depende del rigor técnico, la metodología y la defensa en la ratificación, no de quién lo pagó.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a]">¿Quién paga al perito?</h3>
                <p>El perito de parte lo paga quien lo contrata. El de designación judicial se financia mediante provisión de fondos de la parte que lo solicita, sin perjuicio de la condena en costas.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a]">¿Qué pasa si el juez pide ratificación?</h3>
                <p>El perito acude a la vista, expone el dictamen y responde a las aclaraciones de las partes y del juez (art. 347 LEC). Conviene pactar esta intervención en el presupuesto inicial.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a]">¿Puede un API elaborar informes periciales?</h3>
                <p>
                  La condición de API acredita conocimiento del mercado, pero la pericial urbanística exige además
                  acreditación pericial específica. En mi caso combino ambas: la acreditación como perito judicial
                  urbanístico (ASPEJURE N.º 02659) — con actuaciones por designación judicial y como perito de parte — para
                  el dictamen, y la condición de API para la lectura de mercado que sustenta las valoraciones. Cuando el
                  encargo requiere proyecto o certificaciones de técnico facultativo, trabajo en coordinación con
                  arquitectos colegiados.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a]">¿Sirve el informe ante el ayuntamiento o la Agència Tributària de Catalunya?</h3>
                <p>Sí. Además del ámbito judicial, el dictamen se utiliza en vía administrativa: alegaciones en expedientes de disciplina, expropiaciones y valoraciones periciales contradictorias.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#3A4D39] p-8 text-center">
            <h2 className="text-2xl font-bold text-[#F5F2E8] mb-3">¿Necesitas un informe pericial urbanístico?</h2>
            <p className="text-[#c5c0b4] mb-6">
              Cuéntame tu caso y te digo con claridad si necesitas una pericial, un estudio de viabilidad o ninguna de las dos cosas.
            </p>
            <a
              href="https://wa.me/34632831009?text=PERITO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#B8860B] hover:bg-[#9a7209] text-white font-bold py-4 px-8 rounded-full transition-colors"
            >
              Escríbeme al WhatsApp — +34 632 831 009
            </a>
            <p className="text-xs text-[#9a978a] mt-4">
              O reserva llamada: calendly.com/anaepitieinmobiliaria (L-V 10–13 h y 16–18 h)
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#3A4D39]/15 bg-white p-6 text-sm text-[#555] leading-relaxed">
            <p>
              <strong className="text-[#1a1a1a]">Sobre la autora.</strong> Ana Epitie es Perito Judicial Urbanístico
              (ASPEJURE N.º 02659) y Agente de la Propiedad Inmobiliaria (API) con base en Manresa (Bages). Ha actuado como
              perito por designación judicial a través de las listas oficiales y como perito de parte, con ratificación en
              sala. Elabora informes periciales urbanísticos, estudios de viabilidad y valoraciones en toda Cataluña, en
              coordinación con arquitectos colegiados cuando el encargo lo requiere.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
