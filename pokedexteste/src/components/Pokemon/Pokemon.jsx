import { useContext } from 'react';
import '../TypeTag/TypeTag.css';
import './Pokemon.css';

import height from '../../assets/icons/height.svg';
import pokeball from '../../assets/icons/pokeball.svg';
import weight from '../../assets/icons/weight.svg';

import { PokemonContext } from '../../contexts/PokemonContext';

const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};

const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// eslint-disable-next-line react/prop-types
function PokemonModal  ({id,toggleShowModal}) {

  const pokemon = useContext(PokemonContext);


  
  return (
    <>
      {console.log('id', pokemon)};
      {id && (
        <>
          <div id='card' className={`background-pokemon  ${pokemon[id-1]?.types[0].type.name}`}>
            <img className='pokeballCard-image' src={pokeball} />
            <div className="pokemon-head">
              <h2>{pokemon[id-1]?.name}</h2>
              <p className="pokemonCard-id">#{pokemon[id-1]?.id}</p>
            </div>
            <div className="card-info">
              <img className="pokemonCard-img" src={pokemon[id-1]?.imageUrl} alt={pokemon[id-1]?.name}/>
            
              <div className="types-container">
                <p className={`pokemon-types ${pokemon[id - 1]?.types[0].type.name}`}>
                  {pokemon[id - 1]?.types[0].type.name + ' '}
                </p>
                {pokemon[id - 1].types.length > 1 && (
                  <p className={`pokemon-types ${pokemon[id - 1]?.types[1].type.name}`}>
                    {pokemon[id - 1]?.types[1].type.name + ' '}
                  </p>
                )}
              </div>

              <h3 className='h3'> About</h3>
              <div className='pokemon-info'>

                <div className='pokemon-weight'>
                  <div className='date-weight'>
                    <img className='weight-image' src={weight} />
                    <p>{pokemon[id-1].weight} kg</p>
                  </div>
                  <p style={{fontSize:13, marginTop:3.5}}>Weight</p>
                </div>

                <div className='pokemon-height'>
                  <div className='date-height'>
                    <img className='height-image' src={height} />
                    <p>{pokemon[id-1].height} m</p>
                  </div>
                  <p style={{fontSize:13, marginTop:3.5}}>Height</p>
                </div>

                <div className='pokemon-moves'>
                  {pokemon[id-1].moves.map((moves, setPokemonId) => (
                    <p key={setPokemonId}>
                      {moves.ability.name}
                    </p>
                  ))}
                  <p style={{fontSize:13, marginTop:0,color:'gray'}}>Moves</p>
                </div>
              </div>
              <h3 className='h3'>Base Stats</h3>
              <div className='base-stats'>
                <div className={`base-stats-names ${pokemon[id-1].types[0].type.name}`} style={{background:0}}>
                  <p>HP</p>
                  <p>ATK</p>
                  <p>DEF</p>
                  <p>SATK</p>
                  <p>SDEF</p>
                  <p>SPD</p>
                </div>
                <div className='base-stats-date'>
                  {pokemon[id-1].stats.map((stats, pokemonId) => (
                    <p key={pokemonId}> {stats.base_stat} </p>
                  ))}
                </div>
                <div className='aaa'>
                  {pokemon[id-1].stats.map((stats, pokemonId) => (
                    <><div key={pokemonId} className={`progress-bar ${pokemon[id - 1].types[0].type.name}`}></div><div key={pokemonId} className={`progress-bar-fill ${pokemon[id - 1].types[0].type.name}`} style={{ width: `${stats.base_stat}px` }}></div></>
                    
                  ))}
                </div>

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

