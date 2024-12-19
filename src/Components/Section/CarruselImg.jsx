import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import img1 from "../../img/1.png";
import img2 from "../../img/4.png";
import img3 from "../../img/3.png";

const logos = [
  { src: img1, alt: "Imagen 1" },
  { src: img2, alt: "Imagen 2" },
  { src: img3, alt: "Imagen 3" },
  { src: img1, alt: "Imagen 4" },
  { src: img2, alt: "Imagen 5" },
  { src: img3, alt: "Imagen 6" },
];

const CarruselImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesPerSlide = 6; // Mostrar 3 imágenes por vez

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - imagesPerSlide : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= logos.length - imagesPerSlide ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-50">
      {/* Carrusel */}
      <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden">
        {/* Contenedor de imágenes */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / imagesPerSlide}%)`,
            width: `${(logos.length / imagesPerSlide) * 100}%`,
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-1/4 flex-shrink-0 h-full flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-[450px] h-[205px] object-cover md:object-cover md:h-[350px] md:w-[650px] max-h-full"
              />
            </div>
          ))}
        </div>

        {/* Flechas de navegación */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none z-10"
        >
          <FiArrowLeft className="text-gray-700" size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none z-10"
        >
          <FiArrowRight className="text-gray-700" size={24} />
        </button>
   

      </div>
    </section>
  );
};

export default CarruselImg;
