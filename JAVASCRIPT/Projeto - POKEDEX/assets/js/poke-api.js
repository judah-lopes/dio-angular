const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {       //TRANSFORMAR JSON
    return fetch(pokemon.url).then((response) => response.json()) 
}

pokeApi.getPokemons = (offset = 0, limit = 9) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)                                                      //BUSCANDO NOSSA LISTA
        .then((response) => response.json())                               //RESPONSE PARA JSON
        .then((jsonBody) => jsonBody.results)                              //APENAS OS RESULTADOS
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))        //MAPEANDO LISTA DE POKEMON -> LISTA DETALHES POKEMON
        .then((detailRequests) => Promise.all(detailRequests))             //PROMESSA DE TODAS AS REQUISIÇÕES TERMINAREM
        .then((pokemonDetails) => pokemonDetails)                          //LISTA DE DETALHES DOS POKEMONS
        .catch((error) => console.error(error))
}
