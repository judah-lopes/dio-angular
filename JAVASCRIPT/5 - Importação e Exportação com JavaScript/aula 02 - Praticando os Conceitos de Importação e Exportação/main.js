// Uma sala contém 5 alunos e para cada aluno foi sorteado um número entre 1 e 100.
// Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

// Dados de entrada: 
// 5
// 50
// 10
// 98
// 23

// Saída: 98

const { gets, print } = require('./funcoes-auxiliares')

const qtdAlunos = gets()
let maiorNumero = 0

for (let i = 0; i < qtdAlunos; i++) {
    const sorteado = gets()
    if (sorteado > maiorNumero) {
        maiorNumero = sorteado
    }
}

print(maiorNumero)
