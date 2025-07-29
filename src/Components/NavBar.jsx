import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Función para verificar si la ruta es activa
  const isActive = (path) => location.pathname === path;

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
    <nav className={`font-century fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-primary'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black group">
          <Link to="/" className="flex items-center space-x-2 hover:text-greengrove transition-colors duration-300">
            <span className="font-dream">Studio Rosso</span>
            <div className="w-2 h-2 bg-greengrove rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {[
            { path: "/", label: "Home" },
            { path: "/servicios", label: "Servicios" },
            { path: "/contacto", label: "Contacto" },
            { path: "/nosotros", label: "Nosotros" }
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
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

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contacto"
            className="group relative px-6 py-3 bg-black text-white rounded-full font-medium
                     hover:bg-greengrove hover:text-white transition-all duration-300 
                     transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <span>Trabaja con nosotros</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {menuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-md border-t border-gray-100`}
      >
        <ul className="px-6 py-4 space-y-2">
          {[
            { path: "/", label: "Home" },
            { path: "/servicios", label: "Servicios" },
            { path: "/contacto", label: "Contacto" },
            { path: "/nosotros", label: "Nosotros" }
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path) 
                    ? "text-greengrove bg-greengrove/10" 
                    : "text-black hover:text-greengrove hover:bg-gray-50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              to="/contacto"
              className="block w-full text-center py-3 px-6 bg-black text-white rounded-full font-medium
                       hover:bg-greengrove transition-all duration-300 transform hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Trabaja con nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
