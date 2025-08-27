
import { FaArrowRight, FaStar, FaPalette, FaBoxOpen, FaUserFriends, FaCode, FaChartLine, FaMobileAlt, FaCameraRetro } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { navigateToTop } from '../../utils/navigation.js';
import Card from '../Card.jsx';

const Services = () => {

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  return (
    <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-greengrove/10 rounded-full text-greengrove text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <FaStar className="text-xs" />
            <span className="font-montserrat">Nuestros Servicios</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-dream px-4">
            Soluciones Creativas para tu Negocio
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto font-montserrat px-4">
            Transformamos ideas en experiencias digitales impactantes que conectan con tu audiencia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">


              <Card
                number="01"
                title="Branding y Estrategia"
                description="Desarrollamos identidades de marca únicas y estrategias que conectan con tu audiencia."
                icon={<FaPalette />}
                targetId="branding"
                handleScroll={handleScroll}
              />

              <Card
                number="02"
                title="Identidad Visual & Packaging"
                description="Creamos sistemas visuales y empaques innovadores que reflejan tu identidad de marca."
                icon={<FaBoxOpen />}
                targetId="identidad"
                handleScroll={handleScroll}
              />


              <Card
                number="03"
                title="Diseño UX/UI"
                description="Diseñamos interfaces intuitivas y experiencias centradas en el usuario para web y apps."
                icon={<FaUserFriends />}
                targetId="ux"
                handleScroll={handleScroll}
              />




              <Card
                number="04"
                title="Desarrollo Web"
                description="Construimos sitios web modernos, responsivos y optimizados para tu negocio."
                icon={<FaCode />}
                targetId="dw"
                handleScroll={handleScroll}
              />


              <Card
                number="05"
                title="Marketing Digital & SEO"
                description="Mejoramos tu visibilidad en internet con estrategias SEO y campañas publicitarias."
                icon={<FaChartLine />}
                targetId="marketing"
                handleScroll={handleScroll}
              />


              <Card
                number="06"
                title="Social Media & Contenidos"
                description="Gestionamos redes sociales y creamos contenido visual atractivo para tu audiencia."
                icon={<FaMobileAlt />}
                targetId="social"
                handleScroll={handleScroll}
              />




              <Card
                number="07"
                title="Fotografía e Ilustración"
                description="Producción de contenido visual profesional y creativo para tu marca."
                icon={<FaCameraRetro />}
                targetId="fotografia"
                handleScroll={handleScroll}
              />


        </div>
        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg mx-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-dream">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4 sm:mb-6 font-montserrat">
              Cada proyecto es único. Cuéntanos sobre tus necesidades específicas y crearemos una solución personalizada.
            </p>
            <button
              onClick={() => navigateToTop(navigate, '/contacto')}
              className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full
                       font-semibold hover:bg-greengrove transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <span>Consulta personalizada</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-12 sm:top-20 left-4 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 bg-greengrove/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaStar className="text-greengrove text-xs" />
        </div>
        <div className="absolute bottom-12 sm:bottom-20 right-4 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaStar className="text-white text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Services;
