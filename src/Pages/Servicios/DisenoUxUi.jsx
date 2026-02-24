import { getServicioById } from "../../config/servicios.js";
import ServicioPagina from "../../Components/ServicioPagina.jsx";

const DisenoUxUi = () => {
  const servicio = getServicioById("diseno-ux-ui");
  return <ServicioPagina servicio={servicio} />;
};

export default DisenoUxUi;
