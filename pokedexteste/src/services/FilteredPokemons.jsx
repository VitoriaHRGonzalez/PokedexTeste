import { useEffect, useState } from 'react';

export default function FilteredPokemons({data, searchTerm, sortOption}) {
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    if(data) {
      let filtered = data.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
      if(sortOption === 'option1') {
        filtered.sort((a, b) => a.id - b.id);
      } else if(sortOption === 'option2') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }
      setFilteredPokemons(filtered);
    }
  }, [data, searchTerm, sortOption]);

  return filteredPokemons;
}
