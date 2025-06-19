import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import styles from './viajeFormulario.module.css';
import { FaPlaneDeparture, FaCalendarAlt, FaUsers, FaPlus, FaSave } from 'react-icons/fa';
import { createViaje } from '../../../services/viajes.js';
import axios from 'axios';

const ViajeFormulario = ({ viajeEditando, onSuccess, onCancelEdit }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const imgPreview = watch('imgPath');

  useEffect(() => {
    if (viajeEditando) {
      Object.entries(viajeEditando).forEach(([key, val]) => {
        setValue(key, Array.isArray(val) ? val.join(', ') : val);
      });
    } else {
      reset();
    }
  }, [viajeEditando]);

  const onSubmit = async (data) => {
    try {
      const edadesConvertidas = data.edadesNinos
        ? data.edadesNinos.split(',').map((e) => parseInt(e.trim()))
        : [];

      const viajeData = {
        ...data,
        numAdultos: parseInt(data.numAdultos),
        numNinos: parseInt(data.numNinos),
        presupuesto: parseFloat(data.presupuesto),
        edadesNinos: edadesConvertidas,
        discapacidadMovilRed: !!data.discapacidadMovilRed,
        grupoOPrivado: !!data.grupoOPrivado,
        organizadoOMedida: !!data.organizadoOMedida,
      };

      if (viajeEditando) {
        await axios.put(`/api/viajes/${viajeEditando.id}`, viajeData);
      } else {
        await createViaje(
          viajeData,
          data.ciudadSalida,
          data.paisSalida,
          data.ciudadDestino,
          data.paisDestino,
          data.tipoViaje,
          data.transporte
        );
      }

      reset();
      onSuccess();
    } catch (error) {
      console.error('❌ Error al guardar el viaje', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.tituloForm}>
        {viajeEditando ? <><FaSave /> Editar viaje</> : <><FaPlus /> Publicar nuevo viaje</>}
      </h2>

      <section className={styles.grupo}>
        <label>Título</label>
        <input {...register('title', { required: true })} placeholder="Título del viaje" />
        {errors.title && <span className={styles.error}>Este campo es obligatorio</span>}
      </section>

      <section className={styles.grupo}>
        <label>Descripción</label>
        <textarea {...register('description')} placeholder="Descripción del viaje" />
      </section>

      <section className={styles.dosCol}>
        <div className={styles.grupo}>
          <label><FaCalendarAlt /> Fecha de ida</label>
          <input type="date" {...register('fechaDeIda')} />
        </div>
        <div className={styles.grupo}>
          <label><FaCalendarAlt /> Fecha de vuelta</label>
          <input type="date" {...register('fechaDeVuelta')} />
        </div>
      </section>

      <section className={styles.dosCol}>
        <div className={styles.grupo}>
          <label><FaUsers /> Adultos</label>
          <input type="number" {...register('numAdultos')} />
        </div>
        <div className={styles.grupo}>
          <label><FaUsers /> Niños</label>
          <input type="number" {...register('numNinos')} />
        </div>
      </section>

      <section className={styles.grupo}>
        <label>Edades de los niños (separadas por coma)</label>
        <input {...register('edadesNinos')} placeholder="Ej: 5, 8, 12" />
      </section>

      <section className={styles.grupo}>
        <label>Presupuesto (€)</label>
        <input type="number" step="0.01" {...register('presupuesto')} />
      </section>

      <section className={styles.dosCol}>
        <div className={styles.grupo}>
          <label>Ciudad de salida</label>
          <input {...register('ciudadSalida')} />
        </div>
        <div className={styles.grupo}>
          <label>País de salida</label>
          <input {...register('paisSalida')} />
        </div>
      </section>

      <section className={styles.dosCol}>
        <div className={styles.grupo}>
          <label>Ciudad destino</label>
          <input {...register('ciudadDestino')} />
        </div>
        <div className={styles.grupo}>
          <label>País destino</label>
          <input {...register('paisDestino')} />
        </div>
      </section>

      <section className={styles.dosCol}>
        <div className={styles.grupo}>
          <label>Tipo de viaje</label>
          <input {...register('tipoViaje')} />
        </div>
        <div className={styles.grupo}>
          <label>Transporte</label>
          <input {...register('transporte')} />
        </div>
      </section>

      <section className={styles.grupo}>
        <label>Agencia</label>
        <input {...register('agencia')} />
      </section>

      <section className={styles.grupo}>
        <label>URL de la imagen</label>
        <input {...register('imgPath')} placeholder="https://ejemplo.com/imagen.jpg" />
        {imgPreview && (
          <div className={styles.preview}>
            <img src={imgPreview} alt="Vista previa del viaje" />
          </div>
        )}
      </section>

      <fieldset className={styles.checks}>
        <legend>Opciones</legend>
        <label>
          <input type="checkbox" {...register('grupoOPrivado')} />
          Grupo o Privado
        </label>
        <label>
          <input type="checkbox" {...register('organizadoOMedida')} />
          Organizado o a medida
        </label>
        <label>
          <input type="checkbox" {...register('discapacidadMovilRed')} />
          Adaptado a movilidad reducida
        </label>
      </fieldset>

      <div className={styles.botonesAccion}>
        <button type="submit" className={styles.boton}>
            {viajeEditando ? <><FaSave /> Guardar cambios</> : <><FaPlus /> Publicar viaje</>}
        </button>
          {viajeEditando && (
            <button type="button" className={styles.cancelar} onClick={() => {
              reset();
              onSuccess();
            }}
              >
                <span className={styles.iconoCancelar}>✖</span> Cancelar edición
            </button>
          )}
        </div>
    </form>
  );
};

export default ViajeFormulario;
