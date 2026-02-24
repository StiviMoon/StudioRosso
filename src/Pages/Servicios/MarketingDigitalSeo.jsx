import { getServicioById } from "../../config/servicios.js";
import ServicioPagina from "../../Components/ServicioPagina.jsx";

const MarketingDigitalSeo = () => {
  const servicio = getServicioById("marketing-digital-seo");
  return <ServicioPagina servicio={servicio} />;
};

export default MarketingDigitalSeo;
