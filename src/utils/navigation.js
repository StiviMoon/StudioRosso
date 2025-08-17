// Función de utilidad para navegar y hacer scroll al top
export const navigateToTop = (navigate, path) => {
  // Hacer scroll al top
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  
  // Navegar a la ruta
  navigate(path);
};

// Función para hacer scroll al top
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}; 