import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Buscador.module.css";
import {
  FaRegMoon,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaUserFriends,
  FaChild,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaSuitcaseRolling
} from "react-icons/fa";

const InputConIcono = React.forwardRef(({ value, onClick, placeholder }, ref) => (
  <div className={styles.inputGroup} onClick={onClick}>
    <FaCalendarAlt className={styles.iconInside} />
    <input
      type="text"
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      ref={ref}
      readOnly
      className={styles.inputWithIcon}
    />
  </div>
));

const Buscador = () => {
  const [tipoViaje, setTipoViaje] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [adultos, setAdultos] = useState(2);
  const [niños, setNinos] = useState(2);
  const [edades, setEdades] = useState([0, 5]);
  const [mostrarAvanzado, setMostrarAvanzado] = useState(false);

  return (
    <section className={styles.buscadorContainer}>
      <form className={styles.formulario}>
        <h1 className={styles.titulo}>Encuentra tu viaje ideal</h1>

        <div className={styles.filaPrincipal}>
          <div className={styles.inputGroup}>
            <FaSuitcaseRolling className={styles.iconInside} />
            <select
              className={styles.inputWithIcon}
              value={tipoViaje}
              onChange={(e) => setTipoViaje(e.target.value)}
            >
              <option value="">Tipo de Viaje</option>
              <option value="safari">Safari</option>
              <option value="nieve">Nieve</option>
              <option value="montania">Montaña</option>
              <option value="cultural">Cultural</option>
              <option value="playa">Playa</option>
              <option value="ruta">Ruta en coche</option>
              <option value="inspiracion">Busco inspiración</option>
            </select>
          </div>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Fecha ida"
            customInput={<InputConIcono />}
          />

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Fecha vuelta"
            customInput={<InputConIcono />}
          />

          <div className={styles.inputGroup}>
            <FaMapMarkedAlt className={styles.iconInside} />
            <input
              type="text"
              placeholder="Origen"
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
              className={styles.inputWithIcon}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaMapMarkedAlt className={styles.iconInside} />
            <input
              type="text"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              className={styles.inputWithIcon}
            />
          </div>
        </div>

        <div className={styles.personasEdad}>
          <div className={styles.counter}>
            <label><FaUserFriends /> Adultos</label>
            <button type="button" onClick={() => setAdultos(Math.max(1, adultos - 1))}>-</button>
            <span>{adultos}</span>
            <button type="button" onClick={() => setAdultos(adultos + 1)}>+</button>
          </div>

          <div className={styles.counter}>
            <label><FaChild /> Niños</label>
            <button type="button" onClick={() => setNinos(Math.max(0, niños - 1))}>-</button>
            <span>{niños}</span>
            <button type="button" onClick={() => setNinos(niños + 1)}>+</button>
          </div>
        </div>

        {niños > 0 && (
          <div className={styles.edadesWrapper}>
            <label>Edades:</label>
            {Array.from({ length: niños }, (_, i) => (
              <select
                key={i}
                value={edades[i] || 0}
                onChange={(e) => {
                  const nuevasEdades = [...edades];
                  nuevasEdades[i] = parseInt(e.target.value);
                  setEdades(nuevasEdades);
                }}
                className={styles.edadesInput}
              >
                {Array.from({ length: 18 }, (_, j) => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
            ))}
          </div>
        )}

        <button
          type="button"
          className={styles.advancedToggle}
          onClick={() => setMostrarAvanzado(!mostrarAvanzado)}
        >
          {mostrarAvanzado ? <><FaChevronUp /> Ocultar</> : <><FaChevronDown /> Búsqueda avanzada</>}
        </button>

        {mostrarAvanzado && (
          <div className={styles.filtrosAvanzados}>
            <select className={styles.selectInput}>
              <option> Accesibilidad </option>
              <option>Movilidad reducida</option>
              <option>No necesario</option>
            </select>

            <select className={styles.selectInput}>
              <option> Tipo experiencia </option>
              <option>Privado</option>
              <option>Grupo</option>
            </select>

            <select className={styles.selectInput}>
              <option> Modalidad </option>
              <option>Organizado</option>
              <option>A medida</option>
            </select>

            <input
              type="number"
              placeholder="Presupuesto máximo (€)"
              className={styles.selectInput}
            />
          </div>
        )}

        <button type="submit" className={styles.botonBuscar}>
          <FaSearch /> Buscar
        </button>
      </form>
    </section>
  );
};

export default Buscador;

