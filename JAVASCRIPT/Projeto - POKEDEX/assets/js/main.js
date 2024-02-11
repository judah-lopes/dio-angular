const offset = 0
const limit = '10'
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//fetch = requisitar 
fetch(url)
    .then(function (response) {     // 1º then = transforma o promise em json
        return response.json()
    })
    .then(function (jsonBody) {     // 2º then = já recebe o body convertido em json
        console.log(jsonBody)
    })
    .catch(function (error) {     
        console.error(error);
    })
    .finally(function () {        
        console.log(`Requisição concluída!`)
    })
