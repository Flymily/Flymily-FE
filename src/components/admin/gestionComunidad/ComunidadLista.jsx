import { useEffect, useState } from 'react';
import { getAllPosts, deletePost } from '../../../services/comunidad.js';
import styles from './ComunidadLista.module.css';

const ComunidadLista = ({ onEdit, reload }) => {
  const [posts, setPosts] = useState([]);

  const cargarPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      console.error('❌ Error al cargar los posts', error);
    }
  };

  useEffect(() => {
    cargarPosts();
  }, [reload]);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este post?')) {
      await deletePost(id);
      cargarPosts();
    }
  };

  return (
    <section className={styles.listaCol}>
      <h2 className={styles.subtitulo}>Posts publicados</h2>
      <div className={styles.listaGridResponsive}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <img src={post.imgPathComunidad} alt={post.tituloPost} className={styles.imagen} />
            <div className={styles.cardContent}>
              <h3>{post.tituloPost}</h3>
              <p>{post.contenidoPost?.slice(0, 200)}...</p>
            </div>
            <div className={styles.acciones}>
              <button onClick={() => onEdit(post)}>✏️ Editar</button>
              <button onClick={() => handleDelete(post.id)}>🗑 Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComunidadLista;
