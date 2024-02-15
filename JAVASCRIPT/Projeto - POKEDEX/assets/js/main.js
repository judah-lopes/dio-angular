const pokemonList = document.querySelector(`#pokemonList`)
const loadMore = document.querySelector('#load-more')

const maxItens = 151
const limit = 10
let offset = 0

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => 
            `
                <li class="pokemon ${pokemon.types[0]}">
                    <span class="dex-number">#${pokemon.dexNumber}</span>
                    <span class="name">${pokemon.name}</span>
                    
                    <div class="details">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `            
        ).join('')  
    })
}

loadPokemonItems(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit
    const qtdItens = offset + limit

    if (qtdItens >= maxItens) {
        const newLimit = maxItens - offset
        loadPokemonItems(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore)
    } else {
        loadPokemonItems(offset, limit)
    }

})