import React from 'react';
import { 
  FaPaintBrush, 
  FaCode, 
  FaCameraRetro, 
  FaChartLine, 
  FaBoxOpen, 
  FaMobileAlt, 
  FaUserFriends 
} from "react-icons/fa";
import Card from '../Card.jsx';

const Services = () => {

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId); // Buscar el elemento por ID
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll suave
    }
  };

  return (
    <div className="p-10 flex flex-col items-center">
      {/* Primera fila */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-screen-lg">
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
      </div>

      {/* Segunda fila */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 w-full max-w-screen-lg">
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
      </div>

      {/* Tercera fila */}
      <div className="flex justify-center mt-12 w-full">
        <Card 
          number="07" 
          title="Fotografía e Ilustración" 
          description="Producción de contenido visual profesional y creativo para tu marca." 
          icon={<FaCameraRetro />}
          targetId="fotografia" 
          handleScroll={handleScroll}  
        />
      </div>
    </div>
  );
};

export default Services;
