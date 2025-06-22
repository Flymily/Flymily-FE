import styles from "./BuscadorPagina.module.css";
import Buscador from "../../components/buscador/Buscador";

const BuscadorPagina = () => {
  return (
    <div className={styles.buscadorPagina}>
      <main className={styles.mainContent}>
        <Buscador />
      </main>
    </div>
  );
};

export default BuscadorPagina;
