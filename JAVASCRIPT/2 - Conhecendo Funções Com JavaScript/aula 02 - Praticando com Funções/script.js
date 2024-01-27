// 1 - Faça uma função que escreva seu nome

function escrevaMeuNome(nome) {
    return (`Meu nome é ${nome}`)
}
console.log(escrevaMeuNome("Pedro Judah"))   

/* ------------------------------------------------------------------------------------------------ */

// 2 - Faça uma função que verifique se você é maior de idade

function verificarIdade(idade) {
    if (idade >= 18) {
        return (`Parabéns! Você tem ${idade} anos, você já é maior de idade!!`)
    } else {
        return (`Infelizmente você só tem ${idade} anos e ainda não é maior de idade...`)
    }
}

console.log(verificarIdade(24))

