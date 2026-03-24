import Services from "../Components/Services/Services";
import SEO from "../Components/SEO.jsx";
import { FiHeart, FiUsers, FiTarget, FiArrowRight, FiCpu, FiZap } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { navigateToTop } from "../utils/navigation.js";
import { useInView, useInViewList } from "../hooks/useInView.js";

const FOUNDERS = [
  {
    icon: FiCpu,
    name: "Steven Rodríguez",
    role: "Ingeniero de Software & IA",
    description:
      "El cerebro técnico del equipo. Especialista en desarrollo web moderno, automatizaciones de procesos e integración de inteligencia artificial. Convierte ideas complejas en productos digitales que funcionan, escalan y generan resultados medibles. Si hay una tarea repetitiva en tu negocio, Steven la automatiza.",
  },
  {
    icon: FiHeart,
    name: "Valentina Reyes",
    role: "Comunicadora Visual & Experta en Marketing Digital",
    description:
      "La estratega creativa que da vida a las marcas. Experta en comunicación visual, branding y marketing digital, combina sensibilidad estética con estrategia para construir presencias digitales que conectan emocionalmente con el público y convierten seguidores en clientes.",
  },
];

const PILLARS = [
  {
    icon: FiTarget,
    title: "Nuestra Visión",
    text: "Ser la agencia de referencia para emprendedores y empresas que entienden que la tecnología y el diseño no son gastos — son inversiones que multiplican resultados. Cada proyecto que entregamos debe generar un impacto real y medible.",
  },
  {
    icon: FiZap,
    title: "Nuestra Misión",
    text: "Democratizar el acceso a tecnología de calidad y diseño profesional para negocios latinoamericanos. Combinamos ingeniería de software, IA y comunicación visual para construir marcas que compiten al nivel de las grandes ligas.",
  },
];

const PROCESS = [
  { num: "1", title: "Conversación", desc: "Nos reunimos (virtual o presencial) y te escuchamos. Entendemos tu negocio, tus metas y los dolores que quieres resolver." },
  { num: "2", title: "Propuesta", desc: "Te presentamos un plan claro: qué haremos, en cuánto tiempo y a qué costo. Sin letra pequeña ni sorpresas." },
  { num: "3", title: "Ejecución", desc: "Nos ponemos a trabajar. Te mantenemos informado en cada etapa y tu feedback es bienvenido en todo momento." },
  { num: "4", title: "Lanzamiento", desc: "Entregamos, revisamos juntos y lanzamos. Luego seguimos apoyándote para que el crecimiento no se detenga." },
];

const Nosotros = () => {
  const navigate = useNavigate();
  const [headerRef, headerInView] = useInView();
  const { ref: foundersRef, inView: foundersInView, getDelay } = useInViewList(FOUNDERS.length);
  const [pillarsRef, pillarsInView] = useInView();
  const [processRef, processInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white pt-20 sm:pt-24 pb-16 sm:pb-24 min-h-screen" id="main-content">
      <SEO pageName="nosotros" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 transition-all duration-700"
          style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-6">
            <FiHeart className="text-greengrove text-base" />
            <span className="text-sm font-medium text-greengrove font-montserrat">Nuestra Historia</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-greengrove mb-6 font-dream px-4">
            Sobre Nosotros
          </h1>
          <p className="text-center text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl font-montserrat px-4 max-w-4xl mx-auto">
            Somos <strong>Steven y Valentina</strong> — un ingeniero de software & IA y una comunicadora visual
            que unieron sus mundos para construir <strong>Studio Rosso</strong>. Creemos que tecnología de punta
            y diseño excepcional no deberían ser exclusivos de las grandes empresas.
          </p>
        </div>

        {/* Founders */}
        <div
          ref={foundersRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20"
        >
          {FOUNDERS.map(({ icon: Icon, name, role, description }, i) => (
            <div
              key={name}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              style={{
                transitionDelay: getDelay(i),
                opacity: foundersInView ? 1 : 0,
                transform: foundersInView ? "translateY(0)" : "translateY(28px)",
              }}
            >
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-greengrove/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-greengrove text-3xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-greengrove font-dream">{name}</h2>
                <p className="text-sm font-semibold text-gray-500 font-montserrat uppercase tracking-wide">{role}</p>
                <p className="text-gray-700 font-montserrat leading-relaxed text-sm sm:text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visión & Misión */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20 transition-all duration-700"
          style={{ opacity: pillarsInView ? 1 : 0, transform: pillarsInView ? "translateY(0)" : "translateY(24px)" }}
        >
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-gradient-to-br from-greengrove/5 to-greengrove/10 rounded-3xl p-6 sm:p-8 border border-greengrove/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-greengrove/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="text-greengrove text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-dream">{title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-montserrat text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>

        {/* Proceso */}
        <div
          ref={processRef}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/20 shadow-xl mb-14 sm:mb-20 transition-all duration-700"
          style={{ opacity: processInView ? 1 : 0, transform: processInView ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 font-dream">Nuestro Proceso</h3>
            <p className="text-gray-600 font-montserrat text-sm sm:text-base">
              Simple, transparente y sin sorpresas. Así es como trabajamos juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS.map(({ num, title, desc }) => (
              <div key={num} className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 group-hover:bg-greengrove group-hover:scale-110 transition-all duration-300">
                  {num}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 font-dream">{title}</h4>
                <p className="text-gray-600 font-montserrat text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="text-center transition-all duration-700"
          style={{ opacity: ctaInView ? 1 : 0, transform: ctaInView ? "translateY(0)" : "translateY(20px)" }}
        >
          <div className="bg-gradient-to-r from-greengrove to-greengrove/80 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-dream">¿Te gusta cómo pensamos?</h3>
            <p className="text-base sm:text-lg mb-6 font-montserrat opacity-90 max-w-xl mx-auto">
              Cuéntanos tu proyecto y encontremos juntos la mejor manera de hacerlo realidad — con tecnología, diseño y estrategia.
            </p>
            <button
              onClick={() => navigateToTop(navigate, "/contacto")}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-greengrove rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base min-h-[48px]"
            >
              <span>Empezar Conversación</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-24">
        <Services />
      </div>
    </section>
  );
};

export default Nosotros;
