// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
//     1 - Preço do combustível;
//     2 - Gasto médio de combustível para realizar esta viagem;
//     3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoDoCombustivel = 5.50
let kmPorLitros = 12
let distanciaEmKm = 300 

const consumoTotalDeCombustivel = distanciaEmKm / kmPorLitros
const valorGastoNaViagem = consumoTotalDeCombustivel * precoDoCombustivel

console.log(`O gasto estimado com combustível para essa viagem será de R$${valorGastoNaViagem.toFixed(2)}`)