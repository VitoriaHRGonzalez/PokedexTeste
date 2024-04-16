import { useCallback, useState } from 'react';

const ImageBaseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
const baseURL = 'https://pokeapi.co/api/v2';


export const getAllPokemons = async(options) => {
  const response = await fetch(`${baseURL}/pokemon?limit=151`, options);  //Retorna tudo da API
  const pokemonResponse = await response.json(); //Transforma no formano json
  const results = pokemonResponse.results; //Pega somente os results "151 pokemons"
  const payload = await Promise.all(

    results.map(async (pokemon) => { //Pegar os 151 pokemons, e pra cada pokemon, chama o getStatus  e chama o getImage
      const {id,types} = await getPokemonStatus(pokemon.url);
      const imageUrl = getPokemonImageUrl(id);
      return {id, name:pokemon.name, types, imageUrl};
    })
  );
  return payload;

};

const getPokemonStatus = async(url) => {
  const response = await fetch(url);
  const pokemonResponse = await response.json();
  const {id, types} = pokemonResponse;
  return {id, types};
};

export const getPokemonImageUrl = (id) => {   //Estrutura onde vai concatenar o link com o id de cada pokemon para pegar a imagem
  return `${ImageBaseURL}/${id}.png`;
};

export const useGetPokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [data, setData] = useState(null);

  const execute = async(options = {}) => {
    try {
      setIsLoading(true);
      const pokemons = await getAllPokemons(options);
      console.log(pokemons, 'pokemons');
      setData(pokemons);

      setIsLoading(false);

      return pokemons;
    } catch (e){
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };
  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, [])
  };
};

