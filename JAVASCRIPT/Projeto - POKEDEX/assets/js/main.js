const pokemonList = document.querySelector(`#pokemonList`)

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon planta">
            <span class="dex-number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="details">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>

                <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')  
})