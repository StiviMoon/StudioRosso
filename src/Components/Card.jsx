import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Card = ({ title, description, icon, targetId, handleScroll }) => {
  return (
    <div
      onClick={() => handleScroll(targetId)}
      className="group relative w-full sm:w-80 md:w-80 p-8 bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl cursor-pointer 
                 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                 border border-gray-100 hover:border-gray-200 overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Icon container with improved styling */}
      <div className="relative z-10 flex justify-center mb-6">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-crema to-primary 
                        text-greengrove rounded-2xl shadow-lg group-hover:shadow-xl 
                        transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3">
          <div className="text-2xl">
            {icon}
          </div>
        </div>
      </div>

      {/* Content with improved typography */}
      <div className="relative z-10 text-center space-y-4">
        <h2 className="font-bold text-xl sm:text-2xl text-gray-800 tracking-wide font-dream 
                       group-hover:text-gray-900 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed font-century 
                     group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Arrow indicator */}
        <div className="flex justify-center pt-2">
          <div className="w-8 h-8 bg-greengrove/10 rounded-full flex items-center justify-center
                          group-hover:bg-greengrove/20 transition-all duration-300 transform group-hover:scale-110">
            <FaArrowRight className="text-greengrove text-sm group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                      group-hover:border-greengrove/20 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default Card;
