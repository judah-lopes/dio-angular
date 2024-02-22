// 1 - Faça uma função que escreva seu nome

function escreverNome(nome) {
    return (`Seu nome é ${nome}`)
}  

/* ------------------------------------------------------------------------------------------------ */

// 2 - Faça uma função que verifique se você é maior de idade

function verificarIdade(idade) {
    if (idade >= 18) {
        return (`Parabéns! Você tem ${idade} anos, você já é maior de idade!!`)
    } else {
        return (`Infelizmente você só tem ${idade} anos e ainda não é maior de idade...`)
    }
}

/* ------------------------------------------------------------------------------------------------ */

// 3 - Faça uma função que invoque outras funções

(function() {
    console.log(`${escreverNome(`Pedro Judah`)} e ${verificarIdade(18)}`)
})()

/* ------------------------------------------------------------------------------------------------ */

// 4 - Funções para calcular preço



function aplicarDesconto(valor,desconto) {
    return valor - (valor * (desconto / 100))
}

function aplicarJuros(valor,juros) {
    return valor + (valor * (juros / 100))
}



function classificarForma() {
    var precoEtiqueta = 100
    var formaDePagamento = "A"
    
    if (formaDePagamento === "A") {
        return aplicarDesconto(precoEtiqueta,10)
    } else if (formaDePagamento === "B") {
        return aplicarDesconto(precoEtiqueta,15)
    } else if (formaDePagamento === "C") {   
        return aplicarDesconto(precoEtiqueta,0)
    } else if (formaDePagamento === "D") {
        return aplicarJuros(precoEtiqueta, 10)
    }
}

console.log(`O valor pago será de R$${classificarForma().toFixed(2)}`)
