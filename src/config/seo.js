// Configuración SEO unificada para Studio Rosso Agency
export const SEO_CONFIG = {
  // Información básica del sitio
  site: {
    name: 'Studio Rosso Agency',
    url: 'https://www.studiorossoagency.com',
    description: 'Studio Rosso Agency - Creamos marcas que se sienten, se ven y venden. Agencia líder de diseño, branding y desarrollo web en Colombia.',
    defaultImage: '/img/Logos/rosso-min.png',
    language: 'es',
    locale: 'es_CO',
    twitter: '@studiorosso',
    phone: '+57-300-000-0000',
    address: {
      country: 'Colombia',
      city: 'Bogotá',
      coordinates: {
        latitude: 4.7110,
        longitude: -74.0721
      }
    }
  },

  // Configuración de páginas con keywords optimizadas para "Studio Rosso Agency"
  pages: {
    home: {
      path: '/',
      title: 'Studio Rosso Agency - Agencia de Diseño y Desarrollo Web en Colombia',
      description: 'Studio Rosso Agency es la agencia líder en diseño, branding y desarrollo web en Colombia. Creamos marcas memorables con Johan Rodríguez y Valentina Reyes.',
      keywords: 'studio rosso agency, studio rosso, agencia diseño colombia, studio rosso bogotá, branding colombia, desarrollo web colombia, diseño web bogotá',
      schema: 'Organization'
    },
    servicios: {
      path: '/servicios',
      title: 'Servicios - Studio Rosso Agency | Diseño, Branding y Desarrollo Web',
      description: 'Servicios profesionales de Studio Rosso Agency: Branding, diseño web, desarrollo, marketing digital y fotografía comercial en Colombia.',
      keywords: 'servicios studio rosso, studio rosso agency servicios, diseño web colombia, branding servicios, desarrollo web profesional',
      schema: 'Service'
    },
    nosotros: {
      path: '/nosotros',
      title: 'Nosotros - Studio Rosso Agency | Johan Rodríguez y Valentina Reyes',
      description: 'Conoce a Studio Rosso Agency y sus fundadores Johan Rodríguez y Valentina Reyes. Expertos en diseño y desarrollo web en Colombia.',
      keywords: 'studio rosso agency nosotros, johan rodríguez studio rosso, valentina reyes studio rosso, equipo studio rosso agency',
      schema: 'AboutPage'
    },
    contacto: {
      path: '/contacto',
      title: 'Contacto - Studio Rosso Agency | Consulta Gratuita',
      description: 'Contacta a Studio Rosso Agency para tu proyecto de diseño o desarrollo web. Consulta gratuita y presupuesto personalizado en Colombia.',
      keywords: 'contacto studio rosso agency, studio rosso contacto, agencia diseño bogotá contacto, consulta studio rosso',
      schema: 'ContactPage'
    }
  },

  // Servicios específicos con anchor links
  services: {
    branding: {
      anchor: '#branding',
      title: 'Branding y Diseño de Marca - Studio Rosso Agency',
      description: 'Diseño de identidad visual y estrategia de marca por Studio Rosso Agency en Colombia.',
      keywords: 'branding studio rosso, diseño marca studio rosso agency'
    },
    packaging: {
      anchor: '#packaging',
      title: 'Diseño de Packaging - Studio Rosso Agency',
      description: 'Diseño de empaques creativos por Studio Rosso Agency. Packaging que vende en Colombia.',
      keywords: 'packaging studio rosso, diseño empaques studio rosso agency'
    },
    ux: {
      anchor: '#ux',
      title: 'Diseño UX/UI - Studio Rosso Agency',
      description: 'Diseño de interfaces y experiencia de usuario por Studio Rosso Agency en Colombia.',
      keywords: 'ux ui studio rosso, diseño interfaces studio rosso agency'
    },
    social: {
      anchor: '#social',
      title: 'Social Media Marketing - Studio Rosso Agency',
      description: 'Gestión de redes sociales y marketing digital por Studio Rosso Agency en Colombia.',
      keywords: 'social media studio rosso, marketing digital studio rosso agency'
    },
    fotografia: {
      anchor: '#fotografia',
      title: 'Fotografía Comercial - Studio Rosso Agency',
      description: 'Fotografía comercial y de productos profesional por Studio Rosso Agency en Colombia.',
      keywords: 'fotografía studio rosso, fotografía comercial studio rosso agency'
    }
  }
};

// Función para obtener meta tags de una página
export const getPageSEO = (pageName) => {
  const page = SEO_CONFIG.pages[pageName];
  if (!page) return SEO_CONFIG.pages.home;

  // Asegurar que la URL sea única y no tenga duplicados
  const pageUrl = page.path === '/' ? SEO_CONFIG.site.url : `${SEO_CONFIG.site.url}${page.path}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    url: pageUrl,
    image: SEO_CONFIG.site.defaultImage,
    schema: page.schema
  };
};

// Función para generar Schema.org markup
export const generateSchema = (pageName) => {
  const page = SEO_CONFIG.pages[pageName];
  const site = SEO_CONFIG.site;

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": page?.schema || "WebPage",
    "name": page?.title || site.name,
    "description": page?.description || site.description,
    "url": `${site.url}${page?.path || '/'}`
  };

  // Schema específico para la página de inicio (Organization)
  if (pageName === 'home' || !pageName) {
    return {
      ...baseSchema,
      "@type": "Organization",
      "name": "Studio Rosso Agency",
      "url": site.url,
      "logo": `${site.url}${site.defaultImage}`,
      "description": site.description,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": site.address.country,
        "addressLocality": site.address.city
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": site.address.coordinates.latitude,
        "longitude": site.address.coordinates.longitude
      },
      "telephone": site.phone,
      "sameAs": [
        "https://www.instagram.com/studiorossoagency",
        "https://www.facebook.com/studiorossoagency",
        "https://www.linkedin.com/company/studiorossoagency"
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "Johan Rodríguez",
          "jobTitle": "Fundador y Director Creativo"
        },
        {
          "@type": "Person",
          "name": "Valentina Reyes",
          "jobTitle": "Fundadora y Directora de Estrategia"
        }
      ]
    };
  }

  // Schema para servicios
  if (pageName === 'servicios') {
    return {
      ...baseSchema,
      "@type": "Service",
      "provider": {
        "@type": "Organization",
        "name": "Studio Rosso Agency"
      },
      "areaServed": site.address.country,
      "serviceType": "Diseño y Desarrollo Web"
    };
  }

  return baseSchema;
};

// Función para generar breadcrumbs
export const generateBreadcrumbs = (pageName) => {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": SEO_CONFIG.site.url
    }
  ];

  if (pageName && pageName !== 'home') {
    const page = SEO_CONFIG.pages[pageName];
    if (page) {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": page.title.split(' - ')[0],
        "item": `${SEO_CONFIG.site.url}${page.path}`
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
};
