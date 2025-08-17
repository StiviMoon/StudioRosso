import React from "react";

const TarjetaComp = ({ title, description, image }) => {
  return (
    <div className=" shadow-md rounded-lg overflow-hidden border border-gray-200 font-montserrat">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 ">
        <h3 className="text-4xl font-bold mb-2 text-gray-800 font-dream">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default TarjetaComp;
