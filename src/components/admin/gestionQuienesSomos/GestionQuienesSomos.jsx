import { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from "./GestionQuienesSomos.module.css";

const GestionQuienesSomos = () => {
  const [secciones, setSecciones] = useState([
    {
      id: "queEs",
      titulo: "¿Qué es Flymily?",
      contenido:"Flymily es el primer buscador de viajes pensado exclusivamente para familias. Nace con un propósito claro: hacerte la vida más fácil. Organizar unas vacaciones familiares puede ser un reto: falta de tiempo, demasiadas opciones y dificultad para encontrar planes que encajen con toda la familia. Flymily busca por ti, tú eliges y… ¡a disfrutar del viaje!",
    },
    {
      id: "diferentes",
      titulo: "¿Qué nos hace diferentes?",
      contenido: "En Flymily hacemos el trabajo por ti. Además de ofrecer consejos, recomendaciones e ideas, reunimos las mejores propuestas de agencias especializadas en turismo familiar en un solo lugar.Solo tienes que escoger la que más te guste: experiencias memorables diseñadas pensando en toda la familia, destinos seguros, alojamientos cómodos y actividades para todos los gustos.Siempre bajo una máxima: entendemos el viajar como una puerta abierta al mundo y como un elemento valioso de la vida y la crianza.No hay mejor forma de cuidar el mundo que amándolo, y no hay mejor forma de amarlo que conociéndolo.",
    },
    {
      id: "porqueElegir",
      titulo: "¿Por qué elegir Flymily?",
      contenido: "Con nuestro buscador ahorras tiempo y esfuerzo, y te aseguras de que toda la familia tenga una experiencia increíble.Siempre de la mano de agencias acreditadas que os acompañan antes y durante el viaje para garantizar la seguridad y el apoyo ante cualquier imprevisto.",
    },
  ]);

  const [editandoId, setEditandoId] = useState(null);
  const [nuevoTexto, setNuevoTexto] = useState("");

  const handleEditar = (id, textoActual) => {
    setEditandoId(id);
    setNuevoTexto(textoActual);
  };

  const handleGuardar = (id) => {
    const actualizado = secciones.map((sec) =>
      sec.id === id ? { ...sec, contenido: nuevoTexto } : sec
    );
    setSecciones(actualizado);
    setEditandoId(null);
  };

  const handleEliminar = (id) => {
    const actualizado = secciones.map((sec) =>
      sec.id === id ? { ...sec, contenido: "" } : sec
    );
    setSecciones(actualizado);
    setEditandoId(null);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Sección ¿Quiénes Somos?</h2>

      <div className={styles.cardGrid}>
        {secciones.map((sec) => (
          <div key={sec.id} className={styles.card}>
            <h3>{sec.titulo}</h3>
            {editandoId === sec.id ? (
              <>
                <textarea
                  rows={10}
                  value={nuevoTexto}
                  onChange={(e) => setNuevoTexto(e.target.value)}
                />
                <button
                  className={styles.btnGuardar}
                  onClick={() => handleGuardar(sec.id)}
                >
                  Guardar
                </button>
              </>
            ) : (
              <>
                <p>
                  {sec.contenido ? (
                    sec.contenido
                  ) : (
                    <em style={{ color: "#999" }}>Sin contenido</em>
                  )}
                </p>
                <div className={styles.botones}>
                  <button
                    className={styles.btnEditar}
                    onClick={() => handleEditar(sec.id, sec.contenido)}
                  >
                    <FaEdit />Editar
                  </button>
                  <button
                    className={styles.btnEliminar}
                    onClick={() => handleEliminar(sec.id)}
                  >
                    <FaTrash />Eliminar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionQuienesSomos;
