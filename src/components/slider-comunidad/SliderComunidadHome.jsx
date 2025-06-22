import { useEffect, useState } from "react";
import { getContenidoComunidad } from "../../services/comunidad";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import styles from "./SliderComunidadHome.module.css";

const SliderComunidadHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchContenido = async () => {
      try {
        const response = await getContenidoComunidad();
        setPosts(response.data.slice(0, )); 
      } catch (error) {
        console.error("❌ Error al cargar contenido de comunidad:", error);
      }
    };

    fetchContenido();
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className={styles.sliderContainer}>
      <h2 className={styles.titulo}>Recuerdos de la Comunidad</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        autoplay={{ delay: 3500 }}
        loop
        breakpoints={{
          320:  { slidesPerView: 1 },
          768:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <Link to="/comunidad" className={styles.card}>
              <div className={styles.imagenWrapper}>
                <img src={post.imgPathComunidad} alt={post.tituloPost} className={styles.imagen} />
              </div>
              <div className={styles.cardContent}>
                <h3>{post.tituloPost}</h3>
                <p>
                  {post.contenidoPost.length > 100
                    ? post.contenidoPost.slice(0, 100) + "..."
                    : post.contenidoPost}
                </p>
              </div>
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderComunidadHome;