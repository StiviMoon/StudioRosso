/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gris: "#e5e5e5",
        greengrove: "#a59b20",
        crema: "#fffbf8",
        greenStem : "#c6bd56",

      },
      fontFamily: {
        century: ["Century Gothic", ],
        dream: ['Dream Orphans'],
      },
      animation: {
        marquee: "marquee 10s linear infinite",  // Animación suave de 20 segundos
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" }, // Inicio
          "100%": { transform: "translateX(-50%)" }, // Mueve a la mitad del contenido duplicado
        },
      },
    },
  },
  plugins: [],
};
