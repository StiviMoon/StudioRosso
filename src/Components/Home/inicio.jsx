
import rossoL from "../../img/Logos/rossoL-min.svg";
import ServiciosSlider from '../ServiciosSlider';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiStar, FiCheckCircle } from 'react-icons/fi';

const InicioP1 = () => {
  return (
    <div className="relative">
      {/* Hero Section with Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1709891798937-fd431bd7e10b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvbmRvJTIwZGUlMjBwYW50YWxsYSUyMGRlJTIwYW1hcG9sYXxlbnwwfHwwfHx8MA=="
            alt="Studio Rosso Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-12 sm:py-16 lg:py-20">
            
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <FiStar className="text-greengrove text-sm sm:text-base" />
                <span className="text-xs sm:text-sm font-medium">Fundado por expertos creativos</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-dream leading-tight">
                  Creamos
                  <span className="block text-white pb-2">Experiencias</span>
                  <span className="block text-white ">Digitales Únicas</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-century text-gray-200 leading-relaxed max-w-2xl">
                  Somos un estudio creativo fundado por expertos en desarrollo y diseño. 
                  Transformamos ideas en experiencias digitales que conectan, inspiran y generan resultados.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <FiCheckCircle className="text-greengrove text-lg sm:text-xl flex-shrink-0" />
                  <span className="font-century text-sm sm:text-base">Desarrollo Web Full Stack</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <FiCheckCircle className="text-greengrove text-lg sm:text-xl flex-shrink-0" />
                  <span className="font-century text-sm sm:text-base">Diseño Visual Profesional</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <FiCheckCircle className="text-greengrove text-lg sm:text-xl flex-shrink-0" />
                  <span className="font-century text-sm sm:text-base">Branding & Identidad</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <FiCheckCircle className="text-greengrove text-lg sm:text-xl flex-shrink-0" />
                  <span className="font-century text-sm sm:text-base">Estrategia Digital</span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
                <Link 
                  to="/servicios"
                  className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-greengrove text-white font-semibold rounded-full hover:bg-greengrove/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <span>Explorar Servicios</span>
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
                  <FiPlay className="mr-2" />
                  <span>Ver Nuestro Trabajo</span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-6 pt-6 sm:pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-greengrove">50+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-greengrove">100%</div>
                  <div className="text-xs sm:text-sm text-gray-300">Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-greengrove">2</div>
                  <div className="text-xs sm:text-sm text-gray-300">Fundadores</div>
                </div>
              </div>
            </div>

            {/* Right Column - Logo/Visual */}
            <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-greengrove/30 to-transparent rounded-full blur-3xl"></div>
                
                {/* Logo Container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                  <img
                    src={rossoL}
                    alt="Studio Rosso Logo"
                    className="w-full h-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Moved to bottom with proper spacing */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="bg-gradient-to-b from-transparent to-neutral-50">
        <ServiciosSlider />
      </div>
    </div>
  );
};

export default InicioP1;
