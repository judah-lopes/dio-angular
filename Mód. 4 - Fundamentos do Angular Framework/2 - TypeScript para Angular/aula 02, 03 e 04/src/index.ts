/*--------- CLASSES ---------*/

/*---- Data Modifiers ----*/
// Public - Pode ser acessado de qualquer local
// Private - Só pode ser acessado de dentro da classe
// Protected - Apenas as classes filhas podem acessar a classe pai
//
// ? - Tira a obrigatoriedade
// Readonly - apenas lê 


class Character {
    private name: string
    readonly strength: number
    skill?: number

    constructor(name: string, strength: number, skill: number){
        this.name = name
        this.strength = strength
        this.skill = skill
    }
    attack(): void{
        console.log(`Attack with ${this.strength} points`)
    }
}

const p1 = new Character('pedro', 10, 98);
console.log(p1.attack())