console.log("teste")
/*---------------- VARIÁVEIS ----------------*/

    //Tipos Primitivos: boolean, number, string
    let ligado: boolean = true
    let telefone: number = 11
    let nome: string = 'Judah'

    //Tipos Especiais: null, undefined
    let nulo: null = null
    let indefinido: undefined = undefined

    //Tipos Abrangentes: any, void
    let retorno: void
    let retornoView: any = false

/*----------------- OBJETOS -----------------*/
//Objeto - sem previsibilidade
let produto: object = {
    name: 'Judah',
    cidade: 'AC',
    idade: 30
}

//Objeto Tipado - com previsibilidade
type ProdutoLoja = {
    nome: string,
    preco: number,
    unidades: number
}

let meuProduto: ProdutoLoja = {
    nome: 'Escova',
    preco: 2.5,
    unidades: 50
}

/*------------------ ARRAY ------------------*/
let dados: string[] = ["Felipe", "Ana", "Adriana"]
let dados2: Array<string> = ["Felipe", "Ana", "Adriana"]

//Array MultiType
let infos: (string | number)[] = ["Felipe", 30, "Carlos"]

/*----------------- TUPLAS ------------------*/
let boleto:[string, number, number] = ["agua conta", 199.90, 2993383] //<- Array, mas que tem que respeitar a ordem


