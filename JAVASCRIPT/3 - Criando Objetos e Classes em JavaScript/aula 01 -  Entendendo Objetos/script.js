//! Estrutura básica de um objeto

// const pedro = {
//     nome: "Lucas Pereira Sampaio",
//     idade: 25
// }

// console.log(pedro.nome)
// console.log(pedro.idade)
// console.log(pedro)

    
//! Editando informações de um objeto

    const pedro = {
        nome: "Lucas Pereira Sampaio",
        idade: 25
    }

    pedro.genero = "Masculino" /* Criando uma nova informação */

    delete pedro.nome /* Deletando uma informação */    

    console.log(pedro)
