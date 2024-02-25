"use strict";
/*--------- CLASSES ---------*/
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
//Character: superclass
//Magician: subclass
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill); //Atributos da superclass (pai).
        this.magicPoints = magicPoints;
        //Podemos reatribuir valores de atributos da classe PAI pelo meio do "this.".
        //                                                                  ("esta" classe)                
        //Porém, isso só acontece se o atributo na PAI o atributo estiver PUBLIC ou PROTECTED.
        //                                                               (padrão)
    }
}
const p1 = new Character('pedro', 10, 98);
const p2 = new Magician('João', 100, 20, 10);
console.log(p1, p2);
