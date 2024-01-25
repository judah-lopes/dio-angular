// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
//     1 - Preço do etanol;
//     2 - Preço da gasolina;
//     3 - O tipo de combustível que está no seu carro;
//     4 - Gasto médio de combustível do carro por KM;
//     5 - Distância em Km da viagem;
     
// Imprima no console o valor que será gasto na viagem.

let precoDoEtanol = 4
let precoDaGasolina = 5.5
let tipoDeCombustivel = "Gasolina"
let kmPorLitros = 12
let distanciaEmKm = 300

const consumoTotalDeCombustivel = distanciaEmKm / kmPorLitros

if (tipoDeCombustivel === "Etanol") {
    var valorGastoNaViagem = consumoTotalDeCombustivel * precoDoEtanol
} else {
    var valorGastoNaViagem = consumoTotalDeCombustivel * precoDaGasolina
}

console.log(`O gasto estimado com combustível para essa viagem será de R$${valorGastoNaViagem.toFixed(2)}`)