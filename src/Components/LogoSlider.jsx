import React from "react";
import Slider from "react-infinite-logo-slider";
import "./LogoSlider.css";

/** Logos en public/img/Logos. Para agregar uno nuevo: añade { src: "/img/Logos/nombre.png", alt: "nombre" } */
const logos = [
  { src: "/img/Logos/abue-min.svg", alt: "abue" },
  { src: "/img/Logos/cafe-min.svg", alt: "cafe" },
  { src: "/img/Logos/daza-min.svg", alt: "daza" },
  { src: "/img/Logos/nimbus-min.svg", alt: "nimbus" },
  { src: "/img/Logos/vino-min.svg", alt: "vino" },
  { src: "/img/Logos/nimbu1-min.svg", alt: "nimbu1" },
  { src: "/img/Logos/lacasaclub.png", alt: "La Casa Club" },
  { src: "/img/Logos/landstrust.png", alt: "Landstrust" },
  { src: "/img/Logos/learntobuild.png", alt: "Learn to Build" },
  { src: "/img/Logos/limpo.png", alt: "Limpo" },
  { src: "/img/Logos/limpolla.png", alt: "Limpolla" },
  { src: "/img/Logos/torhann.png", alt: "Torhann" },
];

const LogoSlider = React.memo(function LogoSlider() {
  return (
    <section
      className="relative py-8 overflow-hidden logo-slider-section"
      aria-label="Clientes y marcas que confían en Studio Rosso"
    >
      <Slider
        width="350px"
        duration={45}
        pauseOnHover={false}
        blurBorders={false}
        blurBorderColor={false}
      >
        {logos.map((logo, index) => (
          <Slider.Slide key={`${logo.alt}-${index}`}>
            <div className="flex justify-center items-center p-4 pointer-events-none select-none">
              <img
                src={logo.src}
                alt={logo.alt}
                className="logo-slider-img"
                width="140"
                height="60"
                loading="lazy"
                decoding="async"
                draggable={false}
                fetchPriority="low"
              />
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </section>
  );
});

export default LogoSlider;
