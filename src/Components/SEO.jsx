import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'Studio Rosso Agency'
}) => {
  const siteName = 'Studio Rosso Agency';
  const siteUrl = 'https://studiorossoagency.com';
  const defaultImage = `${siteUrl}/og-image.jpg`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="es" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:creator" content="@studiorosso" />
      <meta name="twitter:site" content="@studiorosso" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22c55e" />
      <meta name="msapplication-TileColor" content="#22c55e" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Studio Rosso Agency",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": "Agencia de diseño y desarrollo web en Colombia. Creamos marcas que se sienten, se ven y venden.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CO",
            "addressLocality": "Colombia"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+57-319-487-3667",
            "contactType": "customer service",
            "email": "studiorossoagency@gmail.com"
          },
          "sameAs": [
            "https://www.behance.net/gallery/213678865/Portfolio-Design"
          ],
          "foundingDate": "2024",
          "founder": [
            {
              "@type": "Person",
              "name": "Johan Rodríguez",
              "jobTitle": "Full Stack Developer"
            },
            {
              "@type": "Person",
              "name": "Valentina Reyes",
              "jobTitle": "Visual Communicator"
            }
          ],
          "serviceType": [
            "Branding",
            "Diseño Web",
            "Desarrollo Web",
            "Marketing Digital",
            "SEO"
          ]
        })}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  author: PropTypes.string
};

export default SEO; 