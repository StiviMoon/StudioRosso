import { getServicioById } from "../../config/servicios.js";
import ServicioPagina from "../../Components/ServicioPagina.jsx";

const FotografiaIlustracion = () => {
  const servicio = getServicioById("fotografia-ilustracion");
  return <ServicioPagina servicio={servicio} />;
};

export default FotografiaIlustracion;
