import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="/contacto" className={styles.link}>Contacto</a>
      <a
        href="https://www.instagram.com/tu_usuario"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className={styles.iconText}>
          <FaInstagram /> Instagram
        </span>
      </a>
      <a href="/info-legal" className={styles.link}>Información legal</a>
    </footer>
  );
};

export default Footer;
