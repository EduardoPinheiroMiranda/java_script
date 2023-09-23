/*
Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.
*/

const calculadora = (num1, op, num2) => {
    switch(op){
        case '-':
            console.log(`${num1} - ${num2} = ${num1-num2}`)
            break
        case '+':
            console.log(`${num1} + ${num2} = ${num1+num2}`)
            break
        case '/':
            console.log(`${num1} / ${num2} = ${num1/num2}`)
            break
        case '*':
            console.log(`${num1} * ${num2} = ${num1*num2}`)
            break
        default:
            console.log(`valores inconsistentes`)
    }
}

calculadora(2,'-',3)
calculadora(6,'+',3)
calculadora(9,'/',3)
calculadora(7,'*',3)
calculadora(2,'3',3)

