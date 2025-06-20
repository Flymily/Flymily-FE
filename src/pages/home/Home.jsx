import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderData from "../../assets/data/sliderData";
import Buscador from "../../components/buscador/Buscador";
import SuscripcionModal from "../../components/boton-suscripcion/SuscripcionModal";

import styles from "./Home.module.css";
import RecomendacionesViaje from "../../components/recomendaciones-viaje/RecomendacionesViaje";

const Home = () => {
  
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 9000,
    dots: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider {...settings} ref={sliderRef}>
          {sliderData.map((slide, i) => (
            <div key={i} className={styles.slide}>
              <img
                src={slide.img}
                alt={`Imagen ${i + 1}`}
                className={styles.slideImg}
              />
              <div className={styles.textBackdrop}>
                <h2 className={styles.centeredText}>{slide.text}</h2>
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.progressContainer}>
          {sliderData.map((_, i) => (
            <div
              key={i}
              className={styles.progressBar}
              role="button"
              tabIndex={0}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              onKeyDown={(e) =>
                e.key === "Enter" && sliderRef.current?.slickGoTo(i)
              }
            >
              <div
                className={`${styles.progressInner} ${
                  activeSlide === i ? styles.active : ""
                }`}
                style={{
                  animationDuration: `${settings.autoplaySpeed}ms`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <section id="buscador">
        <Buscador />
        <RecomendacionesViaje />
        <SuscripcionModal />
      </section>
    </div>
  );
};

export default Home;