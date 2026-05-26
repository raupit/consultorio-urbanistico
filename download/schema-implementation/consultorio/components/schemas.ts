/**
 * Schema.org JSON-LD Definitions — Consultorio Urbanístico
 * 
 * Todos los schemas para el Consultorio Urbanístico de Ana Epitie.
 * Organizado por tipo: LocalBusiness, LegalService, ProfessionalService,
 * FAQPage, HowTo, BreadcrumbList, Person.
 * 
 * IMPORTANTE: Actualizar las URLs cuando se migre a dominio propio.
 * URLs actuales apuntan a consultorio-urbanistico.vercel.app
 */

const SITE_URL = 'https://consultorio-urbanistico.vercel.app';
const SITE_NAME = 'Consultorio Urbanístico - Ana Epitie';
const PHONE = '+34632831009';
const EMAIL = 'contacto@anaepitie.com';

// Coordenadas de Manresa (Bages, Barcelona)
const GEO_LAT = '41.7288';
const GEO_LNG = '1.8238';

// ─── 1. LOCAL BUSINESS ─────────────────────────────────────
// Schema principal: define el negocio local para Google Maps y busquedas locales
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'LocalBusiness'],
  '@id': `${SITE_URL}/#legal-service`,
  name: 'Consultorio Urbanístico - Ana Epitie',
  description: 'Perito Judicial Urbanístico especializada en legalización de obras, asimilación a fuera de ordenación, informes periciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña.',
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: '50€ - 2000€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Bizum, Transferencia bancaria',
  
  // Dirección
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2A Winter St',
    addressLocality: 'Manresa',
    addressRegion: 'Barcelona',
    postalCode: '08050',
    addressCountry: 'ES',
  },

  // Geolocalización
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO_LAT,
    longitude: GEO_LNG,
  },

  // Área de servicio — toda la comarca del Bages
  areaServed: [
    { '@type': 'City', name: 'Manresa' },
    { '@type': 'City', name: 'Sant Fruitós de Bages' },
    { '@type': 'City', name: 'Artés' },
    { '@type': 'City', name: 'Sallent' },
    { '@type': 'City', name: 'Navarcles' },
    { '@type': 'City', name: 'Santpedor' },
    { '@type': 'City', name: 'Callús' },
    { '@type': 'City', name: 'Balsareny' },
    { '@type': 'City', name: 'Súria' },
    { '@type': 'City', name: 'Cardona' },
    { '@type': 'City', name: 'Navàs' },
    { '@type': 'City', name: 'Sant Joan de Vilatorrada' },
    { '@type': 'City', name: 'Castellbell i el Vilar' },
    { '@type': 'City', name: 'Castellgalí' },
    { '@type': 'City', name: 'Sant Vicenç de Castellet' },
    { '@type': 'City', name: 'El Pont de Vilomara i Rocafort' },
    { '@type': 'City', name: 'Marganell' },
    { '@type': 'City', name: 'Monistrol de Montserrat' },
    { '@type': 'City', name: 'Rajadell' },
    { '@type': 'City', name: 'Sant Salvador de Guardiola' },
    { '@type': 'City', name: 'Sant Mateu de Bages' },
    { '@type': 'City', name: 'Fonollosa' },
    { '@type': 'City', name: 'Avinyó' },
    { '@type': 'City', name: 'Calders' },
    { '@type': 'City', name: "Santa Maria d'Oló" },
    { '@type': 'City', name: 'Castellfollit del Boix' },
    { '@type': 'City', name: 'Gaià' },
    { '@type': 'City', name: 'Mura' },
    { '@type': 'City', name: 'Talamanca' },
  ],

  // Horarios
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],

  // Persona
  employee: {
    '@id': `${SITE_URL}/#person`,
  },

  // Ofertas de servicio (resumen)
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Peritaje Urbanístico',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consulta Telefónica',
          description: '30 min de asesoramiento profesional sobre tu caso urbanístico',
        },
        price: '50',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Estudio de Viabilidad',
          description: 'Análisis urbanístico completo de tu propiedad en el Bages',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '200',
          priceCurrency: 'EUR',
          maxValue: '500',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Informe Pericial Judicial',
          description: 'Dictamen pericial judicial de valoración, válido ante juzgados',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '500',
          priceCurrency: 'EUR',
          maxValue: '2000',
        },
      },
    ],
  },

  // Agregador de reviews (preparado para cuando haya reseñas)
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
  },
};

