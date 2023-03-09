import PokemonCard from "./PokemonCard";
import classes from './PokemonList.module.css';


// const POKEMON_PREVIEW_LIST = [
//   {
//     id: 1,
//     name: "bulbasaur",
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     types: ["grass", "poison"],
//   },
//   {
//     id: 2,
//     name: "ivysaur",
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
//     types: ["grass", "poison"],
//   },
//   {
//     id: 3,
//     name: "venusaur",
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
//     types: ["grass", "poison"],
//   },
// ];

export default function PokemonList ({pokemon, onPageChange, page}) {

  const list = pokemon.map((item) => <PokemonCard {...item}/>);

  return (
    <>
      <div className={classes.listContainer}>
        <div className={classes.pokeGrid}>
          {list}
        </div>
      </div>
      <div className={classes.pageControl}>
        <button onClick={() => onPageChange('previous')} disabled={page===1}>Previous</button>
        <span> <span style={{fontWeight: "800"}}>{page}</span> of 84</span>
        <button onClick={() => onPageChange('next')} disabled={page===84}>Next</button>
      </div>
    </>
  );
}
