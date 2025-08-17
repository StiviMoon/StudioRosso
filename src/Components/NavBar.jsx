import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import logo from '/img/Logos/rossoL-min.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);  
  const location = useLocation();

  // Función para verificar si la ruta es activa
  const isActive = (path) => location.pathname === path;

  // Función para hacer scroll al top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  // Función para cerrar menú y hacer scroll al top
  const handleNavClick = () => {
    setMenuOpen(false);
    scrollToTop();
  };

  // Effect para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`font-montserrat fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-primary'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-black group">
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2 hover:text-greengrove transition-colors duration-300">
            <img src={logo} alt="Studio Rosso" className="w-[10rem] sm:w-[12rem] md:w-[14rem]" />
            <div className="w-2 h-2 bg-greengrove rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Desktop Menu - Hidden on mobile and tablet, visible on lg+ */}
        <ul className="hidden lg:flex items-center space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/servicios", label: "Servicios" },
            { path: "/nosotros", label: "Nosotros" },
            { path: "/contacto", label: "Contacto" }
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={scrollToTop}
                className={`relative font-medium transition-all duration-300 pb-2 ${
                  isActive(item.path)
                    ? "text-greengrove"
                    : "text-black hover:text-greengrove"
                }`}
              >
                {item.label}
                {/* Active indicator */}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-greengrove transform scale-x-100 transition-transform duration-300"></div>
                )}
                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-greengrove transform scale-x-0 transition-transform duration-300 ${
                  isActive(item.path) ? '' : 'group-hover:scale-x-100'
                }`}></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:block">
          <Link
            to="/contacto"
            onClick={scrollToTop}
            className="group relative px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-full text-sm sm:text-base font-medium
                     hover:bg-greengrove hover:text-white transition-all duration-300 
                     transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <span className="hidden md:inline">¡Empezar Proyecto!</span>
            <span className="md:hidden">¡Empezar!</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Button - Visible on mobile and tablet */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu - Hidden on lg+ */}
      <div
        className={`${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-md border-t border-gray-100`}
      >
        <ul className="px-4 sm:px-6 py-4 space-y-2">
          {[
            { path: "/", label: "Home" },
            { path: "/servicios", label: "Servicios" },
            { path: "/nosotros", label: "Nosotros" },
            { path: "/contacto", label: "Contacto" }
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={handleNavClick}
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path) 
                    ? "text-greengrove bg-greengrove/10" 
                    : "text-black hover:text-greengrove hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              to="/contacto"
              onClick={handleNavClick}
              className="block w-full text-center py-3 px-6 bg-black text-white rounded-full font-medium
                       hover:bg-greengrove transition-all duration-300 transform hover:scale-105"
            >
              ¡Empezar Proyecto!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
