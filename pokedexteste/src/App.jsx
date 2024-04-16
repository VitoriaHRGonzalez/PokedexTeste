import './App.css';

import SearchBar from './assets/components/SearchBar/SearchBar';
import PokemonList from './assets/components/PokemonList/PokemonList';

import pokeball from './assets/components/Icones/Pokeball.svg';


function App() {
  const handleSearch = (term) => {
    // Implemente a lógica de busca aqui, por exemplo, enviar uma solicitação ao servidor
    console.log('Termo de pesquisa:', term);
  };

  return (
    <div className='App'>

      <div className='header'>
        <img className='pokeball-image' src={pokeball} />
        <h1>Pokédex</h1>
      </div>
        
      <SearchBar onSearch={handleSearch} />
      <PokemonList />
    </div>
  );
}

export default App;
