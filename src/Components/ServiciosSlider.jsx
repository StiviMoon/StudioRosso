import React from "react";
import Slider from "react-infinite-logo-slider";

import img1 from "../img/Ser/1.jpg";
import img2 from "../img/Ser/2.jpg";
import img3 from "../img/Ser/3.jpg";
import img4 from "../img/Ser/4.jpg";
import img5 from "../img/Ser/5.jpg";
import img6 from "../img/Ser/6.jpg";
import img7 from "../img/Ser/7.jpg";
import img8 from "../img/Ser/8.jpg";


const logos = [
  { src: img1, alt: "1" },
  { src: img2, alt: "2" },
  { src: img3, alt: "3" },
  { src: img4, alt: "4" },
  { src: img5, alt: "5" },
  { src: img6, alt: "6" },
  { src: img7, alt: "7" },
  { src: img8, alt: "8" },

];

const ServiciosSlider = React.memo(() => {
  return (
    <Slider
      width="420px"
      duration={50}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={false}
    >
      {logos.map((logo, index) => (
        <Slider.Slide key={index}>
          <img src={logo.src} alt={logo.alt} className="w-[450px] h-[470px] p-1 cursor-pointer pt-10 pb-10  transition-all duration-300 ease-in-out transform hover:scale-100 hover:translate-y-1" loading="lazy" />
        </Slider.Slide>
      ))}
    </Slider>
  );
});

export default ServiciosSlider;
