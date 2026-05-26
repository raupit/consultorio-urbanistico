import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

/* ────────────────────────────────────────
   MUNICIPALITY DATA
   ──────────────────────────────────────── */

interface MunicipalityData {
  name: string;
  slug: string;
  comarca: string;
  provincia: string;
  comunidad: string;
  poumName: string;
  poumDate: string;
  population: string;
  description: string;
  services: string[];
  relatedKeywords: string[];
}

const municipalities: MunicipalityData[] = [
  {
    name: "Manresa",
    slug: "manresa",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Manresa",
    poumDate: "Aprov. definit. 14/12/2010, Mod. 2024",
    population: "77.000",
    description: "Manresa, capital de la comarca del Bages, concentra el mayor número de expedientes de legalización de obras y procedimientos de disciplina urbanística de la comarca. Como Perito Judicial Urbanístico con despacho en Manresa, Ana Epitie conoce en profundidad el POUM de Manresa y la práctica administrativa del ayuntamiento.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística", "Disciplina urbanística y sanciones"],
    relatedKeywords: ["perito urbanístico Manresa", "legalización obras Manresa", "informe pericial Manresa", "POUM Manresa", "obra sin licencia Manresa"],
  },
  {
    name: "Sant Fruitós de Bages",
    slug: "sant-fruitos-de-bages",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Sant Fruitós de Bages",
    poumDate: "Aprov. definit. 2015, Mod. 2023",
    population: "8.500",
    description: "Sant Fruitós de Bages es uno de los municipios del Bages con mayor crecimiento urbanístico reciente, lo que ha generado un número significativo de situaciones irregulares. La proximidad a Manresa y las urbanizaciones de nueva creación hacen que los expedientes de legalización sean habituales.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Sant Fruitós de Bages", "legalización obras Sant Fruitós", "POUM Sant Fruitós de Bages"],
  },
  {
    name: "Artés",
    slug: "artes",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Artés",
    poumDate: "Aprov. definit. 2012, Mod. 2022",
    population: "5.800",
    description: "Artés combina el núcleo urbano con masías y fincas rústicas que frecuentemente presentan irregularidades urbanísticas derivadas de ampliaciones y cambios de uso realizados sin licencia. El conocimiento del POUM de Artés es esencial para abordar cualquier procedimiento de legalización.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Artés", "legalización obras Artés", "POUM Artés", "masía irregular Artés"],
  },
  {
    name: "Santpedor",
    slug: "santpedor",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Santpedor",
    poumDate: "Aprov. definit. 2011, Mod. 2023",
    population: "7.600",
    description: "Santpedor, con su combinación de casco histórico y áreas rústicas, presenta una realidad urbanística compleja donde las masías con ampliaciones irregulares son habituales. El conocimiento específico del POUM de Santpedor permite determinar las opciones de legalización con precisión.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Santpedor", "legalización obras Santpedor", "POUM Santpedor"],
  },
  {
    name: "Sallent",
    slug: "sallent",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Sallent",
    poumDate: "Aprov. definit. 2013, Mod. 2024",
    population: "6.200",
    description: "Sallent, con su territorio marcado por fincas rústicas y masías históricas, es un municipio donde los problemas de legalización de obras y la asimilación a fuera de ordenación son especialmente frecuentes. El POUM de Sallent tiene particularidades que requieren análisis especializado.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Sallent", "legalización obras Sallent", "POUM Sallent", "suelo rústico Sallent"],
  },
  {
    name: "Navarcles",
    slug: "navarcles",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Navarcles",
    poumDate: "Aprov. definit. 2014, Mod. 2022",
    population: "5.700",
    description: "Navarcles, situado a orillas del Llobregat, combina áreas urbanas con zonas rústicas donde las construcciones irregulares son frecuentes. El conocimiento del planeamiento vigente de Navarcles es clave para cualquier procedimiento de legalización o peritación.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Navarcles", "legalización obras Navarcles", "POUM Navarcles"],
  },
  {
    name: "Cardona",
    slug: "cardona",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Cardona",
    poumDate: "Aprov. definit. 2010, Mod. 2023",
    population: "4.800",
    description: "Cardona, con su patrimonio histórico y su entorno rural, presenta una dualidad urbanística entre el casco protegido y las masías del entorno que con frecuencia tienen construcciones irregulares. El POUM de Cardona establece condicionantes especiales que requieren estudio profesional.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Cardona", "legalización obras Cardona", "POUM Cardona"],
  },
  {
    name: "Callús",
    slug: "callus",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Callús",
    poumDate: "Aprov. definit. 2016, Mod. 2023",
    population: "2.000",
    description: "Callús, con su carácter rural y la presencia de numerosas masías y fincas agrícolas, es un municipio donde las construcciones irregulares son habituales. El POUM de Callús y su práctica administrativa tienen particularidades que conviene conocer antes de iniciar cualquier procedimiento.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Callús", "legalización obras Callús", "POUM Callús"],
  },
  {
    name: "Balsareny",
    slug: "balsareny",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Balsareny",
    poumDate: "Aprov. definit. 2013, Mod. 2022",
    population: "3.600",
    description: "Balsareny, en la ribera del Llobregat, combina núcleo urbano con masías y terrenos rústicos donde las irregularidades urbanísticas son frecuentes. El conocimiento del POUM de Balsareny es fundamental para abordar expedientes de legalización.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Balsareny", "legalización obras Balsareny", "POUM Balsareny"],
  },
  {
    name: "Súria",
    slug: "suria",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Súria",
    poumDate: "Aprov. definit. 2012, Mod. 2023",
    population: "6.000",
    description: "Súria, con su minería histórica y su entorno natural, presenta una realidad urbanística particular donde las construcciones en suelo rústico y las ampliaciones irregulares son frecuentes. El POUM de Súria establece criterios específicos que requieren análisis profesional.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Súria", "legalización obras Súria", "POUM Súria"],
  },
  {
    name: "Navàs",
    slug: "navas",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Navàs",
    poumDate: "Aprov. definit. 2014, Mod. 2023",
    population: "6.400",
    description: "Navàs, situado en el eje del Llobregat, combina núcleo urbano con masías dispersas y colonias industriales históricas. Las ampliaciones irregulares en masías y las construcciones auxiliares sin licencia son problemas habituales que requieren conocimiento del POUM de Navàs.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Navàs", "legalización obras Navàs", "POUM Navàs"],
  },
  {
    name: "Sant Joan de Vilatorrada",
    slug: "sant-joan-de-vilatorrada",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Sant Joan de Vilatorrada",
    poumDate: "Aprov. definit. 2011, Mod. 2022",
    population: "11.000",
    description: "Sant Joan de Vilatorrada, uno de los municipios más poblados del Bages, ha experimentado un crecimiento urbanístico importante que ha generado situaciones irregulares tanto en el casco urbano como en las masías del entorno. El POUM de Sant Joan establece criterios específicos para la legalización de obras.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística", "Disciplina urbanística y sanciones"],
    relatedKeywords: ["perito urbanístico Sant Joan de Vilatorrada", "legalización obras Sant Joan", "POUM Sant Joan de Vilatorrada"],
  },
  {
    name: "Castellbell i el Vilar",
    slug: "castellbell-i-el-vilar",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Castellbell i el Vilar",
    poumDate: "Aprov. definit. 2013, Mod. 2023",
    population: "3.900",
    description: "Castellbell i el Vilar, en la entrada del Parc Natural de Sant Llorenç del Munt i l'Obac, presenta una realidad urbanística marcada por las restricciones ambientales y la presencia de masías con construcciones irregulares. El POUM establece condicionantes especiales por la proximidad al espacio protegido.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Castellbell i el Vilar", "legalización obras Castellbell", "POUM Castellbell i el Vilar"],
  },
  {
    name: "Castellgalí",
    slug: "castellgali",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Castellgalí",
    poumDate: "Aprov. definit. 2015, Mod. 2022",
    population: "2.800",
    description: "Castellgalí, en la confluencia del Llobregat y el Cardener, combina áreas residenciales con zonas rústicas donde las masías con ampliaciones irregulares son habituales. El conocimiento del POUM de Castellgalí es fundamental para cualquier procedimiento de legalización.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Castellgalí", "legalización obras Castellgalí", "POUM Castellgalí"],
  },
  {
    name: "Sant Vicenç de Castellet",
    slug: "sant-vivenc-de-castellet",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Sant Vicenç de Castellet",
    poumDate: "Aprov. definit. 2012, Mod. 2024",
    population: "9.200",
    description: "Sant Vicenç de Castellet, con su importante tejido industrial y residencial, presenta una realidad urbanística compleja donde las ampliaciones sin licencia y los cambios de uso son frecuentes. El POUM de Sant Vicenç tiene particularidades que requieren estudio profesional especializado.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística", "Disciplina urbanística y sanciones"],
    relatedKeywords: ["perito urbanístico Sant Vicenç de Castellet", "legalización obras Sant Vicenç", "POUM Sant Vicenç de Castellet"],
  },
  {
    name: "El Pont de Vilomara",
    slug: "el-pont-de-vilomara",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM El Pont de Vilomara",
    poumDate: "Aprov. definit. 2016, Mod. 2023",
    population: "3.700",
    description: "El Pont de Vilomara, con su entorno natural junto al río Llobregat y sus urbanizaciones, presenta una realidad urbanística donde las construcciones irregulares en suelo rústico y las ampliaciones sin licencia en urbanizaciones son frecuentes. El POUM establece criterios específicos para cada zona.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Pont de Vilomara", "legalización obras Pont de Vilomara", "POUM Pont de Vilomara"],
  },
  {
    name: "Marganell",
    slug: "marganell",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Marganell",
    poumDate: "Aprov. definit. 2010, Mod. 2022",
    population: "300",
    description: "Marganell, uno de los municipios más pequeños del Bages, se encuentra en un entorno rural donde las masías con construcciones irregulares son la norma. La proximidad a Montserrat y las restricciones paisajísticas añaden complejidad a los procedimientos de legalización.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Marganell", "legalización obras Marganell", "POUM Marganell", "masía Marganell"],
  },
  {
    name: "Monistrol de Montserrat",
    slug: "monistrol-de-montserrat",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Monistrol de Montserrat",
    poumDate: "Aprov. definit. 2009, Mod. 2023",
    population: "3.000",
    description: "Monistrol de Montserrat, a los pies de la montaña de Montserrat, tiene una realidad urbanística fuertemente condicionada por las protecciones paisajísticas y ambientales. Las construcciones irregulares en este municipio enfrentan restricciones adicionales que requieren análisis profesional específico.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Monistrol de Montserrat", "legalización obras Monistrol", "POUM Monistrol de Montserrat"],
  },
  {
    name: "Rajadell",
    slug: "rajadell",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Rajadell",
    poumDate: "Aprov. definit. 2011, Mod. 2022",
    population: "600",
    description: "Rajadell, municipio rural del Bages, concentra su problemática urbanística en las masías y fincas agrícolas con construcciones irregulares. La baja densidad de población y el carácter rústico del territorio hacen que la asimilación a fuera de ordenación sea una vía frecuentemente analizada.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Rajadell", "legalización obras Rajadell", "POUM Rajadell"],
  },
  {
    name: "Sant Salvador de Guardiola",
    slug: "sant-salvador-de-guardiola",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Sant Salvador de Guardiola",
    poumDate: "Aprov. definit. 2013, Mod. 2023",
    population: "3.400",
    description: "Sant Salvador de Guardiola combina núcleo urbano con urbanizaciones y masías dispersas donde las construcciones sin licencia son habituales. La presión urbanística de la proximidad a Manresa genera situaciones irregulares que requieren conocimiento del POUM local.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Sant Salvador de Guardiola", "legalización obras Sant Salvador", "POUM Sant Salvador de Guardiola"],
  },
  {
    name: "Sant Mateu de Bages",
    slug: "sant-mateu-de-bages",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Sant Mateu de Bages",
    poumDate: "Aprov. definit. 2012, Mod. 2022",
    population: "700",
    description: "Sant Mateu de Bages, municipio rural del Bages, se caracteriza por sus masías y fincas agrícolas donde las construcciones irregulares son una constante. La baja presión urbanística permite en algunos casos vías de regularización que en municipios más poblados no serían viables.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Sant Mateu de Bages", "legalización obras Sant Mateu", "POUM Sant Mateu de Bages"],
  },
  {
    name: "Fonollosa",
    slug: "fonollosa",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Fonollosa",
    poumDate: "Aprov. definit. 2010, Mod. 2022",
    population: "1.400",
    description: "Fonollosa, en el sector occidental del Bages, presenta una realidad urbanística marcada por las fincas rústicas y las masías con construcciones auxiliares irregulares. El POUM de Fonollosa establece parámetros específicos para suelo no urbanizable que requieren interpretación profesional.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Fonollosa", "legalización obras Fonollosa", "POUM Fonollosa"],
  },
  {
    name: "Avinyó",
    slug: "avinyo",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Avinyó",
    poumDate: "Aprov. definit. 2014, Mod. 2023",
    population: "2.400",
    description: "Avinyó, en la transición entre el Bages y el Lluçanès, combina agricultura con residencia y presenta construcciones irregulares tanto en el núcleo urbano como en las masías del entorno. El POUM de Avinyó tiene particularidades derivadas de su posición geográfica.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Avinyó", "legalización obras Avinyó", "POUM Avinyó"],
  },
  {
    name: "Calders",
    slug: "calders",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Calders",
    poumDate: "Aprov. definit. 2011, Mod. 2022",
    population: "400",
    description: "Calders, municipio rural por excelencia del Bages, concentra su problemática urbanística en las masías con construcciones irregulares y las fincas rústicas con edificaciones auxiliares sin licencia. La asimilación a fuera de ordenación es una vía frecuentemente considerada.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Calders", "legalización obras Calders", "POUM Calders"],
  },
  {
    name: "Santa Maria d'Oló",
    slug: "santa-maria-dolo",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Santa Maria d'Oló",
    poumDate: "Aprov. definit. 2013, Mod. 2023",
    population: "1.100",
    description: "Santa Maria d'Oló, en el límite norte del Bages, es un municipio rural donde las masías con ampliaciones irregulares y las construcciones auxiliares sin licencia son frecuentes. El POUM de Santa Maria d'Oló tiene particularidades ligadas a su carácter rural que requieren análisis profesional.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Santa Maria d'Oló", "legalización obras Santa Maria d'Oló", "POUM Santa Maria d'Oló"],
  },
  {
    name: "Castellfollit del Boix",
    slug: "castellfollit-del-boix",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Castellfollit del Boix",
    poumDate: "Aprov. definit. 2010, Mod. 2022",
    population: "400",
    description: "Castellfollit del Boix, en el límite sur del Bages con l'Anoia, es un municipio eminentemente rural donde las masías con construcciones irregulares son la norma. Las restricciones del Parc Natural de Sant Llorenç del Munt i l'Obac condicionan las posibilidades de legalización.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Castellfollit del Boix", "legalización obras Castellfollit", "POUM Castellfollit del Boix"],
  },
  {
    name: "Gaià",
    slug: "gaia",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Gaià",
    poumDate: "Aprov. definit. 2012, Mod. 2022",
    population: "200",
    description: "Gaià, uno de los municipios más pequeños del Bages, tiene una realidad urbanística dominada por las masías y fincas rústicas. Las construcciones irregulares en suelo no urbanizable son la problemática principal, y el conocimiento del POUM local es clave para evaluar las opciones de regularización.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Gaià", "legalización obras Gaià", "POUM Gaià"],
  },
  {
    name: "Mura",
    slug: "mura",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Mura",
    poumDate: "Aprov. definit. 2010, Mod. 2022",
    population: "200",
    description: "Mura, enclavado en el Parc Natural de Sant Llorenç del Munt i l'Obac, presenta una realidad urbanística muy condicionada por las protecciones ambientales. Las construcciones irregulares en este municipio enfrentan restricciones adicionales que hacen imprescindible el asesoramiento profesional antes de cualquier actuación.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Mura", "legalización obras Mura", "POUM Mura", "parque natural Mura"],
  },
  {
    name: "Talamanca",
    slug: "talamanca",
    comarca: "Bages",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    poumName: "POUM Talamanca",
    poumDate: "Aprov. definit. 2011, Mod. 2023",
    population: "200",
    description: "Talamanca, en el límite del Parc Natural de Sant Llorenç del Munt i l'Obac, combina patrimonio histórico con entorno natural protegido. Las construcciones irregulares en masías y fincas rústicas enfrentan restricciones derivadas de la protección ambiental que requieren análisis especializado.",
    services: ["Legalización de obras sin licencia", "Informes periciales judiciales", "Asimilación a fuera de ordenación", "Estudio de viabilidad urbanística"],
    relatedKeywords: ["perito urbanístico Talamanca", "legalización obras Talamanca", "POUM Talamanca"],
  },
];

