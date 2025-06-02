import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Andaman from '../../assets/Andaman.jpg';
import boreal from '../../assets/boreal.jpg'; 
import bison from '../../assets/bison.jpg';
import bosc from '../../assets/Bosc.jpg';
import viajar from '../../assets/Viajar.jpg';

import styles from './Home.module.css';

const Home = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 9000,
    dots: true,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = [
    {
      img: Andaman,
      text: 'Flymily, donde despegan los recuerdos en familia',
    },
    {
      img: boreal,
      text: 'Mil lugares que descubrir, un planeta que querer',
    },
    {
      img: bison,
      text: 'La familia debe ser un aliciente para viajar, no un impedimento',
    },
    {
      img: bosc,
      text: 'Tu próxima aventura, a un solo clic',
    },
    {
      img: viajar,
      text:'Viajar juntos nos acerca más que nunca',
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
          <img src={slide.img} alt={`Imagen ${index + 1}`} className={styles.slideImg} />
          <div className={styles.textBackdrop}>
            <h2 className={styles.centeredText}>{slide.text}</h2>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;