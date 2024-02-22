//! 1 - Faça a tabuada de um número

const numero = 2

for (let i = 0; i <= 10; i++) {
    console.log(i * numero)
}

//! 2 - Crie um programa que percorra um array e só imprima números pares

const numeros = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numeros.length; i++) {
    const contagem = numeros[i];
    if (contagem % 2 === 0) {
        console.log(contagem)
    }
}