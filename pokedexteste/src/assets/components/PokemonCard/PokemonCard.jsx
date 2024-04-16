
import './PokemonCard.css';

import { useContext, useState } from 'react';

import { PokemonContext } from '../../../../utils/PokemonContext';
import PokemonModal from '../Pokemon/Pokemon';

// const PrimeiraLetraMaiuscula = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};

// eslint-disable-next-line react/prop-types
const PokemonCard = () => {
  const [PokemonId, setPokemonId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const pokemon = useContext(PokemonContext);
  console.log(PokemonId);

  return (
    <div className='container'>
      {pokemon && pokemon?.map((pokemon, index) => (
        <div className="pokemon-card" key={index} onClick={() => setPokemonId(pokemon.id)}>
          <p className="pokemon-id" >#{FormatoId(pokemon.id)}</p>
          <img className="pokemon-img" src={pokemon.imageUrl} alt={pokemon.name} />
          <div className="card-name">
            <h3>{pokemon.name}</h3>
          </div>
        </div>
      ))};
      <PokemonModal id={PokemonId} isOpen={isOpen} />

    </div>
  );
};

export default PokemonCard;

