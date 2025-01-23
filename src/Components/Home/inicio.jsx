import React from 'react';
import rossoL from "../../img/Logos/rossoL-min.svg";
import ServiciosSlider from '../ServiciosSlider';
import { Link } from 'react-router-dom';

const InicioP1 = () => {
  return (
    <div>
      {/* Imagen de fondo superior */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1709891798937-fd431bd7e10b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvbmRvJTIwZGUlMjBwYW50YWxsYSUyMGRlJTIwYW1hcG9sYXxlbnwwfHwwfHx8MA=="
          alt="flores"
          className="w-full h-40 md:h-60 lg:h-72 object-cover"
        />
      </div>

      {/* Sección principal */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center h-full pt-8 md:pt-16 px-4 sm:px-8 lg:px-16">

        {/* Imagen o contenido adicional */}
        <div className="flex-1 flex items-center justify-center bg-neutral-50 w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={rossoL}
            alt="Elemento adicional"
            className="w-full max-w-lg md:max-w-xl h-auto"
          />
        </div>

        {/* Texto e información */}
        <div className="flex-1 flex items-center justify-center bg-neutral-50 w-full md:w-1/2 text-center md:text-left">
          <div className="max-w-lg md:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-dream mb-6 text-gray-800 uppercase leading-tight">
              Convertimos tus ideas en realidad <br /> a través del diseño
            </h1>
            <p className="font-century text-lg sm:text-xl md:text-2xl text-gray-600 mb-4">
              Siempre digo que el diseño llegó a mi vida para demostrarme que
              puedo crear cosas maravillosas.
            </p>
            <p className="font-century text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
              Soy Rosso, una mente con muchas ideas, un ser multifacético que
              encontró la forma de crear proyectos increíbles y así llenar el
              mundo de diseño atemporal.
            </p>
            <button className="font-century px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition">
              <Link to="/servicios">Nuestros Servicios →</Link>
            </button>
          </div>
        </div>

      </div>

      {/* Slider de servicios */}
      <ServiciosSlider />
    </div>
  );
};

export default InicioP1;
