import React from "react";
import Slider from "react-infinite-logo-slider";

import img1 from "../img/1.png";
import img2 from "../img/4.png";
import img3 from "../img/3.png";

const logos = [
  { src: img1, alt: "1" },
  { src: img3, alt: "2" },
  { src: img2, alt: "3" },

];

const ServiciosSlider = React.memo(() => {
  return (
    <Slider
      width="550px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={false}
    >
      {logos.map((logo, index) => (
        <Slider.Slide key={index}>
          <img src={logo.src} alt={logo.alt} className="w-[420px] h-[390px]  cursor-pointer pt-10 pb-10  transition-all duration-200 ease-in-out transform hover:scale-105  hover:translate-y-1" loading="lazy" />
        </Slider.Slide>
      ))}
    </Slider>
  );
});

export default ServiciosSlider;
