const pokeApi = {}

function convertPokeDetailsToPokemon(pokeDetails) {
    const pokemon = new Pokemon()
    pokemon.dexNumber = pokeDetails.id
    pokemon.name = pokeDetails.name
    pokemon.types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    pokemon.type = pokeDetails.types[0]
    pokemon.photo = pokeDetails.sprites.other['official-artwork'].front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeDetailsToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 9) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}
