import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.linkList}>
        <li><Link to="/quienes-somos" className={styles.link}>Quiénes somos</Link></li>
        <li><Link to="/faq" className={styles.link}>Preguntas frecuentes</Link></li>
        <li><Link to="/contacto" className={styles.link}>Contacto</Link></li>
        <li>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
