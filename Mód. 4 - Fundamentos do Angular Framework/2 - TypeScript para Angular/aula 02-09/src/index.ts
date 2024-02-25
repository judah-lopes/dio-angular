/*--------- DECORATORS ---------*/

//class decorator
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version })
        //     associar versão ao target.prototype
    }
}

//attribute decorator
function minlength(length: number){
    return (target: any, key: string) => {
        let _value = target[key]

        const getter = () => `Você conseguiu, ${_value} tem mais de 2 letras`
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`); 
            }else{
                _value = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Api{
    @minlength(3)
    name: string

    constructor(name: string){
        this.name = name
    }
}

const api = new Api("Usuário")
console.log(api.name)
