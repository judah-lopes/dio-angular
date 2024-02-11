const offset = 0
const limit = '10'
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//fetch = requisitar 
fetch(url)
    .then(function (response) {   //then = quando certo, response
        response
            .json()
            .then(function (responseBody) {      //response.json() = converte a response (body) em um tipo "any", json
                console.log(responseBody)
            })
    })
    .catch(function (error) {     //catch = quando errado, error
        console.error(error);
    })
    .finally(function () {        // finally = quando operação termina, não importa certo, ou errado
        console.log(`Requisição concluída!`)
    })
