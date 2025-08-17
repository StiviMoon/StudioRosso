
import { FiPenTool, FiTrendingUp, FiStar, FiCheckCircle, FiUsers, FiAward, FiArrowRight } from "react-icons/fi";
import imgL from '/img/vv.jpeg';

const ComponentSection = () => {
  const features = [
    {
      icon: <FiPenTool size={32} className="text-greengrove" />,
      title: "Diseño Personalizado",
      description:
        "Creamos soluciones únicas adaptadas a tu marca, asegurando que cada proyecto sea tan auténtico como tú.",
      benefits: ["Identidad única", "Adaptable a tu marca", "Creatividad sin límites"]
    },
    {
      icon: <FiTrendingUp size={32} className="text-greengrove" />,
      title: "Resultados Impactantes",
      description:
        "Impulsamos tu presencia digital con estrategias innovadoras y resultados medibles que destacan en el mercado.",
      benefits: ["ROI medible", "Crecimiento sostenible", "Presencia digital"]
    },
    {
      icon: <FiStar size={32} className="text-greengrove" />,
      title: "Excelencia Creativa",
      description:
        "Combinamos creatividad y tecnología para entregar proyectos que inspiran, conectan y generan impacto duradero.",
      benefits: ["Calidad premium", "Innovación constante", "Experiencia única"]
    },
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados", icon: <FiAward size={24} /> },
    { number: "100%", label: "Clientes Satisfechos", icon: <FiUsers size={24} /> },
    { number: "24/7", label: "Soporte Técnico", icon: <FiCheckCircle size={24} /> },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-neutral-50 to-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container px-4 sm:px-6 py-10 mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-6 sm:mb-8">
            <FiStar className="text-greengrove text-sm sm:text-base" />
            <span className="text-sm font-medium text-greengrove">¿Por qué elegirnos?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-dream text-gray-800 leading-tight mb-6 sm:mb-8">
            ¿Por qué elegir{" "}
            <span className="text-greengrove relative">
              Studio Rosso
              <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-greengrove/40 to-greengrove/20 rounded-full"></div>
            </span>
            ?
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl font-montserrat text-gray-600 leading-relaxed max-w-4xl mx-auto px-4">
            En Studio Rosso, combinamos pasión, creatividad y tecnología para crear soluciones que transformen tu marca. 
            Nuestro equipo de expertos trabaja contigo para alcanzar resultados excepcionales y experiencias memorables.
          </p>
        </div>

        <div className="lg:flex lg:items-center lg:gap-20">
          {/* Left Column - Features */}
          <div className="w-full space-y-10 sm:space-y-12 lg:w-1/2">
            <div className="space-y-8 sm:space-y-10">
              {features.map((feature, index) => (
                <div className="group" key={index}>
                  <div className="flex flex-col sm:flex-row items-start space-y-5 sm:space-y-0 sm:space-x-6 p-8 sm:p-10 bg-white/90 backdrop-blur-sm rounded-3xl 
                                  border border-gray-100 hover:border-greengrove/30 transition-all duration-300 
                                  hover:shadow-xl hover:transform hover:scale-[1.01]">
                    <div className="flex-shrink-0 flex justify-center sm:justify-start">
                      <div className="p-4 sm:p-5 bg-gradient-to-br from-greengrove/15 to-greengrove/5 rounded-2xl 
                                    transition-all duration-300 group-hover:scale-105">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4 sm:space-y-5 text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 font-dream group-hover:text-greengrove transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-montserrat leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Benefits list */}
                      <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2 px-4 py-2 
                                                           bg-gradient-to-r from-greengrove/10 to-greengrove/5 rounded-full text-sm font-medium text-greengrove
                                                           border border-greengrove/20">
                            <FiCheckCircle className="w-4 h-4 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-8 sm:pt-10 text-center sm:text-left">
              <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-full 
                                 font-semibold hover:from-greengrove hover:to-greengrove/80 transition-all duration-300 transform hover:scale-105 
                                 shadow-lg hover:shadow-xl text-base sm:text-lg">
                <span>Descubre más sobre nosotros</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center mt-16 lg:mt-0">
            <div className="relative">
              {/* Simple Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-greengrove/20 to-transparent rounded-full blur-2xl"></div>
              
              {/* Main Image Container */}
              <div className="relative">
                <img
                  className="relative w-[32rem] h-[32rem] object-cover xl:w-[36rem] xl:h-[36rem] rounded-full 
                             shadow-2xl border-8 border-white/60 backdrop-blur-sm
                             hover:scale-105 transition-transform duration-300"
                  src={imgL}
                  alt="Studio Rosso Team"
                />
              </div>
              
              {/* Minimal Floating Elements */}
              <div className="absolute top-10 right-16 w-16 h-16 bg-gradient-to-br from-greengrove/20 to-greengrove/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <FiStar className="text-greengrove text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-black/30 to-black/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <FiCheckCircle className="text-white text-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 sm:mt-24 lg:mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-greengrove/15 to-greengrove/5 rounded-2xl mb-4 sm:mb-6 border border-greengrove/20
                                transition-transform duration-300 group-hover:scale-105">
                  <div className="text-greengrove text-2xl sm:text-3xl">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 font-dream">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600 font-montserrat">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentSection;
