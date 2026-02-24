import { getServicioById } from "../../config/servicios.js";
import ServicioPagina from "../../Components/ServicioPagina.jsx";

const IdentidadVisualPackaging = () => {
  const servicio = getServicioById("identidad-visual-packaging");
  return <ServicioPagina servicio={servicio} />;
};

export default IdentidadVisualPackaging;
