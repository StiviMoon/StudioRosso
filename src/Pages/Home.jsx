import InicioP1 from "../Components/Home/inicio.jsx";
import LogoSlider from "../Components/LogoSlider.jsx";
import Beneficios from "../Components/Beneficios.jsx";
import Team from "../Components/Equipo.jsx";
import SEO from "../Components/SEO.jsx";
import { FiArrowRight, FiStar, FiTrendingUp, FiHeart, FiZap } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { navigateToTop } from "../utils/navigation.js";
import { useInView, useInViewList } from "../hooks/useInView.js";

// ─── Datos estáticos fuera del componente (no se recrean en cada render) ──
const VALUE_CARDS = [
  { icon: FiZap, title: "Desarrollo Web & Apps", desc: "Sitios rápidos, modernos y que convierten visitas en clientes" },
  { icon: FiTrendingUp, title: "Automatizaciones & IA", desc: "Ahorra horas de trabajo con flujos inteligentes que trabajan por ti" },
  { icon: FiHeart, title: "Branding & Diseño Visual", desc: "Una identidad de marca que conecta emocionalmente y es inconfundible" },
];

const PROCESS_STEPS = [
  { num: "1", title: "Escuchamos tu historia", desc: "Entendemos tu marca, metas y retos" },
  { num: "2", title: "Damos forma a tu visión", desc: "Con diseño estratégico y tecnología moderna" },
  { num: "3", title: "Creamos impacto", desc: "Lanzamos soluciones que hacen crecer tu negocio" },
];

const STATS = [
  { value: "15+", label: "Proyectos Completados" },
  { value: "100%", label: "Clientes Satisfechos" },
  { value: "24h", label: "Tiempo de Respuesta" },
];

const WHY_US = [
  "Desarrollo web moderno, rápido y que genera resultados",
  "Automatizaciones e IA para eliminar tareas repetitivas",
  "Diseño auténtico que conecta con tu audiencia y vende",
  "Comunicación cercana, transparente y sin letra pequeña",
];

