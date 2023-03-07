import { Suspense } from "react";
import {
  useSearchParams,
  useLoaderData,
  useNavigation,
  defer,
  Await
} from "react-router-dom";
import PokemonList from "../components/PokemonList";
import PageTitle from "../components/ui/PageTitle";
import Loading from "../components/ui/Loading";

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

export default function Pokemon() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pokemon = useLoaderData();

  const navigation = useNavigation();

  let page = parseInt(searchParams.get("page"));

  if (!Number.isInteger(page) || page < 1 || page > 84) {
    page = 1;
  }

  const pageChangeHandler = (direction) => {
    if (direction === "previous") {
      --page;
      setSearchParams(`page=${page}`);
    } else if (direction === "next") {
      ++page;
      setSearchParams(`page=${page}`);
    } else {
      throw new Error("Incorrect page direction value");
    }
  };


  return (
    <>
      <PageTitle>Browse all pokémon</PageTitle>
      {navigation.state === 'loading' && <Loading />}
      {navigation.state === 'idle' &&
        <Suspense fallback={<Loading />}>
          <Await resolve={pokemon.batch}>
            {(pokemon) =>
              <PokemonList
                pokemon={pokemon}
                onPageChange={pageChangeHandler}
                page={page}
              />
            }
          </Await>
        </Suspense>
      }
    </>
  );
}

export async function loader({ request }) {

  const RESULTS_LIMIT = 12;

  const currentURL = new URL(request.url);

  let page = parseInt(currentURL.searchParams.get("page"));

  if (!Number.isInteger(page) || page < 1 || page > 84) {
    page = 1;
  }

  const offset = RESULTS_LIMIT * (page - 1);

  return defer({batch: getPokemonBatch(offset, RESULTS_LIMIT)});

}

async function getPokemonBatch(offset, RESULTS_LIMIT) {

  const detailArray = Array(RESULTS_LIMIT);

  for (let i = 0; i < RESULTS_LIMIT; ++i) {

    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1 + offset}/`);

    if (res.ok) {
      detailArray[i] = await res.json();
    } else {
      detailArray[i] = {id: 0, name: 'Not found', types: [{type: {name: 'normal'}}]};
    }

  }

  const pokemonBatch = Array(RESULTS_LIMIT);

  for (let i = 0; i < RESULTS_LIMIT; ++i) {

    const id = detailArray[i].id;

    const name = detailArray[i].name;

    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    const types = detailArray[i].types.map((item) => {
      return item.type.name;
    });

    pokemonBatch[i] = {
      id,
      name,
      sprite,
      types,
    };

  } // End for loop

  return pokemonBatch;

} // End getPokemonBatch function


