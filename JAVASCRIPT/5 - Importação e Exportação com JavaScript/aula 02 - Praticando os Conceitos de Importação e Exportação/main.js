
/* 
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número entre 1 e 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada: 
    5
    50
    10
    98
    23

    Saída: 98
*/
const { gets, print } = require('./funcoes-auxiliares')

const sorteados = []

for (let i = 0; i < 5; i++) {
    const sorteado = gets()
    sorteados.push(sorteado)  
}

let maiorNumero = 0

for (let i = 0; i < sorteados.length; i++) {
    const sorteado = sorteados[i]
    if (sorteado > maiorNumero) {
        maiorNumero = sorteado
    }
}

print(maiorNumero)
