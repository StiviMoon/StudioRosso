import { useParams, Navigate } from "react-router-dom";
import { getServicioById } from "../config/servicios.js";
import ServicioPagina from "../Components/ServicioPagina.jsx";

/**
 * Página dinámica por id (ej. /servicios/desarrollo-web).
 * Si el id no existe, redirige a /servicios.
 */
const ServicioDetalle = () => {
  const { id } = useParams();
  const servicio = getServicioById(id);

  if (!servicio) {
    return <Navigate to="/servicios" replace />;
  }

  return <ServicioPagina servicio={servicio} />;
};

export default ServicioDetalle;
