console.log("teste")
/*---- INTERFACES (type x interface) ----*/

// type -> tipar uma variável específica, pra que as propriedades dela sejam sempre as mesmas
type robot = {
    readonly id: number   //readonly = bloqueia qualquer alteração
    name: string
}

// interface -> trabalhar com Class 
   /* Contrato onde que quem o herdar, precisa segui-lo por completo */
interface robot2 {
    id: number | string
    name: string
}  

const bot1: robot = {
    id: 1,
    name: 'RoboCop'
}
const bot2: robot2 = {
    id: 1,
    name: 'Megaman'
}

console.log(bot1)
console.log(bot2)