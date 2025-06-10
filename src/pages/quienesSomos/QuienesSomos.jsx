import styles from './QuienesSomos.module.css';

const QuienesSomos = () => {
  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.title}>¿Qué es Flymily?</h2>
        <p><strong>Flymily: Viajar en familia, más fácil que nunca.</strong></p>
        <p>
          Flymily es el primer buscador de viajes pensado exclusivamente para familias.
          Nace con un propósito claro: hacerte la vida más fácil. Organizar unas vacaciones familiares puede ser un reto:
          falta de tiempo, demasiadas opciones y dificultad para encontrar planes que encajen con toda la familia.
          Flymily busca por ti, tú eliges y… ¡a disfrutar del viaje!
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>¿Qué nos hace diferentes?</h2>
        <p>
          En Flymily hacemos el trabajo por ti. Además de ofrecer consejos, recomendaciones e ideas,
          reunimos las mejores propuestas de agencias especializadas en turismo familiar en un solo lugar.
          Solo tienes que escoger la que más te guste: experiencias memorables diseñadas pensando en toda la familia,
          destinos seguros, alojamientos cómodos y actividades para todos los gustos.
        </p>
        <p>
          Siempre bajo una máxima: <em>entendemos el viajar como una puerta abierta al mundo y como un elemento valioso de la vida y la crianza</em>.
          No hay mejor forma de cuidar el mundo que amándolo, y no hay mejor forma de amarlo que conociéndolo.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>¿Por qué elegir Flymily?</h2>
        <p>
          Con nuestro buscador ahorras tiempo y esfuerzo, y te aseguras de que toda la familia tenga una experiencia increíble.
          Siempre de la mano de agencias acreditadas que os acompañan antes y durante el viaje para garantizar la seguridad y el apoyo ante cualquier imprevisto.
        </p>
        <ul className={styles.benefits}>
          <li><span className={styles.check}>✓</span> Ahorro de tiempo: con nuestro buscador único, ponemos a vuestro alcance los viajes que más se adaptan a vuestras preferencias.</li>
          <li><span className={styles.check}>✓</span> Garantía de calidad: solo trabajamos con agencias acreditadas.</li>
          <li><span className={styles.check}>✓</span> Inspiración: ideas nuevas, adaptadas a vuestra forma de viajar.</li>
          <li><span className={styles.check}>✓</span> Comodidad: todo en un solo lugar.</li>
        </ul>
        <p className={styles.closing}>
          <strong>Viajar en familia debería ser un placer, no un estrés.</strong> Con Flymily, lo difícil ya está hecho.
          Tú solo elige el plan perfecto y empieza a disfrutar.
        </p>
      </div>
    </section>
  );
};

export default QuienesSomos;
