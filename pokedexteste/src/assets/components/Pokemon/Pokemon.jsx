import { useContext } from 'react';
import '../TypeTag/TypeTag.css';
import './fire.css';

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
  console.log('TIPO', pokemon[id-1].types[0].type.name);

  return (
    <> 
      {id && (
        <>
          <div className={`background-pokemon  ${pokemon[id-1].types[0].type.name}`}>
            <img className='pokeballCard-image' src={pokeball} />
            <div className="pokemon-head">
              <h2>{PrimeiraLetraMaiuscula(pokemon[id-1].name)}</h2>
              <p className="pokemonCard-id">#{FormatoId(pokemon[id-1].id)}</p>
            </div>
            <div className="card-info">
              <img className="pokemonCard-img" src={pokemon[id-1].imageUrl} alt={pokemon[id-1].name}/>
              <div className="types-container">
                {pokemon[id-1].types.map((type, index) => (
                  <p key={index} className={`pokemon-types ${pokemon[id-1].types[0].type.name}`} >
                    {PrimeiraLetraMaiuscula(type.type.name) + ' '}
                  </p>
                ))}
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
                  {pokemon[id-1].moves.map((moves, index) => (
                    <p key={index}>
                      {PrimeiraLetraMaiuscula(moves.ability.name)}
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
                  {pokemon[id-1].stats.map((stats, index) => (
                    <p key={index}> {FormatoId(stats.base_stat)} </p>
                  ))}
                </div>
                <div className='aaa'>
                  {pokemon[id-1].stats.map((stats, index) => (
                    <div key={index} className={`progress-bar ${pokemon[id-1].types[0].type.name}`}>
                      <div key= {index} className={`progress-bar-fill ${pokemon[id-1].types[0].type.name}`} style={{width: `${stats.base_stat}px` }}></div>
                    </div>
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

