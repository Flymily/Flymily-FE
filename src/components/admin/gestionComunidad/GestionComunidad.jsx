import { useState } from "react";
import styles from "./GestionComunidad.module.css";

const GestionComunidad = () => {
  const [contenido, setContenido] = useState("Nuestra comunidad");

  const handleChange = (e) => {
    setContenido(e.target.value);
  };

  const handleSave = () => {
    
    console.log("Guardado:", contenido);
  };

  return (
    <div className={styles.wrapper}>
      <h3>Editar título o contenido de la comunidad</h3>
      <textarea
        value={contenido}
        onChange={handleChange}
        rows={6}
        className={styles.textarea}
      />
      <button onClick={handleSave} className={styles.botonGuardar}>
        Guardar cambios
      </button>
    </div>
  );
};

export default GestionComunidad;