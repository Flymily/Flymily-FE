import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Flymily logo" className={styles.logoImg} />
      </Link>

      <nav className={styles.navLinks}>
        <Link to="/viajes">Viajes</Link>
        <Link to="/buscador">Buscador</Link>
        <Link to="/comunidad">Comunidad</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/login" className={styles.loginIcon} aria-label="Iniciar sesión">
          <VscAccount className={styles.accountIcon} />
        </Link>
      </nav>

      
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      
      {menuOpen && (
        <nav className={styles.megamenu}>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✖</button>
          <ul className={styles.linkList}>
            <li><Link to="/viajes" onClick={() => setMenuOpen(false)}>Viajes</Link></li>
            <li><Link to="/buscador" onClick={() => setMenuOpen(false)}>Buscador</Link></li>
            <li><Link to="/comunidad" onClick={() => setMenuOpen(false)}>Comunidad</Link></li>
            <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Iniciar sesión</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;