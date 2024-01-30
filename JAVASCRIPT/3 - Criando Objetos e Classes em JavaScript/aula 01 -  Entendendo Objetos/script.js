//! Criando métodos para o objeto   
    /* método = função dentro do objeto */

    const user = {
    nome: "Lucas Pereira Sampaio",
    idade: 25,

    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }                                /* this = este (se referindo ao objeto)*/
}

/* SUBSTITUINDO UMA FUNÇÃO NO MÉTODO */
user.apresentar = function () {       
    console.log(`O nome dele é ${this.nome}`)
}

user.apresentar()
 