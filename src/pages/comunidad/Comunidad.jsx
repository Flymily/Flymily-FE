import React, { useEffect, useState } from "react";
import styles from './Comunidad.module.css';
import { getContenidoComunidad } from '../../services/comunidad';

const Comunidad = () => {
  const [contenidoComunidad, setContenidoComunidad] = useState([]);

  useEffect(() => {
    const fetchContenido = async () => {
      try {
        const response = await getContenidoComunidad();
        console.log("Contenido de comunidad:", response.data);
        setContenidoComunidad(response.data);
      } catch (error) {
        console.error("❌ Error al cargar contenido de comunidad:", error);
      }
    };

    fetchContenido();
  }, []);

  return (
    <div className={styles.comunidadContainer}>
      <h1 className={styles.titulo}>Nuestras aventuras...</h1>
      <p className={styles.descripcion}>
        En Flymily, creemos que los mejores recuerdos se crean en familia. 💫
        Esta sección está dedicada a compartir momentos únicos, experiencias especiales y los lazos que se fortalecen en cada viaje.
      </p>

      <div className={styles.gridGaleria}>
        {contenidoComunidad.length === 0 ? (
          <p>Cargando contenido...</p>
        ) : (
          contenidoComunidad.map((post) => (
            <div key={post.id} className={styles.card}>
              <img src={post.imgPathComunidad} alt={post.tituloPost} />
                <div className={styles.cardContent}>
                  <h3>{post.tituloPost}</h3>
                  <p>{post.contenidoPost}</p>
                </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comunidad;