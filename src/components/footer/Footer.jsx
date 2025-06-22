import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.linkList}>
        <li>
          <Link to="/quienes-somos" className={styles.link} data-testid="link-quienes">
            Quiénes somos
          </Link>
        </li>
        <li>
          <Link to="/faq" className={styles.link} data-testid="link-faq">
            Preguntas frecuentes
          </Link>
        </li>
        <li>
          <Link to="/contacto" className={styles.link} data-testid="link-contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
