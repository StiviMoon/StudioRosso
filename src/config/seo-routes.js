// Configuración SEO específica para las rutas principales de Studio Rosso Agency
export const ROUTES_SEO_CONFIG = {
  // Configuración por ruta
  routes: {
    home: {
      path: '/',
      title: 'Studio Rosso Agency - Agencia de Diseño y Desarrollo Web en Colombia',
      description: 'Creamos marcas que se sienten, se ven y venden. Agencia de diseño, branding y desarrollo web en Colombia. Johan Rodríguez y Valentina Reyes.',
      keywords: 'agencia diseño colombia, branding colombia, desarrollo web colombia, diseño web bogotá, agencia digital colombia',
      priority: '1.0',
      changefreq: 'weekly',
      lastmod: '2025-08-27'
    },

    servicios: {
      path: '/servicios',
      title: 'Servicios de Diseño y Desarrollo Web en Colombia | Studio Rosso',
      description: 'Servicios profesionales de branding, diseño web, desarrollo web, marketing digital y SEO en Colombia. Soluciones personalizadas para hacer crecer tu negocio.',
      keywords: 'servicios diseño web colombia, branding servicios, desarrollo web colombia, marketing digital servicios, SEO colombia',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: '2025-08-27'
    },

    nosotros: {
      path: '/nosotros',
      title: 'Nosotros - Studio Rosso Agency Colombia | Equipo de Diseño',
      description: 'Conoce a Johan Rodríguez y Valentina Reyes, fundadores de Studio Rosso Agency. Expertos en diseño, branding y desarrollo web en Colombia.',
      keywords: 'johan rodríguez colombia, valentina reyes colombia, fundadores studio rosso, equipo diseño colombia, expertos branding colombia',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: '2025-08-27'
    },

    contacto: {
      path: '/contacto',
      title: 'Contacto - Studio Rosso Agency Colombia | Consulta Gratuita',
      description: 'Contacta con Studio Rosso Agency en Colombia para tu proyecto de diseño o desarrollo web. Consulta gratuita y presupuesto personalizado.',
      keywords: 'contacto studio rosso colombia, consulta diseño colombia, presupuesto desarrollo web colombia, agencia diseño bogotá',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: '2025-08-27'
    }
  },

  // Secciones de servicios con IDs específicos
  serviceSections: {
    branding: {
      id: 'branding',
      title: 'Branding y Diseño de Marca',
      description: 'Diseño de identidad visual y estrategia de marca en Colombia',
      keywords: 'branding colombia, diseño marca colombia, identidad visual colombia, logo diseño colombia',
      priority: '0.8'
    },

    packaging: {
      id: 'packaging',
      title: 'Diseño de Packaging y Empaques',
      description: 'Diseño de empaques creativos y estratégicos en Colombia',
      keywords: 'packaging diseño colombia, empaques productos colombia, diseño cajas colombia, embalaje colombia',
      priority: '0.8'
    },

    ux: {
      id: 'ux',
      title: 'Diseño UX/UI y Desarrollo Web',
      description: 'Diseño de interfaces de usuario y desarrollo web profesional en Colombia',
      keywords: 'UX UI diseño colombia, diseño interfaces colombia, desarrollo web colombia, diseño web colombia',
      priority: '0.8'
    },

    social: {
      id: 'social',
      title: 'Social Media y Marketing Digital',
      description: 'Gestión de redes sociales y marketing digital en Colombia',
      keywords: 'social media colombia, marketing digital colombia, redes sociales colombia, gestión social media colombia',
      priority: '0.8'
    },

    fotografia: {
      id: 'fotografia',
      title: 'Fotografía Comercial y de Productos',
      description: 'Fotografía comercial y de productos profesional en Colombia',
      keywords: 'fotografía comercial colombia, fotografía productos colombia, fotografía publicitaria colombia, fotógrafo colombia',
      priority: '0.8'
    }
  },

  // Estructura de datos Schema.org para cada ruta
  schemaMarkup: {
    home: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Studio Rosso Agency",
      "url": "https://www.studiorossoagency.com",
      "logo": "https://www.studiorossoagency.com/img/Logos/rosso-min.png",
      "description": "Creamos marcas que se sienten, se ven y venden. Agencia de diseño, branding y desarrollo web en Colombia.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Colombia",
        "addressLocality": "Bogotá"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "Spanish"
      },
      "sameAs": [
        "https://www.instagram.com/studiorossoagency",
        "https://www.facebook.com/studiorossoagency"
      ]
    },

    servicios: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Servicios de Diseño y Desarrollo Web",
      "description": "Servicios profesionales de branding, diseño web, desarrollo web, marketing digital y SEO en Colombia",
      "provider": {
        "@type": "Organization",
        "name": "Studio Rosso Agency"
      },
      "areaServed": "Colombia",
      "serviceType": "Diseño y Desarrollo"
    },

    nosotros: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Studio Rosso Agency",
      "description": "Agencia de diseño, branding y desarrollo web en Colombia fundada por Johan Rodríguez y Valentina Reyes",
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
    },

    contacto: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contacto Studio Rosso Agency",
      "description": "Página de contacto para consultas y presupuestos de diseño y desarrollo web en Colombia",
      "mainEntity": {
        "@type": "Organization",
        "name": "Studio Rosso Agency",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "Spanish"
        }
      }
    }
  }
};

// Función para generar meta tags por ruta
export const generateRouteMetaTags = (routeName) => {
  const route = ROUTES_SEO_CONFIG.routes[routeName];
  if (!route) return null;

  return {
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    canonical: `https://www.studiorossoagency.com${route.path}`,
    openGraph: {
      title: route.title,
      description: route.description,
      url: `https://www.studiorossoagency.com${route.path}`,
      siteName: 'Studio Rosso Agency',
      locale: 'es_CO',
      type: 'website'
    },
    twitter: {
      title: route.title,
      description: route.description,
      card: 'summary_large_image',
      site: '@studiorosso',
      creator: '@studiorosso'
    }
  };
};

// Función para generar Schema.org markup por ruta
export const generateRouteSchema = (routeName) => {
  return ROUTES_SEO_CONFIG.schemaMarkup[routeName] || null;
};
