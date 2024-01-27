//! Conceito Básico Sobre Funções

// function incrementarJuros(valor, percentualJuros) {
//     const valorDeAcrecimo = (percentualJuros / 100) * valor
//     return valor + valorDeAcrecimo
// }

// console.log(incrementarJuros(100,10))
// console.log(incrementarJuros(100,20))
// console.log(incrementarJuros(100,15))

/* -------------------------------------------------------------------------------------------- */

//! Como Organizar as Funções

// function calcularJuros() {
    
// }

// function main() {
//     console.log(`Programa principal`)
//     calcularJuros()
// }

// main()

/* -------------------------------------------------------------------------------------------- */

//! Exemplo prático com funções

function calcularImc(peso,altura) {
    return peso / Math.pow(altura,2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está abaixo do peso adequado.`)
    } else if (imc < 25) {
        return(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está dentro do peso adequado.`)
    } else if (imc < 30) {
        return(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está acima do peso adequado.`)
    } else if (imc < 40) {
        return(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está obeso.`)
    } else {
        return(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está com obesidade mórbida.`)
    }
}

//? MAIN
(function (){
    let peso = 140
    let altura = 1.86

    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc))
})()

