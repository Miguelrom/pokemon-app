import { useState } from "react";
import classes from './PokemonCard.module.css';

export default function PokemonCard ({id, name, sprite, types, isAdopted}) {

  const [addedToCart, setAddedToCart] = useState(false);

  const adoptHandler = () => {
    setAddedToCart(true);
  }

  return (
    <div className={classes.card}>
      <figure><img src={sprite} alt="pokemon"/></figure>
      <div className={classes.cardBody}>
        <p>#{id}</p>
        <h2 className={classes.name}>{name}</h2>
        <div className={classes.types}>
          <span className={classes[types[0]]}>{types[0]}</span> {types[1] && <span className={classes[types[1]]}>{types[1]}</span>}
        </div>
        {!isAdopted && <button className={classes.adoptBtn} onClick={adoptHandler} disabled={addedToCart} >{addedToCart ? "In cart" : "Adopt"}</button>}
      </div>
    </div>
  );
}
