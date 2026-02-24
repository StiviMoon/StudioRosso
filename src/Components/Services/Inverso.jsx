import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServicioCompInverso = ({
  title,
  description,
  buttonText1,
  buttonText2,
  image1,
  image2,
  servicePath,
}) => {
  const saberMasTo = servicePath ?? "/contacto";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Columna derecha: Imágenes */}
      <div className="relative w-full h-[300px] md:h-[480px] rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <img
            src={image2}
            alt={`${title} - Vista previa`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Columna izquierda */}
      <div className="flex flex-col justify-between gap-6">
        <h2 className="text-5xl md:text-7xl font-bold text-black font-dream">
          {title}
        </h2>
        <p className="mt-4 text-gray-800 font-montserrat text-lg">{description}</p>
        <div className="relative w-full h-[150px] md:h-[230px] rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <img
            src={image1}
            alt={`${title} - Vista previa`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="mt-6 flex flex-row items-center flex-wrap gap-3 justify-center">
          <Link
            to={saberMasTo}
            className="border-2 border-black text-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition-all duration-500 ease-in-out font-semibold"
          >
            {buttonText1}
          </Link>
          {buttonText2 && (
            <Link
              to="/contacto"
              className="border-2 border-greengrove text-greengrove py-2 px-6 rounded-full hover:bg-greengrove hover:text-white transition-all duration-500 ease-in-out font-semibold"
            >
              {buttonText2}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

ServicioCompInverso.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText1: PropTypes.string.isRequired,
  buttonText2: PropTypes.string,
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  servicePath: PropTypes.string,
};

export default ServicioCompInverso;
