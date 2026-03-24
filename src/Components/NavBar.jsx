import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/servicios", label: "Servicios" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavClick = useCallback(() => {
    setMenuOpen(false);
    scrollToTop();
  }, [scrollToTop]);

  // Sombra progresiva al hacer scroll
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al cambiar ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── Pill flotante ──────────────────────────────────────────── */}
      <nav
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          w-[calc(100%-2rem)] sm:w-auto sm:max-w-3xl
          navbar-pill
          ${scrolled ? "scrolled" : ""}
        `}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div
          className={`
            flex items-center justify-between sm:justify-start gap-2 sm:gap-3
            px-3 sm:px-4 py-2.5
            bg-white/85 backdrop-blur-xl
            border border-gray-200/60
            rounded-full
            shadow-lg shadow-black/8
            transition-all duration-300
            ${scrolled ? "bg-white/95 shadow-xl shadow-black/12" : ""}
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex-shrink-0 flex items-center"
            aria-label="Studio Rosso - Inicio"
          >
            <img
              src="/img/Logos/rossoL-min.svg"
              alt="Studio Rosso"
              className="h-6 sm:h-7 w-auto"
              width="112"
              height="28"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Divisor */}
          <div className="hidden lg:block w-px h-5 bg-gray-200 flex-shrink-0" />

          {/* Links desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={scrollToTop}
                  className={`
                    px-3.5 py-1.5 rounded-full text-sm font-medium
                    transition-all duration-200 whitespace-nowrap
                    ${
                      isActive(item.path)
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-100 hover:text-black"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divisor */}
          <div className="hidden lg:block w-px h-5 bg-gray-200 flex-shrink-0" />

          {/* CTA desktop */}
          <Link
            to="/contacto"
            onClick={scrollToTop}
            className="
              hidden sm:inline-flex items-center gap-1.5
              px-4 py-1.5 bg-black text-white
              rounded-full text-sm font-semibold
              hover:bg-greengrove transition-all duration-300
              whitespace-nowrap flex-shrink-0
            "
          >
            <span>¡Empezar!</span>
            <FiArrowRight className="text-xs" />
          </Link>

          {/* Hamburguesa mobile */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <HiX className="text-xl text-gray-800" />
            ) : (
              <HiMenu className="text-xl text-gray-800" />
            )}
          </button>
        </div>

        {/* ── Menú mobile — desplegable debajo del pill ──────────── */}
        <div
          className={`
            lg:hidden mt-2 overflow-hidden
            transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
          `}
          aria-hidden={!menuOpen}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-xl p-3">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`
                      flex items-center px-4 py-3 rounded-xl font-medium text-sm
                      transition-all duration-200
                      ${
                        isActive(item.path)
                          ? "bg-black text-white"
                          : "text-gray-800 hover:bg-gray-50"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <Link
                to="/contacto"
                onClick={handleNavClick}
                className="
                  flex items-center justify-center gap-2
                  w-full py-3 px-6 bg-black text-white
                  rounded-xl font-semibold text-sm
                  hover:bg-greengrove transition-all duration-300
                "
              >
                <span>¡Empezar Proyecto!</span>
                <FiArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Skip link accesibilidad */}
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only focus:fixed focus:top-20 focus:left-4 focus:z-[60]
          focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg
          focus:text-sm focus:font-medium
        "
      >
        Saltar al contenido
      </a>
    </>
  );
};

export default Navbar;
