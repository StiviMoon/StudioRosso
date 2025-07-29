import React from "react";
import { FiPenTool, FiTrendingUp, FiStar, FiCheckCircle, FiUsers, FiAward } from "react-icons/fi";
import imgL from '../img/1.jpg';

const ComponentSection = () => {
  const features = [
    {
      icon: <FiPenTool size={28} className="text-greengrove" />,
      title: "Diseño Personalizado",
      description:
        "Creamos soluciones únicas adaptadas a tu marca, asegurando que cada proyecto sea tan auténtico como tú.",
      benefits: ["Identidad única", "Adaptable a tu marca", "Creatividad sin límites"]
    },
    {
      icon: <FiTrendingUp size={28} className="text-greengrove" />,
      title: "Resultados Impactantes",
      description:
        "Impulsamos tu presencia digital con estrategias innovadoras y resultados medibles que destacan en el mercado.",
      benefits: ["ROI medible", "Crecimiento sostenible", "Presencia digital"]
    },
    {
      icon: <FiStar size={28} className="text-greengrove" />,
      title: "Excelencia Creativa",
      description:
        "Combinamos creatividad y tecnología para entregar proyectos que inspiran, conectan y generan impacto duradero.",
      benefits: ["Calidad premium", "Innovación constante", "Experiencia única"]
    },
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados", icon: <FiAward /> },
    { number: "100%", label: "Clientes Satisfechos", icon: <FiUsers /> },
    { number: "24/7", label: "Soporte Técnico", icon: <FiCheckCircle /> },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-neutral-50 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container px-4 sm:px-6 py-10 mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-4 sm:mb-6">
            <FiStar className="text-greengrove text-sm sm:text-base" />
            <span className="text-xs sm:text-sm font-medium text-greengrove">¿Por qué elegirnos?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-dream text-gray-800 leading-tight mb-4 sm:mb-6">
            ¿Por qué elegir{" "}
            <span className="text-greengrove relative">
              Studio Rosso
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-greengrove/30 rounded-full"></div>
            </span>
            ?
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl font-century text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            En Studio Rosso, combinamos pasión, creatividad y tecnología para crear soluciones que transformen tu marca. 
            Nuestro equipo de expertos trabaja contigo para alcanzar resultados excepcionales y experiencias memorables.
          </p>
        </div>

        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="w-full space-y-8 sm:space-y-12 lg:w-1/2">
            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div className="group" key={index}>
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl 
                                  border border-gray-100 hover:border-greengrove/30 transition-all duration-300 
                                  hover:shadow-xl hover:transform hover:scale-105">
                    <div className="flex-shrink-0 flex justify-center sm:justify-start">
                      <div className="p-3 sm:p-4 bg-gradient-to-br from-greengrove/10 to-greengrove/5 rounded-xl sm:rounded-2xl 
                                    group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-dream group-hover:text-greengrove transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-century leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Benefits list */}
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 pt-2 sm:pt-4">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1 sm:py-2 
                                                           bg-greengrove/10 rounded-full text-xs sm:text-sm font-medium text-greengrove">
                            <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
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
            <div className="pt-6 sm:pt-8 text-center sm:text-left">
              <button className="group inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full 
                                 font-semibold hover:bg-greengrove transition-all duration-300 transform hover:scale-105 
                                 shadow-lg hover:shadow-xl text-sm sm:text-base">
                <span>Descubre más sobre nosotros</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-greengrove/20 to-transparent rounded-full blur-3xl"></div>
              <img
                className="relative w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full 
                           shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                src={imgL}
                alt="Studio Rosso Team"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-greengrove/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FiStar className="text-greengrove text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FiCheckCircle className="text-white text-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-greengrove/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-greengrove text-lg sm:text-2xl">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-century">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentSection;
