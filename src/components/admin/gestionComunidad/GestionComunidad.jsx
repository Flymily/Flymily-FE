import { useEffect, useState } from "react";
import styles from "./GestionComunidad.module.css";
import { getContenidoComunidad, updateContenidoComunidad } from "../../../services/comunidad";

const GestionComunidad = () => {
  const [contenido, setContenido] = useState("");
  const [loading, setLoading] = useState(true);
  const [guardado, setGuardado] = useState(false);

  useEffect(() => {
    const fetchContenido = async () => {
      try {
        const response = await getContenidoComunidad();
        console.log("➡️ Contenido recibido:", response.data);
        setContenido(response.data.contenido);
      } catch (error) {
        console.error("❌ Error al cargar contenido:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContenido();
  }, []);

  const handleChange = (e) => {
    setContenido(e.target.value);
  };

  const handleSave = async () => {
    try {
      await updateContenidoComunidad(contenido);
      setGuardado(true);
      setTimeout(() => setGuardado(false), 2000);
    } catch (error) {
      console.error("❌ Error al guardar contenido:", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Editar título o contenido de la comunidad</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <textarea
            value={contenido}
            onChange={handleChange}
            rows={6}
            className={styles.textarea}
          />
          <button onClick={handleSave} className={styles.botonGuardar}>
            Guardar cambios
          </button>
          {guardado && <p className={styles.guardado}>¡Contenido guardado!</p>}
        </>
      )}
    </div>
  );
};

export default GestionComunidad;