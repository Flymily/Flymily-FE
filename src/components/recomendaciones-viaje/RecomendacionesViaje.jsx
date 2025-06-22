import { useState } from "react";
import styles from "./RecomendacionesViaje.module.css";
import {
  FaMountain,
  FaCampground,
  FaUmbrellaBeach,
  FaSnowflake,
  FaHiking,
  FaBinoculars
} from "react-icons/fa";

const datos = {
  Montaña: [
    "Botas de senderismo", "Chaqueta impermeable", "Mapa", "Protección solar",
    "Mochila", "Comida energética", "Gorra", "Agua", "Linterna"
  ],
  Camping: [
    "Tienda de campaña", "Saco de dormir", "Hornillo", "Comida enlatada",
    "Manta", "Cuerda", "Encendedor", "Agua", "Linterna"
  ],
  Playa: [
    "Protector solar", "Gafas de sol", "Toalla", "Bañador",
    "Sombrero", "Chanclas", "Agua", "Snacks", "Libro"
  ],
  Nieve: [
    "Ropa térmica", "Guantes", "Gorro", "Crampones",
    "Protección solar", "Gafas de nieve", "Bastones", "Botas impermeables", "Mapa"
  ],
  Trekking: [
    "Bastones de trekking", "Botas resistentes", "GPS", "Mochila ligera",
    "Agua", "Snacks", "Impermeable", "Camiseta de repuesto", "Sombrero"
  ],
  Safari: [
    "Prismáticos", "Protección solar", "Repelente de insectos", "Sombrero",
    "Cámara", "Ropa ligera de colores neutros", "Cantimplora", "Mochila pequeña", "Mapa"
  ]
};

const iconos = {
  Montaña: <FaMountain size={50} />,
  Camping: <FaCampground size={50} />,
  Playa: <FaUmbrellaBeach size={50} />,
  Nieve: <FaSnowflake size={50} />,
  Trekking: <FaHiking size={50} />,
  Safari: <FaBinoculars size={50} />
};

const categorias = Object.keys(datos);

export default function RecomendacionesViaje() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);

  return (
    <section className={styles.recomendaciones} data-testid="recomendaciones-viaje">
      <h2>Tips & Herramientas, para hacerlo fácil</h2>
      <p className={styles.subtitulo}>Según tu viaje no olvides llevarte...</p>

      <div className={styles.categorias}>
        {categorias.map((categoria) => (
          <div key={categoria} className={styles.categoria} onClick={() => setCategoriaActiva(categoria)}>
            <div className={styles.iconoCirculo}>
              {iconos[categoria]}
            </div>
            <p>{categoria}</p>
          </div>
        ))}
      </div>

      {categoriaActiva && (
        <div className={styles.modalOverlay} onClick={() => setCategoriaActiva(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>{categoriaActiva}: No olvides llevar</h3>
            <ul>
              {datos[categoriaActiva].map((item, idx) => (
                <li key={idx}>✔ {item}</li>
              ))}
            </ul>
            <button onClick={() => setCategoriaActiva(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}
