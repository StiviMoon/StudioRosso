import React from 'react';

const Card = ({ title, description, icon, targetId, handleScroll }) => {
  return (
    <div
      onClick={() => handleScroll(targetId)} // Llama a handleScroll con el targetId
      className="w-full sm:w-80 md:w-80 p-10 bg-white shadow-lg rounded-2xl cursor-pointer space-y-6 relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:translate-y-1 hover:shadow-crema"
    >
      {/* Icono centrado */}
      <div className="flex flex-wrap justify-center">
        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-crema text-greengrove rounded-xl shadow-lg mb-4 transition-all duration-200 ease-in-out transform hover:scale-110">
          {icon}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="text-center space-y-2">
        <h2 className="font-semibold text-xl sm:text-2xl text-gray-800 tracking-wide font-century">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed font-century">{description}</p>
      </div>
    </div>
  );
};

export default Card;
