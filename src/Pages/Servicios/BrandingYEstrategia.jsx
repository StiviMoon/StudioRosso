import { getServicioById } from "../../config/servicios.js";
import ServicioPagina from "../../Components/ServicioPagina.jsx";

const BrandingYEstrategia = () => {
  const servicio = getServicioById("branding-y-estrategia");
  return <ServicioPagina servicio={servicio} />;
};

export default BrandingYEstrategia;
