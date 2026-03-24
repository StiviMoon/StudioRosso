import { memo, useMemo } from "react";
import { FiPenTool, FiTrendingUp, FiStar, FiCheckCircle, FiUsers, FiAward, FiArrowRight } from "react-icons/fi";
import { useInView, useInViewList } from "../hooks/useInView.js";
import imgL from "/img/vv.webp";

const FEATURES = [
  {
    icon: FiPenTool,
    title: "Diseño Personalizado",
    description: "Creamos soluciones únicas adaptadas a tu marca, asegurando que cada proyecto sea tan auténtico como tú.",
    benefits: ["Identidad única", "Adaptable a tu marca", "Creatividad sin límites"],
  },
  {
    icon: FiTrendingUp,
    title: "Resultados Impactantes",
    description: "Impulsamos tu presencia digital con estrategias innovadoras y resultados medibles que destacan en el mercado.",
    benefits: ["ROI medible", "Crecimiento sostenible", "Presencia digital"],
  },
  {
    icon: FiStar,
    title: "Excelencia Creativa",
    description: "Combinamos creatividad y tecnología para entregar proyectos que inspiran, conectan y generan impacto duradero.",
    benefits: ["Calidad premium", "Innovación constante", "Experiencia única"],
  },
];

const STATS = [
  { number: "50+", label: "Proyectos Completados", icon: FiAward },
  { number: "100%", label: "Clientes Satisfechos", icon: FiUsers },
  { number: "24/7", label: "Soporte Técnico", icon: FiCheckCircle },
];

const Beneficios = memo(function Beneficios() {
  const [headerRef, headerInView] = useInView();
  const { ref: featuresRef, inView: featuresInView, getDelay } = useInViewList(FEATURES.length);
  const [statsRef, statsInView] = useInView();
  const [imageRef, imageInView] = useInView();

  return (
    <section className="relative bg-gradient-to-br from-white via-neutral-50 to-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 py-10 mx-auto relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 sm:mb-20 lg:mb-24 transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-6 sm:mb-8">
            <FiStar className="text-greengrove text-sm sm:text-base" />
            <span className="text-sm font-medium text-greengrove">¿Por qué elegirnos?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-dream text-gray-800 leading-tight mb-6 sm:mb-8 px-4">
            ¿Por qué elegir{" "}
            <span className="text-greengrove relative">
              Studio Rosso
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-greengrove/30 rounded-full" />
            </span>
            ?
          </h2>

          <p className="text-base sm:text-lg lg:text-xl font-montserrat text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            Combinamos pasión, creatividad y tecnología para crear soluciones que transformen tu marca.
          </p>
        </div>

        <div className="lg:flex lg:items-start lg:gap-20">
          {/* Features */}
          <div ref={featuresRef} className="w-full space-y-6 lg:w-1/2">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group transition-all duration-700 ease-out"
                  style={{
                    transitionDelay: getDelay(i),
                    opacity: featuresInView ? 1 : 0,
                    transform: featuresInView ? "translateX(0)" : "translateX(-24px)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-5 p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-greengrove/30 transition-all duration-300 hover:shadow-lg">
                    <div className="flex-shrink-0 p-4 bg-greengrove/10 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                      <Icon size={28} className="text-greengrove" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-dream group-hover:text-greengrove transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 font-montserrat leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {feature.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-greengrove/8 rounded-full text-xs font-medium text-greengrove border border-greengrove/20"
                          >
                            <FiCheckCircle className="w-3 h-3 flex-shrink-0" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div
              className="pt-4 transition-all duration-700 delay-300"
              style={{
                opacity: featuresInView ? 1 : 0,
                transform: featuresInView ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <button className="group inline-flex items-center space-x-3 px-7 py-3.5 bg-black text-white rounded-full font-semibold hover:bg-greengrove transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base font-montserrat min-h-[44px]">
                <span>Descubre más sobre nosotros</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Imagen desktop */}
          <div
            ref={imageRef}
            className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center mt-16 lg:mt-0 transition-all duration-800"
            style={{
              opacity: imageInView ? 1 : 0,
              transform: imageInView ? "scale(1) translateX(0)" : "scale(0.96) translateX(20px)",
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-greengrove/20 to-transparent rounded-full blur-2xl" />
              <img
                className="relative w-[28rem] h-[28rem] xl:w-[32rem] xl:h-[32rem] object-cover rounded-full
                           shadow-2xl border-8 border-white/60 hover:scale-[1.02] transition-transform duration-500"
                src={imgL}
                alt="Studio Rosso Team"
                width="512"
                height="512"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-8 right-12 w-14 h-14 bg-greengrove/15 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <FiStar className="text-greengrove text-lg" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-11 h-11 bg-black/25 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <FiCheckCircle className="text-white text-base" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 sm:mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? "translateY(0)" : "translateY(24px)",
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-greengrove/10 rounded-2xl mb-4 border border-greengrove/20 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="text-greengrove text-2xl sm:text-3xl" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 font-dream">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-montserrat">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Beneficios;
