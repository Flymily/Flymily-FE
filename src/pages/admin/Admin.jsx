import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Admin.module.css';
import GestionViajes from '../../components/admin/gestionViajes/GestionViajes';
import GestionComunidad from '../../components/admin/gestionComunidad/GestionComunidad';


const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userSession");
    if (!user) {
      navigate("/login"); 
    }
  }, [navigate]);

  return (
    <main className={styles.adminPage}>
      <section id="viajes" className={styles.section}>
        <h2>Gestión de Viajes</h2>
        <GestionViajes />
      </section>

      <section id="comunidad" className={styles.section}>
        <h2>Comunidad</h2>
        <GestionComunidad />
      </section>

      <section id="faq" className={styles.section}>
        <h2>Preguntas Frecuentes</h2>
        {/* <GestionFAQ /> */}
      </section>

      <section id="quienessomos" className={styles.section}>
        <h2>Quienes Somos</h2>
        {/* <GestionQuienesSomos /> */}
      </section>
    </main>
  );
};

<button onClick={() => {
  localStorage.removeItem("userSession");
  window.location.href = "/login";
}}>
  Cerrar sesión
</button>


export default Admin;
