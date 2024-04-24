import  { useContext, useEffect, useState} from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

import './PokemonList.css';

import { useGetPokemons } from '../../../services/Pokedex';

import { PokemonContext } from '../../../../utils/PokemonContext';

const PokemonList = () => {
  const {isLoading, data, execute} = useGetPokemons();

  useEffect(() => {
    try {
      execute();
    } catch(e) {
      throw new Error(e);
    }   
  }, [execute]);

  console.log(data, 'data');

  return (
    <>
      <PokemonContext.Provider value={data}>
        <div className="pokemon-list">
          <div> 
            <PokemonCard />
          </div>
        </div>
      </PokemonContext.Provider>
    </>
  );
};
export default PokemonList;