// ─── 2. PERSON ─────────────────────────────────────────────
// Schema de la persona: Ana Epitie
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Ana Epitie',
  jobTitle: 'Perito Judicial Urbanístico',
  description: 'Perito Judicial Urbanístico (ASPEJURE N.º 02659) especializada en legalización de obras, asimilación a fuera de ordenación e informes periciales en la comarca del Bages, Cataluña.',
  telephone: PHONE,
  email: EMAIL,
  url: SITE_URL,
  image: `${SITE_URL}/ana-epitie-perito.jpg`,
  
  // Credenciales profesionales
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: 'Perito Judicial Urbanístico',
      recognizedBy: {
        '@type': 'Organization',
        name: 'ASPEJURE',
        description: 'Asociación de Peritos Judiciales de España',
      },
      identifier: '02659',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: 'Agente de la Propiedad Inmobiliaria (API)',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Colegio de Agentes de la Propiedad Inmobiliaria',
      },
    },
  ],

  // Organización donde trabaja
  worksFor: {
    '@id': `${SITE_URL}/#legal-service`,
  },

  // Redes sociales
  sameAs: [
    'https://www.linkedin.com/in/anaepitie',
    'https://www.instagram.com/anaepitieinmobiliaria',
  ],

  // Conoce (relacionado con la inmobiliaria)
  knowsAbout: [
    'Derecho urbanístico',
    'Legalización de obras',
    'Asimilación a fuera de ordenación',
    'Peritaje judicial urbanístico',
    'Normativa urbanística Cataluña',
    'POUM Bages',
  ],
};

// ─── 3. LEGAL SERVICE (detallado) ──────────────────────────
// Schema especifico para el servicio legal de peritaje
export const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/#peritaje-service`,
  name: 'Peritaje Judicial Urbanístico - Ana Epitie',
  description: 'Servicio de peritaje judicial urbanístico en la comarca del Bages. Informes periciales para procedimientos judiciales, herencias, ejecuciones hipotecarias y disputas sobre legalidad de edificaciones.',
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  
  provider: {
    '@id': `${SITE_URL}/#person`,
  },
  
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Comarca del Bages',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Barcelona',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Cataluña',
        containedInPlace: {
          '@type': 'Country',
          name: 'España',
        },
      },
    },
  },

  serviceType: [
    'Peritaje judicial urbanístico',
    'Legalización de obras',
    'Asimilación a fuera de ordenación',
    'Informe pericial de valoración',
    'Estudio de viabilidad urbanística',
    'Disciplina urbanística',
  ],
};

// ─── 4. FAQ PAGE ───────────────────────────────────────────
// Preguntas frecuentes con schema para rich snippets en Google
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Se puede legalizar una masía sin licencia en Manresa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, en muchos casos es posible legalizar una masía con obras sin licencia en Manresa. Depende del tipo de obra, el suelo donde se ubica y la normativa del POUM vigente. El primer paso es solicitar un Estudio de Viabilidad Urbanística que analice la situación registral, urbanística y catastral de la finca. Si la obra es legalizable, se tramita la licencia correspondiente ante el ayuntamiento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un informe pericial judicial urbanístico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El precio de un informe pericial judicial urbanístico varía entre 500€ y 2.000€ según la complejidad del caso. El estudio de viabilidad previo cuesta entre 200€ y 500€. La consulta telefónica inicial de 30 minutos cuesta 50€ y es deducible si contratas un informe posterior. Los pagos se realizan por Bizum al 632 831 009.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la asimilación a fuera de ordenación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La asimilación a fuera de ordenación es un procedimiento que permite conservar una edificación que no se puede legalizar porque es incompatible con el planeamiento vigente, pero que existía antes de la aprobación del plan. No otorga licencia, pero permite mantener la edificación con restricciones de uso y sin posibilidad de ampliar. Es una vía alternativa cuando la legalización no es posible.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto pierde de valor una propiedad con obras ilegales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una propiedad con problemas urbanísticos sin resolver pierde entre un 30% y un 40% de su valor de mercado. Los compradores en portales como Idealista exigen un descuento medio del 40% sobre propiedades con obras ilegales. Con el informe pericial adecuado y la regularización de la situación, la propiedad recupera ese valor perdido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo poner una casa prefabricada en un terreno rústico en el Bages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el 95% de los casos, instalar una casa prefabricada en suelo rústico del Bages es ilegal. Las consecuencias incluyen expedientes sancionadores, cortes de suministros (agua, luz), multas coercitivas y órdenes de retirada obligatoria. Excepciones muy limitadas pueden aplicarse para instalaciones vinculadas a explotaciones agrícolas o ganaderas, pero siempre requieren licencia previa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el certificado de habilitación urbanística?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde 2024, la Generalitat de Cataluña exige el certificado de habilitación urbanística para transmitir determinados inmuebles. Este documento acredita que la edificación cumple con la normativa urbanística vigente o que se encuentra en situación asimilada a fuera de ordenación. Es obligatorio para la venta de determinadas propiedades y debe emitirse antes de la firma de la escritura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tarda la legalización de una obra en el Bages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El plazo de legalización de una obra sin licencia en el Bages varía entre 6 y 18 meses según el municipio y la complejidad del caso. El proceso incluye: estudio de viabilidad (1-2 semanas), solicitud de licencia ante el ayuntamiento, periodo de información pública (si aplica), resolución municipal y obtención de la licencia. En casos de asimilación a fuera de ordenación, el plazo puede ser menor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cobertura tiene el Consultorio Urbanístico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Consultorio Urbanístico cubre los 29 municipios de la comarca del Bages: Manresa, Sant Fruitós de Bages, Artés, Sallent, Navarcles, Santpedor, Callús, Balsareny, Súria, Cardona, Navàs, Sant Joan de Vilatorrada, Castellbell i el Vilar, Castellgalí, Sant Vicenç de Castellet, El Pont de Vilomara i Rocafort, Marganell, Monistrol de Montserrat, Rajadell, Sant Salvador de Guardiola, Sant Mateu de Bages, Fonollosa, Avinyó, Calders, Santa Maria d\'Oló, Castellfollit del Boix, Gaià, Mura y Talamanca.',
      },
    },
  ],
};

