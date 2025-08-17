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
        greenStem : "#e6dd73",
        primary: "#EDE9D5"

      },
      fontFamily: {
        montserrat: ["Montserrat", "Arial", "sans-serif"],
        dream: ['Dream Orphans', 'Georgia', 'serif'],
      },
      animation: {
        marquee: "marquee 10s linear infinite",  // Animación suave de 20 segundos
        scroll: "scroll 30s linear infinite", // Nueva animación para logos más suave
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" }, // Inicio
          "100%": { transform: "translateX(-50%)" }, // Mueve a la mitad del contenido duplicado
        },
        scroll: {
          "0%": { transform: "translateX(0)" }, // Inicio
          "100%": { transform: "translateX(-50%)" }, // Mueve a la mitad del contenido duplicado
        },
      },
    },
  },
  plugins: [],
};
