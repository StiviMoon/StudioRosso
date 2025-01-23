import React from 'react';
import Services from '../Components/Services/Services.jsx';
import CarruselImg from '../Components/CarruselImg.jsx';
import Trabajos from '../Components/Section/Trabajos.jsx';

const Servicios = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Título principal */}
      <div className="flex flex-wrap justify-center text-center p-12">
        <h1 className="text-4xl md:text-8xl   text-greengrove tracking-wide font-dream leading-snug">
          Nuestros Servicios
        </h1>
        <p className="text-lg md:text-4xl max-w-[60%] text-center  text-greengrove mt-6 font-century">
          Soluciones digitales creativas diseñadas para potenciar tu marca y mejorar la experiencia de tus clientes.
        </p>
      </div>      
        <Services />
        <CarruselImg />
        <Trabajos /> 
    </div>
  );
};

export default Servicios;
