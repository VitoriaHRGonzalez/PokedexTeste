import { useEffect, useState } from 'react';
import { PokemonContext, useGetPokemons } from './contexts/PokemonContext';

import pokeball from './assets/icons/pokeball.svg';
import PokemonList from './components/PokemonList/PokemonList';
import SearchBar from './components/SearchBar/SearchBar';
import FilteredPokemons from './services/FilteredPokemons';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('option1');

  const handleOptionChange = (option) => { 
    setSortOption(option);
  };
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const {data, getData} = useGetPokemons();
  const filteredPokemons = FilteredPokemons({data, searchTerm, sortOption});
  
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
        <SearchBar onSearch={handleSearch} onOptionChange={handleOptionChange} /> 
        <div className='pokemon-list'>
          <PokemonList pokemons={filteredPokemons} />
        </div>
      </PokemonContext.Provider>
    </div>
  );
}
export default App;
