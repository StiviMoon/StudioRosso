
import Services from '../Components/Services/Services.jsx';
import CarruselImg from '../Components/CarruselImg.jsx';
import Trabajos from '../Components/Section/Trabajos.jsx';
import { FaArrowDown, FaStar } from 'react-icons/fa';
import { FiHeart, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Servicios = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-4">
                <FiHeart className="text-greengrove text-base" />
                <span className="text-sm font-medium text-greengrove">Lo que hacemos</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-wide font-dream leading-tight px-4">
                No vendemos{" "}
                <span className="text-greengrove relative">
                  servicios
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-greengrove/30 rounded-full"></div>
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-wide font-dream leading-tight px-4">
                Vendemos{" "}
                <span className="text-greengrove relative">
                  resultados
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-greengrove/30 rounded-full"></div>
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-century leading-relaxed px-4">
                Cada proyecto que desarrollamos tiene un objetivo claro: hacer crecer tu negocio, 
                conectar con tu audiencia y generar un impacto real en el mercado.
              </p>
            </div>

            {/* Stats - Más honestos y realistas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 max-w-4xl mx-auto px-4">
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-greengrove font-dream">15+</div>
                <div className="text-sm sm:text-base text-gray-600 font-century">Proyectos Completados</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-greengrove font-dream">100%</div>
                <div className="text-sm sm:text-base text-gray-600 font-century">Clientes Satisfechos</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-greengrove font-dream">24h</div>
                <div className="text-sm sm:text-base text-gray-600 font-century">Tiempo de Respuesta</div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center pt-8 sm:pt-12">
              <div className="flex flex-col items-center space-y-2 text-gray-400 animate-bounce">
                <FaArrowDown className="text-lg sm:text-xl" />
                <span className="text-xs sm:text-sm font-century">Descubre cómo podemos ayudarte</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-6 h-6 sm:w-8 sm:h-8 bg-greengrove/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaStar className="text-greengrove text-xs sm:text-sm" />
        </div>
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-4 h-4 sm:w-6 sm:h-6 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaStar className="text-white text-xs" />
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="relative py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 font-dream">
              ¿Por qué elegir nuestros servicios?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-century leading-relaxed">
              Porque entendemos que no solo necesitas algo que se vea bonito. 
              Necesitas algo que funcione y genere resultados reales para tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-greengrove/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiUsers className="text-greengrove text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dream">Enfoque en el Cliente</h3>
              <p className="text-gray-600 font-century leading-relaxed">
                No trabajamos con plantillas. Cada proyecto se adapta a tus necesidades específicas 
                y objetivos de negocio.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-greengrove/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiTrendingUp className="text-greengrove text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dream">Resultados Medibles</h3>
              <p className="text-gray-600 font-century leading-relaxed">
                No solo creamos diseños bonitos. Implementamos estrategias que puedes medir 
                y que realmente impactan tu negocio.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-greengrove/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiHeart className="text-greengrove text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dream">Compromiso Real</h3>
              <p className="text-gray-600 font-century leading-relaxed">
                Tu éxito es nuestro éxito. Nos comprometemos contigo desde el primer día 
                hasta que veas los resultados que esperabas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative max-w-7xl mx-auto">
        <Services />
      </div>

      {/* Portfolio Section */}
      <div className="relative py-16 sm:py-20 md:py-24 max-w-7xl mx-auto">
        <CarruselImg />
      </div>

      {/* Work Section */}
      <div className="relative max-w-7xl mx-auto">
        <Trabajos />
      </div>

      {/* Call to Action - Más personal y directo */}
      <div className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-dream px-4">
              ¿Listo para ver resultados reales en tu negocio?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 font-century px-4">
              No solo diseñamos y desarrollamos. Creamos soluciones que transforman 
              tu marca y generan el crecimiento que buscas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button onClick={() => window.location.href = '/contacto'} className="px-8 py-4 bg-greengrove text-white rounded-full font-semibold 
                                 hover:bg-greengrove/90 transition-all duration-300 transform hover:scale-105 
                                 shadow-lg hover:shadow-xl text-base sm:text-lg">
                Iniciar proyecto
              </button>
              <button onClick={() => window.open("https://www.behance.net/gallery/213678865/Portfolio-Design", "_blank") } className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold 
                                 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
                Ver portafolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
