import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="w-full sm:w-80 md:w-96 bg-white shadow-lg rounded-2xl cursor-pointer p-8 space-y-8 relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:translate-y-1 hover:shadow-violet-500/30">
      {/* Icono centrado */}
     <div className='flex flex-wrap justify-center'>
        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-violet-100 text-violet-600 rounded-xl shadow-lg mb-4 transition-all duration-200 ease-in-out transform hover:scale-110">
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
