/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
*/

const PriSec = (aluno) => { 
    return  [aluno[0], aluno[(aluno.length)-1]]
}

const aluno = ['ana',1,'3',335]

console.log(PriSec(aluno))