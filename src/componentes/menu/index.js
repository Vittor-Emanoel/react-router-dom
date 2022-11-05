import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
  return (
  <header>
    <nav className={styles.navegacao}>
      <Link className={styles.link} to="/">
        Inicio
      </Link>
      <Link className={styles.link} to="/sobremim">
        Sobre mim
      </Link>
    </nav>
  </header>
    );
}

export default Menu;