import  { useContext, useEffect, useState} from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

import './PokemonList.css';

import { useGetPokemons } from '../../../services/Pokedex';

import { PokemonContext } from '../../../../utils/PokemonContext';

import Pokemon from '../Pokemon/Pokemon';


const PokemonList = () => {
  const {isLoading, data, execute} = useGetPokemons();
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    try {
      execute();
    } catch(e) {
      throw new Error(e);
    }   
  }, [execute]);

  return (
    <>
      <PokemonContext.Provider value={data}>
        <div className="pokemon-list">
            
          <div onClick={() => setOpenModal(true)}> 
            <PokemonCard />
          </div>
          <Pokemon isOpen={openModal}/>
  
        </div>
      </PokemonContext.Provider>

    </>
  );
};
export default PokemonList;