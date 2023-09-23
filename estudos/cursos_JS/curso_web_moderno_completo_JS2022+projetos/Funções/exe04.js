/*
    Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
    e o resto da divisão destes dois valores.
*/

const div = (a,b) => {
    console.log(`resposta: ${Math.floor(a/b)}`)
    console.log(`resto: ${a%b}`)
}

div(6,4)


//Math.floor() serve para fazer um arredondamento de valores descimais para baixo ou retirar as
//casas decimais.