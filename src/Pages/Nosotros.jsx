
import Services from "../Components/Services/Services";
import creativo from "../img/9.jpg";

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
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4 font-dream">Nuestra Visión</h3>
            <p className="text-gray-600 leading-relaxed font-century text-xl">
              Creemos en el diseño como una herramienta poderosa para comunicar ideas, conectar con las personas y construir identidades memorables. Nuestro objetivo es ayudarte a mostrar al mundo lo mejor de ti, creando soluciones visuales que impacten, inspiren y se conviertan en referentes.
            </p>
          </div>
          <div>
            <img
              src={creativo}
              alt="Equipo creativo"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </div>

      </div>
       <Services/>
    </section>
  );
};

export default Nosotros;
