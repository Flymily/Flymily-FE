import React from "react";
import styles from "./RecomendacionesViaje.module.css";

// Datos de recomendaciones categorizadas por tipo de viaje
const recomendaciones = {
  montaña: [
    { id: 1, item: "Botas de montaña" },
    { id: 2, item: "Chaqueta impermeable" },
    { id: 3, item: "Mapa topográfico" },
    { id: 4, item: "Sombrero de montaña" },
    { id: 5, item: "Linterna de mano" },
    { id: 6, item: "Pantalones impermeables" },
    { id: 7, item: "Capa de lluvia" },
    { id: 8, item: "GPS portátil" },
    { id: 9, item: "Barra energética" },
  ],
  playa: [
    { id: 1, item: "Protector solar" },
    { id: 2, item: "Toalla de playa" },
    { id: 3, item: "Gafas de sol" },
    { id: 4, item: "Traje de baño" },
    { id: 5, item: "Sombrero de playa" },
    { id: 6, item: "Sandalias" },
    { id: 7, item: "Balsa inflable" },
    { id: 8, item: "Crema para después del sol" },
    { id: 9, item: "Bolsa impermeable para teléfono" },
  ],
  trekking: [
    { id: 1, item: "Mochila de trekking" },
    { id: 2, item: "Bastones de trekking" },
    { id: 3, item: "Hidratación" },
    { id: 4, item: "Botas de trekking" },
    { id: 5, item: "Pantalones de trekking" },
    { id: 6, item: "Chaqueta ligera" },
    { id: 7, item: "Manta térmica" },
    { id: 8, item: "Guantes de trekking" },
    { id: 9, item: "Mapas y brújula" },
  ],
  camping: [
    { id: 1, item: "Tienda de campaña" },
    { id: 2, item: "Linterna" },
    { id: 3, item: "Saco de dormir" },
    { id: 4, item: "Cuchillo multiusos" },
    { id: 5, item: "Fogón portátil" },
    { id: 6, item: "Manta de picnic" },
    { id: 7, item: "Protector de mosquitos" },
    { id: 8, item: "Kit de primeros auxilios" },
    { id: 9, item: "Comida enlatada" },
  ],
  nieve: [
    { id: 1, item: "Esquís" },
    { id: 2, item: "Chaqueta de nieve" },
    { id: 3, item: "Botas de nieve" },
    { id: 4, item: "Guantes impermeables" },
    { id: 5, item: "Gafas de nieve" },
    { id: 6, item: "Pantalones de nieve" },
    { id: 7, item: "Cremas protectoras" },
    { id: 8, item: "Telesquí" },
    { id: 9, item: "Cargadores portátiles" },
  ],
  safari: [
    { id: 1, item: "Binoculares" },
    { id: 2, item: "Sombrero de safari" },
    { id: 3, item: "Protector solar" },
    { id: 4, item: "Botas resistentes" },
    { id: 5, item: "Cámara fotográfica" },
    { id: 6, item: "Ropa de colores neutros" },
    { id: 7, item: "Repelente de insectos" },
    { id: 8, item: "Gafas de sol" },
    { id: 9, item: "Mapa de fauna local" },
  ],
};

const RecomendacionesViaje = () => {
  return (
    <div className={styles.recomendacionesContainer}>
      <h2 className={styles.titulo}>Recomendaciones para tu viaje</h2>
      <div className={styles.seccionesContainer}>
        {/* Sección para cada tipo de viaje */}
        {Object.keys(recomendaciones).map((categoria) => (
          <div key={categoria} className={styles.seccion}>
            <h3 className={styles.categoriaTitulo}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </h3>
            <div className={styles.gridContainer}>
              {recomendaciones[categoria].map((recomendacion) => (
                <div key={recomendacion.id} className={styles.gridItem}>
                  {recomendacion.item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendacionesViaje