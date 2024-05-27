import { createContext, useState } from 'react';
import { getAllPokemons } from '../services/pokedex';

export const PokemonContext = createContext(null);

export const useGetPokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [data, setData] = useState(null);

  
  const getData = async(options = {}) => {
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
    getData
  };
};

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({children}) => {
  const { data } = useGetPokemons();

  return (
    <PokemonContext.Provider value={data}>
      {children}
    </PokemonContext.Provider>
  );
};
