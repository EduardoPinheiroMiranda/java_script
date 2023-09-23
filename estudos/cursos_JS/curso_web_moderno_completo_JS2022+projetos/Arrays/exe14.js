/**
 * Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada 
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os 
exemplos abaixo para um melhor entendimento:
 */

const alunos = {
    nome:'eduardo',
    idade: 21,
    vivo: true
}

const converter = (obj) => {
    return Object.entries(obj)
}
console.log(converter(alunos))