import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { getPageSEO, generateSchema, generateBreadcrumbs, SEO_CONFIG } from '../config/seo';

const SEO = ({ pageName = 'home', customTitle, customDescription, customKeywords }) => {
  // Obtener configuración SEO de la página
  const pageSEO = getPageSEO(pageName);
  const { site } = SEO_CONFIG;

  // Usar valores custom si se proporcionan, sino usar los de la configuración
  const title = customTitle || pageSEO.title;
  const description = customDescription || pageSEO.description;
  const keywords = customKeywords || pageSEO.keywords;
  const url = pageSEO.url;
  const image = `${site.url}${site.defaultImage}`;

  // Generar schemas
  const organizationSchema = generateSchema(pageName);
  const breadcrumbSchema = generateBreadcrumbs(pageName);

  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={site.name} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content={site.language} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={site.locale} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={site.twitter} />
      <meta name="twitter:creator" content={site.twitter} />

      {/* Structured Data - Solo incluir si no está en el HTML principal */}
      {pageName !== 'home' && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        </>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  pageName: PropTypes.oneOf(['home', 'servicios', 'nosotros', 'contacto']),
  customTitle: PropTypes.string,
  customDescription: PropTypes.string,
  customKeywords: PropTypes.string
};

export default SEO;
