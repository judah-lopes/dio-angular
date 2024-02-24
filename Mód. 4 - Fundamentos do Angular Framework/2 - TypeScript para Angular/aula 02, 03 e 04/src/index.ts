/*---- INTERFACES (type x interface) ----*/
type robot = {
    readonly id: number   //readonly = bloqueia qualquer alteração
    name: string
}
interface robot2 {     //<--- Este contrato TEM que ter  
    id: number | string        //   um id:number/string,                 
    name: string               //   um name:string e
    sayHello():string          //   um método sayHello():string
}  

const bot1: robot = {
    id: 1,
    name: 'RoboCop'
}

const bot2: robot2 = {
    id: 1,
    name: 'Megaman',
    sayHello: function (): string {
        throw new Error("Function not implemented.")
    }
}

//! TIPO -> TIPAR OBJETOS (VARIÁVEL)
//! INTEFACE -> CLASSE
class Pessoa implements robot2{
    id: string | number
    name: string

    constructor(id: string | number, name: string){
        this.id = id
        this.name = name
    }
    sayHello():string {
        return `Hello, ${this.name}`
    }
}

const Felipe = new Pessoa(1, 'Robocop')
console.log(Felipe.sayHello())