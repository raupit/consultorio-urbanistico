'use client'

export default function SchemaMarkup() {
  const baseUrl = "https://consultorio-urbanistico.vercel.app";

  const schemaGraph = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${baseUrl}/#professionalService`,
      name: "Consultorio Urbanístico - Ana Epitie",
      description: "Perito Judicial Urbanístico especializada en legalización de obras, asimilación a fuera de ordenación, informes periciales y estudio de viabilidad urbanística en la comarca del Bages, Cataluña.",
      url: baseUrl,
      telephone: "+34632831009",
      email: "contacto@anaepitie.com",
      image: `${baseUrl}/logo.svg`,
      logo: `${baseUrl}/logo.svg`,
      priceRange: "50€ - 2000€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Manresa",
        addressLocality: "Manresa",
        addressRegion: "Cataluña",
        postalCode: "08240",
        addressCountry: "ES"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.7283,
        longitude: 1.8241
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Comarca del Bages",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Cataluña",
            containedInPlace: {
              "@type": "Country",
              name: "España"
            }
          }
        }
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios Urbanísticos",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Legalización de Obras",
              description: "Estudio y tramitación para la legalización de obras sin licencia en el Bages."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Informe Pericial Judicial",
              description: "Dictamen pericial judicial de valoración para procedimientos judiciales."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Disciplina Urbanística y Sanciones",
              description: "Gestión de procedimientos de disciplina urbanística y defensa ante sanciones."
            }
          }
        ]
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "47"
      },
      sameAs: [
        "https://www.linkedin.com/in/ana-epitie",
        "https://www.instagram.com/anaepitie_perito"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": `${baseUrl}/#legalService`,
      name: "Consultorio Urbanístico - Ana Epitie",
      description: "Servicios de peritación judicial urbanística en Manresa y la comarca del Bages.",
      url: baseUrl,
      telephone: "+34632831009",
      email: "contacto@anaepitie.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manresa",
        addressRegion: "Cataluña",
        postalCode: "08240",
        addressCountry: "ES"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Ana Epitie",
      jobTitle: ["Perito Judicial Urbanístico", "Agente de la Propiedad Inmobiliaria"],
      url: baseUrl,
      image: `${baseUrl}/foto-ana-epitie.png`,
      telephone: "+34632831009",
      email: "contacto@anaepitie.com",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Diploma Numerario",
          recognizedBy: {
            "@type": "Organization",
            name: "ASPEJURE",
            alternateName: "Asociación Española de Peritos Judiciales"
          },
          identifier: "N.º 02659"
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Agente de la Propiedad Inmobiliaria",
          recognizedBy: {
            "@type": "Organization",
            name: "API"
          }
        }
      ],
      knowsAbout: [
        "Urbanismo",
        "Legalización de obras",
        "Asimilación a fuera de ordenación",
        "Informes periciales judiciales",
        "Disciplina urbanística",
        "Estudio de viabilidad urbanística",
        "POUM",
        "Planeamiento urbanístico",
        "Valoración inmobiliaria",
        "Suelo rústico",
        "Suelo urbanizable"
      ],
      worksFor: {
        "@id": `${baseUrl}/#professionalService`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      name: "Consultorio Urbanístico - Ana Epitie",
      url: baseUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/blog?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      publisher: {
        "@id": `${baseUrl}/#professionalService`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${baseUrl}/#webpage`,
      name: "Perito Judicial Urbanístico · Ana Epitie · Manresa · Bages",
      description: "Perito Judicial Urbanístico Ana Epitie (ASPEJURE N.º 02659). Legalización de obras, informes periciales y disciplina urbanística en el Bages.",
      url: baseUrl,
      datePublished: "2024-01-01",
      dateModified: "2025-01-15",
      isPartOf: {
        "@id": `${baseUrl}/#website`
      },
      about: {
        "@id": `${baseUrl}/#professionalService`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: baseUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servicios",
          item: `${baseUrl}/#servicios`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cómo funciona",
          item: `${baseUrl}/#como-funciona`
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Tarifas",
          item: `${baseUrl}/#tarifas`
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Blog",
          item: `${baseUrl}/#blog`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué hace un Perito Judicial Urbanístico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un Perito Judicial Urbanístico es el profesional habilitado para emitir dictámenes periciales sobre cuestiones urbanísticas que son válidos ante los juzgados. Ana Epitie, con el Diploma Numerario ASPEJURE N.º 02659, elabora informes periciales sobre legalización de obras, asimilación a fuera de ordenación, disciplina urbanística y viabilidad de terrenos en la comarca del Bages."
          }
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta una consulta con el Perito Urbanístico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La Consulta Exprés tiene un coste de 50€, que son deducibles del servicio completo si decides continuar. Esto permite recibir una orientación profesional sobre tu caso sin un desembolso importante inicial."
          }
        },
        {
          "@type": "Question",
          name: "¿Se puede legalizar una obra sin licencia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de cada caso. La viabilidad de legalización depende del planeamiento urbanístico del municipio, el tipo de suelo y la naturaleza de la obra. Es fundamental realizar un estudio pericial individualizado para determinar si la legalización es posible. Consulta con un perito urbanístico para analizar tu situación concreta."
          }
        },
        {
          "@type": "Question",
          name: "¿Qué es la asimilación a fuera de ordenación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La asimilación a fuera de ordenación es una figura urbanística que permite conservar construcciones que no se ajustan al planeamiento vigente, pero que existían antes de la aprobación del nuevo plan. Permite mantener la edificación sin necesidad de legalizarla, aunque con limitaciones. Es un procedimiento complejo que requiere estudio profesional."
          }
        },
        {
          "@type": "Question",
          name: "¿En qué zona presta servicio el Consultorio Urbanístico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El Consultorio Urbanístico presta servicio en toda la comarca del Bages, Cataluña, incluyendo Manresa, Cardona, Sallent, Artés, Navarcles, Sant Fruitós de Bages, Santpedor, Callús, Suria, y el resto de municipios de la comarca."
          }
        },
        {
          "@type": "Question",
          name: "¿Qué diferencia hay entre un perito judicial y un arquitecto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un perito judicial urbanístico está específicamente habilitado para emitir dictámenes periciales con validez judicial. Mientras un arquitecto proyecta y dirige obras, el perito judicial analiza la situación urbanística, evalúa la legalidad de las construcciones y emite informes que son admitidos como prueba pericial en procedimientos judiciales. Ana Epitie es perito judicial numerario (ASPEJURE N.º 02659)."
          }
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo tarda una legalización de obras?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El plazo medio de una legalización de obras es de aproximadamente 6 meses, aunque varía según el municipio y la complejidad del caso. Algunos expedientes pueden resolverse en 3-4 meses, mientras que otros pueden extenderse más. Es fundamental contar con un perito que conozca la normativa local para agilizar el proceso."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${baseUrl}/#howto`,
      name: "Cómo legalizar una obra sin licencia en Manresa",
      description: "Pasos para iniciar el proceso de legalización de una obra sin licencia en Manresa y la comarca del Bages.",
      totalTime: "P6M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Consulta tu caso",
          text: "Contacta con el Consultorio Urbanístico para una primera orientación sobre tu situación urbanística. La consulta exprés de 50€ es deducible del servicio completo."
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Estudio pericial",
          text: "Se realiza un informe completo del estado legal de la propiedad, la viabilidad de legalización y la valoración urbanística."
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Resolvemos el problema",
          text: "Si la obra es legalizable, se tramita la legalización. Si no lo es, se gestionan los procedimientos necesarios para conservar la propiedad."
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Venta al precio real",
          text: "Con el problema urbanístico resuelto, la propiedad recupera el 30-40% de valor perdido y puede venderse al precio real de mercado."
        }
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph),
      }}
    />
  );
}
