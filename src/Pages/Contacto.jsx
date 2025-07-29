import React from 'react';
import Formulario from '../Components/Formulario.jsx';
import banner from '../img/banner.jpg';

const Contacto = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight font-dream">
                  Nos inspiran las
                  <span className="block  ">historias</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-century">
                  Cuéntanos todo sobre la tuya y juntos crearemos algo extraordinario
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-6">
                <div className="flex items-center space-x-3 text-gray-200">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 font-century">Email</p>
                    <p className="font-semibold text-sm font-century">studiorossoagency@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-200">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 font-century">Teléfono</p>
                    <p className="font-semibold text-sm font-century">+57 3194873667</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-200">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 font-century">Ubicación</p>
                    <p className="font-semibold text-sm font-century">Colombia</p>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="pt-4">
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 font-century">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Respuesta en 24h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Proyectos completados</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-2xl">
                <Formulario />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
