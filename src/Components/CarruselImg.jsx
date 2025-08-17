import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import img1 from "/img/1.jpg";
import img2 from "/img/2.jpg";
import img3 from "/img/3.png";
import img4 from "/img/4.png";
import img5 from "/img/5.png";
import img6 from "/img/6.jpg";
import img7 from "/img/7.jpg";
import img8 from "/img/8.jpg";
import img9 from "/img/9.jpg";


const servicios = [
  { src: img1, alt: "Imagen 1" },
  { src: img2, alt: "Imagen 2" },
  { src: img3, alt: "Imagen 3" },
  { src: img4, alt: "Imagen 4" },
  { src: img5, alt: "Imagen 5" },
  { src: img6, alt: "Imagen 6" },
  { src: img7, alt: "Imagen 7" },
  { src: img8, alt: "Imagen 8" },
  { src: img9, alt: "Imagen 9" },

];

const CarruselImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 5; // Mostramos 5 imágenes por sección
  const totalSlides = Math.ceil(servicios.length / imagesPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-50">
      <div className="relative overflow-hidden md:mt-8 md:mb-8">
        {/* Contenedor de imágenes */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${totalSlides * 50}%`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex flex-shrink-0 w-full"
              style={{ width: "100%" }}
            >
              {servicios
                .slice(
                  slideIndex * imagesPerSlide,
                  slideIndex * imagesPerSlide + imagesPerSlide
                )
                .map((logo, index) => (
                  <div
                    key={index}
                    className="w-1/3 h-[300px] flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
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
