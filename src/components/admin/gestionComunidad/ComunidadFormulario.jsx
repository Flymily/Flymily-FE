import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import styles from './ComunidadFormulario.module.css';
import { createPost, updatePost } from '../../../services/comunidad.js';
import { FaPlus, FaSave } from 'react-icons/fa';

const ComunidadFormulario = ({ postEditando, onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

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
      if (postEditando) {
        await updatePost(postEditando.id, data);
      } else {
        await createPost(data);
      }
      reset();
      onSuccess();
    } catch (error) {
      console.error('❌ Error al guardar el post de comunidad', error);
    }
  };

  return (
    <section className={styles.panelFormularioContainer}>
      <div className={styles.panelFormulario}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formularioCol}>
          <h2 className={styles.tituloForm}>
            {postEditando ? <><FaSave /> Editar post</> : <><FaPlus /> Publicar nuevo post</>}
          </h2>

          <section className={styles.grupo}>
            <label>Título</label>
            <input {...register('tituloPost', { required: true })} placeholder="Título del post" />
            {errors.tituloPost && <span className={styles.error}>Este campo es obligatorio</span>}
          </section>

          <section className={styles.grupo}>
            <label>Contenido</label>
            <textarea {...register('contenidoPost')} placeholder="Contenido del post" />
          </section>

          <section className={styles.grupo}>
            <label>Imagen</label>
            <input {...register('imgPathComunidad')} placeholder="URL de la imagen" />
            {imgPreview && (
              <div className={styles.preview}>
                <img src={imgPreview} alt="Vista previa" />
              </div>
            )}
          </section>

          <button type="submit" className={styles.boton}>
            {postEditando ? <><FaSave /> Guardar cambios</> : <><FaPlus /> Publicar</>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ComunidadFormulario;