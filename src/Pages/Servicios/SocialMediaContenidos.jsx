import { getServicioById } from "../../config/servicios.js";
import ServicioPagina from "../../Components/ServicioPagina.jsx";

const SocialMediaContenidos = () => {
  const servicio = getServicioById("social-media-contenidos");
  return <ServicioPagina servicio={servicio} />;
};

export default SocialMediaContenidos;
