/*
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes 
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de 
minúsculas.
*/


const frase = (caracter , string) => {
    let cont=0
    for(let i=0; i< string.length; i++){
        string[i].toLowerCase() == caracter || string[i].toUpperCase() == caracter ? cont +=1 : cont=cont
    } 
    return cont
}

console.log(frase("e", "Oi, meu nome eh Eduardo."))