import React from "react";
import { FiPenTool, FiTrendingUp, FiStar } from "react-icons/fi";
import imgL from '../img/1.jpg'
const ComponentSection = () => {
  const features = [
    {
      icon: <FiPenTool size={24} className="text-red-500" />, // React Icon
      title: "Diseño Personalizado",
      description:
        "Creamos soluciones únicas adaptadas a tu marca, asegurando que cada proyecto sea tan auténtico como tú.",
    },
    {
      icon: <FiTrendingUp size={24} className="text-red-500" />, // React Icon
      title: "Resultados Impactantes",
      description:
        "Impulsamos tu presencia digital con estrategias innovadoras y resultados medibles que destacan en el mercado.",
    },
    {
      icon: <FiStar size={24} className="text-red-500" />, // React Icon
      title: "Excelencia Creativa",
      description:
        "Combinamos creatividad y tecnología para entregar proyectos que inspiran, conectan y generan impacto duradero.",
    },
  ];

  return (
    <section className="bg-neutral-50 pt-10 pb-10">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2">
            <div>
              <h1 className="text-2xl font-semibold font-dream text-gray-800 capitalize lg:text-3xl">
                ¿Por qué elegir <span className="text-red-500">Studio Rosso</span>?
              </h1>
              <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
              </div>
              <p className="mt-4 font-century text-gray-600">
                En Studio Rosso, combinamos pasión, creatividad y tecnología para crear soluciones que transformen tu marca. Nuestro equipo de expertos trabaja contigo para alcanzar resultados excepcionales y experiencias memorables.
              </p>
            </div>
            {features.map((feature, index) => (
              <div className="md:flex md:items-start md:-mx-4" key={index}>
                <span className="inline-block p-2 bg-red-100 rounded-xl md:mx-4">
                  {feature.icon}
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl  text-gray-700 capitalize font-dream">
                    {feature.title}
                  </h1>
                  <p className="mt-3 text-gray-500 font-century">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src={imgL}
              alt="Studio Rosso Team"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentSection;
