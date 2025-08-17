
import InicioP1 from '../Components/Home/inicio.jsx'
import LogoSlider from '../Components/LogoSlider.jsx'
import Beneficios from '../Components/Beneficios.jsx'
import Team from '../Components/Equipo.jsx'
import SEO from '../Components/SEO.jsx'
import { FiArrowRight, FiStar, FiTrendingUp, FiHeart, FiZap } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='h-full pt-10'>
      <SEO 
        title="Agencia de Diseño y Desarrollo Web en Colombia"
        description="Studio Rosso Agency: Creamos marcas que se sienten, se ven y venden. Agencia de diseño, branding y desarrollo web en Colombia. Johan Rodríguez y Valentina Reyes."
        keywords="agencia diseño colombia, branding colombia, desarrollo web colombia, diseño web bogotá, agencia digital colombia, marketing digital colombia, SEO colombia, diseño gráfico colombia"
        url="/"
      />
      
      <InicioP1 />
      
      {/* Hero Section - Renovado */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-6 sm:mb-8">
              <FiStar className="text-greengrove text-base" />
              <span className="text-sm font-medium text-greengrove">Studio Rosso</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-dream text-gray-800 leading-tight mb-6 sm:mb-8 px-4">
              Creamos marcas que se{" "}
              <span className="text-greengrove relative">
                sienten, se ven y venden
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-greengrove/30 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-century text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              <strong>Studio Rosso:</strong> diseño + tecnología para negocios que quieren crecer.
            </p>

            {/* Botones claros */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button onClick={() => navigate('/servicios')} className="group inline-flex items-center space-x-3 px-8 py-4 bg-greengrove text-white rounded-full 
                               font-semibold hover:bg-greengrove/90 transition-all duration-300 transform hover:scale-105 
                               shadow-lg hover:shadow-xl text-base sm:text-lg">
                <span>Explorar Servicios</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button onClick={() => navigate('/contacto')} className="group inline-flex items-center space-x-3 px-8 py-4 border-2 border-greengrove text-greengrove rounded-full 
                               font-semibold hover:bg-greengrove hover:text-white transition-all duration-300 transform hover:scale-105 
                               text-base sm:text-lg">
                <span>Iniciar tu Proyecto</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Valor - Qué hacemos y para quién */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-dream text-gray-800 mb-6 sm:mb-8">
              Lo hacemos simple
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-century text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tú tienes una idea, nosotros la llevamos al siguiente nivel. Desde el branding hasta tu web, 
              te ayudamos a construir una marca que conecta con clientes y genera resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-greengrove/10 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiHeart className="text-greengrove text-3xl" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dream">Branding & Diseño Visual</h4>
              <p className="text-base sm:text-lg text-gray-600 font-century leading-relaxed">
                Dale identidad a tu negocio
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-greengrove/10 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiZap className="text-greengrove text-3xl" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dream">Desarrollo Web</h4>
              <p className="text-base sm:text-lg text-gray-600 font-century leading-relaxed">
                Tu vitrina digital, moderna y funcional
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-greengrove/10 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiTrendingUp className="text-greengrove text-3xl" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dream">Estrategia & SEO</h4>
              <p className="text-base sm:text-lg text-gray-600 font-century leading-relaxed">
                Haz que te encuentren y te recuerden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Enfoque - Cómo trabajamos */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-dream text-gray-800 mb-6 sm:mb-8">
              Nuestro proceso es claro y sin complicaciones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-greengrove text-white rounded-full text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dream">Escuchamos tu historia</h4>
              <p className="text-base sm:text-lg text-gray-600 font-century leading-relaxed">
                Entendemos tu marca, metas y retos
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-greengrove text-white rounded-full text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dream">Damos forma a tu visión</h4>
              <p className="text-base sm:text-lg text-gray-600 font-century leading-relaxed">
                Con diseño estratégico y tecnología moderna
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-greengrove text-white rounded-full text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dream">Creamos impacto</h4>
              <p className="text-base sm:text-lg text-gray-600 font-century leading-relaxed">
                Lanzamos soluciones que hacen crecer tu negocio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 sm:mb-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-dream text-gray-800 mb-6 sm:mb-8">
                ¿Por qué Studio Rosso?
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-century text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Porque somos jóvenes, frescos y hablamos tu mismo idioma. No creemos en plantillas: 
                cada proyecto es tan único como tu marca.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 font-dream">
                    Con Valentina (visual) y Johan (tecnología), tienes lo mejor de dos mundos: 
                    diseño que emociona y desarrollo que funciona.
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-greengrove rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-600 font-century">Diseño auténtico, no genérico</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-greengrove rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-600 font-century">Tecnología moderna y escalable</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-greengrove rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-600 font-century">Estrategias pensadas para crecer, no solo verse bonitas</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-greengrove rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-600 font-century">Comunicación cercana y transparente</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-greengrove/10 to-greengrove/5 rounded-3xl p-8 sm:p-12 border border-greengrove/20">
                <div className="text-center space-y-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 font-dream">
                    Detrás de Studio Rosso estamos nosotros
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <h5 className="font-bold text-greengrove font-dream">Johan Rodríguez</h5>
                      <p className="text-sm text-gray-600 font-century">Full Stack Developer</p>
                      <p className="text-xs text-gray-500 font-century mt-1">El que convierte ideas en código y webs que funcionan</p>
                    </div>
                    
                    <div className="text-center">
                      <h5 className="font-bold text-greengrove font-dream">Valentina Reyes</h5>
                      <p className="text-sm text-gray-600 font-century">Visual Communicator</p>
                      <p className="text-xs text-gray-500 font-century mt-1">La mente detrás del diseño que conecta y emociona</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 font-century">
                    Somos jóvenes, apasionados y creemos en el poder de las marcas bien hechas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados / Credibilidad - Más honesta y cercana */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-dream text-gray-800 mb-6 sm:mb-8">
              Ya hemos trabajado con proyectos locales y startups que confiaron en nosotros
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-century text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hoy queremos ayudarte a ti a dar el siguiente paso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-greengrove font-dream mb-2">15+</div>
              <div className="text-base sm:text-lg text-gray-600 font-century">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-greengrove font-dream mb-2">100%</div>
              <div className="text-base sm:text-lg text-gray-600 font-century">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-greengrove font-dream mb-2">24h</div>
              <div className="text-base sm:text-lg text-gray-600 font-century">Tiempo de Respuesta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Cierre fuerte */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-dream px-4">
              ¿Listo para darle vida a tu marca?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 font-century px-4">
              Cuéntanos tu idea y hagámosla realidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button onClick={() => navigate('/contacto')} className="px-8 py-4 bg-greengrove text-white rounded-full font-semibold 
                                 hover:bg-greengrove/90 transition-all duration-300 transform hover:scale-105 
                                 shadow-lg hover:shadow-xl text-base sm:text-lg">
                Iniciar Proyecto
              </button>
              <button onClick={() => window.open("https://www.behance.net/gallery/213678865/Portfolio-Design", "_blank")} className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold 
                                 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
                Ver Portafolio
              </button>
            </div>
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