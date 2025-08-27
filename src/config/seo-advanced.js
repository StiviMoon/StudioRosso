// Configuración SEO Avanzada para Studio Rosso Agency
export const ADVANCED_SEO_CONFIG = {
  // Estrategia de palabras clave principal
  primaryKeywords: {
    main: 'agencia diseño colombia',
    services: [
      'branding colombia',
      'diseño web bogotá',
      'desarrollo web colombia',
      'marketing digital colombia',
      'diseño gráfico bogotá',
      'agencia digital colombia',
      'packaging diseño colombia',
      'fotografía comercial colombia',
      'social media colombia',
      'UX UI diseño colombia'
    ],
    longTail: [
      'agencia diseño web bogotá colombia',
      'diseño de marca empresas colombia',
      'desarrollo sitios web profesionales colombia',
      'estrategia marketing digital empresas colombia',
      'diseño empaques productos colombia',
      'fotografía productos ecommerce colombia',
      'gestión redes sociales empresas colombia',
      'diseño interfaces usuario colombia'
    ]
  },

  // Estructura de URLs optimizada
  urlStructure: {
    services: '/servicios',
    serviceDetail: '/servicios/[service-name]',
    portfolio: '/portfolio',
    caseStudies: '/casos-exito',
    blog: '/blog',
    about: '/nosotros',
    contact: '/contacto'
  },

  // Meta descriptions optimizadas por página
  metaDescriptions: {
    home: 'Creamos marcas que se sienten, se ven y venden. Agencia de diseño, branding y desarrollo web en Colombia. Johan Rodríguez y Valentina Reyes.',
    services: 'Servicios profesionales de branding, diseño web, desarrollo web, marketing digital y SEO en Colombia. Soluciones personalizadas para hacer crecer tu negocio.',
    branding: 'Diseño de marca y identidad visual profesional en Colombia. Creamos marcas únicas que conectan con tu audiencia y generan resultados.',
    packaging: 'Diseño de empaques creativos y estratégicos en Colombia. Packaging que vende y fortalece tu marca en el mercado.',
    webDesign: 'Diseño web profesional y desarrollo de sitios web en Colombia. Sitios modernos, responsivos y optimizados para conversiones.',
    socialMedia: 'Gestión de redes sociales y marketing digital en Colombia. Estrategias que aumentan tu alcance y engagement.',
    photography: 'Fotografía comercial y de productos profesional en Colombia. Imágenes que cuentan historias y venden tu marca.',
    about: 'Conoce a Johan Rodríguez y Valentina Reyes, fundadores de Studio Rosso Agency. Expertos en diseño, branding y desarrollo web en Colombia.',
    contact: 'Contacta con Studio Rosso Agency en Colombia para tu proyecto de diseño o desarrollo web. Consulta gratuita y presupuesto personalizado.'
  },

  // Títulos optimizados por página
  pageTitles: {
    home: 'Studio Rosso Agency - Agencia de Diseño y Desarrollo Web en Colombia',
    services: 'Servicios de Diseño y Desarrollo Web en Colombia | Studio Rosso',
    branding: 'Branding y Diseño de Marca en Colombia | Studio Rosso Agency',
    packaging: 'Diseño de Packaging y Empaques en Colombia | Studio Rosso',
    webDesign: 'Diseño Web y Desarrollo Web en Colombia | Studio Rosso',
    socialMedia: 'Social Media y Marketing Digital en Colombia | Studio Rosso',
    photography: 'Fotografía Comercial y de Productos en Colombia | Studio Rosso',
    about: 'Nosotros - Studio Rosso Agency Colombia | Equipo de Diseño',
    contact: 'Contacto - Studio Rosso Agency Colombia | Consulta Gratuita',
    portfolio: 'Portfolio y Casos de Éxito | Studio Rosso Agency Colombia'
  },

  // Estructura de datos Schema.org avanzada
  schemaMarkup: {
    organization: {
      type: 'Organization',
      name: 'Studio Rosso Agency',
      url: 'https://www.studiorossoagency.com',
      logo: 'https://www.studiorossoagency.com/img/Logos/rosso-min.png',
      description: 'Agencia de diseño, branding y desarrollo web en Colombia',
      address: {
        type: 'PostalAddress',
        addressCountry: 'Colombia',
        addressLocality: 'Bogotá',
        addressRegion: 'Bogotá D.C.'
      },
      contactPoint: {
        type: 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'Spanish',
        areaServed: 'Colombia'
      },
      sameAs: [
        'https://www.instagram.com/studiorossoagency',
        'https://www.facebook.com/studiorossoagency',
        'https://www.linkedin.com/company/studiorossoagency'
      ],
      hasOfferCatalog: {
        type: 'OfferCatalog',
        name: 'Servicios de Diseño y Desarrollo',
        itemListElement: [
          {
            type: 'Offer',
            itemOffered: {
              type: 'Service',
              name: 'Branding y Diseño de Marca',
              description: 'Diseño de identidad visual y estrategia de marca'
            }
          },
          {
            type: 'Offer',
            itemOffered: {
              type: 'Service',
              name: 'Diseño Web y Desarrollo',
              description: 'Sitios web modernos y responsivos'
            }
          },
          {
            type: 'Offer',
            itemOffered: {
              type: 'Service',
              name: 'Marketing Digital',
              description: 'Estrategias de marketing digital y SEO'
            }
          }
        ]
      }
    },

    // Schema para servicios específicos
    services: [
      {
        type: 'Service',
        name: 'Branding y Diseño de Marca',
        description: 'Diseño de identidad visual y estrategia de marca en Colombia',
        provider: {
          type: 'Organization',
          name: 'Studio Rosso Agency'
        },
        areaServed: 'Colombia',
        serviceType: 'Diseño Gráfico',
        category: 'Branding'
      },
      {
        type: 'Service',
        name: 'Diseño Web y Desarrollo',
        description: 'Diseño y desarrollo de sitios web profesionales en Colombia',
        provider: {
          type: 'Organization',
          name: 'Studio Rosso Agency'
        },
        areaServed: 'Colombia',
        serviceType: 'Desarrollo Web',
        category: 'Tecnología'
      }
    ]
  },

  // Estrategia de contenido y blog
  contentStrategy: {
    topics: [
      'Tendencias de diseño 2025',
      'Cómo crear una marca memorable',
      'Diseño web para conversiones',
      'Marketing digital para pequeñas empresas',
      'Packaging que vende',
      'Fotografía de productos para ecommerce',
      'Social media para negocios',
      'UX/UI para aplicaciones móviles'
    ],
    contentTypes: [
      'Artículos informativos',
      'Casos de estudio',
      'Tutoriales de diseño',
      'Análisis de tendencias',
      'Guías prácticas',
      'Entrevistas con expertos'
    ],
    publishingFrequency: '2-3 artículos por mes'
  },

  // Estrategia de backlinks y autoridad
  linkBuilding: {
    targetPlatforms: [
      'Directorio de agencias de diseño',
      'Blogs de diseño y marketing',
      'Foros de emprendedores',
      'Plataformas de freelancers',
      'Redes sociales profesionales',
      'Publicaciones de la industria'
    ],
    contentOutreach: [
      'Guest posting en blogs relevantes',
      'Colaboraciones con influencers',
      'Participación en podcasts',
      'Webinars y eventos online',
      'Publicaciones en LinkedIn'
    ]
  },

  // Optimización técnica
  technicalSEO: {
    pageSpeed: {
      target: '< 2 segundos',
      mobileFirst: true,
      coreWebVitals: {
        LCP: '< 2.5s',
        FID: '< 100ms',
        CLS: '< 0.1'
      }
    },
    mobileOptimization: {
      responsive: true,
      touchFriendly: true,
      fastLoading: true
    },
    localSEO: {
      googleMyBusiness: true,
      localCitations: true,
      reviewManagement: true
    }
  }
};

// Función para generar meta tags dinámicos
export const generateAdvancedMetaTags = (pageType, serviceName = null) => {
  const config = ADVANCED_SEO_CONFIG;

  let title = config.pageTitles[pageType] || config.pageTitles.home;
  let description = config.metaDescriptions[pageType] || config.metaDescriptions.home;

  if (serviceName && config.pageTitles[serviceName]) {
    title = config.pageTitles[serviceName];
    description = config.metaDescriptions[serviceName];
  }

  return {
    title,
    description,
    keywords: config.primaryKeywords.services.join(', '),
    canonical: `https://www.studiorossoagency.com${config.urlStructure[pageType] || ''}`,
    openGraph: {
      title,
      description,
      url: `https://www.studiorossoagency.com${config.urlStructure[pageType] || ''}`,
      siteName: 'Studio Rosso Agency',
      locale: 'es_CO',
      type: 'website'
    }
  };
};
