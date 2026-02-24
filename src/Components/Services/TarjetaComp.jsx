import { Link } from "react-router-dom";

const TarjetaComp = ({ title, description, image, servicePath }) => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden border border-gray-200 font-montserrat flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-4xl font-bold mb-2 text-gray-900 font-dream">{title}</h3>
        <p className="text-gray-800 text-base flex-1">{description}</p>
        {servicePath && (
          <Link
            to={servicePath}
            className="mt-4 inline-flex justify-center border-2 border-black text-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition-all duration-500 ease-in-out font-semibold text-sm"
          >
            Quiero saber más
          </Link>
        )}
      </div>
    </div>
  );
};

export default TarjetaComp;
