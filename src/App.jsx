import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import Viajes from './pages/viajes/Viajes';
import Buscador from './pages/buscador/Buscador';
import Comunidad from './pages/comunidad/Comunidad';
import Contacto from './pages/contacto/Contacto';
import Admin from './pages/admin/Admin';
import LoginPage from './pages/login/Login';
import Footer from './components/footer/Footer';
import QuienesSomos from './pages/quienesSomos/QuienesSomos';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viajes" element={<Viajes />} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;