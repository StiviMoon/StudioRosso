import Formulario from '../Components/Formulario.jsx';
import banner from '../img/banner.jpg';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contacto = () => {
  return (
    <div className="min-h-screen relative">
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
            <div className="text-white space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-dream">
                  Nos inspiran 
                  <span className="block text-white">las historias</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full lg:w-[80%] text-white leading-relaxed font-century">
                  Cuéntanos todo sobre la tuya y juntos crearemos algo extraordinario
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 sm:pt-6">
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-century">Email</p>
                    <p className="font-semibold text-xs sm:text-sm font-century">studiorossoagency@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-century">Teléfono</p>
                    <p className="font-semibold text-xs sm:text-sm font-century">+57 3194873667</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-century">Ubicación</p>
                    <p className="font-semibold text-xs sm:text-sm font-century">Colombia</p>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="pt-3 sm:pt-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-white font-century">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    <span className="text-white font-century">Respuesta en 24h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    <span className="text-white font-century">Proyectos completados</span>
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
