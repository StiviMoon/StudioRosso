
import InicioP1 from '../Components/Home/inicio.jsx'
import LogoSlider from '../Components/LogoSlider.jsx'
import Beneficios from '../Components/Beneficios.jsx'
import Team from '../Components/Equipo.jsx'
import { FiArrowRight, FiPlay, FiStar, FiCheckCircle } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='h-full pt-10'>
      <InicioP1 />
      
      {/* Transition Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-4 sm:mb-6">
              <FiStar className="text-greengrove text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-medium text-greengrove">Nuestro Enfoque</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-dream text-gray-800 leading-tight mb-4 sm:mb-6">
              Transformamos Ideas en{" "}
              <span className="text-greengrove relative">
                Experiencias Digitales
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-greengrove/30 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl font-century text-gray-600 leading-relaxed max-w-4xl mx-auto px-4">
              Cada proyecto es una oportunidad para crear algo extraordinario. Combinamos tecnología de vanguardia 
              con diseño creativo para construir experiencias que no solo se ven bien, sino que también funcionan perfectamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-greengrove/10 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiPlay className="text-greengrove text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-dream">Estrategia</h3>
              <p className="text-sm sm:text-base text-gray-600 font-century leading-relaxed px-2">
                Analizamos tu negocio y objetivos para crear una estrategia digital que impulse tu crecimiento.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-greengrove/10 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiCheckCircle className="text-greengrove text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-dream">Desarrollo</h3>
              <p className="text-sm sm:text-base text-gray-600 font-century leading-relaxed px-2">
                Construimos soluciones robustas y escalables usando las mejores tecnologías del mercado.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-greengrove/10 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiStar className="text-greengrove text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-dream">Diseño</h3>
              <p className="text-sm sm:text-base text-gray-600 font-century leading-relaxed px-2">
                Creamos experiencias visuales impactantes que conectan emocionalmente con tu audiencia.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="group inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-greengrove text-white rounded-full 
                               font-semibold hover:bg-greengrove/90 transition-all duration-300 transform hover:scale-105 
                               shadow-lg hover:shadow-xl text-sm sm:text-base">
              <span>Conoce Nuestro Proceso</span>
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
      
      <Beneficios/>
      <LogoSlider/>
      <Team/>
    </div>
  )
}

export default Home