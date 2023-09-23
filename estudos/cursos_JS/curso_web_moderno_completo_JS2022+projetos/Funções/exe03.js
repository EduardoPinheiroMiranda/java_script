/*
    Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

*/
const potencia = (base, exp) => {
    let pot=base
    for(let i= 1; i<exp; i++){
        pot = base*pot
    }
    console.log(pot)
}
potencia(2,5)


//estou incredulo com esta forma kkk
const pot = (base, exp) => {
    return resultado = base ** exp
}

console.log(pot(2,5))