import { NavLink } from 'react-router-dom';
import classes from './NavigationMenu.module.css';

export default function NavigationMenu () {

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li><NavLink className={classes.menuLink} to="/">Home</NavLink></li>
          <li><NavLink to="pokemon">Pokemon</NavLink></li>
          <li><NavLink to="adoptions">Adoptions</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
          <li><NavLink to="checkout">Checkout <span className={classes.badge}>{100}</span> </NavLink></li>
        </ul>
      </nav>
    </header>
  );

} //End NavigationMenu component
