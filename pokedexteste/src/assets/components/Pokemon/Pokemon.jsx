import { useContext } from 'react';
import './Pokemon.css';

import pokeball from '../Icones/Pokeball.svg';
import height from '../Icones/height.svg';
import weight from '../Icones/weight.svg';

import { PokemonContext } from '../../../../utils/PokemonContext';

const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};

const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// eslint-disable-next-line react/prop-types
function PokemonModal  ({id,toggleShowModal}) {

  const pokemon = useContext(PokemonContext);
  
  console.log(pokemon[0]);
  return (
    <> 
      {id && ( 
        <>
          <div className='background-pokemon'>
            <img className='pokeballCard-image' src={pokeball} />
            <div className="pokemon-head">
              <h2>{PrimeiraLetraMaiuscula(pokemon[id-1].name)}</h2>
              <p className="pokemonCard-id">#{FormatoId(pokemon[id-1].id)}</p>
            </div>
            <div className="card-info">
              <img className="pokemonCard-img" src={pokemon[id-1].imageUrl} alt={pokemon[id-1].name}/>
              <div className="types-container">
                {pokemon[id-1].types.map((type, index) => (
                  <p key={index} className="pokemon-types">
                    {PrimeiraLetraMaiuscula(type.type.name) + ' '}          
                  </p> 
                ))}
              </div>
              <h3 className='h3'> About</h3>
              <div className='pokemon-info'>
                <div className='pokemon-weight'>
                  <img className='weight-image' src={weight} />
                  <p>Weight</p>
                </div>
                <div className='pokemon-height'>
                  <img className='height-image' src={height} />
                  <p>Height</p>
                </div>
                <div className='pokemon-moves'>
                  <p>Moves</p>
                </div>
              </div>
              <p>Mais coisas</p>
              <h3 className='h3'>Base Stats</h3>
              <div>
                <p className='base-stats'>E umas barras</p>
              </div>
            </div>
          </div>
          <div className='modal-backdrop' onClick={toggleShowModal}>
          </div>
        </>
      )}
    </>
  );
}

export default PokemonModal;

