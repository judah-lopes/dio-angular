function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon planta">
            <span class="dex-number">#001</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="details">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.querySelector(`#pokemonList`)

pokeApi.getPokemons().then((pokemons) => {
    const listItems = []

    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItems.push(convertPokemonToLi(pokemon))
    }
})