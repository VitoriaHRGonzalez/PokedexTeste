// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import tag from '../../assets/icons/tag.svg';
import vector from '../../assets/icons/vector.svg';
import './SearchBar.css';

import { PokemonContext } from '../../contexts/PokemonContext';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const abrirModal = () => {
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false); 
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const pokemons = useContext(PokemonContext);
  console.log(pokemons);

  useEffect(() => {
    onSearch(searchInput);
  }, [searchInput]);

  // useEffect(() => {
  //   if (selectedOption === 'option1') {
  //     // Classificar por número
  //     setFilteredPokemonList(prevList => [...prevList].sort((a, b) => a.number - b.number));
  //   } else if (selectedOption === 'option2') {
  //     // Classificar por nome
  //     setFilteredPokemonList(prevList => [...prevList].sort((a, b) => a.name.localeCompare(b.name)));
  //   }
  // }, [selectedOption]);

  return (
    <><div className="search-andfilter">

      <div className="search-bar">
        <img className="search-icon" src={vector} alt="Search Icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Pesquisar..."
          value={searchInput}
          onChange={handleChange} />
      </div>


      {isModalOpen && (
        <div className="background-blur" onClick={fecharModal}></div>
      )}
      <div className="modal-container">
        <button onClick={abrirModal} className="search-button">
          <img src={tag} alt="Tag Icon" />
        </button>
        <div className={`modal ${isModalOpen ? '' : 'hidden'}`}>
          <h4>Sort by:</h4>
          <div className="modal-content">
            <div className="modal-options">
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                  className="modal-radio" />
                Number
              </label>
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleOptionChange}
                  className="modal-radio" />
                Name
              </label>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};
export default SearchBar;
