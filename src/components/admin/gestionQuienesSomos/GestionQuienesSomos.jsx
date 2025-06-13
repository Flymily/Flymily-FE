import { useState } from "react";
import styles from "./GestionQuienesSomos.module.css";

const GestionQuienesSomos = () => {
  const [seccion, setSeccion] = useState({
    queEs: "",
    diferentes: "",
    porqueElegir: "",
  });

  const handleChange = (e) => {
    setSeccion({ ...seccion, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Contenido guardado:", seccion);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Editar sección "¿Qué es Flymily?"</h3>
        <textarea placeholder="Texto de la sección" />
        <button>Guardar cambios</button>
      </div>

      <h3>Gestionar contenido de ¿Quiénes somos?</h3>

      <label>¿Qué es Flymily?</label>
      <textarea
        name="queEs"
        value={seccion.queEs}
        onChange={handleChange}
        rows={5}
      />

      <label>¿Qué nos hace diferentes?</label>
      <textarea
        name="diferentes"
        value={seccion.diferentes}
        onChange={handleChange}
        rows={5}
      />

      <label>¿Por qué elegir Flymily?</label>
      <textarea
        name="porqueElegir"
        value={seccion.porqueElegir}
        onChange={handleChange}
        rows={5}
      />

      <button onClick={handleSave} className={styles.botonGuardar}>
        Guardar contenido
      </button>
    </div>
  );
};

export default GestionQuienesSomos;