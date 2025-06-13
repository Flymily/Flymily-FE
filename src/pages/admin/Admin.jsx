import styles from './Admin.module.css';
import GestionViajes from '../../components/admin/gestionViajes/GestionViajes';
import GestionComunidad from '../../components/admin/gestionComunidad/GestionComunidad';
//import GestionFAQ from '../../components/admin/gestionFAQ/GestionFAQ';
import GestionQuienesSomos from '../../components/admin/gestionQuienesSomos/GestionQuienesSomos';

const Admin = () => {
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
        {/*<GestionFAQ />*/}
      </section>

      <section id="quienessomos" className={styles.section}>
        <h2>Quienes Somos</h2>
        {/*<GestionQuienesSomos />*/}
      </section>
    </main>
  );
};

export default Admin;