/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array
*/


const num =[10,30,20,30,20,40]

const soma = (array) => {
    return array.reduce((array,atual) => array+atual)
}

console.log(soma(num))