
import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import PokemonModal from '../PokemonCard/PokemonCard';
import './PokemonList.css';

const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};

// eslint-disable-next-line react/prop-types
const PokemonCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  const  filteredPokemonList  = useContext(PokemonContext);
  
  const toggleShowModal = () => {
    setIsOpen((p) => !p);
  };

  const handleNextClick = () => {
    setCurrentPokemonIndex((currentPokemonIndex + 1) % filteredPokemonList.length);
  };
  
  const handlePrevClick = () => {
    setCurrentPokemonIndex((currentPokemonIndex - 1 + filteredPokemonList.length) % filteredPokemonList.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch(event.key) {
      case 'ArrowLeft':
        handlePrevClick();
        break;
      case 'ArrowRight':
        handleNextClick();
        break;
      default:
        break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPokemonIndex, filteredPokemonList.length]);

  return (
    <div className='container'>
      {filteredPokemonList && filteredPokemonList.map((pokemons, index) => (
        <div className="pokemon-card" key={pokemons.id} onClick={() => { setCurrentPokemonIndex(index); setIsOpen(true);}}>
          <p className="pokemon-id" >#{FormatoId(pokemons.id)}</p>
          <img className="pokemon-img" src={pokemons.imageUrl} alt={pokemons.name} />
          <div className="card-name">
            <h3>{PrimeiraLetraMaiuscula(pokemons.name)}</h3>
          </div>
        </div>
      ))}
      {filteredPokemonList && isOpen && (
        <PokemonModal pokemon={filteredPokemonList[currentPokemonIndex]}
          toggleShowModal={toggleShowModal}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick} />      )}
    </div>
  );
};
export default PokemonCard;

