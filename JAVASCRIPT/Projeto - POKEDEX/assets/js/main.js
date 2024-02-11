const offset = 0
const limit = '10'
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then((response) => response.json())      //simplificando usando arrowfunction (ECMAScript 6)
    .then((jsonBody) => console.log(jsonBody))     //o que vai pro segundo then é o retorno do primeiro
    .catch((error) => console.error(error))
