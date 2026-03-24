/**
 * SERVICIOS — listado central de servicios de Studio Rosso.
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
  FaRobot,
} from "react-icons/fa";

export const SERVICIOS = [
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    shortTitle: "Desarrollo Web",
    description:
      "Construimos sitios y aplicaciones web rápidas, modernas y escalables. Desde landing pages de alto impacto hasta plataformas complejas a medida con las últimas tecnologías.",
    icon: FaCode,
    number: "01",
    features: [
      "Landing pages y sitios corporativos",
      "Aplicaciones web y plataformas a medida",
      "E-commerce y tiendas online",
      "Optimización de rendimiento y SEO técnico",
    ],
    image: "/img/Servicios/optimized/webs.avif",
    projects: [
      {
        name: "Torhann Ingeniería S.A.S.",
        url: "https://torhanningenieriasas.com/",
        description:
          "Sitio corporativo para empresa de ingeniería civil, ambiental y agroindustrial en Colombia. Soluciones innovadoras con estándares internacionales.",
        image: "/img/Servicios/optimized/torhann.webp",
      },
      {
        name: "M.J. Newell Homes",
        url: "https://www.mjnewellhomes.com/",
        description:
          "Web para constructor de viviendas en Florida. Modelos de casas, Rent to Own, citas y recursos para familias.",
        image: "/img/Servicios/optimized/mjnewell.webp",
      },
      {
        name: "Standard Land Development",
        url: "https://www.standardlanddevelopment.com/",
        description:
          "Plataforma para creadores de oportunidades de vivienda. Impacto, programas y contacto para familias en USA.",
        image: "/img/Servicios/optimized/sld.webp",
      },
    ],
  },
  {
    id: "automatizaciones-ia",
    title: "Automatizaciones & IA",
    shortTitle: "Automatizaciones & IA",
    description:
      "Automatizamos los procesos repetitivos de tu negocio e integramos inteligencia artificial para que tu equipo se enfoque en lo que realmente importa. Flujos inteligentes, chatbots y más.",
    icon: FaRobot,
    number: "02",
    features: [
      "Flujos de trabajo automatizados (n8n, Make, Zapier)",
      "Chatbots e IA conversacional para atención al cliente",
      "Integración de APIs y sistemas externos",
      "Reportes automáticos y dashboards inteligentes",
    ],
    image: "/img/optimized/2.webp",
  },
  {
    id: "branding-y-estrategia",
    title: "Branding y Estrategia",
    shortTitle: "Branding y Estrategia",
    description:
      "Desarrollamos identidades de marca únicas y estrategias que conectan con tu audiencia. Definimos posicionamiento, naming y guías de marca para que tu negocio sea memorable e inconfundible.",
    icon: FaPalette,
    number: "03",
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
      "Creamos sistemas visuales y empaques innovadores que reflejan tu identidad de marca. Logos, papelería, envases y todo lo que tu producto necesita para destacar en cualquier estante.",
    icon: FaBoxOpen,
    number: "04",
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
      "Diseñamos interfaces intuitivas y experiencias centradas en el usuario para web y apps. Wireframes, prototipos y diseños listos para desarrollar que convierten visitas en clientes.",
    icon: FaUserFriends,
    number: "05",
    features: [
      "Research y análisis de usuarios",
      "Wireframes y arquitectura de información",
      "Prototipos interactivos en Figma",
      "Diseño visual (UI) y sistemas de diseño",
    ],
    image: "/img/optimized/2.webp",
  },
  {
    id: "marketing-digital-seo",
    title: "Marketing Digital & SEO",
    shortTitle: "Marketing Digital & SEO",
    description:
      "Mejoramos tu visibilidad en internet con estrategias SEO y campañas publicitarias. Tráfico orgánico cualificado, más conversiones y resultados que puedes medir mes a mes.",
    icon: FaChartLine,
    number: "06",
    features: [
      "Auditoría SEO y posicionamiento orgánico",
      "Campañas en Google Ads y redes sociales",
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
      "Gestionamos tus redes sociales y creamos contenido visual que engancha a tu audiencia. Estrategia, community management y contenido que convierte seguidores en clientes.",
    icon: FaMobileAlt,
    number: "07",
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
      "Producción de contenido visual profesional y creativo para tu marca. Fotografía de producto, retratos corporativos e ilustraciones que hacen que tu marca destaque.",
    icon: FaCameraRetro,
    number: "08",
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
