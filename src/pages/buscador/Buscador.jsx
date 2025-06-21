import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Buscador.module.css";
import {
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaUserFriends,
  FaChild,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaSuitcaseRolling,
} from "react-icons/fa";
import { getAllTiposViajePublicos } from "../../services/tipoViajeApi";
import { filtroViajesApi } from "../../services/filtroViajesApi";

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
  const [tiposViajeDisponibles, setTiposViajeDisponibles] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [origen, setOrigen] = useState("");
  const [paisOrigen, setPaisOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [paisDestino, setPaisDestino] = useState("");
  const [adultos, setAdultos] = useState(2);
  const [niños, setNinos] = useState(2);
  const [edades, setEdades] = useState([0, 5]);
  const [mostrarAvanzado, setMostrarAvanzado] = useState(false);
  const [viajesFiltrados, setViajesFiltrados] = useState([]);

  useEffect(() => {
    const fetchTiposViaje = async () => {
      try {
        const response = await getAllTiposViajePublicos();
        setTiposViajeDisponibles(response.data);
      } catch (error) {
        console.error("Error al obtener los tipos de viaje:", error);
      }
    };

    fetchTiposViaje();
  }, []);

  const handleBuscar = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate || !origen || !destino || !tipoViaje || !paisOrigen || !paisDestino) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const formatearFecha = (fecha) => {
      const year = fecha.getFullYear();
      const month = String(fecha.getMonth() + 1).padStart(2, "0");
      const day = String(fecha.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const payload = {
      numAdultos: adultos,
      numNinos: niños,
      fechaDeIda: formatearFecha(startDate),
      fechaDeVuelta: formatearFecha(endDate),
      tipoViaje,
      paisSalida: paisOrigen.trim().toLowerCase(),
      ciudadSalida: origen.trim().toLowerCase(),
      paisDestino: paisDestino.trim().toLowerCase(),
      ciudadDestino: destino.trim().toLowerCase(),
      edadesNinos: edades.slice(0, niños),
    };

    try {
      const response = await filtroViajesApi(payload);
      const data = Array.isArray(response.data) ? response.data : response.data.viajes || [];
      setViajesFiltrados(data);
    } catch (error) {
      console.error("Error al filtrar viajes:", error);
      alert("Ocurrió un error al buscar viajes.");
    }
  };

  return (
    <section className={styles.buscadorContainer}>
      <form className={styles.formulario}>
        <h1 className={styles.titulo}>Encuentra tu viaje ideal</h1>

        <div className={styles.filaPrincipal}>
          <div className={styles.inputGroup}>
            <FaSuitcaseRolling className={styles.iconInside} />
            <select
              className={styles.selectBonito}
              value={tipoViaje}
              onChange={(e) => setTipoViaje(e.target.value)}
            >
              <option value="">Tipo de Viaje</option>
              {tiposViajeDisponibles.map((tipo) => (
                <option key={tipo.id} value={tipo.tipoViaje}>
                  {tipo.tipoViaje}
                </option>
              ))}
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
              placeholder="País de origen"
              value={paisOrigen}
              onChange={(e) => setPaisOrigen(e.target.value)}
              className={styles.inputWithIcon}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaMapMarkedAlt className={styles.iconInside} />
            <input
              type="text"
              placeholder="Ciudad de origen"
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
              className={styles.inputWithIcon}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaMapMarkedAlt className={styles.iconInside} />
            <input
              type="text"
              placeholder="País de destino"
              value={paisDestino}
              onChange={(e) => setPaisDestino(e.target.value)}
              className={styles.inputWithIcon}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaMapMarkedAlt className={styles.iconInside} />
            <input
              type="text"
              placeholder="Ciudad de destino"
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
              <input
              key={i}
              type="number"
              min="0"
              max="17"
              value={edades[i] || 0}
              onChange={(e) => {
                const nuevasEdades = [...edades];
                nuevasEdades[i] = parseInt(e.target.value);
                setEdades(nuevasEdades);
              }}
              className={styles.edadesInput}
            />
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

        <button type="submit" className={styles.botonBuscar} onClick={handleBuscar}>
          <FaSearch /> Buscar
        </button>
      </form>

      {viajesFiltrados.length > 0 && (
        <div className={styles.lista}>
          <h2>Resultados encontrados</h2>
          <div className={styles.grid}>
            {viajesFiltrados.map((viaje) => (
              <div key={viaje.id} className={styles.card}>
                <img
                  src={viaje.imgPath}
                  alt={viaje.title}
                  className={styles.imagen}
                />
                <h3>{viaje.title}</h3>
                <p><strong>Destino:</strong> {viaje.ciudadDestino}, {viaje.paisDestino}</p>
                <p><strong>Salida:</strong> {viaje.ciudadSalida} - {viaje.fechaDeIda}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Buscador;
