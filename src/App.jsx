import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Servicios from "./Pages/Servicios.jsx";
import Contacto from "./Pages/Contacto.jsx";
import Nosotros from "./Pages/Nosotros.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import useScrollToTop from "./hooks/useScrollToTop.jsx";
import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics.jsx";

function App() {
  useScrollToTop();
  useGoogleAnalytics(); // This will automatically track page views

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
