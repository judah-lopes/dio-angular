//! Criando a Classe Carro
//  1 - Crie uma classe para representar carros.
//  Os carros possuem uma marca, cor e um gasto médio de combustível por km rodado.
//  Crie um método que, dado a quantidade de kms e o preço do combústivel, nos dê o 
//  valor gasto em reais para realizar esse percurso.

class Carro {
    marca
    cor
    consumo

    constructor(marca,cor,consumo){
        this.marca = marca
        this.cor = cor
        this.consumo = consumo
    }
    
    calcularGastoDePercurso(distanciaPercurso,precoCombustivel){
        const gastoTotal = (distanciaPercurso / this.consumo) * precoCombustivel
        return `Para viajar com o carro de marca ${this.marca}, cor ${this.cor}, gastará R$${gastoTotal.toFixed(2)} no percurso de ${distanciaPercurso} km`
    }
}

const clio = new Carro('Renault','vermelho',11)
console.log(clio.calcularGastoDePercurso(73,5.5))

const palio = new Carro('Fiat','cinza',9)
console.log(clio.calcularGastoDePercurso(100,5.5))

//! Criando a Classe Pessoa
//  2 - Crie uma classe para representar pessoas.
//  Para cada pessoas teremos os atributos nome, peso e altura.
//  As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = PESO / (ALTURA * ALTURA))
//  Instancie uma pessoa chamada José que tenha 70kg de peso e 
//  1,75 de altura e peça para o José dizer o valor do seu IMC

class Pessoa {
    nome 
    peso 
    altura

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        // `Meu nome é ${this.nome}, minha altura é ${this.altura}, meu peso é ${this.peso} e sendo assim, o valor do meu IMC é ${imc.toFixed(1)}`
        return this.peso / (this.altura ** 2)    
    }

    classificarImc() {
        const imc = this.calcularImc()

        if (imc < 18.5) {
            return(`Segundo seu IMC, senhor(a) ${this.nome}, o(a) senhor(a) está abaixo do peso adequado.`)
        } else if (imc < 25) {
            return(`Segundo seu IMC, senhor(a) ${this.nome}, o(a) senhor(a) está dentro do peso adequado.`)
        } else if (imc < 30) {
            return(`Segundo seu IMC, senhor(a) ${this.nome}, o(a) senhor(a) está acima do peso adequado.`)
        } else if (imc < 40) {
            return(`Segundo seu IMC, senhor(a) ${this.nome}, o(a) senhor(a) está obeso.`)
        } else {
            return(`Segundo seu IMC, senhor(a) ${this.nome}, o(a) senhor(a) está com obesidade mórbida.`)
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
const dhiego = new Pessoa('Dhiego', 90,1.76)
const judah = new Pessoa('Judah', 96,1.86)
const gadelha = new Pessoa('Gadelha', 94,1.93)
console.log(jose.classificarImc())
console.log(dhiego.classificarImc())
console.log(judah.classificarImc())
console.log(gadelha.classificarImc())