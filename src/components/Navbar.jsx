import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>Meu Portfólio</Link>
      <ul className={styles.navLinks}>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre Mim</Link></li>
        <li><Link to="/habilidades">Habilidades</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
