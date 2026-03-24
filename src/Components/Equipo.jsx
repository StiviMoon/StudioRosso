import { memo, useState, useMemo } from "react";
import fts from "/img/PT1.webp";
import ftv from "/img/PT2.webp";
import { useInViewList } from "../hooks/useInView.js";
import { SkeletonTeamCard } from "./Skeleton.jsx";

const TEAM_MEMBERS = [
  {
    name: "Steven Rodríguez",
    role: "Fundador & Ingeniero de Software e IA",
    specialization: "Desarrollo Web · Automatizaciones · Inteligencia Artificial",
    description:
      "Ingeniero de software especializado en arquitecturas modernas, automatizaciones de procesos e integración de IA. Construye plataformas escalables que hacen crecer negocios reales — desde webs de alto rendimiento hasta flujos inteligentes que ahorran horas de trabajo manual.",
    image: fts,
  },
  {
    name: "Valentina Reyes",
    role: "Fundadora & Directora Creativa",
    specialization: "Comunicación Visual · Branding · Marketing Digital",
    description:
      "Comunicadora visual y experta en marketing digital con un ojo único para transformar marcas. Diseña identidades que conectan emocionalmente con el público, y desarrolla estrategias de contenido que convierten audiencias en comunidades fieles.",
    image: ftv,
  },
];

function TeamCard({ member, inView, delay }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="group transition-all duration-700 ease-out"
      style={{
        transitionDelay: delay,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
      }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
        {/* Skeleton mientras carga la imagen */}
        {!loaded && (
          <div className="shimmer w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl" />
        )}
        <img
          className={`object-cover h-[300px] sm:h-[400px] lg:h-[500px] w-full
                      transition-all duration-500 group-hover:scale-105
                      ${loaded ? "opacity-100" : "opacity-0 absolute inset-0"}`}
          src={member.image}
          alt={member.name}
          width="600"
          height="500"
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
        {/* Overlay en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mt-5 sm:mt-6 text-center lg:text-left px-1">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 font-montserrat">
          {member.name}
        </h2>
        <h3 className="text-base sm:text-lg font-semibold text-greengrove mb-1">
          {member.role}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-3 font-medium font-montserrat">
          {member.specialization}
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-montserrat">
          {member.description}
        </p>
      </div>
    </div>
  );
}

const Team = memo(function Team() {
  const { ref, inView, getDelay } = useInViewList(TEAM_MEMBERS.length);

  const titleStyle = useMemo(
    () => ({
      transition: "opacity 0.7s ease, transform 0.7s ease",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
    }),
    [inView]
  );

  return (
    <section className="bg-gradient-to-b from-white to-gray-50" id="equipo">
      <div className="container px-4 sm:px-6 py-16 sm:py-20 lg:py-24 mx-auto">

        {/* Header animado */}
        <div ref={ref} className="text-center mb-12 sm:mb-16" style={titleStyle}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dream font-bold text-greengrove capitalize mb-4 sm:mb-6">
            Nuestros Fundadores
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-montserrat">
            Conoce al equipo que está transformando la manera de crear experiencias digitales únicas
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              inView={inView}
              delay={getDelay(i)}
            />
          ))}
        </div>

        {/* Visión */}
        <div
          className="text-center mt-12 sm:mt-16 transition-all duration-700 delay-300"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-dream font-bold text-greengrove mb-4">
              Nuestra Visión
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-montserrat">
              Como fundadores de Studio Rosso, combinamos la excelencia técnica con la creatividad visual
              para crear soluciones digitales que no solo funcionan perfectamente, sino que también
              cautivan y conectan con tu audiencia. Cada proyecto es una oportunidad para innovar
              y superar expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Team;
