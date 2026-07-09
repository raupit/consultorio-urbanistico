import type { Metadata } from "next";
import Link from "next/link";

const BASE = "https://www.consultoriourbanistico.com";
const PATH = "/ca/informe-pericial-urbanistic-catalunya";
const PATH_ES = "/informe-pericial-urbanistico-cataluna";

export const metadata: Metadata = {
  title: "Informe pericial urbanístic a Catalunya: preu i com contractar [2026]",
  description:
    "Què és un informe pericial urbanístic, quant costa a Catalunya el 2026, quan el necessites i com triar pèrit. Guia d'Ana Epitie, pèrit judicial urbanístic (ASPEJURE núm. 02659).",
  keywords: [
    "informe pericial urbanístic",
    "pèrit urbanístic Catalunya",
    "pèrit judicial urbanisme",
    "preu informe pericial",
    "fora d'ordenació",
    "TRLU",
  ],
  alternates: {
    canonical: `${BASE}${PATH}`,
    languages: { es: `${BASE}${PATH_ES}`, ca: `${BASE}${PATH}` },
  },
  openGraph: {
    title: "Informe pericial urbanístic a Catalunya: què és, quant costa i com contractar un pèrit [Guia 2026]",
    description:
      "Guia completa: preu, marc normatiu català (TRLU), pèrit de part vs judicial, procés pas a pas i preguntes freqüents.",
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
        "Informe pericial urbanístic a Catalunya: què és, quant costa i com contractar un pèrit [Guia 2026]",
      datePublished: "2026-07-15",
      dateModified: "2026-07-15",
      inLanguage: "ca",
      author: { "@id": `${BASE}#ana-epitie` },
      publisher: { "@id": `${BASE}#org` },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}${PATH}` },
    },
    {
      "@type": "FAQPage",
      inLanguage: "ca",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quant triga un informe pericial urbanístic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entre 2 i 4 setmanes en casos estàndard, des que el pèrit disposa de tota la documentació. Els encàrrecs urgents solen portar recàrrec.",
          },
        },
        {
          "@type": "Question",
          name: "Un informe de part val en judici?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La Llei d'enjudiciament civil el regula com a prova a l'article 335. El seu pes depèn del rigor tècnic i de la defensa en la ratificació.",
          },
        },
        {
          "@type": "Question",
          name: "Qui paga el pèrit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El pèrit de part el paga qui el contracta. El de designació judicial es finança mitjançant provisió de fons de la part sol·licitant, sens perjudici de la condemna en costes.",
          },
        },
        {
          "@type": "Question",
          name: "Serveix l'informe davant de l'ajuntament o l'Agència Tributària de Catalunya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. S'utilitza també en via administrativa: expedients de disciplina urbanística, expropiacions i valoracions pericials contradictòries.",
          },
        },
      ],
    },
  ],
};

export default function InformePericialCatalunyaCA() {
  return (
    <div className="min-h-screen bg-[#F5F2E8] text-[#1a1a1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2E8]/95 backdrop-blur-xl border-b border-[#3A4D39]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="leading-tight">
            <span className="font-bold text-[#1a1a1a] text-sm tracking-tight block">ANA EPITIE</span>
            <span className="text-[10px] text-[#3A4D39] font-medium leading-none">Pèrit Judicial Urbanístic</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href={PATH_ES} className="text-xs font-semibold text-[#3A4D39] border border-[#3A4D39]/30 rounded-full px-3 py-1 hover:bg-[#3A4D39]/5 transition-colors">
              ES
            </Link>
            <a
              href="https://wa.me/34632831009?text=PERITO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B8860B] hover:bg-[#9a7209] text-white text-xs font-semibold rounded-full px-4 py-2 transition-colors"
            >
              WhatsApp directe
            </a>
          </div>
        </div>
      </nav>

      <article className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium text-[#3A4D39] mb-3">
            Actualitzat: juliol de 2026 · Per Ana Epitie, Pèrit Judicial Urbanístic (ASPEJURE núm. 02659) i API
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#1a1a1a] mb-6">
            Informe pericial urbanístic a Catalunya: què és, quant costa i com contractar un pèrit{" "}
            <span className="font-serif italic text-[#3A4D39]">[Guia 2026]</span>
          </h1>

          <div className="space-y-5 text-[#333] leading-relaxed text-[15px]">
            <p className="text-base font-medium text-[#1a1a1a]">
              Un informe pericial urbanístic a Catalunya costa habitualment <strong>entre 500 € i 2.000 € + IVA</strong>,
              segons la complexitat del cas, el municipi i si requereix ratificació davant del jutjat. L&apos;elabora un pèrit
              amb especialitat urbanística —de part o de designació judicial— i serveix com a prova en litigis sobre
              classificació de sòl, disciplina urbanística, expropiacions, valoracions contradictòries i conflictes sobre
              finques rústiques i masies.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">
              Què és un informe pericial urbanístic (i en què es diferencia d&apos;un de patologies)?
            </h2>
            <p>
              Un informe pericial urbanístic és un dictamen tècnic, regulat com a mitjà de prova pels articles 335 i
              següents de la Llei d&apos;enjudiciament civil, l&apos;objecte d&apos;estudi del qual és <strong>el sòl i el seu règim
              juridicourbanístic</strong>: classificació i qualificació, aprofitament, edificabilitat, legalitat de
              construccions, planejament aplicable i valoracions vinculades a tot això.
            </p>
            <p>
              No s&apos;ha de confondre amb l&apos;informe pericial arquitectònic de patologies (esquerdes, humitats, vicis
              constructius), que estudia <strong>l&apos;edifici</strong>. La confusió és freqüent i cara: un pèrit d&apos;edificació
              excel·lent pot no dominar el planejament municipal ni la normativa autonòmica del sòl, i en un plet
              urbanístic això es nota a la sala.
            </p>
            <p>
              A Catalunya, el marc de referència és el <strong>Text refós de la Llei d&apos;urbanisme (Decret legislatiu
              1/2010)</strong> i el planejament de cada municipi (POUM, plans parcials i especials). El pèrit urbanístic ha
              de treballar amb aquesta normativa autonòmica i local, no només amb la legislació estatal del sòl.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">Quan el necessites?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Expedients de disciplina urbanística</strong>: ordres d&apos;enderroc, obres sense llicència o excedint la llicència, restauració de la legalitat.</li>
              <li><strong>Construccions en fora d&apos;ordenació o volum disconforme</strong>: determinar el règim aplicable i quines obres s&apos;admeten.</li>
              <li><strong>Masies i edificacions en sòl no urbanitzable</strong>: viabilitat de rehabilitació o canvi d&apos;ús d&apos;acord amb el catàleg de masies del municipi.</li>
              <li><strong>Expropiacions</strong>: contradicció del preu just.</li>
              <li><strong>Valoració pericial contradictòria</strong> davant de comprovacions de valors de l&apos;Agència Tributària de Catalunya (ITP, successions, donacions).</li>
              <li><strong>Herències i divisions de cosa comuna</strong> amb sòl rústic o urbanitzable.</li>
              <li><strong>Delimitacions i conflictes de límits</strong> en finques rústiques, en coordinació amb topògraf quan escau.</li>
              <li><strong>Responsabilitat patrimonial de l&apos;Administració</strong> per canvis de planejament o retards en llicències.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">Quant costa un informe pericial urbanístic el 2026?</h2>
            <p>
              No existeix tarifa oficial: cada pèrit fixa el seu preu segons l&apos;encàrrec. Com a referència de mercat, el
              preu mitjà de l&apos;informe pericial d&apos;arquitecte se situa al voltant dels 1.400 € segons les dades de
              pressupostos que publica Certicalia. Les meves tarifes, publicades en aquesta web:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#3A4D39]/15 rounded-xl overflow-hidden">
                <thead className="bg-[#3A4D39] text-[#F5F2E8]">
                  <tr>
                    <th className="text-left p-3 font-semibold">Servei</th>
                    <th className="text-left p-3 font-semibold">Preu</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t border-[#3A4D39]/10">
                    <td className="p-3">Consulta telemàtica (primera orientació)</td>
                    <td className="p-3 font-bold text-[#3A4D39]">50 € (deduïbles del servei)</td>
                  </tr>
                  <tr className="border-t border-[#3A4D39]/10">
                    <td className="p-3">Estudi de viabilitat urbanística</td>
                    <td className="p-3 font-bold text-[#3A4D39]">200 – 500 €</td>
                  </tr>
                  <tr className="border-t border-[#3A4D39]/10">
                    <td className="p-3">Informe pericial judicial urbanístic</td>
                    <td className="p-3 font-bold text-[#3A4D39]">500 – 2.000 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Factors que mouen el preu: superfície i nombre de finques, volum de documentació, treball de camp i
              desplaçaments, urgència i, sobretot, si hi haurà <strong>ratificació judicial</strong> (article 347 LEC).
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">Qui pot actuar com a pèrit i com es designa a Catalunya</h2>
            <p>
              <strong>Pèrit de part:</strong> el contractes directament tu o el teu advocat. El dictamen s&apos;aporta, amb
              caràcter general, juntament amb la demanda o la contestació (article 336 LEC). Té plena validesa com a prova.
            </p>
            <p>
              <strong>Pèrit de designació judicial:</strong> el nomena el jutjat a partir de les llistes que trameten cada
              any els col·legis professionals i associacions de pèrits al Departament de Justícia de la Generalitat.
              Associacions com ASPEJURE i col·legis com el COAC integren aquestes llistes.
            </p>
            <p>
              A la pràctica, la majoria de litigis urbanístics ben plantejats comencen amb un bon informe de part; el pèrit
              judicial arriba després, si arriba.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">Com triar pèrit urbanístic: criteris objectius</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Acreditació verificable</strong>: número de col·legiació o d&apos;associació pericial comprovable.</li>
              <li><strong>Especialitat urbanística real</strong>: referències d&apos;informes sobre sòl, planejament o disciplina.</li>
              <li><strong>Domini de la normativa catalana i del planejament municipal concret</strong>: el TRLU i el POUM del teu municipi decideixen el cas.</li>
              <li><strong>Experiència en ratificació</strong>: un informe brillant mal defensat a sala perd valor probatori.</li>
              <li><strong>Pressupost per escrit amb objecte acotat</strong>.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">On trobar un pèrit urbanístic a Catalunya?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Llistes oficials del Departament de Justícia</strong> (via col·legis i associacions com COAC o ASPEJURE): garantia d&apos;acreditació; operen per designació judicial.</li>
              <li><strong>Col·legis professionals</strong>: borses de pèrits col·legiats; el filtratge per especialitat el fas tu.</li>
              <li><strong>Gabinets pericials i taxadores</strong>: capacitat i marca; el pèrit concret pot variar.</li>
              <li><strong>Plataformes de pressupostos</strong> (Certicalia, Cronoshare, Habitissimo): compares preu ràpid; l&apos;especialització urbanística no sempre està garantida.</li>
              <li>
                <strong>Pèrits urbanístics especialitzats amb tracte directe</strong>: l&apos;especialitat urbanística és de les
                més escasses de l&apos;àmbit pericial — la gran majoria de pèrits són d&apos;edificació i patologies, no de sòl i
                planejament. És el meu cas: soc pèrit judicial urbanístic (ASPEJURE núm. 02659) i API, amb actuacions tant
                per designació judicial a través de les llistes oficials com a pèrit de part, amb ratificació a sala. Qui
                estudia la teva propietat és qui sap què val i com defensar-la.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] pt-4">Preguntes freqüents</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[#1a1a1a]">Quant triga un informe pericial urbanístic?</h3>
                <p>Entre 2 i 4 setmanes en casos estàndard, des que el pèrit disposa de tota la documentació.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a]">Un informe de part val en judici?</h3>
                <p>Sí. La LEC el regula expressament com a prova (art. 335). El seu pes depèn del rigor tècnic i de la defensa en la ratificació.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a]">Qui paga el pèrit?</h3>
                <p>El pèrit de part el paga qui el contracta. El de designació judicial es finança mitjançant provisió de fons de la part sol·licitant, sens perjudici de la condemna en costes.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a]">Pot un API elaborar informes pericials?</h3>
                <p>
                  La condició d&apos;API acredita coneixement del mercat, però la pericial urbanística exigeix a més una
                  acreditació pericial específica. En el meu cas combino totes dues: pèrit judicial urbanístic (ASPEJURE
                  núm. 02659) — amb actuacions per designació judicial i com a pèrit de part — i API. Quan l&apos;encàrrec
                  requereix projecte o certificacions de tècnic facultatiu, treballo en coordinació amb arquitectes
                  col·legiats.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a1a]">Serveix l&apos;informe davant de l&apos;ajuntament o l&apos;Agència Tributària de Catalunya?</h3>
                <p>Sí. S&apos;utilitza també en via administrativa: expedients de disciplina, expropiacions i valoracions pericials contradictòries.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#3A4D39] p-8 text-center">
            <h2 className="text-2xl font-bold text-[#F5F2E8] mb-3">Necessites un informe pericial urbanístic?</h2>
            <p className="text-[#c5c0b4] mb-6">
              Explica&apos;m el teu cas i et dic amb claredat si necessites una pericial, un estudi de viabilitat o cap de les dues coses.
            </p>
            <a
              href="https://wa.me/34632831009?text=PERITO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#B8860B] hover:bg-[#9a7209] text-white font-bold py-4 px-8 rounded-full transition-colors"
            >
              Escriu-me al WhatsApp — +34 632 831 009
            </a>
            <p className="text-xs text-[#9a978a] mt-4">
              O reserva trucada: calendly.com/anaepitieinmobiliaria (dl-dv 10–13 h i 16–18 h)
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-[#3A4D39]/15 bg-white p-6 text-sm text-[#555] leading-relaxed">
            <p>
              <strong className="text-[#1a1a1a]">Sobre l&apos;autora.</strong> Ana Epitie és Pèrit Judicial Urbanístic
              (ASPEJURE núm. 02659) i Agent de la Propietat Immobiliària (API) amb base a Manresa (Bages). Ha actuat com a
              pèrit per designació judicial a través de les llistes oficials i com a pèrit de part, amb ratificació a sala.
              Elabora informes pericials urbanístics, estudis de viabilitat i valoracions a tot Catalunya.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
