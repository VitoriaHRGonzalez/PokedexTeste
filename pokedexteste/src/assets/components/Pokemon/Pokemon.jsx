import { useContext } from 'react';

import './Pokemon.css';

import pokeball from '../Icones/Pokeball.svg';


import { PokemonContext } from '../../../../utils/PokemonContext';

const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};

const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonModal = (isOpen, id) => {

  const pokemon = useContext(PokemonContext);
  console.log(pokemon[0]);


  return (
      
    <> 
      {isOpen && pokemon && ( 
        <div className='background-pokemon'>
          <img className='pokeballCard-image' src={pokeball} />

          <div className="pokemon-head">
            <h3>{pokemon[id].name}</h3>
            <p className="pokemonCard-id">#{FormatoId(pokemon[id].id)}</p>
          </div>
          <div className="pokemon-info">
            <img className="pokemonCard-img" src={pokemon[id].imageUrl} alt={pokemon[id].name} />
            <div className="pokemon-types">
              {pokemon[id].types.map((type, index) => (
                <span key={index} className="type-name">
                  {PrimeiraLetraMaiuscula(type.type.name) + ' '}            
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default PokemonModal;

