class User {
    nome
    idade

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

const maria = new User();
maria.nome = "Maria Clara"
maria.idade = 21

const pedro = new User();
pedro.nome = "Pedro Judah"
pedro.idade = 20

console.log(maria)
console.log(pedro)

pedro.apresentar()
maria.apresentar()