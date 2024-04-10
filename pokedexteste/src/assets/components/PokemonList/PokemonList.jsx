import React, { useEffect, useState } from "react";
import {api} from "../../../services/Index";
import PokemonCard from "../PokemonCard/PokemonCard";
import { getAllPokemons } from "../../../services/Pokedex";

import './PokemonList.css'

import { useGetPokemons } from "../../../services/Pokedex";

const PokemonList = () => {
  const {isLoading, data, execute} = useGetPokemons()
  useEffect(() => {
      try {
        execute()
      } catch(e) {
        throw new Error(e)
      }
      
  }, [execute]);

  return (
    <div className="pokemon-list">
      {data && data?.map((pokemon, index) => (
        <PokemonCard key={index} name={pokemon.name} imageUrl={pokemon.imageUrl} types={pokemon.types} moves={pokemon.moves} id={pokemon.id}/>
        
      ))}

    </div>
  );
};
export default PokemonList;