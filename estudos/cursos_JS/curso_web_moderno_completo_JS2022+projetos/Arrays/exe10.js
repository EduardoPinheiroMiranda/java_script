/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+"  na 
quantidade especificada no parâmetro.
*/

const quastaStrings = (qtdd) => {
    let simbolos =''
    for(let i=0; i<qtdd;i++){
        simbolos = simbolos+'+'
    }
    return simbolos
}

console.log(quastaStrings(02))