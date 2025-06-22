import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from './GestionFAQ.module.css';

const faqsIniciales = [
  {
    id: 1,
    pregunta: '¿Qué es Flymily?',
    respuesta: 'Flymily es una plataforma pensada para ayudarte a encontrar, planificar y compartir viajes en familia...',
  },
  {
    id: 2,
    pregunta: '¿Cómo puedo encontrar viajes que se adapten a mi familia?',
    respuesta: 'Puedes utilizar nuestro buscador filtrando por destino, edad, tipo de viaje, transporte o presupuesto...',
  },
  {
    id: 3,
    pregunta: "¿Qué significa que un viaje sea “organizado” o “a medida”?",
    respuesta: "Organizado: paquetes con itinerarios fijos y actividades planificadas. A medida: puedes personalizar itinerario, alojamiento y actividades.",
  },
  {
    id: 4,
    pregunta: "¿Puedo ver recomendaciones según la edad de mis hijos?",
    respuesta: "¡Sí! Clasificamos los viajes por rangos de edad (bebés, niños pequeños, adolescentes...) para que encuentres los más adecuados.",
  },
  {
    id: 5,
    pregunta: "¿Hay opciones para familias con necesidades especiales?",
    respuesta: "Sí. Puedes filtrar los viajes accesibles o que ofrezcan servicios especializados como transporte adaptado o dietas específicas.",
  },
  {
    id: 6,
    pregunta: "¿Cómo puedo reservar un viaje?",
    respuesta: "Una vez encuentres un viaje que te interese, puedes contactar directamente con la agencia desde la plataforma o seguir el enlace de reserva.",
  },
];

const GestionFAQ = () => {
  const [faqs, setFaqs] = useState(faqsIniciales);
  const [editandoId, setEditandoId] = useState(null);
  const [form, setForm] = useState({ pregunta: '', respuesta: '' });
  const [mostrandoNueva, setMostrandoNueva] = useState(false);
  const [nueva, setNueva] = useState({ pregunta: '', respuesta: '' });

  const handleEditar = (faq) => {
    setEditandoId(faq.id);
    setForm({ pregunta: faq.pregunta, respuesta: faq.respuesta });
  };

  const handleGuardar = () => {
    setFaqs(prev =>
      prev.map(faq =>
        faq.id === editandoId ? { ...faq, ...form } : faq
      )
    );
    setEditandoId(null);
    setForm({ pregunta: '', respuesta: '' });
  };

  const handleCancelar = () => {
    setEditandoId(null);
    setForm({ pregunta: '', respuesta: '' });
  };

  const handleCrear = () => {

    if (!nueva.pregunta.trim() || !nueva.respuesta.trim()) return;
    const nuevaFAQ = {
      id: Date.now(),
      pregunta: nueva.pregunta,
      respuesta: nueva.respuesta,
    };
    setFaqs([...faqs, nuevaFAQ]);
    setNueva({ pregunta: '', respuesta: '' });
    setMostrandoNueva(false);
  };

  const cancelarNueva = () => {
    setNueva({ pregunta: '', respuesta: '' });
    setMostrandoNueva(false);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.titulo}>Preguntas Frecuentes</h2>
      <button className={styles.addBtn} onClick={() => setMostrandoNueva(true)}>+ Añadir nueva pregunta</button>
      {mostrandoNueva && (
        <div className={styles.faqCard}>
          <input
            type="text"
            placeholder="Escribe la nueva pregunta"
            value={nueva.pregunta}
            onChange={(e) => setNueva({ ...nueva, pregunta: e.target.value })}
          />
          <textarea
            placeholder="Escribe la respuesta"
            value={nueva.respuesta}
            onChange={(e) => setNueva({ ...nueva, respuesta: e.target.value })}
          />
          <div className={styles.botones}>
            <button onClick={handleCrear}>Guardar</button>
            <button onClick={cancelarNueva} className={styles.cancelar}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className={styles.faqGrid}>
        {faqs.map((faq) => (
          <div key={faq.id} className={styles.faqCard}>
            {editandoId === faq.id ? (
              <>
                <input
                  type="text"
                  value={form.pregunta}
                  onChange={(e) => setForm({ ...form, pregunta: e.target.value })}
                />
                <textarea
                  value={form.respuesta}
                  onChange={(e) => setForm({ ...form, respuesta: e.target.value })}
                />
                <div className={styles.botones}>
                  <button onClick={handleGuardar}>Guardar</button>
                  <button onClick={handleCancelar} className={styles.cancelar}>
                    Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                <h4>{faq.pregunta}</h4>
                <p>{faq.respuesta}</p>
                <button className={styles.btnEditar} onClick={() => handleEditar(faq)}><FaEdit />Editar</button>
                <button className={styles.btnEliminar} onClick={() => handleEliminar(faq.id)}><FaTrash />Eliminar</button>

              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionFAQ;