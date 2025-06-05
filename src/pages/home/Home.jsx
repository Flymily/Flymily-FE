import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderData from '../../assets/data/sliderData.js';


import styles from './Home.module.css';

const Home = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 9000,
    dots: true,
    infinite: true,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className={styles.sliderContainer} data-testid="slider-container">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className={styles.slide} data-testid={`slide-${index}`}>
          <img 
            src={slide.img} 
            alt={`Imagen ${index + 1}`} 
            className={styles.slideImg} 
          />
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