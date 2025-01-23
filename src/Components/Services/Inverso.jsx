import React from "react";
import { Link } from "react-router-dom";

const ServicioCompInverso = ({
  title,
  description,
  buttonText1,
  image1,
  image2,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
      {/* Columna derecha: Imágenes */}
      <div className="relative w-full h-[300px] md:h-[480px] rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <img
            src={image2}
            alt="Vista previa del servicio 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Columna izquierda */}
      <div className="flex flex-col justify-between gap-6">
        <h2 className="text-5xl md:text-7xl font-bold text-black font-dream">
          {title}
        </h2>
        <p className="mt-4 text-gray-700 font-century text-lg">{description}</p>
        <div className="relative w-full h-[150px] md:h-[230px] rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <img
            src={image1}
            alt="Vista previa del servicio 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-6 justify-center flex flex-row items-center">
        <Link to="/contacto" className="border-2 border-black text-black py-2 px-6  mx-8 rounded-full hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
              {buttonText1}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicioCompInverso;
