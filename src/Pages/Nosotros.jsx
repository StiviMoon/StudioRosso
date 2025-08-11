
import Services from "../Components/Services/Services";
const Nosotros = () => {
  return (
    <section className="bg-gray-100 pt-20 pb-20 p-4 min-h-screen">
      <div className="max-w-6xl mx-auto pb-12 pt-20">
        {/* Header */}
        <h2 className="text-7xl text-center text-greengrove mb-6 font-dream">Sobre Nosotros</h2>
        <p className="text-center text-gray-700 leading-relaxed md:text-xl font-century text-lg">
          Studio Rosso es una agencia de diseño integral que combina creatividad y estrategia para crear marcas auténticas, proyectos únicos y experiencias visuales excepcionales. Inspirados por la fuerza y la pasión que evoca nuestro nombre, desarrollamos proyectos que trascienden el tiempo y destacan en un entorno competitivo.
        </p>

        {/* Goals Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4 font-dream">Nuestra Visión</h3>
            <p className="text-gray-600 leading-relaxed font-century text-xl">
              Creemos en el diseño como una herramienta poderosa para comunicar ideas, conectar con las personas y construir identidades memorables. Nuestro objetivo es ayudarte a mostrar al mundo lo mejor de ti, creando soluciones visuales que impacten, inspiren y se conviertan en referentes.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-10 font-dream">Proceso</h3>
            <p className="text-gray-600 leading-relaxed font-century text-xl">
              <ul className="list-disc list-inside">
                <li> Agendamiento</li>
                <li> Reunión de conocimiento</li>
                <li> Acuerdo/contrato</li> 
                <li> ¡Empezamos a trabajar juntos!</li>
              </ul>
            </p>
          </div>
        </div>

      </div>
       <Services/>
    </section>
  );
};

export default Nosotros;