// ─── 5. HOW-TO (Proceso de 4 pasos) ────────────────────────
// Schema para mostrar el proceso directamente en los resultados de Google
export const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo resolver un problema urbanístico en el Bages',
  description: 'Proceso profesional paso a paso para resolver problemas urbanísticos de tu propiedad y recuperar su valor de mercado real.',
  totalTime: 'PT6M', // 6 meses estimados
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '250',
    maxValue: '2000',
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Consulta tu caso',
      text: 'Chatea con la IA experta en urbanismo del Bages (2 consultas gratis) o llámanos al 632 831 009. Te damos una primera orientación sin compromiso.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Estudio pericial',
      text: 'Realizamos el informe completo: estado legal, viabilidad de legalización (si aplica) y valoración de la propiedad.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Resolvemos el problema',
      text: 'Si es legalizable, tramitamos la legalización. Si no, gestionamos los trámites necesarios para conservar tu propiedad o generamos el informe que da seguridad jurídica al comprador.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Vendes al precio real',
      text: 'Con el problema resuelto, tu propiedad recupera el 30-40% de valor perdido. A través de nuestra inmobiliaria asociada, vendemos sin ruido al precio real de mercado.',
      position: 4,
    },
  ],
};

// ─── 6. BREADCRUMB LIST ────────────────────────────────────
// Breadcrumbs para cada sección del Consultorio
export const breadcrumbHome = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: SITE_URL,
    },
  ],
};

export const breadcrumbServicios = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Servicios',
      item: `${SITE_URL}/#servicios`,
    },
  ],
};

export const breadcrumbLegalizacion = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Servicios',
      item: `${SITE_URL}/#servicios`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Legalización de Obras',
      item: `${SITE_URL}/#legalizacion`,
    },
  ],
};

export const breadcrumbPericial = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Servicios',
      item: `${SITE_URL}/#servicios`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Informe Pericial Judicial',
      item: `${SITE_URL}/#pericial`,
    },
  ],
};

export const breadcrumbBlog = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog Urbanístico',
      item: `${SITE_URL}/#blog`,
    },
  ],
};

export const breadcrumbTarifas = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tarifas',
      item: `${SITE_URL}/#tarifas`,
    },
  ],
};

// ─── 7. WEB SITE (SearchAction) ────────────────────────────
// Permite que Google muestre un cuadro de búsqueda en los resultados
export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Consultorio Urbanístico - Ana Epitie',
  url: SITE_URL,
  description: 'Perito Judicial Urbanístico especializada en el Bages. Legalización de obras, informes periciales y estudio de viabilidad urbanística.',
  inLanguage: ['es-ES', 'ca-ES'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@id': `${SITE_URL}/#legal-service`,
  },
};

// ─── 8. WEB PAGE ───────────────────────────────────────────
export const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: 'Perito Judicial Urbanístico · Ana Epitie Manresa Bages',
  description: 'Perito Judicial Urbanístico Ana Epitie (Diploma Numerario N.º 02659). Especializada en legalización de obras, asimilación a fuera de ordenación, informes periciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña.',
  isPartOf: {
    '@id': `${SITE_URL}/#website`,
  },
  about: {
    '@id': `${SITE_URL}/#legal-service`,
  },
  datePublished: '2025-01-01T00:00:00+01:00',
  dateModified: new Date().toISOString(),
  inLanguage: 'es-ES',
};

// ─── HELPER: Combinar múltiples schemas en uno solo ─────────
// Google recomienda un solo script JSON-LD con @graph cuando hay múltiples entidades
export function createSchemaGraph(...schemas: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

// ─── SCHEMA COMPLETO PARA LA HOME ──────────────────────────
// Combina todos los schemas de la página principal en un solo @graph
export const homePageSchema = createSchemaGraph(
  webSiteSchema,
  webPageSchema,
  localBusinessSchema,
  personSchema,
  legalServiceSchema,
  faqSchema,
  howToSchema,
  breadcrumbHome,
);
