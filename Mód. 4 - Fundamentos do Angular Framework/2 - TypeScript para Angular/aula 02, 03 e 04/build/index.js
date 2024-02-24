"use strict";
const bot1 = {
    id: 1,
    name: 'RoboCop'
};
const bot2 = {
    id: 1,
    name: 'Megaman',
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
//! TIPO -> TIPAR OBJETOS (VARIÁVEL)
//! INTEFACE -> CLASSE
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, ${this.name}`;
    }
}
const Felipe = new Pessoa(1, 'Robocop');
console.log(Felipe.sayHello());
