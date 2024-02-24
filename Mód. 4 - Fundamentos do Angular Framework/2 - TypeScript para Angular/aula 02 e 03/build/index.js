"use strict";
console.log("teste");
/*---------------- VARIÁVEIS ----------------*/
//Tipos Primitivos: boolean, number, string
let ligado = true;
let telefone = 11;
let nome = 'Judah';
//Tipos Especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//Tipos Abrangentes: any, void
let retorno;
let retornoView = false;
/*----------------- OBJETOS -----------------*/
//Objeto - sem previsibilidade
let produto = {
    name: 'Judah',
    cidade: 'AC',
    idade: 30
};
let meuProduto = {
    nome: 'Escova',
    preco: 2.5,
    unidades: 50
};
/*------------------ ARRAY ------------------*/
let dados = ["Felipe", "Ana", "Adriana"];
let dados2 = ["Felipe", "Ana", "Adriana"];
//Array MultiType
let infos = ["Felipe", 30, "Carlos"];
//Tuplas = Array, mas que tem que respeitar a ordem
let boleto = ["agua conta", 199.90, 2993383];
//Métodos = Os mesmos do js
/*------------------ DATAS ------------------*/
let aniversario = new Date("2003-08-10 07:30");
console.log(aniversario.toDateString());
