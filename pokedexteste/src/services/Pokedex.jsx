const ImageBaseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'
const baseURL = 'https://pokeapi.co/api/v2'


export const getAllPokemons = async(options) => {
    const response = await fetch(`${baseURL}/pokemon?limit=151`, options)
    const pokemonResponse = await response.json()
    const results = pokemonResponse.results
    const payload = await Promise.all(
        results.map(async (pokemon) => {
            const {id,types} = await getPokemonType(pokemon.url)
            const imageUrl = getPokemonImageUrl(id)
            return {id, name:pokemon.name, types, imageUrl}
        })
    )
    return payload

}

const getPokemonType = async(url) => {
    const response = await fetch(url)
    const pokemonResponse = await response.json()
    const {id, types} = pokemonResponse
    return {id, types}
}