/*
 *Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar 
números de strings 
 */

const trueFalse = (a,b) => {
    return typeof a != typeof b ? false : a>b || a==b ? true : false
}

console.log(trueFalse(3,5))