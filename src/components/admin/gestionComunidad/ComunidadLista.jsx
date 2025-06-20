import { useEffect, useState } from 'react';
import { getContenidoComunidad } from '../../../services/comunidad.js'; 
import styles from './ComunidadLista.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ConfirmDialog from '../../ui/ConfirmDialog';

const ComunidadLista = ({ onEdit, reload, esAdmin }) => {
  const [posts, setPosts] = useState([]);
  const [idAEliminar, setIdAEliminar] = useState(null);

  const cargarPosts = async () => {
    try {
      const res = await getContenidoComunidad();
      const data = res.data;
      setPosts(Array.isArray(data) ? data : []);
      console.log("✅ Posts comunidad gestion:", data);
    } catch (err) {
      console.error('❌ Error al obtener los posts de comunidad', err);
      setPosts([]);
    }
  };

  useEffect(() => {
    cargarPosts();
  }, [reload]);

  const confirmarEliminar = async () => {
    try {

      await axios.delete(`/posts-comunidad/${idAEliminar}`);
      setIdAEliminar(null);
      cargarPosts();
    } catch (err) {
      console.error('❌ Error al eliminar post', err);
    }
  };

  return (
    <div className={styles.lista}>
      <h2>Posts de la comunidad</h2>
      <div className={styles.grid}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className={styles.card}>
              <img
                src={post.imgPathComunidad}
                alt={post.tituloPost}
                className={styles.imagen}
              />
              <h3>{post.tituloPost}</h3>
              <p>{post.contenidoPost}</p>
              {esAdmin && <p><strong>ID:</strong> {post.id}</p>}
              <div className={styles.botones}>
                <button onClick={() => onEdit(post)}>
                  <FaEdit /> Editar
                </button>
                <button onClick={() => setIdAEliminar(post.id)}>
                  <FaTrash /> Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay publicaciones aún.</p>
        )}
      </div>

      {idAEliminar !== null && (
        <ConfirmDialog
          mensaje="¿Deseas eliminar este post?"
          onConfirmar={confirmarEliminar}
          onCancelar={() => setIdAEliminar(null)}
        />
      )}
    </div>
  );
};

export default ComunidadLista;
