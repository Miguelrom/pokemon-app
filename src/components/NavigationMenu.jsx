import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import useMediaQuery from '../hooks/useMediaQuery';
import classes from './NavigationMenu.module.css';

export default function NavigationMenu () {

  const [showMenu, setShowMenu] = useState(false);
  const matchesMedia = useMediaQuery('(min-width: 768px)');

  const toggleMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  }


  return (
    <header className={classes.header}>
      <div className={classes.home}>
        <NavLink to="/" className={classes.brandLink}>Pokemon Adopter</NavLink>
        <button className={classes.togglerBtn} onClick={toggleMenuHandler}>Toggle Menu</button>
      </div>
      <nav className={showMenu || matchesMedia ? classes.menuOn : classes.menuOff}>
        <ul className={classes.list}>
          <li><NavLink to="pokemon" className={(isActive) => isActive ? classes.active : undefined}>Pokemon</NavLink></li>
          <li><NavLink to="adoptions" className={(isActive) => isActive ? classes.active : undefined}>Adoptions</NavLink></li>
          <li><NavLink to="about" className={(isActive) => isActive ? classes.active : undefined}>About</NavLink></li>
          <li><NavLink to="checkout" className={(isActive) => isActive ? classes.active : undefined}>Checkout <span className={classes.badge}>{100}</span> </NavLink></li>
        </ul>
      </nav>
    </header>
  );

} //End NavigationMenu component
