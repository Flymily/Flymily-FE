import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import { VscAccount } from "react-icons/vsc";
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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

        {isAuthenticated && (
          <Link to="/admin" className={styles.adminLink}>Gestión</Link>
        )}

        {isAuthenticated ? (
          <button onClick={handleLogout} className={styles.logoutButton}>
            Cerrar sesión
          </button>
        ) : (
          <Link to="/login" className={styles.loginIcon} aria-label="Iniciar sesión">
            <VscAccount className={styles.accountIcon} />
          </Link>
        )}
      </nav>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {menuOpen && (
        <nav className={styles.megamenu}>
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            ✖
          </button>
          <ul className={styles.linkList}>
            <li><Link to="/viajes" onClick={() => setMenuOpen(false)}>Viajes</Link></li>
            <li><Link to="/buscador" onClick={() => setMenuOpen(false)}>Buscador</Link></li>
            <li><Link to="/comunidad" onClick={() => setMenuOpen(false)}>Comunidad</Link></li>
            <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>

            {isAuthenticated && (
              <li><Link to="/admin" onClick={() => setMenuOpen(false)}>Gestión</Link></li>
            )}

            {!isAuthenticated ? (
              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>Iniciar sesión</Link>
              </li>
            ) : (
              <li>
                <button onClick={() => { logout(); setMenuOpen(false); }}>
                  Cerrar sesión
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;