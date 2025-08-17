import { FaUsers, FaHandshake, FaRocket, FaArrowRight } from 'react-icons/fa';
import { FiHeart, FiZap, FiTrendingUp, FiStar } from 'react-icons/fi';

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
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-4">
                <FiHeart className="text-greengrove text-base" />
                <span className="text-sm font-medium text-greengrove">Únete a nosotros</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-wide font-dream leading-tight px-4">
                Únete a{" "}
                <span className="text-greengrove relative">
                  Nuestro Equipo
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-greengrove/30 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-century leading-relaxed px-4">
                Buscamos talentos apasionados por el diseño y la tecnología que quieran crear 
                experiencias digitales extraordinarias. ¿Eres tú?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          
          {/* Left Column - Why Join Us */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-dream">
                ¿Por qué unirte a Studio Rosso?
              </h2>
              
              <p className="text-lg text-gray-600 font-century leading-relaxed">
                Porque somos jóvenes, frescos y creemos en el poder de las ideas. 
                No somos una gran corporación con procesos rígidos. Somos un equipo 
                pequeño que valora la creatividad, la innovación y el impacto real.
              </p>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-greengrove/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-greengrove text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-dream">Equipo Creativo</h3>
                  <p className="text-gray-600 font-century leading-relaxed">
                    Trabaja con Johan y Valentina, dos profesionales apasionados por la innovación 
                    y la creatividad. Aprende de sus experiencias y comparte tus ideas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-greengrove/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-greengrove text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-dream">Crecimiento Profesional</h3>
                  <p className="text-gray-600 font-century leading-relaxed">
                    Oportunidades reales de aprendizaje y desarrollo en tecnologías de vanguardia. 
                    No solo trabajas, creces con nosotros.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-greengrove/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaHandshake className="text-greengrove text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-dream">Proyectos Impactantes</h3>
                  <p className="text-gray-600 font-century leading-relaxed">
                    Participa en proyectos que transforman marcas y crean experiencias memorables. 
                    Cada trabajo que hacemos tiene un propósito claro.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-greengrove/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiZap className="text-greengrove text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-dream">Flexibilidad y Libertad</h3>
                  <p className="text-gray-600 font-century leading-relaxed">
                    Trabaja desde donde quieras, con horarios flexibles. Valoramos los resultados, 
                    no las horas en la oficina.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-16 h-16 bg-greengrove/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar className="text-greengrove text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-dream">
                Envíanos tu CV
              </h3>
              <p className="text-gray-600 font-century">
                Cuéntanos sobre ti y veamos si hacemos match
              </p>
            </div>
            
            <form className="space-y-5 sm:space-y-6">
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
                  <option>Otro (especifica en mensaje)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-century">Mensaje</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greengrove focus:border-transparent transition-all duration-200"
                  placeholder="Cuéntanos sobre ti, tu experiencia y por qué te gustaría unirte a Studio Rosso..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full group inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-greengrove text-white rounded-full 
                         font-semibold hover:bg-greengrove/90 transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl text-base sm:text-lg"
              >
                <span>Enviar solicitud</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-br from-greengrove/5 to-greengrove/10 rounded-3xl p-6 sm:p-8 border border-greengrove/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 font-dream">
              ¿Qué esperamos de ti?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-greengrove/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FiHeart className="text-greengrove text-xl" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 font-dream">Pasión</h4>
                <p className="text-gray-600 font-century text-sm">
                  Amor por lo que haces y ganas de aprender constantemente
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-greengrove/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FiTrendingUp className="text-greengrove text-xl" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 font-dream">Crecimiento</h4>
                <p className="text-gray-600 font-century text-sm">
                  Mentalidad de mejora continua y disposición para nuevos retos
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-greengrove/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaUsers className="text-greengrove text-xl" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 font-dream">Colaboración</h4>
                <p className="text-gray-600 font-century text-sm">
                  Trabajo en equipo y comunicación clara con el resto del equipo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrabajaConNosotros;