import React from 'react';
import rossoL from "../../img/Logos/rossoL-min.svg";
import ServiciosSlider from '../ServiciosSlider';
import { Link } from 'react-router-dom';

const InicioP1 = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1709891798937-fd431bd7e10b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvbmRvJTIwZGUlMjBwYW50YWxsYSUyMGRlJTIwYW1hcG9sYXxlbnwwfHwwfHx8MA=="
          alt="flores"
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row h-full pt-16">

        {/* Sección de Imagen o Contenido */}
        <div className="flex-1 flex items-center justify-center bg-neutral-50 ">
          <img
            src={rossoL}
            alt="Elemento adicional"
            className="w-full pl-14 max-w-4xl h-auto"
          />
        </div>
        <div className="flex-1 flex items-center justify-center bg-neutral-50">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-[38px] font-dream mb-6 text-gray-800 uppercase leading-tight max-w-xl">
              Convertimos tus ideas en realidad <br /> a través del diseño
            </h1>
            <p className="font-century text-xl md:text-2xl text-gray-600  ">
              Siempre digo que el diseño llegó a mi vida para demostrarme que
              puedo crear cosas maravillosas.
            </p>
            <p className="font-century text-xl md:text-2xl text-gray-600 mb-8">
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
      <ServiciosSlider/>
      
    </div>
  );
};

export default InicioP1;
