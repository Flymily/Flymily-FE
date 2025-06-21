import React, { useEffect, useState } from "react";
import { getAllViajesPublicos } from "../../services/viajes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./SliderViajesHome.module.css";

const SliderViajesHome = () => {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    const fetchViajes = async () => {
      try {
        const response = await getAllViajesPublicos();
        setViajes(response.data.slice(0, 10)); 
      } catch (error) {
        console.error("❌ Error al cargar viajes en slider:", error);
      }
    };

    fetchViajes();
  }, []);

  if (viajes.length === 0) return null;

  return (
    <section className={styles.sliderContainer}>
      <h2 className={styles.titulo}>Sugerencias para tu viaje</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3500 }}
        loop
        breakpoints={{
          320:  { slidesPerView: 1 },
          640:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {viajes.map((v) => (
          <SwiperSlide key={v.id}>
            <div className={styles.card}>
              <img src={v.imgPath} alt={v.title} />
              <h3>{v.title}</h3>
              <p>{v.description.length > 80 ? v.description.slice(0, 80) + "..." : v.description}</p>
              <span className={styles.tipo}>{v.tipo}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderViajesHome;
