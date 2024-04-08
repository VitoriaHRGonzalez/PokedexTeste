import React, { useEffect, useState } from "react";
import {api} from "../../../services/Index";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    api
      .get("/pokemon?limit=151")
      .then((response) => {
        console.log(response);
        setPokemon(response.data?.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {pokemon?.map((pokemon, index) => (
        <PokemonCard name={pokemon.name}
        key={index} />
        
      ))}

    </div>
  );
};
export default PokemonList;