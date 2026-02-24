import { getServicioById } from "../../config/servicios.js";
import ServicioPagina from "../../Components/ServicioPagina.jsx";

const DesarrolloWeb = () => {
  const servicio = getServicioById("desarrollo-web");
  return <ServicioPagina servicio={servicio} />;
};

export default DesarrolloWeb;
