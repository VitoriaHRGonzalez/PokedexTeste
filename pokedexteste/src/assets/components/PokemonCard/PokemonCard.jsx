
import './PokemonCard.css';

import { useContext, useState } from 'react';

import { PokemonContext } from '../../../../utils/PokemonContext';

import PokemonModal from '../Pokemon/Pokemon';

const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};

// eslint-disable-next-line react/prop-types
const PokemonCard = () => {
  const [pokemonId, setPokemonId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const pokemon = useContext(PokemonContext);
  console.log(pokemonId);

  const toggleShowModal = () => {
    setIsOpen((p) => !p);
  };

  return (
    <div className='container'>
      {pokemon && pokemon?.map((pokemon, index) => (
        <div className="pokemon-card" key={index} onClick={() => { setPokemonId(pokemon.id); setIsOpen(true);}}>
          <p className="pokemon-id" >#{FormatoId(pokemon.id)}</p>
          <img className="pokemon-img" src={pokemon.imageUrl} alt={pokemon.name} />
          <div className="card-name">
            <h3>{PrimeiraLetraMaiuscula(pokemon.name)}</h3>
          </div>
        </div>
      ))};
      {pokemonId && isOpen && (
        <PokemonModal id={pokemonId} toggleShowModal={toggleShowModal} />
      )}
    </div>
  );
};

export default PokemonCard;