// ─── Componente principal ──────────────────────────────────────────────────
const Home = () => {
  const navigate = useNavigate();

  // Observers por sección
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const { ref: cardsRef, inView: cardsInView, getDelay: cardsDelay } = useInViewList(VALUE_CARDS.length);
  const { ref: stepsRef, inView: stepsInView, getDelay: stepsDelay } = useInViewList(PROCESS_STEPS.length);
  const [whyRef, whyInView] = useInView();
  const { ref: statsRef, inView: statsInView, getDelay: statsDelay } = useInViewList(STATS.length);
  const [ctaRef, ctaInView] = useInView();

  return (
    <div className="h-full" id="main-content">
      <SEO pageName="home" />
      <InicioP1 />

      {/* ── Propuesta de valor ──────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Título */}
          <div
            ref={heroRef}
            className="text-center mb-12 sm:mb-16 transition-all duration-700"
            style={{
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-greengrove/10 rounded-full border border-greengrove/20 mb-6">
              <FiStar className="text-greengrove text-base" />
              <span className="text-sm font-medium text-greengrove">Studio Rosso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-dream text-gray-800 leading-tight mb-6 px-4">
              <span className="text-greengrove relative">
                Studio Rosso Agency
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-greengrove/30 rounded-full" />
              </span>{" "}
              crea marcas que se sienten, se ven y venden en Colombia
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-montserrat text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 px-4">
              <strong>Studio Rosso:</strong> diseño + tecnología para negocios que quieren crecer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <button
                onClick={() => navigateToTop(navigate, "/servicios")}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-greengrove text-white rounded-full font-semibold hover:bg-greengrove/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base min-h-[48px] w-full sm:w-auto justify-center"
              >
                <span>Explorar Servicios</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => navigateToTop(navigate, "/contacto")}
                className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-greengrove text-greengrove rounded-full font-semibold hover:bg-greengrove hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base min-h-[48px] w-full sm:w-auto justify-center"
              >
                <span>Iniciar tu Proyecto</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Cards de valor */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {VALUE_CARDS.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="text-center group transition-all duration-700 ease-out"
                style={{
                  transitionDelay: cardsDelay(i),
                  opacity: cardsInView ? 1 : 0,
                  transform: cardsInView ? "translateY(0)" : "translateY(28px)",
                }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-greengrove/10 rounded-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-greengrove text-3xl" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 font-dream">{title}</h4>
                <p className="text-sm sm:text-base text-gray-600 font-montserrat leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-dream text-gray-800 mb-12 sm:mb-16 text-center">
            Nuestro proceso es claro y sin complicaciones
          </h3>

          <div
            ref={stepsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto"
          >
            {PROCESS_STEPS.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className="text-center group transition-all duration-700 ease-out"
                style={{
                  transitionDelay: stepsDelay(i),
                  opacity: stepsInView ? 1 : 0,
                  transform: stepsInView ? "translateY(0)" : "translateY(28px)",
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-bold mb-5 group-hover:bg-greengrove group-hover:scale-110 transition-all duration-300">
                  {num}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 font-dream">{title}</h4>
                <p className="text-sm sm:text-base text-gray-600 font-montserrat leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoSlider />

      {/* ── Por qué Rosso ───────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div
              ref={whyRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center transition-all duration-700"
              style={{
                opacity: whyInView ? 1 : 0,
                transform: whyInView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {/* Texto */}
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-dream text-gray-800">
                  ¿Por qué Studio Rosso?
                </h3>
                <p className="text-base sm:text-lg text-gray-600 font-montserrat leading-relaxed">
                  Somos jóvenes, frescos y hablamos tu mismo idioma. No creemos en plantillas: cada proyecto es tan único como tu marca.
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 font-dream">
                  Con Valentina (diseño) y Steven (tecnología & IA), tienes lo mejor de dos mundos.
                </h4>
                <ul className="space-y-3">
                  {WHY_US.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-greengrove rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-600 font-montserrat">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card equipo */}
              <div className="bg-gradient-to-br from-greengrove/10 to-greengrove/5 rounded-3xl p-7 sm:p-10 border border-greengrove/20">
                <div className="text-center space-y-5">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 font-dream">
                    Detrás de Studio Rosso estamos nosotros
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: "Steven Rodríguez", role: "Ingeniero de Software & IA", desc: "Convierte ideas en productos digitales que funcionan y escalan" },
                      { name: "Valentina Reyes", role: "Comunicadora Visual & Marketing", desc: "La mente creativa detrás del diseño que conecta y emociona" },
                    ].map(({ name, role, desc }) => (
                      <div key={name} className="bg-white/60 rounded-2xl p-4">
                        <h5 className="font-bold text-greengrove font-dream">{name}</h5>
                        <p className="text-sm text-gray-600 font-montserrat">{role}</p>
                        <p className="text-xs text-gray-500 font-montserrat mt-1">{desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-montserrat">
                    Somos jóvenes, apasionados y creemos en el poder de las marcas bien hechas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-dream text-gray-800 mb-12 text-center">
            Ya hemos trabajado con proyectos que confiaron en nosotros
          </h3>
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-3xl mx-auto"
          >
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                className="text-center transition-all duration-700 ease-out"
                style={{
                  transitionDelay: statsDelay(i),
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-greengrove font-dream mb-2">{value}</div>
                <div className="text-sm sm:text-base text-gray-600 font-montserrat">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className="bg-gradient-to-r from-gray-900 to-black py-16 sm:py-20 lg:py-24 transition-all duration-700"
        style={{
          opacity: ctaInView ? 1 : 0,
          transform: ctaInView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-dream px-4">
              ¿Listo para darle vida a tu marca?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 font-montserrat px-4">
              Cuéntanos tu idea y hagámosla realidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <button
                onClick={() => navigateToTop(navigate, "/contacto")}
                className="px-8 py-4 bg-greengrove text-white rounded-full font-semibold hover:bg-greengrove/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base min-h-[48px] w-full sm:w-auto"
              >
                Iniciar Proyecto
              </button>
              <button
                onClick={() => window.open("https://www.behance.net/gallery/213678865/Portfolio-Design", "_blank")}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-sm sm:text-base min-h-[48px] w-full sm:w-auto"
              >
                Ver Portafolio
              </button>
            </div>
          </div>
        </div>
      </section>

      <Beneficios />
      <Team />
    </div>
  );
};

export default Home;
