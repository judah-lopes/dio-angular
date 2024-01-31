const alunos = ['Vitor','Daniel','Paulo']

//! Adicionando
alunos.push('Renan')
alunos[4] = 'Vinicius'

//! Substiuindo
alunos[3] = 'Carlos'

//! "Recortar" um item
console.log(alunos.pop()) /* O último*/
console.log(alunos.shift()) /* O primeiro */

console.log(alunos)