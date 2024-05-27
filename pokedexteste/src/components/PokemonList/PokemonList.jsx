
import './PokemonList.css';

import { useGetPokemons } from '../../contexts/PokemonContext';

const PokemonList = () => {
  const {isLoading} = useGetPokemons();
  console.log(isLoading);


  return (
    <>
    </>
  );
};
export default PokemonList;