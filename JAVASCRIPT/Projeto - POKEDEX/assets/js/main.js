const pokemonList = document.querySelector(`#pokemonList`)

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon planta">
            <span class="dex-number">#${pokemon.dexNumber}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="details">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')  
})