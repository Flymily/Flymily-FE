import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styles from './ComunidadFormulario.module.css';
import { FaSave, FaPlus, FaTrash } from 'react-icons/fa';
import { createFormApi, updateFormApi, deleteFormApi } from '../../../services/comunidadAdminApi.js';

const ComunidadFormulario = ({ postEditando, onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const imgPreview = watch('imgPathComunidad');

  useEffect(() => {
    if (postEditando) {
      Object.entries(postEditando).forEach(([key, val]) => {
        setValue(key, val);
      });
    } else {
      reset();
    }
  }, [postEditando]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const postData = {
        tituloPost: data.tituloPost,
        contenidoPost: data.contenidoPost,
        imgPathComunidad: data.imgPathComunidad || "", // si no hay imagen
      };

      if (postEditando) {
        await updateFormApi(postEditando.id, postData);
      } else {
        await createFormApi(postData);
      }

      reset();
      onSuccess();
      alert('✅ ¡Post guardado correctamente!');
    } catch (error) {
      console.error('❌ Error al guardar el post', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!postEditando) return;
    const confirmacion = window.confirm("¿Seguro que deseas eliminar este post?");
    if (!confirmacion) return;
    try {
      setLoading(true);
      await deleteFormApi(postEditando.id);
      reset();
      onSuccess();
      alert('🗑️ Post eliminado correctamente');
    } catch (error) {
      console.error('❌ Error al eliminar el post', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.tituloForm}>
        {postEditando ? <><FaSave /> Editar post</> : <><FaPlus /> Crear nuevo post</>}
      </h2>

      <section className={styles.grupo}>
        <label>Título</label>
        <input {...register('tituloPost', { required: true })} placeholder="Título del post" />
        {errors.tituloPost && <span className={styles.error}>Este campo es obligatorio</span>}
      </section>

      <section className={styles.grupo}>
        <label>Contenido</label>
        <textarea {...register('contenidoPost', { required: true })} placeholder="Contenido del post" rows={6} />
        {errors.contenidoPost && <span className={styles.error}>Este campo es obligatorio</span>}
      </section>

      <section className={styles.grupo}>
        <label>URL de la imagen</label>
        <input {...register('imgPathComunidad')} placeholder="https://ejemplo.com/imagen.jpg" />
        {imgPreview && (
          <div className={styles.preview}>
            <img src={imgPreview} alt="Vista previa del post" />
          </div>
        )}
      </section>

      <div className={styles.botonesAccion}>
        {loading ? (
          <span className={styles.loader}></span>
        ) : (
          <>
            <button type="submit" className={styles.boton}>
              {postEditando ? <><FaSave /> Guardar cambios</> : <><FaPlus /> Publicar</>}
            </button>
            {postEditando && (
              <button type="button" className={styles.eliminar} onClick={handleDelete}>
                <FaTrash size={14} /> <span>Eliminar</span>
              </button>
            )}
          </>
        )}
      </div>
    </form>
  );
};

export default ComunidadFormulario;
