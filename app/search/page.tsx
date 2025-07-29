"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setPokemonList } from "@/store/pokemonSlice";

interface PokemonListItem {
  name: string;
  url: string;
}

interface Pokemon {
  name: string;
  sprites: {
    front_default: string | null;
  };
  types: { type: { name: string } }[];
}

export default function SearchPage() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pokemonList.length > 0) return;

    const stored = localStorage.getItem("pokemonList");
    if (stored) {
      dispatch(setPokemonList(JSON.parse(stored)));
    } else {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=39")
        .then((res) => res.json())
        .then((data) => {
          dispatch(setPokemonList(data.results));
          localStorage.setItem("pokemonList", JSON.stringify(data.results));
        })
        .catch((err) => console.error("Loading error", err));
    }
  }, [dispatch, pokemonList]);

  const handleSelect = async (name: string) => {
    setLoading(true);

    const cached = localStorage.getItem(`pokemon-${name}`);
    if (cached) {
      setSelectedPokemon(JSON.parse(cached));
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setSelectedPokemon(data);
      localStorage.setItem(`pokemon-${name}`, JSON.stringify(data));
    } catch {
      alert("Error trying load pokemon");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="bg-red-500 py-10 px-4 flex-grow min-h-full">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Pokemon List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {pokemonList.map((pokemon) => (
          <button
            key={pokemon.name}
            onClick={() => handleSelect(pokemon.name)}
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded shadow hover:bg-blue-100 capitalize"
          >
            {pokemon.name}
          </button>
        ))}
      </div>

      {selectedPokemon && (
        <div className="fixed inset-0 z-50 bg-gray-900/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl relative w-80 max-w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold capitalize mb-4 text-center">
              {selectedPokemon.name}
            </h2>
            {selectedPokemon.sprites.front_default && (
              <img
                src={selectedPokemon.sprites.front_default}
                alt={selectedPokemon.name}
                className="mb-4 mx-auto"
              />
            )}
            <p className="text-center">
              <strong>Types:</strong>{" "}
              {selectedPokemon.types.map(({ type }) => type.name).join(", ")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
