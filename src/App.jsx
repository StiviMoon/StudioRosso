import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import useScrollToTop from "./hooks/useScrollToTop.jsx";
import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics.jsx";

const Home = lazy(() => import("./Pages/Home.jsx"));
const Servicios = lazy(() => import("./Pages/Servicios.jsx"));
const ServicioDetalle = lazy(() => import("./Pages/ServicioDetalle.jsx"));
const BrandingYEstrategia = lazy(() => import("./Pages/Servicios/BrandingYEstrategia.jsx"));
const IdentidadVisualPackaging = lazy(() => import("./Pages/Servicios/IdentidadVisualPackaging.jsx"));
const DisenoUxUi = lazy(() => import("./Pages/Servicios/DisenoUxUi.jsx"));
const DesarrolloWeb = lazy(() => import("./Pages/Servicios/DesarrolloWeb.jsx"));
const MarketingDigitalSeo = lazy(() => import("./Pages/Servicios/MarketingDigitalSeo.jsx"));
const SocialMediaContenidos = lazy(() => import("./Pages/Servicios/SocialMediaContenidos.jsx"));
const FotografiaIlustracion = lazy(() => import("./Pages/Servicios/FotografiaIlustracion.jsx"));
const Contacto = lazy(() => import("./Pages/Contacto.jsx"));
const Nosotros = lazy(() => import("./Pages/Nosotros.jsx"));
const NotFound = lazy(() => import("./Pages/NotFound.jsx"));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center" aria-hidden="true">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-greengrove border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-gray-400 font-montserrat">Cargando...</p>
    </div>
  </div>
);

function App() {
  useScrollToTop();
  useGoogleAnalytics();

  return (
    <div className="app">
      <NavBar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="servicios/branding-y-estrategia" element={<BrandingYEstrategia />} />
          <Route path="servicios/identidad-visual-packaging" element={<IdentidadVisualPackaging />} />
          <Route path="servicios/diseno-ux-ui" element={<DisenoUxUi />} />
          <Route path="servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="servicios/marketing-digital-seo" element={<MarketingDigitalSeo />} />
          <Route path="servicios/social-media-contenidos" element={<SocialMediaContenidos />} />
          <Route path="servicios/fotografia-ilustracion" element={<FotografiaIlustracion />} />
          <Route path="servicios/:id" element={<ServicioDetalle />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
