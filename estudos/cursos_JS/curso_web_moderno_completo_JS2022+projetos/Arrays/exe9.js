/**
 * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que 
o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */
const repetir = (a, b) => {
    const res = []
    for(let i=0; i<b; i++)
        res.push(a)
    
        return res
}

console.log(repetir(10,5))