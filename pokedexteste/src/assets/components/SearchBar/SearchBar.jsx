// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';

import vector from '../Icones/Vector.svg';

import tag from '../Icones/tag.svg';

import './SearchBar.css';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
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

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     console.log(modalRef.current);
  //     if (modalRef.current !== 'modal-options') {
  //       fecharModal();
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
    
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <div className='search-andfilter' onSubmit={handleSubmit}>
      <div className='search-bar'>
        <img className='search-icon' src={vector} alt="Search Icon" />
        <input className='search-input'
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {isModalOpen && (
        <div className='background-blur' onClick={fecharModal}></div>
      )}
      <div className='modal-container'>
        <button onClick={abrirModal} className='search-button'>
          <img src={tag} alt="Tag Icon"/>
        </button>
        <div className={`modal ${isModalOpen ? '' : 'hidden'}`} >
          <h4>Sort by:</h4>
          <div className="modal-content">
            <div className='modal-options'>
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                  className='modal-radio'
                />
                  Number
              </label>
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleOptionChange}
                  className='modal-radio'
                />
                  Name
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
