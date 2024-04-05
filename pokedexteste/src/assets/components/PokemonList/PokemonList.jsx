import React, { useEffect, useState } from "react";
import  api  from "../../../services/Index";


const PokemonList = () => {
const [pokemon, setPokemon] = useState()

    useEffect(() => {
        api
            .get('/pokemon?limit=151')
            .then((response) => {console.log(response)
                 setPokemon(response.data)})
            .catch((err) => {
                console.error(err)
            })
    }, [])
  

  return (
    <ul>

      {pokemon.data.results.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
