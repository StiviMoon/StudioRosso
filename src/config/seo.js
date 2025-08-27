// Configuración SEO para Studio Rosso Agency
export const SEO_CONFIG = {
  // Información básica del sitio
  site: {
    name: 'Studio Rosso Agency',
    url: 'https://www.studiorossoagency.com',
    description: 'Creamos marcas que se sienten, se ven y venden. Agencia de diseño, branding y desarrollo web en Colombia.',
    language: 'es',
    country: 'Colombia',
    locale: 'es_CO'
  },

  // Configuración de páginas
  pages: [
    {
      path: '/',
      title: 'Studio Rosso Agency - Agencia de Diseño y Desarrollo Web en Colombia',
      description: 'Creamos marcas que se sienten, se ven y venden. Agencia de diseño, branding y desarrollo web en Colombia. Johan Rodríguez y Valentina Reyes.',
      keywords: 'agencia diseño colombia, branding colombia, desarrollo web colombia, diseño web bogotá, agencia digital colombia, marketing digital colombia, SEO colombia',
      priority: '1.0',
      changefreq: 'weekly',
      lastmod: '2025-08-27'
    },
    {
      path: '/servicios',
      title: 'Servicios de Diseño y Desarrollo Web en Colombia',
      description: 'Servicios profesionales de branding, diseño web, desarrollo web, marketing digital y SEO en Colombia. Soluciones personalizadas para hacer crecer tu negocio.',
      keywords: 'servicios diseño web colombia, branding servicios, desarrollo web colombia, marketing digital servicios, SEO colombia, diseño UX UI colombia',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: '2025-08-27'
    },
    {
      path: '/nosotros',
      title: 'Nosotros - Studio Rosso Agency Colombia',
      description: 'Conoce a Johan Rodríguez y Valentina Reyes, fundadores de Studio Rosso Agency. Expertos en diseño, branding y desarrollo web en Colombia.',
      keywords: 'johan rodríguez colombia, valentina reyes colombia, fundadores studio rosso, equipo diseño colombia, expertos branding colombia',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: '2025-08-27'
    },
    {
      path: '/contacto',
      title: 'Contacto - Studio Rosso Agency Colombia',
      description: 'Contacta con Studio Rosso Agency en Colombia para tu proyecto de diseño o desarrollo web. Consulta gratuita y presupuesto personalizado.',
      keywords: 'contacto studio rosso colombia, consulta diseño colombia, presupuesto desarrollo web colombia, agencia diseño bogotá',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: '2025-08-27'
    }
  ],

  // Configuración de Open Graph
  openGraph: {
    type: 'website',
    siteName: 'Studio Rosso Agency',
    locale: 'es_CO',
    country: 'Colombia',
    defaultImage: '/img/Logos/rosso-min.png',
    defaultImageWidth: 1200,
    defaultImageHeight: 630
  },

  // Configuración de Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@studiorosso',
    creator: '@studiorosso'
  },

  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    maxImagePreview: 'large',
    maxSnippet: -1,
    maxVideoPreview: -1
  },

  // Configuración de canonical
  canonical: {
    enabled: true,
    trailingSlash: false
  },

  // Configuración de sitemap
  sitemap: {
    enabled: true,
    changefreq: 'weekly',
    priority: '0.8'
  }
};

// Función para generar meta tags dinámicos
export const generateMetaTags = (pageConfig) => {
  const { site, openGraph, twitter, robots } = SEO_CONFIG;

  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    canonical: `${site.url}${pageConfig.path}`,
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: `${site.url}${pageConfig.path}`,
      siteName: site.name,
      locale: site.locale,
      type: openGraph.type
    },
    twitter: {
      title: pageConfig.title,
      description: pageConfig.description,
      card: twitter.card,
      site: twitter.site,
      creator: twitter.creator
    },
    robots: robots
  };
};
