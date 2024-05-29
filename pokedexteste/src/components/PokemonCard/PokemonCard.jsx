/* eslint-disable react/prop-types */
import './BackgroundColor.css';
import './PokemonCard.css';

import arrow from '../../assets/icons/arrow.svg';
import arrow2 from '../../assets/icons/arrow2.svg';
import height from '../../assets/icons/height.svg';
import pokeball from '../../assets/icons/pokeball.svg';
import weight from '../../assets/icons/weight.svg';

const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};
const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// eslint-disable-next-line react/prop-types
function PokemonModal  ({pokemon,toggleShowModal,handlePrevClick,handleNextClick}) {

  return (
    <>
      {console.log('id', pokemon)};
      {pokemon && (
        <>
          <div id='card' className={`background-pokemon  ${pokemon.types[0].type.name}`}>
            <img className='pokeballCard-image' src={pokeball} />
            <div className="pokemon-head">
              <h2>{pokemon.name}</h2>
              <p className="pokemonCard-id">#{FormatoId(pokemon.id)}</p>
            </div>
            <div className="card-info">
              <img className="pokemonCard-img" src={pokemon.imageUrl} alt={pokemon.name}/>
              <div className="types-container">
                <p className={`pokemon-types ${pokemon.types[0].type.name}`}>
                  {PrimeiraLetraMaiuscula(pokemon.types[0].type.name + ' ')}
                </p>
                {pokemon.types.length > 1 && (
                  <p className={`pokemon-types ${pokemon.types[1].type.name}`}>
                    {PrimeiraLetraMaiuscula(pokemon.types[1].type.name + ' ')}
                  </p>
                )}
              </div>
              <h3 className='h3'> About</h3>
              <div className='pokemon-info'>
                <img className='arrow2-image' src={arrow2} onClick={handlePrevClick} />
                <div className='pokemon-weight'>
                  <div className='date-weight'>
                    <img className='weight-image' src={weight} />
                    <p>{(pokemon.weight)/100} kg</p>
                  </div>
                  <p style={{fontSize:13, marginTop:3.5}}>Weight</p>
                </div>
                <div className='pokemon-height'>
                  <div className='date-height'>
                    <img className='height-image' src={height} />
                    <p>{(pokemon.height)/10} m</p>
                  </div>
                  <p style={{fontSize:13, marginTop:3.5}}>Height</p>
                </div>
                <div className='pokemon-moves'>
                  {pokemon.moves?.map((moves, setPokemonId) => (
                    <p key={setPokemonId}>
                      {moves.ability.name}
                    </p>
                  ))}
                  <p style={{fontSize:13, marginTop:0,color:'gray'}}>Moves</p>
                </div>
                <img className='arrow-image' src={arrow} onClick={handleNextClick} />
              </div>
              <h3 className='h3'>Base Stats</h3>
              <div className='base-stats'>
                <div className={`base-stats-names ${pokemon.types[0].type.name}`} style={{background:0}}>
                  <p>HP</p>
                  <p>ATK</p>
                  <p>DEF</p>
                  <p>SATK</p>
                  <p>SDEF</p>
                  <p>SPD</p>
                </div>
                <div className='base-stats-date'>
                  {pokemon.stats?.map((stats, pokemonId) => (
                    <p key={pokemonId}> {stats.base_stat} </p>
                  ))}
                </div>
                <div className='aaa'>
                  {pokemon.stats.map((stats, pokemonId) => (
                    <><div key={pokemonId} className={`progress-bar ${pokemon.types[0].type.name}`}></div><div key={pokemonId} className={`progress-bar-fill ${pokemon.types[0].type.name}`} style={{ width: `${stats.base_stat}px` }}></div></>
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

