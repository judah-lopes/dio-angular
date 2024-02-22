/*
    1 - Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade,
    calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, aprovação;
*/

let nota1 = 5
let nota2 = 10
let nota3 = 10
const media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log(`A média do aluno é ${media.toFixed(1)} e ele está reprovado.`)
} else if (media < 7){
    console.log(`A média do aluno é ${media.toFixed(1)} e ele está de recuperação.`)
} else {
    console.log(`A média do aluno é ${media.toFixed(1)} e ele está aprovado!`)
}

/* ------------------------------------------------------------------------------------------------ */
/*
    2 - Elabore um algoritmo que dado o peso e altura de um adulto, mostre seu valor de IMC de 
    acordo com a tabela abaixo.

    IMC = peso / (altura * altura)

    IMC em adultos:
    - Abaixo de 18.5, Abaixo do peso;
    - Entre 18.5 e 25, Peso normal;
    - Entre 25 e 30, Acima do peso;
    - Entre 30 e 40, Obesidade;
    - Acima de 40, Obesidade Grave;
*/

let peso = 140
let altura = 1.86
const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está abaixo do peso adequado.`)
} else if (imc < 25) {
    console.log(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está dentro do peso adequado.`)
} else if (imc < 30) {
    console.log(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está acima do peso adequado.`)
} else if (imc < 40) {
    console.log(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está obeso.`)
} else  {
    console.log(`O IMC do paciente é ${imc.toFixed(1)}. O paciente está com obesidade mórbida.`)
}

/* ------------------------------------------------------------------------------------------------ */
/*
    3 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    
    Código Condição de pagamento:
    A - À vista Débito, recebe 10% de desconto;
    B - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    C - Em duas vezes, preço normal de etiqueta sem juros;
    D - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoEtiqueta = 10
let condicaoPagamento = "E"
var taxa = 0
let precoFinal = precoEtiqueta 

if (condicaoPagamento === "A") {
    taxa = 0.1
    precoFinal = precoEtiqueta - (precoEtiqueta * taxa)
} else if (condicaoPagamento === "B") {
    taxa = 0.15
    precoFinal = precoEtiqueta - (precoEtiqueta * taxa)
} else if (condicaoPagamento === "C") {   
    precoFinal = precoEtiqueta - (precoEtiqueta * taxa)
} else if (condicaoPagamento === "D") {
    taxa = 0.1
    precoFinal = precoEtiqueta + (precoEtiqueta * taxa)
}   /*  
        else {
            mensagemFinal = `Método de pagamento inválido.`
        }
    */

console.log(`O valor pago será de R$${precoFinal.toFixed(2)}`)