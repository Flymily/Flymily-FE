import styles from './PreguntasFrecuentes.module.css';

const PreguntasFrecuentes = () => {
  const faqs = [
    {
      pregunta: "¿Qué es Flymily?",
      respuesta:
        "Flymily es una plataforma pensada para ayudarte a encontrar, planificar y compartir viajes en familia. Ofrecemos propuestas adaptadas a diferentes edades, presupuestos y necesidades.",
    },
    {
      pregunta: "¿Cómo puedo encontrar viajes que se adapten a mi familia?",
      respuesta:
        "Puedes utilizar nuestro buscador filtrando por destino, edad, tipo de viaje, transporte o presupuesto. Cada viaje indica para qué edades está recomendado.",
    },
    {
      pregunta: "¿Qué significa que un viaje sea “organizado” o “a medida”?",
      respuesta:
        "Organizado: paquetes con itinerarios fijos y actividades planificadas. A medida: puedes personalizar itinerario, alojamiento y actividades.",
    },
    {
      pregunta: "¿Puedo ver recomendaciones según la edad de mis hijos?",
      respuesta:
        "¡Sí! Clasificamos los viajes por rangos de edad (bebés, niños pequeños, adolescentes...) para que encuentres los más adecuados.",
    },
    {
      pregunta: "¿Hay opciones para familias con necesidades especiales?",
      respuesta:
        "Sí. Puedes filtrar los viajes accesibles o que ofrezcan servicios especializados como transporte adaptado o dietas específicas.",
    },
    {
      pregunta: "¿Cómo puedo reservar un viaje?",
      respuesta:
        "Una vez encuentres un viaje que te interese, puedes contactar directamente con la agencia desde la plataforma o seguir el enlace de reserva.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Preguntas Frecuentes</h1>
      <div className={styles.grid}>
        {faqs.map((item, index) => (
          <div className={styles.card} key={index}>
            <p className={styles.pregunta}>{item.pregunta}</p>
            <p className={styles.respuesta}>{item.respuesta}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;