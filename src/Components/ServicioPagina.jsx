import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SEO from "./SEO.jsx";
import FormularioFlash from "./FormularioFlash.jsx";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

/**
 * Layout de página propia de un servicio. Recibe el objeto servicio del config.
 */
const ServicioPagina = ({ servicio }) => {
  const Icon = servicio.icon;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen pt-16 sm:pt-20 pb-16 sm:pb-24">
      <SEO
        pageName="servicio"
        customTitle={`${servicio.title} | Studio Rosso Agency`}
        customDescription={servicio.description}
        customUrl={`/servicios/${servicio.id}`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-14 sm:pb-20">
        <Link
          to="/servicios"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-greengrove font-montserrat text-sm mb-10 sm:mb-12 transition-colors"
        >
          <FiArrowLeft aria-hidden />
          Volver a Servicios
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-greengrove/10 rounded-2xl flex items-center justify-center text-greengrove">
                <Icon className="text-2xl" aria-hidden />
              </div>
              <span className="text-sm font-medium text-greengrove font-montserrat">
                Servicio {servicio.number}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-dream leading-tight mb-6">
              {servicio.title}
            </h1>
            {servicio.image && (
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-6">
                <img
                  src={servicio.image}
                  alt={servicio.title}
                  className="w-full h-48 sm:h-64 object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            )}
            <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
              {servicio.description}
            </p>
            {servicio.features && servicio.features.length > 0 && (
              <ul className="mt-6 space-y-2 font-montserrat text-gray-700">
                {servicio.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-greengrove mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-6 text-gray-600 font-montserrat text-sm">
              ¿Te interesa este servicio? Completa el formulario y te respondemos a la brevedad.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 font-dream mb-4">
              Solicitar información
            </h2>
            <FormularioFlash serviceName={servicio.title} />
          </div>
        </div>

        {/* Clientes y proyectos realizados */}
        {servicio.projects && servicio.projects.length > 0 && (
          <section className="mt-20 sm:mt-24 pt-14 sm:pt-20 border-t border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-dream mb-2">
              Clientes y proyectos realizados
            </h2>
            <p className="text-gray-600 font-montserrat mb-10 sm:mb-12 max-w-2xl">
              Algunos de los proyectos que hemos entregado con éxito para nuestros clientes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {servicio.projects.map((project, index) => (
                <article
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-greengrove/20 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-greengrove/10 to-greengrove/5">
                        <span className="text-4xl font-bold text-greengrove/40 font-dream">
                          {project.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 font-dream mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 font-montserrat text-sm leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-greengrove font-semibold text-sm hover:text-greengrove/80 transition-colors"
                      aria-label={`Ver sitio web de ${project.name}`}
                    >
                      Ver sitio
                      <FiExternalLink className="w-4 h-4 shrink-0" aria-hidden />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

ServicioPagina.propTypes = {
  servicio: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ServicioPagina;
