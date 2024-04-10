import React from "react";

import './PokemonCard.css'

const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const FormatoId = (num) => {
 return num.toString().padStart(3, "0")
}

const PokemonCard = ({ name, imageUrl, id }) => {
  return (
    <div className="pokemon-card">
    <p className="pokemon-id">#{FormatoId(id)}</p>
    <img className="pokemon-img" src={imageUrl} alt={name} />
    <div className="card-name">
    <h3>{PrimeiraLetraMaiuscula(name)}</h3>
    </div>
    </div>
  );
};

// Perguntar para a Duda, como separar os pokemons. Feito! 

export default PokemonCard;
