import MenuLink from '../menuLink';
import styles from './Menu.module.css';

function Menu() {
  return (
  <header>
    <nav className={styles.navegacao}>
        <MenuLink to="/">
          Inicio
        </MenuLink>
        <MenuLink to="/sobremim">
          Sobre mim 
        </MenuLink>
    </nav>
  </header>
    );
}

export default Menu;