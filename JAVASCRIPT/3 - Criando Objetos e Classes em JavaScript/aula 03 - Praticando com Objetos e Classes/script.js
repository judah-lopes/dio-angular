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