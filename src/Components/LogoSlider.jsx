import React from "react";
import Slider from "react-infinite-logo-slider";

import abue from "../img/Logos/abue-min.svg";
import cafe from "../img/Logos/cafe-min.svg";
import daza from "../img/Logos/daza-min.svg";
import nimbus from "../img/Logos/nimbus-min.svg";
import vino from "../img/Logos/vino-min.svg";
import nimbu1 from "../img/Logos/nimbu1-min.svg";

const logos = [
  { src: abue, alt: "abue" },
  { src: cafe, alt: "cafe" },
  { src: daza, alt: "daza" },
  { src: nimbus, alt: "nimbus" },
  { src: vino, alt: "vino" },
  { src: nimbu1, alt: "nimbu1" },
];

const LogoSlider = React.memo(() => {
  return (
    <Slider
      width="350px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={"#c2c2c2"}
    >
      {logos.map((logo, index) => (
        <Slider.Slide key={index}>
          <img src={logo.src} alt={logo.alt} className="w-36" loading="lazy" />
        </Slider.Slide>
      ))}
    </Slider>
  );
});

export default LogoSlider;
