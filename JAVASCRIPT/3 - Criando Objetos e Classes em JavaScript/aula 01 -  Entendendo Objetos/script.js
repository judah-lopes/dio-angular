//! Criando métodos para o objeto   
    /* método = função dentro do objeto */

const user = {
    nome: "Lucas Pereira Sampaio",
    idade: 25,

    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }                             
}

// const atributo = 'idade'
// console.log(user[atributo])

// console.log(user["nome"])

user["nome"] = "name"
console.log(user)