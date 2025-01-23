import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Importa los íconos de React Icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Función para verificar si la ruta es activa
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="font-century bg-primary shadow-md">
      <div className="container mx-auto  px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl  text-black">
          <Link to="/">Studio Rosso</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {["/", "/servicios", "/contacto", "/nosotros"].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                className={`${
                  isActive(path)
                    ? "text-gray-800 border-b-2  border-black"
                    : "text-black"
                } hover:text-gray-500 transition pb-1`}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block ">
          <Link
            to="/contacto"
            className="border-2 border-black text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
          >
            Trabaja con nosotros ↗
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? (
              <HiX className="text-3xl" /> // Icono de cerrar
            ) : (
              <HiMenu className="text-3xl" /> // Icono de hamburguesa
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "max-h-screen" : "max-h-0"
        } md:hidden overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <ul className="bg-[#EDE9D5] shadow-md">
          {["/", "/servicios", "/contacto", "/nosotros"].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                className={`block py-4 px-4 ${
                  isActive(path) ? "text-gray-800 bg-gray-200" : "text-black"
                } hover:bg-gray-300`}
                onClick={() => setMenuOpen(false)}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
          <li className="text-center mt-4 ">
            <Link
              to="/contacto"
              className="block border-2 border-black text-black py-2 px-6  mx-8 rounded-full hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Trabaja con nosotros ↗
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
