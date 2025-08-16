import { FaUsers, FaHandshake, FaRocket, FaArrowRight } from 'react-icons/fa';

const TrabajaConNosotros = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16 sm:pt-20">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-wide font-dream leading-tight px-4">
                Únete a{" "}
                <span className="text-greengrove relative">
                  Nuestro Equipo
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-greengrove/30 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-century leading-relaxed px-4">
                Buscamos talentos apasionados por el diseño y la tecnología que quieran crear experiencias digitales extraordinarias.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Left Column - Why Join Us */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-dream">
              ¿Por qué unirte a Studio Rosso?
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-greengrove/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-greengrove text-sm sm:text-base" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-dream">Equipo Creativo</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-century">
                    Trabaja con profesionales apasionados por la innovación y la creatividad.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-greengrove/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-greengrove text-sm sm:text-base" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-dream">Crecimiento Profesional</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-century">
                    Oportunidades de aprendizaje y desarrollo en tecnologías de vanguardia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-greengrove/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaHandshake className="text-greengrove text-sm sm:text-base" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-dream">Proyectos Impactantes</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-century">
                    Participa en proyectos que transforman marcas y crean experiencias memorables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 font-dream text-center">
              Envíanos tu CV
            </h3>
            
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-century">Nombre completo</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greengrove focus:border-transparent transition-all duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-century">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greengrove focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-century">Posición de interés</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greengrove focus:border-transparent transition-all duration-200">
                  <option>Selecciona una posición</option>
                  <option>Diseñador UX/UI</option>
                  <option>Desarrollador Frontend</option>
                  <option>Desarrollador Backend</option>
                  <option>Diseñador Gráfico</option>
                  <option>Marketing Digital</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-century">Mensaje</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greengrove focus:border-transparent transition-all duration-200"
                  placeholder="Cuéntanos sobre ti y tu experiencia..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full group inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-greengrove text-white rounded-full 
                         font-semibold hover:bg-greengrove/90 transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <span>Enviar solicitud</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrabajaConNosotros;