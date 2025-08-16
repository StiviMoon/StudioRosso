
import Services from "../Components/Services/Services";
const Nosotros = () => {
  return (
    <section className="bg-gray-100 pt-16 sm:pt-20 pb-12 sm:pb-20 p-4 min-h-screen">
      <div className="max-w-6xl mx-auto pb-8 sm:pb-12 pt-16 sm:pt-20">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-greengrove mb-4 sm:mb-6 font-dream px-4">
          Sobre Nosotros
        </h2>
        <p className="text-center text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl font-century px-4 max-w-4xl mx-auto">
          Studio Rosso es una agencia de diseño integral que combina creatividad y estrategia para crear marcas auténticas, proyectos únicos y experiencias visuales excepcionales. Inspirados por la fuerza y la pasión que evoca nuestro nombre, desarrollamos proyectos que trascienden el tiempo y destacan en un entorno competitivo.
        </p>

        {/* Goals Section */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4 font-dream">
              Nuestra Visión
            </h3>
            <p className="text-gray-600 leading-relaxed font-century text-base sm:text-lg md:text-xl px-2">
              Creemos en el diseño como una herramienta poderosa para comunicar ideas, conectar con las personas y construir identidades memorables. Nuestro objetivo es ayudarte a mostrar al mundo lo mejor de ti, creando soluciones visuales que impacten, inspiren y se conviertan en referentes.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-10 font-dream">
              Proceso
            </h3>
            <div className="text-gray-600 leading-relaxed font-century text-base sm:text-lg md:text-xl">
              <ul className="list-disc list-inside space-y-2">
                <li>Agendamiento</li>
                <li>Reunión de conocimiento</li>
                <li>Acuerdo/contrato</li> 
                <li>¡Empezamos a trabajar juntos!</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
       <Services/>
    </section>
  );
};

export default Nosotros;