// Generate static params for all municipalities
export async function generateStaticParams() {
  return municipalities.map((muni) => ({ slug: muni.slug }));
}

// Dynamic metadata for SEO
interface MunicipalityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: MunicipalityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const muni = municipalities.find((m) => m.slug === slug);
  if (!muni) return { title: "Municipio no encontrado" };

  return {
    title: `Perito Urbanístico ${muni.name} · Bages · Ana Epitie`,
    description: muni.description,
    keywords: muni.relatedKeywords,
    alternates: {
      canonical: `https://consultorio-urbanistico.vercel.app/municipio/${muni.slug}`,
    },
    openGraph: {
      title: `Perito Judicial Urbanístico en ${muni.name} · Bages`,
      description: muni.description,
      url: `https://consultorio-urbanistico.vercel.app/municipio/${muni.slug}`,
      type: "website",
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: `Perito Urbanístico ${muni.name} · Ana Epitie`,
      description: muni.description,
    },
  };
}

export default async function MunicipalityPage({ params }: MunicipalityPageProps) {
  const { slug } = await params;
  const muni = municipalities.find((m) => m.slug === slug);
  if (!muni) notFound();

  // Find related blog posts (first 3)
  const relatedPosts = blogPosts.slice(0, 3);

  // Municipality structured data
  const municipalitySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Consultorio Urbanístico - Ana Epitie · ${muni.name}`,
    description: muni.description,
    url: `https://consultorio-urbanistico.vercel.app/municipio/${muni.slug}`,
    telephone: "+34632831009",
    email: "info@peritourbanistic.cat",
    areaServed: {
      "@type": "City",
      name: muni.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `Comarca del ${muni.comarca}`,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: muni.comunidad,
          containedInPlace: {
            "@type": "Country",
            name: "España"
          }
        }
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Servicios Urbanísticos en ${muni.name}`,
      itemListElement: muni.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-[#030305] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(municipalitySchema) }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030305]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#D4A574]/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C9956B]" />
            </div>
            <span className="text-sm font-medium tracking-wide text-[#D4A574]">CONSULTORIO URBANÍSTICO</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">Inicio</Link>
            <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link>
            <a href="tel:+34632831009" className="text-sm text-slate-400 hover:text-white transition-colors">+34 632 831 009</a>
            <a href="/#como-funciona" className="bg-gradient-to-r from-[#D4A574] to-[#C9956B] text-[#030305] text-xs font-semibold px-5 py-2.5 rounded-full hover:scale-105 transition-transform">Consulta Exprés</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#cobertura" className="hover:text-white transition-colors">Cobertura</Link>
            <span>/</span>
            <span className="text-slate-400">{muni.name}</span>
          </nav>

          <span className="text-xs font-medium tracking-widest uppercase text-[#D4A574]/60 mb-4 block">Perito Urbanístico</span>

          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">Perito Judicial Urbanístico</span>
            <br />
            <span className="font-serif-display italic bg-gradient-to-r from-[#D4A574] via-[#F2D4B0] to-[#C9956B] bg-clip-text text-transparent">en {muni.name}</span>
          </h1>

          <p className="text-lg text-slate-400 font-light max-w-3xl leading-relaxed">{muni.description}</p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-[#D4A574]">{muni.name}</p>
            <p className="text-sm text-slate-500 mt-2">Comarca del {muni.comarca}</p>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold text-[#D4A574]">{muni.population}</p>
            <p className="text-sm text-slate-500 mt-2">Habitantes</p>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center">
            <p className="text-lg font-bold text-[#D4A574]">{muni.poumName}</p>
            <p className="text-sm text-slate-500 mt-2">{muni.poumDate}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Servicios en {muni.name}</span>
          </h2>
          <div className="space-y-3">
            {muni.services.map((service) => (
              <div key={service} className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 hover:border-[#D4A574]/25 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#D4A574] flex-shrink-0" />
                <span className="text-slate-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#D4A574]/10 to-[#D4A574]/5 border border-[#D4A574]/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            ¿Tiene una propiedad en {muni.name}?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Cada caso es distinto y requiere un análisis personalizado. Conozco el POUM de {muni.name} y la práctica administrativa del ayuntamiento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#como-funciona" className="bg-gradient-to-r from-[#D4A574] to-[#C9956B] text-[#030305] font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform inline-flex items-center gap-2">
              Consulta Exprés — 50€ deducibles
            </a>
            <a href="tel:+34632831009" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              +34 632 831 009
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-medium mb-6">Artículos relacionados</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-[#D4A574]/25 transition-all">
                  <span className="text-[9px] font-semibold tracking-widest uppercase text-[#D4A574]/70">{post.category}</span>
                  <h4 className="text-sm font-medium mt-2 mb-2 group-hover:text-[#D4A574] transition-colors leading-snug">{post.title}</h4>
                  <span className="text-xs text-slate-500">{post.readTime} lectura</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other municipalities */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-medium mb-6">Otros municipios del Bages</h3>
          <div className="flex flex-wrap gap-2">
            {municipalities.filter((m) => m.slug !== muni.slug).map((other) => (
              <Link
                key={other.slug}
                href={`/municipio/${other.slug}`}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm hover:border-[#D4A574]/30 hover:text-[#D4A574] transition-colors"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C9956B]" />
            </div>
            <span className="text-sm font-medium">Ana Epitie</span>
            <span className="text-xs text-slate-500">Perito Judicial Urbanístico · ASPEJURE N.º 02659</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <a href="tel:+34632831009" className="hover:text-white transition-colors">+34 632 831 009</a>
            <a href="https://ana-epitie-inmobiliaria-z.vercel.app" target="_blank" className="hover:text-[#D4A574] transition-colors">Inmobiliaria</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
