import React from 'react';
import { 
  FaPaintBrush, 
  FaCode, 
  FaCameraRetro, 
  FaChartLine, 
  FaBoxOpen, 
  FaMobileAlt, 
  FaUserFriends, 
  FaLightbulb 
} from "react-icons/fa";
import Card from '../Card.jsx';

const Services = () => {
  return (
    <div className="flex flex-wrap  justify-center p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Branding y Estrategia de Marca */}
        <Card 
          number="01" 
          title="Branding y Estrategia" 
          description="Desarrollamos identidades de marca únicas y estrategias que conectan con tu audiencia." 
          icon={<FaPaintBrush />} 
        />

        {/* Identidad Visual y Packaging */}
        <Card 
          number="02" 
          title="Identidad Visual & Packaging" 
          description="Creamos sistemas visuales y empaques innovadores que reflejan tu identidad de marca." 
          icon={<FaBoxOpen />} 
        />

        {/* Diseño UX/UI */}
        <Card 
          number="03" 
          title="Diseño UX/UI" 
          description="Diseñamos interfaces intuitivas y experiencias centradas en el usuario para web y apps." 
          icon={<FaUserFriends />} 
        />

        {/* Desarrollo Web */}
        <Card 
          number="04" 
          title="Desarrollo Web" 
          description="Construimos sitios web modernos, responsivos y optimizados para tu negocio." 
          icon={<FaCode />} 
        />

        {/* Marketing Digital */}
        <Card 
          number="05" 
          title="Marketing Digital & SEO" 
          description="Mejoramos tu visibilidad en internet con estrategias SEO y campañas publicitarias." 
          icon={<FaChartLine />} 
        />

        {/* Social Media */}
        <Card 
          number="06" 
          title="Social Media & Contenidos" 
          description="Gestionamos redes sociales y creamos contenido visual atractivo para tu audiencia." 
          icon={<FaMobileAlt />} 
        />

        {/* Fotografía e Ilustración */}
        <Card 
          number="07" 
          title="Fotografía & Ilustración" 
          description="Producción de contenido visual profesional y creativo para tu marca." 
          icon={<FaCameraRetro />} 
        />

        {/* Consultoría Creativa */}
        <Card 
          number="08" 
          title="Consultoría Creativa" 
          description="Innovamos con soluciones digitales personalizadas para transformar tu negocio." 
          icon={<FaLightbulb />} 
        />
      </div>
    </div>
  );
};

export default Services;
