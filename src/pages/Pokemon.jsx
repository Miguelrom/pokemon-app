import PokemonCard from "../components/PokemonCard";

// const DUMMY_POKEMON_RES = {
//   count: 1279,
//   next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
//   previous: null,
//   results: [
//     {
//       name: "bulbasaur",
//       url: "https://pokeapi.co/api/v2/pokemon/1/",
//     },
//     {
//       name: "ivysaur",
//       url: "https://pokeapi.co/api/v2/pokemon/2/",
//     },
//     {
//       name: "venusaur",
//       url: "https://pokeapi.co/api/v2/pokemon/3/",
//     },
//     {
//       name: "charmander",
//       url: "https://pokeapi.co/api/v2/pokemon/4/",
//     },
//     {
//       name: "charmeleon",
//       url: "https://pokeapi.co/api/v2/pokemon/5/",
//     },
//     {
//       name: "charizard",
//       url: "https://pokeapi.co/api/v2/pokemon/6/",
//     },
//     {
//       name: "squirtle",
//       url: "https://pokeapi.co/api/v2/pokemon/7/",
//     },
//     {
//       name: "wartortle",
//       url: "https://pokeapi.co/api/v2/pokemon/8/",
//     },
//     {
//       name: "blastoise",
//       url: "https://pokeapi.co/api/v2/pokemon/9/",
//     },
//     {
//       name: "caterpie",
//       url: "https://pokeapi.co/api/v2/pokemon/10/",
//     },
//     {
//       name: "metapod",
//       url: "https://pokeapi.co/api/v2/pokemon/11/",
//     },
//     {
//       name: "butterfree",
//       url: "https://pokeapi.co/api/v2/pokemon/12/",
//     },
//   ],
// };

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
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    types: ["grass", "poison"],
  },
  {
    id: 3,
    name: "venusaur",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    types: ["grass", "poison"],
  },
];

export default function Pokemon () {


  return (
    <>
      <h1>Pokemon page...</h1>
      <PokemonCard {...POKEMON_PREVIEW_LIST[0]} isAdopted={false}/>
    </>
  );
}
