/**
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são 
pares e que também tenham índices pares. 

💡Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por 
2 é zero.
 */

const numbers = [10,20,2022,654,506,321,56,53,654,]

const par = (array) => {
    let pares = []
    for(let i=0; i<array.length; i++){
        array[i]%2==0 && i%2==0 ? pares.push(array[i]) : i=i
    }
    return pares
}

console.log(par(numbers))