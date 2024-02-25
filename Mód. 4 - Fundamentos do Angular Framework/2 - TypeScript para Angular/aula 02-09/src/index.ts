/*--------- DECORATORS ---------*/

function exibirNome(target: any) {
    console.log(target)
}

@exibirNome
class Funcionario {}

@exibirNome
class Porta {}