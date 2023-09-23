/*
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá 
ser de duas casas decimais, arredondando se necessário.
📕Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
 */

const areaTriangulo = (base,altura) => {
    return ((base*altura)/2).toFixed(2).replace('.',',')
} 
console.log(areaTriangulo(5,3))