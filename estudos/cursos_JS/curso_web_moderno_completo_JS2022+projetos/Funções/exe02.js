/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const tipoTriangulo = (a,b,c) => {
    if(a==b && b==c){
        console.log(`Este é um triângulo equilatero`)
    }else if((a==b && b!=c) || (a==c && c!=b) || (b==c && c!=a)){
        console.log(`Este triângulo é isocelis`)
    }else{
        console.log(`Este trinângulo é escaleneno`)
    }
}

tipoTriangulo(6,60,10)