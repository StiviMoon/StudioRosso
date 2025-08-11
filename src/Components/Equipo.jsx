
import fts from '../img/PT1.jpeg';
import ftv from '../img/PT2.jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Steven Rodriguez',
      role: 'Fundador & Director de Desarrollo',
      specialization: 'Desarrollo Web Full Stack & Tecnología',
      description: 'Especialista en React, Next.js y tecnologías modernas. Lidera la arquitectura técnica y desarrollo de soluciones digitales innovadoras.',
      image: fts,
    },
    {
      name: 'Valentina Reyes',
      role: 'Fundadora & Directora Creativa',
      specialization: 'Comunicación Visual & Diseño',
      description: 'Experta en branding, diseño gráfico y estrategias de comunicación visual. Transforma ideas en experiencias visuales impactantes.',
      image: ftv,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dream font-bold text-greengrove capitalize mb-4 sm:mb-6">
            Nuestros Fundadores
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Conoce al equipo que está transformando la manera de crear experiencias digitales únicas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  className="object-cover h-[300px] sm:h-[400px] lg:h-[500px] w-full"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="mt-4 sm:mt-6 text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl font-century font-bold text-gray-800 mb-2">
                  {member.name}
                </h2>
                
                <h3 className="text-base sm:text-lg font-semibold text-greengrove mb-1">
                  {member.role}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 font-medium">
                  {member.specialization}
                </p>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-dream font-bold text-greengrove mb-4">
              Nuestra Visión
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
};

export default Team;
