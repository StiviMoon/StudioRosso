import React from 'react';
import Formulario from '../Components/Formulario.jsx';
import banner from '../img/banner.jpg';

const Contacto = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[100%] p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between h-full">
        {/* Título */}
        <div className="text-white w-full md:w-1/2 p-4">
          <h2 className="text-4xl md:text-6xl font-bold font-dream leading-tight">
            Nos inspiran las historias
          </h2>
          <p className="text-3xl md:text-5xl mt-4 font-dream">
            Cuéntanos todo sobre la tuya
          </p>
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg relative z-10">
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
