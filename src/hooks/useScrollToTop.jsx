import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Hacer scroll al top cada vez que cambie la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Scroll suave al top
    });
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta
};

export default useScrollToTop; 