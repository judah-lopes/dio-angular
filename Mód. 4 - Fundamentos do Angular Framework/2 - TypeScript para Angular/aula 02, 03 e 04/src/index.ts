console.log("teste")
/*---------------- FUNÇÕES ----------------*/
function addNumber(x:number, y:number): number {
    return x + y
}

function addToHello(name:string) {
    return `Hello ${name}`
}

function callToPhone(phone:number | string): number | string /*: any*/ {
    return phone
}

async function getDataBase(id:number): Promise<string> {
    return "Felipe"
}

let soma: number = addNumber(4, 7)

console.log(soma)
console.log(addToHello("Judah"))
console.log(callToPhone())