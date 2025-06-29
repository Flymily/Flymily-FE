import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home';
import Viajes from './pages/viajes/Viajes';
import Buscador from './pages/buscador/Buscador';
import Comunidad from './pages/comunidad/Comunidad';
import Contacto from './pages/contacto/Contacto';
import Admin from './pages/admin/Admin';
import GestionViajes from './components/admin/gestionViajes/GestionViajes';
import LoginPage from './pages/login/Login';
import Footer from './components/footer/Footer';
import QuienesSomos from './pages/quienesSomos/QuienesSomos';
import PrivateRoute from './components/PrivateRoute'; 
import RecomendacionesViaje from './components/recomendaciones-viaje/RecomendacionesViaje';
import PreguntasFrecuentes from './pages/preguntasFrecuentes/PreguntasFrecuentes';
import './index.css';

function App() {
  return (
    <>
      <div className="appLayout">
      <Navbar />
      <main className="mainContent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viajes" element={<Viajes />} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/viajes" element={<GestionViajes />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/admin/*" element={<PrivateRoute><Admin /></PrivateRoute>}/>
        <Route path="/recomendaciones" element={<RecomendacionesViaje />} />
        <Route path="/faq" element={<PreguntasFrecuentes />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;