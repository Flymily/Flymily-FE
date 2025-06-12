import styles from './GestionComunidad.module.css';

const GestionComunidad = () => {
  return (
    <section className={styles.comunidadSection}>
      <h2>Gestión de Comunidad</h2>

      <div className={styles.formGroup}>
        <label htmlFor="nuevaPublicacion">Añadir publicación destacada:</label>
        <textarea id="nuevaPublicacion" rows="4" placeholder="Escribe aquí el contenido..." />
        <button>Publicar</button>
      </div>

      <div className={styles.listaPublicaciones}>
        <h3>Publicaciones actuales</h3>
        {/* Aquí iría el listado de publicaciones simuladas o traídas de backend */}
        <ul>
          <li>
            "Encuentro mensual de viajeras"
            <button>Editar</button>
            <button>Eliminar</button>
          </li>
          <li>
            "Consejos para tu primer viaje sola"
            <button>Editar</button>
            <button>Eliminar</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GestionComunidad;