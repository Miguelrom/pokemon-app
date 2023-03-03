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

export default function PokemonList ({pokemon}) {

  return (
    <div>
      <div className={classes.row}>
        <PokemonCard {...pokemon[0]} isAdopted={false}/>
        <PokemonCard {...pokemon[1]} isAdopted={false}/>
        <PokemonCard {...pokemon[2]} isAdopted={false}/>
      </div>
      <div className={classes.row}>
        <PokemonCard {...pokemon[3]} isAdopted={false}/>
        <PokemonCard {...pokemon[4]} isAdopted={false}/>
        <PokemonCard {...pokemon[5]} isAdopted={false}/>
      </div>
      <div className={classes.row}>
        <PokemonCard {...pokemon[6]} isAdopted={false}/>
        <PokemonCard {...pokemon[7]} isAdopted={false}/>
        <PokemonCard {...pokemon[8]} isAdopted={false}/>
      </div>
      <div className={classes.row}>
        <PokemonCard {...pokemon[9]} isAdopted={false}/>
        <PokemonCard {...pokemon[10]} isAdopted={false}/>
        <PokemonCard {...pokemon[11]} isAdopted={false}/>
      </div>
      <div className={classes.pageControl}>
        <button>Previous</button><span> <span style={{fontWeight: "800"}}>{1}</span> of 84</span><button>Next</button>
      </div>
    </div>
  );
}
