import React from "react";

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

const LogoSliderCSS = React.memo(function LogoSliderCSS() {
  return (
    <div className="relative overflow-hidden bg-white/50 rounded-lg py-8">
      <div className="flex animate-scroll">
        {/* Primera fila de logos */}
        {logos.map((logo, index) => (
          <div key={`first-${index}`} className="flex-shrink-0 mx-8">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="w-36 h-auto object-contain"
              style={{ 
                imageRendering: 'auto',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            />
          </div>
        ))}
        {/* Segunda fila de logos (duplicada para scroll infinito) */}
        {logos.map((logo, index) => (
          <div key={`second-${index}`} className="flex-shrink-0 mx-8">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="w-36 h-auto object-contain"
              style={{ 
                imageRendering: 'auto',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default LogoSliderCSS; 