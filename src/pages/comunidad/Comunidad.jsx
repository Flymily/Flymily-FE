import styles from './Comunidad.module.css';

const Comunidad = () => {
  return (
    <div className={styles.comunidadContainer}>
      <h1 className={styles.titulo}>Nuestras aventuras...</h1>
      <p className={styles.descripcion}>
        En Flymily, creemos que los mejores recuerdos se crean en familia. 💫
        Esta sección está dedicada a compartir momentos únicos, experiencias especiales y los lazos que se fortalecen en cada viaje. 
      </p>

      <div className={styles.gridGaleria}>
        <div className={styles.card}>
          <img src="/img/comunidad1.jpg" alt="Viaje en familia" />
          <p>Explorando la montaña 🏞️</p>
        </div>
        <div className={styles.card}>
          <img src="/img/comunidad2.jpg" alt="Aventura acuática" />
          <p>Día de aventuras en kayak 🚣‍♀️</p>
        </div>
        <div className={styles.card}>
          <img src="/img/comunidad3.jpg" alt="Parque de atracciones" />
          <p>¡Diversión sin límites en el parque! 🎢</p>
        </div>
      </div>
    </div>
  );
};

export default Comunidad;