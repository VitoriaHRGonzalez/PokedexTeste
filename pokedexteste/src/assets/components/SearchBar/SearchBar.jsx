import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Chamada à função de pesquisa externa passada como prop
    onSearch(searchTerm);
  };

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <input className='search-input'
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className='search-button'>#</button>
    </form>
  );
};

export default SearchBar;
