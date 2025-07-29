import React from "react";
import { FiPenTool, FiTrendingUp, FiStar, FiCheckCircle } from "react-icons/fi";
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

  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container px-6 py-10 mx-auto relative z-10">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="w-full space-y-12 lg:w-1/2">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold font-dream text-gray-800 leading-tight">
                  ¿Por qué elegir{" "}
                  <span className="text-greengrove relative">
                    Studio Rosso
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-greengrove/30 rounded-full"></div>
                  </span>
                  ?
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-1 bg-greengrove rounded-full"></div>
                  <div className="w-4 h-1 bg-greengrove rounded-full"></div>
                  <div className="w-2 h-1 bg-greengrove rounded-full"></div>
                </div>
              </div>
              
              <p className="text-lg font-century text-gray-600 leading-relaxed">
                En Studio Rosso, combinamos pasión, creatividad y tecnología para crear soluciones que transformen tu marca. 
                Nuestro equipo de expertos trabaja contigo para alcanzar resultados excepcionales y experiencias memorables.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div className="group" key={index}>
                  <div className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl 
                                  border border-gray-100 hover:border-greengrove/20 transition-all duration-300 
                                  hover:shadow-lg hover:transform hover:scale-105">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-crema to-primary rounded-xl shadow-md 
                                    group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-gray-800 font-dream group-hover:text-greengrove transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 font-century leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Benefits list */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-1 px-3 py-1 
                                                           bg-greengrove/10 rounded-full text-xs font-medium text-greengrove">
                            <FiCheckCircle className="w-3 h-3" />
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
            <div className="pt-6">
              <button className="inline-flex items-center space-x-3 px-8 py-4 bg-black text-white rounded-full 
                                 font-semibold hover:bg-greengrove transition-all duration-300 transform hover:scale-105 
                                 shadow-lg hover:shadow-xl">
                <span>Descubre más</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
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
      </div>
    </section>
  );
};

export default ComponentSection;
