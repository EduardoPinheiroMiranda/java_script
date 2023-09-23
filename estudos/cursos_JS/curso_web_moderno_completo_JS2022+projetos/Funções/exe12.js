/*
 Faça um algoritmo que calcule o fatorial de um número.
*/

const fat = (num) => {
    let fat = 1
    for(let i=1; i<=num; i++){
        fat = fat * i
    }
        return fat
}

console.log(fat(5))