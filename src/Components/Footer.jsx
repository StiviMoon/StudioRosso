import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'; // Iconos adicionales
import { Link } from 'react-router-dom'; // Para los enlaces internos
import r1 from '../img/Logos/rosso-min.svg'
const Footer = () => {
  return (
    <footer className="bg-[#F5F5DC] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 text-black">
          {/* Sección de Logo y Descripción */}
          <div className="flex flex-col items-start space-y-4">
            <div className=" text-white p-3 rounded-full">
              <img src={r1} alt="LogoRosso" className='w-12' />
            </div>
            <p className="text-sm text-gray-600">
              Somos una agencia de diseño y desarrollo web enfocada en crear experiencias digitales innovadoras y marcas impactantes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-black text-2xl hover:text-gray-700 transition" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-black text-2xl hover:text-gray-700 transition" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-black text-2xl hover:text-gray-700 transition" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-black text-2xl hover:text-gray-700 transition" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black text-2xl hover:text-gray-700 transition" />
              </a>
            </div>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <Link to="/sobre-nosotros" className="hover:text-gray-700">Sobre Nosotros</Link>
            <Link to="/servicios" className="hover:text-gray-700">Servicios</Link>
            <Link to="/contacto" className="hover:text-gray-700">Contacto</Link>
            <Link to="/blog" className="hover:text-gray-700">Blog</Link>
            <Link to="/faq" className="hover:text-gray-700">FAQ</Link>
          </div>

          {/* Enlaces legales */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Políticas</h3>
            <Link to="/terminos" className="hover:text-gray-700">Términos & Condiciones</Link>
            <Link to="/privacidad" className="hover:text-gray-700">Política de Privacidad</Link>
            <Link to="/cookies" className="hover:text-gray-700">Política de Cookies</Link>
          </div>

          {/* Enlaces de cuenta */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Mi Cuenta</h3>
            <Link to="/cuenta" className="hover:text-gray-700">Mi cuenta</Link>
            <Link to="/ideas" className="hover:text-gray-700">13/14 ideas del año</Link>
          </div>
        </div>

        {/* Sección de Copyright */}
        <div className="border-t border-gray-300 pt-6 mt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Todos los derechos reservados. Agencia Rosso</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
