import './App.css'

import React, {useState} from 'react'
import SearchBar from './assets/components/SearchBar/SearchBar'
import PokemonList from './assets/components/PokemonList/PokemonList';


function App() {
  const handleSearch = (term) => {
    // Implemente a lógica de busca aqui, por exemplo, enviar uma solicitação ao servidor
    console.log('Termo de pesquisa:', term);
}

  return (
      <div>
        <h1>Página para testes</h1>
        <SearchBar onSearch={handleSearch} />
        <PokemonList />
      </div>
  )
}

export default App
