/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/


function calculo(x,y){
    console.log(`soma: ${x} + ${y} = ${x+y}`)
    console.log(`subtração: ${x} - ${y} = ${x-y}`)
    console.log(`divisão: ${x} / ${y} = ${x/y}`)
    console.log(`multipĺicação: ${x} * ${y} = ${x*y}`)
}

calculo(1,2)