import PokemonCard from "./PokemonCard";
import classes from './PokemonList.module.css';


const POKEMON_PREVIEW_LIST = [
  {
    id: 1,
    name: "bulbasaur",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["grass", "poison"],
  },
  {
    id: 2,
    name: "ivysaur",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    types: ["grass", "poison"],
  },
  {
    id: 3,
    name: "venusaur",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    types: ["grass", "poison"],
  },
];

export default function PokemonList () {

  return (
    <div>
      <div className={classes.row}>
        <PokemonCard {...POKEMON_PREVIEW_LIST[0]} isAdopted={false}/>
        <PokemonCard {...POKEMON_PREVIEW_LIST[1]} isAdopted={false}/>
        <PokemonCard {...POKEMON_PREVIEW_LIST[2]} isAdopted={false}/>
      </div>
      <div className={classes.row}>
        <PokemonCard {...POKEMON_PREVIEW_LIST[0]} isAdopted={false}/>
        <PokemonCard {...POKEMON_PREVIEW_LIST[1]} isAdopted={false}/>
        <PokemonCard {...POKEMON_PREVIEW_LIST[2]} isAdopted={false}/>
      </div>
      <div className={classes.row}>
        <PokemonCard {...POKEMON_PREVIEW_LIST[0]} isAdopted={false}/>
        <PokemonCard {...POKEMON_PREVIEW_LIST[1]} isAdopted={false}/>
        <PokemonCard {...POKEMON_PREVIEW_LIST[2]} isAdopted={false}/>
      </div>
      <div className={classes.row}>
        <PokemonCard {...POKEMON_PREVIEW_LIST[0]} isAdopted={false}/>
        <PokemonCard {...POKEMON_PREVIEW_LIST[1]} isAdopted={false}/>
        <PokemonCard {...POKEMON_PREVIEW_LIST[2]} isAdopted={false}/>
      </div>
      <div className={classes.pageControl}>
        <button>Previous</button><span> <span style={{fontWeight: "800"}}>{1}</span> of 84</span><button>Next</button>
      </div>
    </div>
  );
}
