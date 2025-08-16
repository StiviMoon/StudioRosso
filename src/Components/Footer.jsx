
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import r1 from '../img/Logos/rosso-min.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform) => {
    // Analytics tracking could be added here
    console.log(`Social link clicked: ${platform}`);
  };

  return (
    <footer className="bg-[#F5F5DC] relative overflow-hidden">
      {/* Background pattern for elegance */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-black">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-start space-y-6">
                {/* Logo */}
                <div className="group">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img src={r1} alt="Agencia Rosso Logo" className="w-16 h-16 object-contain" />
                  </div>
                </div>
                
                {/* Description */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Agencia Rosso</h3>
                  <p className="text-sm leading-relaxed text-gray-700 max-w-xs">
                    Somos una agencia de diseño y desarrollo web enfocada en crear experiencias digitales innovadoras y marcas impactantes que transforman negocios.
                  </p>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4">
                  {[
                    { icon: FaInstagram, href: "https://www.instagram.com/studiorossoagency?igsh=YzMxMzM2MHN0cDZ1", label: "Instagram" },
                    { icon: FaTiktok, href: "https://www.tiktok.com/@studio.rosso?_t=ZM-8ym6UCcOZvC&_r=1", label: "TikTok" },
                    { icon: FaYoutube, href: "https://www.youtube.com", label: "YouTube" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/valentina-reyes-285137335/", label: "LinkedIn" },
                    { icon: FaGithub, href: "https://www.github.com/stivimoon", label: "GitHub" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Síguenos en ${social.label}`}
                      onClick={() => handleSocialClick(social.label)}
                      className="group p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 hover:scale-110 transition-all duration-300 hover:shadow-lg"
                    >
                      <social.icon className="text-gray-800 text-xl group-hover:text-gray-900 transition-colors duration-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <div className="flex flex-col space-y-6">
                <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-2">
                  Enlaces Rápidos
                </h3>
                <nav className="space-y-3">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/servicios", label: "Servicios" },
                    { to: "/nosotros", label: "Nosotros" },
                    { to: "/contacto", label: "Contacto" },
                    { to: "/trabaja", label: "Trabaja con Nosotros" }
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.to}
                      className="group flex items-center text-gray-700 hover:text-gray-900 transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200"></span>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <div className="flex flex-col space-y-6">
                <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-2">
                  Servicios
                </h3>
                <nav className="space-y-3">
                  {[
                    { to: "/servicios", label: "Branding y Estrategia" },
                    { to: "/servicios", label: "Identidad Visual & Packaging" },
                    { to: "/servicios", label: "Diseño UX/UI" },
                    { to: "/servicios", label: "Desarrollo Web" },
                    { to: "/servicios", label: "Marketing Digital & SEO" }
                  ].map((service, index) => (
                    <Link
                      key={index}
                      to={service.to}
                      className="group flex items-center text-gray-700 hover:text-gray-900 transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200"></span>
                      {service.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="flex flex-col space-y-6">
                <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-2">
                  Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <div className="p-2 bg-white/60 backdrop-blur-sm rounded-lg group-hover:bg-white/80 transition-all duration-200">
                      <FaPhone className="text-gray-700 text-sm" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Teléfono</p>
                      <p className="text-sm text-gray-700">+57 319-487-3667</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group">
                    <div className="p-2 bg-white/60 backdrop-blur-sm rounded-lg group-hover:bg-white/80 transition-all duration-200">
                      <FaEnvelope className="text-gray-700 text-sm" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-700">studiorossoagency@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group">
                    <div className="p-2 bg-white/60 backdrop-blur-sm rounded-lg group-hover:bg-white/80 transition-all duration-200">
                      <FaMapMarkerAlt className="text-gray-700 text-sm" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Ubicación</p>
                      <p className="text-sm text-gray-700">Colombia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300/50">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600">
                  &copy; {currentYear} <span className="font-semibold">Agencia Rosso</span>. Todos los derechos reservados.
                </p>
              </div>

              {/* Legal Links - Removed non-existent pages */}
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <span className="text-gray-400 cursor-not-allowed">
                  Términos & Condiciones
                </span>
                <span className="text-gray-400 cursor-not-allowed">
                  Política de Privacidad
                </span>
                <span className="text-gray-400 cursor-not-allowed">
                  Política de Cookies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
