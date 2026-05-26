/**
 * SchemaMarkup.tsx - Structured Data (JSON-LD) para Consultorio Urbanístico
 *
 * INSTALACIÓN:
 * 1. Copia este archivo a: src/components/SchemaMarkup.tsx
 * 2. Impórtalo en src/app/page.tsx o src/app/layout.tsx:
 *    import SchemaMarkup from '@/components/SchemaMarkup';
 * 3. Añade <SchemaMarkup /> dentro del <body> o en tu página principal.
 *
 * IMPORTANTE: Cuando tengas tu dominio propio (jueves), reemplaza
 * TODAS las URLs "https://consultorio-urbanistico.vercel.app"
 * por tu dominio real.
 */

'use client';

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // ─────────────────────────────────────────────────────
      // 1. ProfessionalService — Negocio principal
      // ─────────────────────────────────────────────────────
      {
        "@type": "ProfessionalService",
        "@id": "https://consultorio-urbanistico.vercel.app/#professionalService",
        "name": "Consultorio Urbanístico - Ana Epitie",
        "alternateName": "Ana Epitie Perito Judicial Urbanístico",
        "description": "Perito Judicial Urbanístico especializado en legalización de obras, asimilación a fuera de ordenación, informes periciales judiciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña. Diploma Numerario ASPEJURE N.º 02659.",
        "url": "https://consultorio-urbanistico.vercel.app",
        "logo": "https://consultorio-urbanistico.vercel.app/logo.svg",
        "image": "https://consultorio-urbanistico.vercel.app/logo.svg",
        "telephone": "+34632831009",
        "email": "contacto@anaepitie.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Manresa",
          "addressLocality": "Manresa",
          "addressRegion": "Barcelona",
          "postalCode": "08240",
          "addressCountry": "ES"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.7283,
          "longitude": 1.8241
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Manresa",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Bages"
            }
          },
          {
            "@type": "AdministrativeArea",
            "name": "Comarca del Bages"
          },
          {
            "@type": "State",
            "name": "Cataluña"
          }
        ],
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        "sameAs": [
          "https://www.instagram.com/anaepitieinmobiliaria",
          "https://www.linkedin.com/in/anaepitie",
          "https://ana-epitie-inmobiliaria-z.vercel.app",
          "https://www.smartvalora.com",
          "https://www.valorafiscal.com"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Peritación Urbanística",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Legalización de Obras",
                "description": "Estudio, tramitación y gestión de legalización de construcciones sin licencia. Incluye estudio previo de viabilidad, tramitación completa ante el ayuntamiento, gestión de licencias y alternativas si no procede la legalización."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Informe Pericial Judicial",
                "description": "Dictámenes periciales de valoración para procedimientos judiciales: herencias, división de cosa común, ejecuciones hipotecarias, deslinde de cuotas. Válidos judicialmente conforme a la LEC."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Disciplina Urbanística y Sanciones",
                "description": "Cuando la legalización no es posible, se tramitan los procedimientos necesarios para conservar la propiedad: conservación de la propiedad, trámites municipales, análisis de viabilidad y coordinación con técnicos colegiados."
              }
            }
          ]
        },
        "employee": {
          "@id": "https://consultorio-urbanistico.vercel.app/#person"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "1",
          "bestRating": "5"
        }
      },

      // ─────────────────────────────────────────────────────
      // 2. LegalService — Tipo adicional para rich results
      // ─────────────────────────────────────────────────────
      {
        "@type": "LegalService",
        "@id": "https://consultorio-urbanistico.vercel.app/#legalService",
        "name": "Consultorio Urbanístico - Ana Epitie",
        "description": "Servicio de peritación judicial urbanística y asesoramiento en legalización de obras en Manresa y la comarca del Bages, Cataluña.",
        "url": "https://consultorio-urbanistico.vercel.app",
        "telephone": "+34632831009",
        "email": "contacto@anaepitie.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manresa",
          "addressRegion": "Barcelona",
          "addressCountry": "ES"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Comarca del Bages, Cataluña"
        },
        "serviceType": [
          "Peritación Judicial Urbanística",
          "Legalización de Obras",
          "Informe Pericial",
          "Disciplina Urbanística"
        ]
      },

      // ─────────────────────────────────────────────────────
      // 3. Person — Ana Epitie
      // ─────────────────────────────────────────────────────
      {
        "@type": "Person",
        "@id": "https://consultorio-urbanistico.vercel.app/#person",
        "name": "Ana Epitie",
        "givenName": "Ana",
        "familyName": "Epitie",
        "jobTitle": ["Perito Judicial Urbanístico", "Agente de la Propiedad Inmobiliaria"],
        "description": "Perito Judicial Urbanístico homologada (ASPEJURE Diploma Numerario N.º 02659) con más de 200 informes periciales realizados. Especializada en legalización de obras, asimilación a fuera de ordenación, informes periciales judiciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña.",
        "image": "https://consultorio-urbanistico.vercel.app/logo.svg",
        "url": "https://consultorio-urbanistico.vercel.app",
        "telephone": "+34632831009",
        "email": "contacto@anaepitie.com",
        "worksFor": {
          "@id": "https://consultorio-urbanistico.vercel.app/#professionalService"
        },
        "sameAs": [
          "https://www.instagram.com/anaepitieinmobiliaria",
          "https://www.linkedin.com/in/anaepitie",
          "https://ana-epitie-inmobiliaria-z.vercel.app"
        ],
        "knowsAbout": [
          "Peritación judicial urbanística",
          "Legalización de obras",
          "Asimilación a fuera de ordenación",
          "Informes periciales",
          "Disciplina urbanística",
          "POUM - Plan de Ordenación Urbanística Municipal",
          "Urbanismo",
          "Suelo urbanizable",
          "Masías y fincas rústicas",
          "Herencias con conflicto urbanístico",
          "Valoración inmobiliaria"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "name": "Perito Judicial Urbanístico - Diploma Numerario N.º 02659",
            "recognizedBy": {
              "@type": "Organization",
              "name": "ASPEJURE - Asociación Pericial Española de Peritos Judiciales"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "name": "Agente de la Propiedad Inmobiliaria (API)",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Colegio Oficial de Agentes de la Propiedad Inmobiliaria"
            }
          }
        ]
      },

      // ─────────────────────────────────────────────────────
      // 4. WebSite — Con SearchAction
      // ─────────────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://consultorio-urbanistico.vercel.app/#website",
        "name": "Consultorio Urbanístico - Ana Epitie",
        "url": "https://consultorio-urbanistico.vercel.app",
        "description": "Perito Judicial Urbanístico en Manresa, Bages. Legalización de obras, informes periciales y disciplina urbanística.",
        "inLanguage": ["es", "ca"],
        "publisher": {
          "@id": "https://consultorio-urbanistico.vercel.app/#professionalService"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://consultorio-urbanistico.vercel.app/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },

      // ─────────────────────────────────────────────────────
      // 5. WebPage — Página principal
      // ─────────────────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": "https://consultorio-urbanistico.vercel.app/#webpage",
        "name": "Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages",
        "description": "Perito Judicial Urbanístico Ana Epitie (Diploma Numerario N.º 02659). Especializada en legalización de obras, asimilación a fuera de ordenación, informes periciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña.",
        "url": "https://consultorio-urbanistico.vercel.app/",
        "isPartOf": {
          "@id": "https://consultorio-urbanistico.vercel.app/#website"
        },
        "about": {
          "@id": "https://consultorio-urbanistico.vercel.app/#professionalService"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://consultorio-urbanistico.vercel.app/logo.svg"
        },
        "datePublished": "2025-01-01",
        "dateModified": "2026-05-26"
      },

      // ─────────────────────────────────────────────────────
      // 6. BreadcrumbList
      // ─────────────────────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://consultorio-urbanistico.vercel.app/"
          }
        ]
      },

      // ─────────────────────────────────────────────────────
      // 7. FAQPage — Rich snippets en Google
      // ─────────────────────────────────────────────────────
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué hace un Perito Judicial Urbanístico?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un Perito Judicial Urbanístico es un profesional homologado por los juzgados para emitir informes periciales y dictámenes técnicos en materia urbanística. Sus funciones incluyen la legalización de obras sin licencia, la emisión de informes periciales para procedimientos judiciales (herencias, ejecuciones hipotecarias, divisiones), el análisis de viabilidad urbanística y la tramitación de procedimientos de disciplina urbanística."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta una consulta con el Perito Urbanístico?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La Consulta Exprés tiene un coste de 50€, que son deducibles del precio total del servicio si decides contratarlo. Esta consulta incluye un análisis inicial de tu situación urbanística y una orientación sobre los pasos a seguir."
            }
          },
          {
            "@type": "Question",
            "name": "¿Se puede legalizar una obra sin licencia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende del caso. Se realiza un estudio previo de viabilidad analizando la normativa urbanística aplicable (POUM, Plan General, etc.), la situación del suelo y las características de la construcción. Si es viable, se tramita la legalización completa ante el ayuntamiento. Si no procede, se buscan alternativas como la asimilación a fuera de ordenación o los procedimientos de conservación de la propiedad."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué es la asimilación a fuera de ordenación?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La asimilación a fuera de ordenación (AFO) es un procedimiento que permite mantener una construcción que no se ajusta a la normativa urbanística vigente, pero que existía antes de la aprobación del plan. Permite conservar la propiedad con limitaciones: no se puede ampliar ni reconstruir, pero se mantiene en uso hasta que finalice su vida útil."
            }
          },
          {
            "@type": "Question",
            "name": "¿En qué zona presta servicio el Consultorio Urbanístico?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El Consultorio Urbanístico de Ana Epitie presta servicio en Manresa y toda la comarca del Bages, en Cataluña, España. Esto incluye municipios como Sant Fruitós de Bages, Sallent, Navàs, Balsareny, Artés, Calders, Moià, Castellbell i el Vilar, entre otros."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué diferencia hay entre un perito judicial y un arquitecto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un perito judicial urbanístico está específicamente homologado por los juzgados para emitir informes periciales con validez judicial, conforme a la Ley de Enjuiciamiento Civil (LEC). Mientras un arquitecto proyecta y dirige obras, el perito judicial analiza la situación urbanística existente, evalúa la legalidad de las construcciones y emite dictámenes que son prueba pericial ante los tribunales."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo tarda una legalización de obras?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El plazo medio estimado es de 6 meses, aunque varía según la complejidad del caso y la carga del ayuntamiento correspondiente. El proceso incluye el estudio previo, la recopilación de documentación, la presentación del expediente y la resolución municipal."
            }
          }
        ]
      },

      // ─────────────────────────────────────────────────────
      // 8. HowTo — Rich snippet de proceso paso a paso
      // ─────────────────────────────────────────────────────
      {
        "@type": "HowTo",
        "name": "Cómo legalizar una obra sin licencia en Manresa",
        "description": "Proceso paso a paso para legalizar una construcción sin licencia en la comarca del Bages, Cataluña.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Consulta Exprés",
            "text": "Solicita una Consulta Exprés (50€ deducibles) donde analizamos tu caso y determinamos la viabilidad de la legalización."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Estudio de Viabilidad",
            "text": "Realizamos un estudio completo de la normativa urbanística aplicable (POUM, Plan General), la calificación del suelo y las características de la construcción."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Tramitación Completa",
            "text": "Si es viable, gestionamos todo el expediente de legalización ante el ayuntamiento: documentación, planos, certificados y seguimiento del proceso."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Resolución y Seguimiento",
            "text": "Obtenemos la resolución municipal y realizamos el seguimiento hasta la completa legalización de la obra."
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
