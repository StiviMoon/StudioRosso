import React from 'react';
import Services from '../Components/Services/Services.jsx';
import CarruselImg from '../Components/CarruselImg.jsx';
import Trabajos from '../Components/Section/Trabajos.jsx';
import { FaArrowDown, FaStar } from 'react-icons/fa';

const Servicios = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative py-20 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-wide font-dream leading-tight">
                Nuestros{" "}
                <span className="text-greengrove relative">
                  Servicios
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-greengrove/30 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-century leading-relaxed">
                Soluciones digitales creativas diseñadas para potenciar tu marca y mejorar la experiencia de tus clientes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-greengrove font-dream">50+</div>
                <div className="text-gray-600 font-century">Proyectos Completados</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-greengrove font-dream">100%</div>
                <div className="text-gray-600 font-century">Clientes Satisfechos</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-greengrove font-dream">24h</div>
                <div className="text-gray-600 font-century">Tiempo de Respuesta</div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center pt-12">
              <div className="flex flex-col items-center space-y-2 text-gray-400 animate-bounce">
                <FaArrowDown className="text-xl" />
                <span className="text-sm font-century">Descubre nuestros servicios</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-greengrove/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaStar className="text-greengrove text-sm" />
        </div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaStar className="text-white text-xs" />
        </div>
      </div>

      {/* Services Section */}
      <div className="relative max-w-7xl mx-auto">
        <Services />
      </div>

      {/* Portfolio Section */}
      <div className="relative py-20 max-w-7xl mx-auto">
        <CarruselImg />
      </div>

      {/* Work Section */}
      <div className="relative max-w-7xl mx-auto">
        <Trabajos />
      </div>

      {/* Call to Action */}
      <div className="relative py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-dream">
              ¿Listo para transformar tu marca?
            </h2>
            <p className="text-xl text-gray-300 font-century">
              Cuéntanos sobre tu proyecto y juntos crearemos algo extraordinario
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-greengrove text-white rounded-full font-semibold 
                                 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 
                                 shadow-lg hover:shadow-xl">
                Iniciar proyecto
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold 
                                 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                Ver portafolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
