type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligarPara(heroi: Hero): string {
    return `Ligando para: ${heroi.telefone}`;
}

ligarPara({
    nome: 'Peter Parker',
    vulgo: 'Spider-Man',
    telefone: '21 5932-2934',
})