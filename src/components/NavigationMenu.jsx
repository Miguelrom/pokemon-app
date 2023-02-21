import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationMenu.module.css';

export default function NavigationMenu () {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu(prevState => !prevState);
  }

  return (
    <header className={classes.header}>
      <div className={classes.home}>
        <NavLink to="/" className={classes.brandLink}>Pokemon Adopter</NavLink>
        <button className={classes.togglerBtn} onClick={toggleMenuHandler}>Toggle Menu</button>
      </div>
      {showMenu &&
        <nav>
          <ul className={classes.list}>
            <li><NavLink to="pokemon">Pokemon</NavLink></li>
            <li><NavLink to="adoptions">Adoptions</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="checkout">Checkout <span className={classes.badge}>{100}</span> </NavLink></li>
          </ul>
        </nav>
      }
    </header>
  );

} //End NavigationMenu component
