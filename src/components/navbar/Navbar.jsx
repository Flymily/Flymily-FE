import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Flymily logo" className="logo-img" />
      </Link>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && (
        <nav className={styles.megamenu}>
            <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✖</button>
            <ul className={styles.linkList}>
                <li><Link to="/experiencias" onClick={() => setMenuOpen(false)}>Experiencias</Link></li>
                <li><Link to="/buscador" onClick={() => setMenuOpen(false)}>Buscador</Link></li>
                <li><Link to="/comunidad" onClick={() => setMenuOpen(false)}>Comunidad</Link></li>
                <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
                <li><Link to="/admin" onClick={() => setMenuOpen(false)}>Administradoras</Link></li>
            </ul>
        </nav>
        )}
    </header>
  );
};

export default Navbar;