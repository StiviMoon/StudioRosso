import Formulario from '../Components/Formulario.jsx';
import SEO from '../Components/SEO.jsx';
import banner from '/img/banner.jpg';
import { FiMail, FiPhone, FiMapPin, FiHeart, FiUsers } from 'react-icons/fi';

const Contacto = () => {
  return (
    <div className="min-h-screen relative">
      <SEO 
        title="Contacto - Studio Rosso Agency"
        description="Contacta con Studio Rosso Agency en Colombia. Teléfono: +57 319 487 3667. Email: studiorossoagency@gmail.com. Consulta gratuita para tu proyecto."
        keywords="contacto studio rosso, teléfono agencia diseño colombia, email studio rosso, consulta diseño web colombia, presupuesto diseño colombia"
        url="/contacto"
      />
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 pt-16 sm:pt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl">
            
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6 sm:space-y-8 p-4 sm:p-6 md:p-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                  <FiHeart className="text-white text-sm" />
                  <span className="text-xs font-medium text-white font-montserrat">Studio Rosso</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-dream">
                  Nos inspiran 
                  <span className="block text-white">las historias</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full lg:w-[90%] text-white leading-relaxed font-montserrat">
                  Cuéntanos todo sobre la tuya y juntos crearemos algo extraordinario
                </p>
              </div>

              {/* Personal touch */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <FiUsers className="text-white text-lg" />
                  <h4 className="text-lg font-semibold text-white font-dream">Somos personas reales</h4>
                </div>
                <p className="text-sm text-white/90 font-montserrat leading-relaxed">
                  No somos una gran corporación. Somos Johan y Valentina, dos jóvenes apasionados 
                  que creemos en el poder de las marcas bien hechas. Tu proyecto será nuestro proyecto.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4 sm:pt-6">
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-montserrat">Email</p>
                    <p className="font-semibold text-xs sm:text-sm font-montserrat">studiorossoagency@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-montserrat">Teléfono</p>
                    <p className="font-semibold text-xs sm:text-sm font-montserrat">+57 3194873667</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-montserrat">Ubicación</p>
                    <p className="font-semibold text-xs sm:text-sm font-montserrat">Colombia</p>
                  </div>
                </div>
              </div>

              {/* Trust indicators - Más honestos y cercanos */}
              <div className="pt-4 sm:pt-6">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white font-montserrat">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    <span className="text-white font-montserrat">Respuesta en 24h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    <span className="text-white font-montserrat">Sin compromisos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    <span className="text-white font-montserrat">Conversación directa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-2xl">
                <Formulario />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
