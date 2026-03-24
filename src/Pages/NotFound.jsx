import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome, FiMail } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4 pt-16">
      <div className="max-w-2xl mx-auto text-center space-y-8">

        {/* Número 404 grande */}
        <div className="relative">
          <span className="font-dream text-[8rem] sm:text-[12rem] font-bold text-greengrove/10 leading-none select-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-greengrove/15 rounded-2xl flex items-center justify-center mx-auto">
                <img
                  src="/img/Logos/rosso-min.svg"
                  alt="Studio Rosso"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="space-y-4">
          <h1 className="font-dream text-3xl sm:text-4xl font-bold text-gray-800">
            Página no encontrada
          </h1>
          <p className="font-montserrat text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            Parece que esta página no existe o fue movida.
            Volvamos a donde la magia sucede.
          </p>
        </div>

        {/* Divider decorativo */}
        <div className="flex items-center justify-center space-x-3">
          <div className="h-px w-16 bg-greengrove/30" />
          <div className="w-2 h-2 rounded-full bg-greengrove" />
          <div className="h-px w-16 bg-greengrove/30" />
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group inline-flex items-center space-x-2 px-7 py-3 bg-black text-white
                       rounded-full font-semibold font-montserrat text-sm
                       hover:bg-greengrove transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FiHome className="w-4 h-4" />
            <span>Ir al inicio</span>
          </Link>

          <Link
            to="/servicios"
            className="group inline-flex items-center space-x-2 px-7 py-3 border-2 border-gray-300
                       text-gray-700 rounded-full font-semibold font-montserrat text-sm
                       hover:border-greengrove hover:text-greengrove transition-all duration-300"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Ver servicios</span>
          </Link>

          <Link
            to="/contacto"
            className="group inline-flex items-center space-x-2 px-7 py-3 border-2 border-gray-300
                       text-gray-700 rounded-full font-semibold font-montserrat text-sm
                       hover:border-greengrove hover:text-greengrove transition-all duration-300"
          >
            <FiMail className="w-4 h-4" />
            <span>Contáctanos</span>
          </Link>
        </div>

        {/* Pequeño guiño */}
        <p className="font-montserrat text-xs text-gray-400">
          Studio Rosso Agency — Diseño & Desarrollo · Colombia
        </p>
      </div>
    </div>
  );
};

export default NotFound;
