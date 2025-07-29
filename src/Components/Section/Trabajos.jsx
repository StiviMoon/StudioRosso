import React from 'react';
import ServicioComp from '../Services/ServicioComp';
import ServicioCompInverso from '../Services/Inverso';
import TarjetaComp from '../Services/TarjetaComp';

import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";

import f1 from "../../img/Servicios/f1.jpg";
import f2 from "../../img/Servicios/f2.jpg";

import id1 from "../../img/Servicios/id1.jpg";
import p1 from "../../img/Servicios/p1.png";
import p2 from "../../img/Servicios/p2.png";

import s1 from "../../img/Servicios/s1.jpg";
import s2 from "../../img/Servicios/s2.jpg";

import wb1 from "../../img/Servicios/wb1.png";
import { Link } from 'react-router-dom';

const Trabajos = () => {

 
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
      {/* Componente 1 - Branding */}
      <div id='branding'>
        <ServicioComp
          title="Branding"
          description="En Studio Rosso transformamos tu visión en una marca poderosa y auténtica. Desde el diseño del concepto hasta la creación de una identidad visual única, nuestro objetivo es reflejar la esencia de tu marca de manera coherente y atractiva. ¡Haz que tu marca se distinga!"
          buttonText1="Quiero saber más"
          buttonText2="¡Lo necesito!"
          badgeText="Nuestra especialidad"
          image1={img3}
          image2={img2}
          
        />
      </div>

      {/* Componente 2 - Packaging */}
      <div id='packaging'>
        <ServicioCompInverso
          title="Packaging"
          description="Diseñamos empaques que no solo protegen, sino que hablan por tu marca. A través de soluciones creativas y estratégicas, creamos packaging que resalta en el mercado, conecta emocionalmente con tu audiencia y eleva el valor percibido de tu producto. ¡Haz que tu empaque cautive!"
          buttonText1="Quiero saber más"
          buttonText2="¡Lo necesito!"
          badgeText="Sabemos de empaques"
          image1={p2}
          image2={p1}
        />
      </div>

      {/* Nueva Sección con Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id='ux'>
        <TarjetaComp
          title="Diseño UX/UI"
          description="Diseñamos productos y servicios que satisfacen las necesidades de tus usuarios. Nuestro objetivo es que los usuarios tengan la mejor experiencia al Interactuar con tu marca."
          image={img2}
        />
        <TarjetaComp
          title="Desarrollo Web"
          description="Transformamos tus ideas en sitios web modernos, dinámicos y totalmente personalizados. Destaca en el mundo digital con soluciones innovadoras diseñadas para impactar."
          image={wb1}
        />

      </div>

      <div className='flex justify-center'>
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center w-[225px] border-2 border-black text-black py-3 px-6 text-center rounded-full hover:bg-black hover:text-white transition-all duration-500 ease-in-out font-semibold"
        >
          ¡Contáctanos!
        </Link>
      </div>
        
      {/* Componente 3 - Social Media */}
      <div id='social'>
        <ServicioComp
          title="Social Media"
          description="En Rosso, no solo gestionamos redes sociales, sino que creamos estrategias personalizadas para que tu marca destaque. Mejoramos tu alcance y optimizamos los resultados con contenidos que capturan la atención y fomentan la interacción. ¡Lleva tu marca al siguiente nivel!"
          buttonText1="Quiero saber más"
          buttonText2="¡Lo necesito!"
          badgeText="Expertos en Social Media"
          image1={s1}
          image2={s2}
        />
      </div>

      {/* Componente 4 - Fotografía */}
      <div id='fotografia'>
        <ServicioCompInverso
          title="Fotografía"
          description="Capturamos la esencia de tu marca a través de fotografías y videos que cuentan historias visuales. Nuestra fotografía profesional resalta la identidad y calidad de tus productos, creando una conexión inmediata con tu audiencia. ¡Imágenes que hablan por tu marca!"
          buttonText1="Quiero saber más"
          buttonText2="¡Lo necesito!"
          badgeText="Expertos en fotografía"
          image1={f2}
          image2={f1}
        />
      </div>

      {/* Componente 5 - Identidad Visual */}
      <div id='identidad'>
        <ServicioComp
          title="Identidad Visual"
          description="En Studio Rosso diseñamos identidades visuales que transmiten claramente la esencia de tu marca. Desde el logo hasta cada detalle gráfico, trabajamos para que tu marca sea memorable, se distinga en el mercado y tenga un impacto duradero. ¡Construye una identidad visual que deje huella!"
          buttonText1="Quiero saber más"
          buttonText2="¡Lo necesito!"
          badgeText="Expertos en branding"
          image1={id1}
          image2={img4}
        />
      </div>
    </div>
  );
};

export default Trabajos;
