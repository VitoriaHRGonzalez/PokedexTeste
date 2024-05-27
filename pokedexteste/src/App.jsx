import './App.css';

import pokeball from './assets/icons/pokeball.svg';
import PokemonCard from './components/PokemonCard/PokemonCard';
import SearchBar from './components/SearchBar/SearchBar';

import { useEffect, useState } from 'react';
import { PokemonContext, useGetPokemons } from './contexts/PokemonContext';

function App() {
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const {data, getData} = useGetPokemons();

  useEffect(() => {
    if(data) {
      const filtered = data.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredPokemons(filtered);
    }
  }, [data, searchTerm]);

  console.log('Lista filtrada:',filteredPokemons);
  
  useEffect(() => {
    try {
      getData();
    } catch(e) {
      throw new Error(e);
    }   
  }, []);

  return (
    <div className='App'>
      <div className='header'>
        <img className='pokeball-image' src={pokeball} />
        <h1>Pokédex</h1>
      </div>

      <PokemonContext.Provider value={filteredPokemons}>
        <SearchBar onSearch={handleSearch} />
        <div className='pokemon-list'>
          <PokemonCard pokemons={filteredPokemons} />
        </div>
      </PokemonContext.Provider>
    </div>

  );
}
export default App;
