
import Services from "../Components/Services/Services";
import SEO from '../Components/SEO.jsx';
import { FiHeart, FiUsers, FiTarget, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { navigateToTop } from '../utils/navigation.js';

const Nosotros = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white pt-16 sm:pt-20 pb-12 sm:pb-20 p-4 min-h-screen">
      <SEO 
        title="Sobre Nosotros - Studio Rosso Agency"
        description="Conoce a Johan Rodríguez y Valentina Reyes, fundadores de Studio Rosso Agency. Somos jóvenes apasionados por el diseño y la tecnología en Colombia."
        keywords="johan rodríguez colombia, valentina reyes colombia, fundadores studio rosso, agencia diseño colombia, historia studio rosso, equipo diseño colombia"
        url="/nosotros"
      />
      <div className="max-w-6xl mx-auto pb-8 sm:pb-12 pt-16 sm:pt-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-6">
            <FiHeart className="text-greengrove text-base" />
            <span className="text-sm font-medium text-greengrove">Nuestra Historia</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-greengrove mb-6 sm:mb-8 font-dream px-4">
            Sobre Nosotros
          </h2>
          <p className="text-center text-gray-700 leading-relaxed text-lg sm:text-xl md:text-2xl font-montserrat px-4 max-w-5xl mx-auto">
            Somos <strong>Johan y Valentina</strong>, dos jóvenes apasionados que creemos que el diseño 
            y la tecnología pueden cambiar el mundo. Studio Rosso nació de nuestra convicción de que 
            cada marca tiene una historia única que merece ser contada de manera extraordinaria.
          </p>
        </div>

        {/* Founders Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-greengrove/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-greengrove text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-greengrove font-dream">Johan Rodríguez</h3>
              <p className="text-lg text-gray-600 font-montserrat mb-4">Full Stack Developer</p>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                El cerebro técnico del equipo. Convierte ideas complejas en código limpio y funcional. 
                Su pasión por la tecnología se refleja en cada línea de código que escribe.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-greengrove/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="text-greengrove text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-greengrove font-dream">Valentina Reyes</h3>
              <p className="text-lg text-gray-600 font-montserrat mb-4">Visual Communicator</p>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                La artista visual que da vida a las ideas. Su creatividad y sensibilidad estética 
                transforman conceptos abstractos en experiencias visuales que conectan emocionalmente.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <div className="bg-gradient-to-br from-greengrove/5 to-greengrove/10 rounded-3xl p-6 sm:p-8 border border-greengrove/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-greengrove/20 rounded-full flex items-center justify-center">
                <FiTarget className="text-greengrove text-xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 font-dream">Nuestra Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed font-montserrat text-lg">
              Creemos en el poder transformador del diseño bien hecho. No solo queremos que tu marca 
              se vea bien, queremos que genere conexiones reales con tu audiencia y impulse el 
              crecimiento de tu negocio.
            </p>
          </div>

          <div className="bg-gradient-to-br from-greengrove/5 to-greengrove/10 rounded-3xl p-6 sm:p-8 border border-greengrove/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-greengrove/20 rounded-full flex items-center justify-center">
                <FiHeart className="text-greengrove text-xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 font-dream">Nuestra Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed font-montserrat text-lg">
              Ayudar a emprendedores y pequeñas empresas a construir marcas auténticas que 
              reflejen su verdadera esencia y conecten con su audiencia de manera significativa.
            </p>
          </div>
        </div>

        {/* Process Section - Más claro y personal */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-dream">
              Nuestro Proceso
            </h3>
            <p className="text-gray-600 font-montserrat text-lg">
              Simple, transparente y sin sorpresas. Así es como trabajamos juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-greengrove text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 font-dream">Conversación</h4>
              <p className="text-gray-600 font-montserrat text-sm">
                Nos tomamos un café (virtual o presencial) y nos cuentas todo sobre tu proyecto
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-greengrove text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 font-dream">Propuesta</h4>
              <p className="text-gray-600 font-montserrat text-sm">
                Te presentamos un plan claro, sin tecnicismos, con fechas y precios transparentes
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-greengrove text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 font-dream">Trabajo</h4>
              <p className="text-gray-600 font-montserrat text-sm">
                Nos ponemos manos a la obra. Te mantenemos informado en cada paso del proceso
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-greengrove text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 font-dream">Lanzamiento</h4>
              <p className="text-gray-600 font-montserrat text-sm">
                Tu proyecto cobra vida. Celebramos juntos y seguimos apoyándote en el crecimiento
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-greengrove to-greengrove/80 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-dream">
              ¿Te gusta cómo pensamos?
            </h3>
            <p className="text-lg sm:text-xl mb-6 font-montserrat opacity-90">
              Cuéntanos sobre tu proyecto y veamos cómo podemos ayudarte a hacerlo realidad
            </p>
            <button 
              onClick={() => navigateToTop(navigate, '/contacto')} 
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-greengrove rounded-full 
                       font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 
                       shadow-lg text-lg"
            >
              <span>Empezar Conversación</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      <Services/>
    </section>
  );
};

export default Nosotros;
