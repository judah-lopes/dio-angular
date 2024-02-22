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

function compararIdades(user1,user2) {
    if (user1.idade > user2.idade) {
        console.log(`${user1.nome} é mais velho que ${user2.nome}`)
    } else {
        console.log(`${user1.nome} é mais novo que ${user2.nome}`)
    }
}

const pedro = new User("Pedro Judah", 20);
const ester = new User("Ester Hadassa", 16);

compararIdades(pedro,ester)