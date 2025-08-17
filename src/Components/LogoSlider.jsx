import React, { useState, useEffect } from "react";
import Slider from "react-infinite-logo-slider";
import './LogoSlider.css';

import abue from "/img/Logos/abue-min.svg";
import cafe from "/img/Logos/cafe-min.svg";
import daza from "/img/Logos/daza-min.svg";
import nimbus from "/img/Logos/nimbus-min.svg";
import vino from "/img/Logos/vino-min.svg";
import nimbu1 from "/img/Logos/nimbu1-min.svg";

const logos = [
  { src: abue, alt: "abue" },
  { src: cafe, alt: "cafe" },
  { src: daza, alt: "daza" },
  { src: nimbus, alt: "nimbus" },
  { src: vino, alt: "vino" },
  { src: nimbu1, alt: "nimbu1" },
];

const LogoSlider = React.memo(function LogoSlider() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Esperar a que todas las imágenes se carguen antes de mostrar el slider
    const imagePromises = logos.map((logo) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.src = logo.src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, []);

  // Si las imágenes no están cargadas, mostrar un placeholder
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="flex space-x-8">
          {logos.map((logo, index) => (
            <div key={index} className="w-36 h-20 bg-gray-200 rounded animate-pulse logo-slider-placeholder"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Slider
        width="350px"
        duration={80} // Duración muy lenta para movimiento ultra suave
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={false}
        className="logo-slider"
      >
        {logos.map((logo, index) => (
          <Slider.Slide key={index}>
            <div className="flex justify-center items-center p-4">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-36 h-auto object-contain transition-opacity duration-300"
                style={{ 
                  imageRendering: 'auto',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  willChange: 'transform' // Optimización de rendimiento
                }}
              />
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
});

export default LogoSlider;
