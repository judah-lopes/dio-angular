type Hero = {
    nome: string;
    vulgo: string;
};

function printarObjeto(pessoa:Hero) {
    console.log(pessoa)
}

printarObjeto({
    nome: 'Bruce Wayne',
    vulgo: 'Batman'
})

console.log('Olá mundo')