/*
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado 
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado 
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, 
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

const mega = (bilhete) => {
    const sorteado = (Math.random() * (10-1)+1).toFixed(0)
    if(bilhete>0 && bilhete<=10){
        return sorteado==bilhete ? `Parabéns! O número sorteado foi o ${sorteado}` : `Que pena! O número sorteado foi o ${sorteado}`
    }
}

console.log(mega(2))