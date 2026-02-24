/**
 * Listado de servicios: usado en /servicios y en /servicios/:id
 * id = slug para la URL (ej. /servicios/desarrollo-web)
 */
import {
  FaPalette,
  FaBoxOpen,
  FaUserFriends,
  FaCode,
  FaChartLine,
  FaMobileAlt,
  FaCameraRetro,
} from "react-icons/fa";

export const SERVICIOS = [
  {
    id: "branding-y-estrategia",
    title: "Branding y Estrategia",
    shortTitle: "Branding y Estrategia",
    description:
      "Desarrollamos identidades de marca únicas y estrategias que conectan con tu audiencia. Definimos posicionamiento, naming y guías de marca para que tu negocio sea memorable.",
    icon: FaPalette,
    number: "01",
    features: [
      "Posicionamiento de marca y naming",
      "Identidad visual (logo, paleta, tipografía)",
      "Guía de marca y manual de uso",
      "Estrategia de comunicación",
    ],
    image: "/img/optimized/3.webp",
  },
  {
    id: "identidad-visual-packaging",
    title: "Identidad Visual & Packaging",
    shortTitle: "Identidad Visual & Packaging",
    description:
      "Creamos sistemas visuales y empaques innovadores que reflejan tu identidad de marca. Logos, papelería, envases y todo lo que tu producto necesita para destacar.",
    icon: FaBoxOpen,
    number: "02",
    features: [
      "Diseño de logotipo y variantes",
      "Papelería corporativa",
      "Diseño de empaques y etiquetas",
      "Fotomontaje y visualización 3D",
    ],
    image: "/img/Servicios/optimized/p1.webp",
  },
  {
    id: "diseno-ux-ui",
    title: "Diseño UX/UI",
    shortTitle: "Diseño UX/UI",
    description:
      "Diseñamos interfaces intuitivas y experiencias centradas en el usuario para web y apps. Wireframes, prototipos y diseños listos para desarrollar.",
    icon: FaUserFriends,
    number: "03",
    features: [
      "Research y análisis de usuarios",
      "Wireframes y arquitectura de información",
      "Prototipos interactivos",
      "Diseño visual (UI) y sistemas de diseño",
    ],
    image: "/img/optimized/2.webp",
  },
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    shortTitle: "Desarrollo Web",
    description:
      "Construimos sitios web modernos, responsivos y optimizados para tu negocio. Desde landing pages hasta plataformas a medida.",
    icon: FaCode,
    number: "04",
    features: [
      "Landing pages y sitios corporativos",
      "Tiendas online y e-commerce",
      "Aplicaciones web a medida",
      "Mantenimiento y optimización",
    ],
    image: "/img/Servicios/optimized/webs.avif",
    projects: [
      {
        name: "Torhann Ingeniería S.A.S.",
        url: "https://torhanningenieriasas.com/",
        description:
          "Sitio corporativo para empresa de ingeniería civil, ambiental y agroindustrial en Colombia. Soluciones innovadoras con estándares internacionales.",
        image: "/img/Servicios/optimized/torhann.png",
      },
      {
        name: "M.J. Newell Homes",
        url: "https://www.mjnewellhomes.com/",
        description:
          "Web para constructor de viviendas en Florida. Modelos de casas, Rent to Own, citas y recursos para familias.",
        image: "/img/Servicios/optimized/mjnewell.png",
      },
      {
        name: "Standard Land Development",
        url: "https://www.standardlanddevelopment.com/",
        description:
          "Plataforma para creadores de oportunidades de vivienda. Impacto, programas y contacto para familias en USA.",
        image: "/img/Servicios/optimized/sld.png",
      },
    ],
  },
  {
    id: "marketing-digital-seo",
    title: "Marketing Digital & SEO",
    shortTitle: "Marketing Digital & SEO",
    description:
      "Mejoramos tu visibilidad en internet con estrategias SEO y campañas publicitarias. Tráfico cualificado y conversiones reales.",
    icon: FaChartLine,
    number: "05",
    features: [
      "Auditoría SEO y posicionamiento",
      "Campañas en Google y redes",
      "Contenido optimizado para buscadores",
      "Análisis y reportes de resultados",
    ],
    image: "/img/optimized/4.webp",
  },
  {
    id: "social-media-contenidos",
    title: "Social Media & Contenidos",
    shortTitle: "Social Media & Contenidos",
    description:
      "Gestionamos redes sociales y creamos contenido visual atractivo para tu audiencia. Community management y contenido que engancha.",
    icon: FaMobileAlt,
    number: "06",
    features: [
      "Estrategia de redes sociales",
      "Community management",
      "Contenido gráfico y audiovisual",
      "Calendario editorial y métricas",
    ],
    image: "/img/Servicios/optimized/s1.webp",
  },
  {
    id: "fotografia-ilustracion",
    title: "Fotografía e Ilustración",
    shortTitle: "Fotografía e Ilustración",
    description:
      "Producción de contenido visual profesional y creativo para tu marca. Fotografía de producto, retratos y ilustraciones a medida.",
    icon: FaCameraRetro,
    number: "07",
    features: [
      "Fotografía de producto",
      "Retratos y fotografía corporativa",
      "Ilustración digital y vectorial",
      "Dirección de arte y sesiones",
    ],
    image: "/img/Servicios/optimized/f1.webp",
  },
];

export const getServicioById = (id) => SERVICIOS.find((s) => s.id === id) ?? null;
