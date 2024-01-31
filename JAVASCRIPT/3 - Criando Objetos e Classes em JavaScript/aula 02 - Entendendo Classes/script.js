class User {
    nome
    idade
    anoDeNascimento

    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2024 - idade /* Cria "meta"-atributo novo sem precisar dá-lo como param */
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

const maria = new User("Maria Clara", 21);
const pedro = new User("Pedro Judah", 20);

console.log(maria)
console.log(pedro)

// pedro.apresentar()
// maria.apresentar()