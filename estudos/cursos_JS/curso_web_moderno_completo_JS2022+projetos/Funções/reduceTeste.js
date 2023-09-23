const alunos = [
    {nome:"joao", nota:5.2, bolsista: false},
    {nome:"pedro", nota:7, bolsista: false},
    {nome:"gilberto", nota:8, bolsista: false},
    {nome:"maria", nota:4.6, bolsista: true}   
]
// desafio 1
const bolsista = status => status.bolsista
console.log(`todos são bosistas:`,alunos.map(bolsista).reduce((acumulador, atual) => {
    if(acumulador == true){
        acumulador = true
    }else{
        return false
    }

}, true))

// desafio 2

console.log('Algum aluno é bolsista ? ', alunos.map(bolsista).reduce( (acum, atual) => {
    if(atual == true ){
        acum = true
    }
    return acum

}, false))

// forma milhões de vezes mais simples e melhor

// atribua uma função reduce a uma variavel
const todosbolsistas = (acumulador, atual) => acumulador && atual//se os dois forem true 
const temalgun = (acumulador, atual) => acumulador||atual// se apenas um for true
console.log('Algum aluno é bolsista ? ', alunos.map(bolsista).reduce(todosbolsistas))
console.log('Algum aluno é bolsista ? ', alunos.map(bolsista).reduce(temalgun))
0