import { useState } from "react";
import { useDispatch } from "react-redux";
import { itemAdded } from "../store/cartSlice";
import classes from './PokemonCard.module.css';

export default function PokemonCard ({id, name, sprite, types}) {

  const [isInCart, setIsInCart] = useState(sessionStorage.getItem(`cart_${id}`));
  const isAdopted = sessionStorage.getItem(`adopted_${id}`);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(itemAdded({id, name, sprite, types}));
    setIsInCart(true);
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
        {!isAdopted && <button className={classes.adoptBtn} onClick={addToCartHandler} disabled={isInCart} >{isInCart ? "In cart" : "Add to cart"}</button>}
      </div>
    </div>
  );
}
