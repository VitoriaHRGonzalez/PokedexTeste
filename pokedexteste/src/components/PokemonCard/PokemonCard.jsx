
import './PokemonCard.css';

import { useContext, useState } from 'react';

import { PokemonContext } from '../../contexts/PokemonContext';

import PokemonModal from '../Pokemon/Pokemon';

// const PrimeiraLetraMaiuscula = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

// const FormatoId = (num) => {
//   return num.toString().padStart(3, '0');
// };

// eslint-disable-next-line react/prop-types
const PokemonCard = () => {
  const [pokemonId, setPokemonId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  
  const  pokemons  = useContext(PokemonContext);
  
  const toggleShowModal = () => {
    setIsOpen((p) => !p);
  };

  return (
    <div className='container'>
      {console.log(pokemons)}
      {pokemons && pokemons.map((pokemons) => (
        <div className="pokemon-card" key={pokemons.id} onClick={() => { setPokemonId(pokemons.id); setIsOpen(true);}}>
          <p className="pokemon-id" >#{pokemons.id}</p>
          <img className="pokemon-img" src={pokemons.imageUrl} alt={pokemons.name} />
          <div className="card-name">
            <h3>{pokemons.name}</h3>
          </div>
        </div>
      ))}
      {pokemonId && isOpen && (
        <PokemonModal id={pokemonId} toggleShowModal={toggleShowModal} />
      )}
    </div>
  );
};

export default PokemonCard;

