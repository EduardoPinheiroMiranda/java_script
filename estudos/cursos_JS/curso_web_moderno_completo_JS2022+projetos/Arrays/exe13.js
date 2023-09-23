/**
 * Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no 
array recebido como parâmetro.
 */

const aleatorio = ['js','21',3,3,2,'html','css',5,5,'honda',6,521,'node.js', ]

const selectNumber = (array) => {
    let Numbers = []
        for(let i=0; i<array.length; i++){
            typeof array[i] === 'number' ? Numbers.push(array[i]) : i//leitua apenas 
        }
        return Numbers
}

const selectNumber2 = (array) => {
    return array.filter(array => typeof array === 'number')
}


console.log(selectNumber(aleatorio))
console.log(selectNumber2(aleatorio))

