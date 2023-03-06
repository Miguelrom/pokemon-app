import { useSearchParams, useLoaderData } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import PageTitle from "../components/ui/PageTitle";


// const first12PokemonRes = {
//   count: 1279,
//   next: "https://pokeapi.co/api/v2/pokemon?offset=12&limit=12",
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

// const DUMMY_POKEMON_DETAIL = {
//   types: [
//     {
//       slot: 1,
//       type: {
//         name: "grass",
//         url: "https://pokeapi.co/api/v2/type/12/",
//       },
//     },
//     {
//       slot: 2,
//       type: {
//         name: "poison",
//         url: "https://pokeapi.co/api/v2/type/4/",
//       },
//     },
//   ],
//   weight: 69,
// };


export default function Pokemon () {

  const [searchParams, setSearchParams] = useSearchParams();

  const pokemon = useLoaderData();

  let page = searchParams.has('page') ? parseInt(searchParams.get('page')) : 1;

  const pageChangeHandler = (direction) => {

    if (direction === 'previous') {
      --page;
      setSearchParams(`page=${page}`);
    } else if (direction === 'next') {
      ++page;
      setSearchParams(`page=${page}`);
    } else {
      throw new Error('Incorrect page direction value');
    }
  }

  return (
    <>
      <PageTitle>Browse all pokémon</PageTitle>
      <PokemonList pokemon={pokemon} onPageChange={pageChangeHandler} page={page}/>
    </>
  );
}


export async function loader ({ request }) {

  const currentURL = new URL(request.url);

  const page = currentURL.searchParams.has('page') ? parseInt(currentURL.searchParams.get('page')) : 1;

  const offset = 12 * (page - 1);

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`);

  const data = await res.json();

  const pokemonBatch = Array(12);

  for (let i = 0; i < data.results.length; ++i) {

    const id = i + 1 + offset;

    const name = data.results[i].name;

    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    const res = await fetch(data.results[i].url);

    const detailData = await res.json();

    const types = detailData.types.map((item) => {
      return item.type.name;
    });

    pokemonBatch[i] = {
      id,
      name,
      sprite,
      types,
    }

  }

  return pokemonBatch;

}
