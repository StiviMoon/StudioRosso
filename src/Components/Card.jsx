import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Card = ({ title, description, icon, targetId, handleScroll }) => {
  return (
    <div
      onClick={() => handleScroll(targetId)}
      className="group relative w-full p-6 sm:p-8 bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl cursor-pointer
                 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                 border border-gray-100 hover:border-gray-200 overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Icon container with improved styling */}
      <div className="relative z-10 flex justify-center mb-4 sm:mb-6">
        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-crema to-primary
                        text-greengrove rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl
                        transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3">
          <div className="text-lg sm:text-2xl">
            {icon}
          </div>
        </div>
      </div>

      {/* Content with improved typography */}
      <div className="relative z-10 text-center space-y-3 sm:space-y-4">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 tracking-wide font-dream
                       group-hover:text-gray-900 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-montserrat
                     group-hover:text-gray-900 transition-colors duration-300">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="flex justify-center pt-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-greengrove/10 rounded-full flex items-center justify-center
                          group-hover:bg-greengrove/20 transition-all duration-300 transform group-hover:scale-110">
            <FaArrowRight className="text-greengrove text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </div>
        </div>
      </div>

      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent
                      group-hover:border-greengrove/20 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

// PropTypes validation
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  targetId: PropTypes.string.isRequired,
  handleScroll: PropTypes.func.isRequired,
};

export default Card;
