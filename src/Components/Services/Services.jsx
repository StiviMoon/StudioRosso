
import { 
  FaPaintBrush, 
  FaCode, 
  FaCameraRetro, 
  FaChartLine, 
  FaBoxOpen, 
  FaMobileAlt, 
  FaUserFriends,
  FaArrowRight,
  FaStar
} from "react-icons/fa";
import Card from '../Card.jsx';

const Services = () => {

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-greengrove/10 rounded-full text-greengrove text-sm font-medium mb-6">
            <FaStar className="text-xs" />
            <span className="font-century">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-dream">
            Soluciones Creativas para tu Negocio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-century">
            Transformamos ideas en experiencias digitales impactantes que conectan con tu audiencia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
   
            
              <Card 
                number="01" 
                title="Branding y Estrategia" 
                description="Desarrollamos identidades de marca únicas y estrategias que conectan con tu audiencia." 
                icon={<FaPaintBrush />} 
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
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-dream">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-6 font-century">
              Cada proyecto es único. Cuéntanos sobre tus necesidades específicas y crearemos una solución personalizada.
            </p>
            <button 
              onClick={() => window.location.href = '/contacto'}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-black text-white rounded-full 
                         font-semibold hover:bg-greengrove transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl"
            >
              <span>Consulta personalizada</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-greengrove/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaStar className="text-greengrove text-xs" />
        </div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FaStar className="text-white text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Services;
