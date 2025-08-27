import React from "react";
import Slider from "react-infinite-logo-slider";

// Las imágenes optimizadas WebP
const imagePaths = [
  "/img/Ser/optimized/1.webp",
  "/img/Ser/optimized/2.webp",
  "/img/Ser/optimized/3.webp",
  "/img/Ser/optimized/4.webp",
  "/img/Ser/optimized/5.webp",
  "/img/Ser/optimized/6.webp",
  "/img/Ser/optimized/7.webp",
  "/img/Ser/optimized/8.webp",
];

const ServiciosSlider = React.memo(function ServiciosSlider() {
  return (
    <Slider
      width="400px"
      duration={50}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={false}
    >
      {Array.from({ length: 8 }, (_, index) => (
        <Slider.Slide key={index}>
          <div className="w-[400px] h-[400px] p-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1">
            <img
              src={imagePaths[index]}
              alt={`Servicio ${index + 1} - Studio Rosso Agency`}
              className="w-full h-full object-cover rounded-lg carousel-image"
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        </Slider.Slide>
      ))}
    </Slider>
  );
});

export default ServiciosSlider;
