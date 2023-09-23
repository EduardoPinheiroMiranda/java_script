/*
Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const planoSalario = (salario, plano) => {
    switch(plano){
        case 'a':
            console.log(`${salario + (salario * 0.1)}`)
            break
        case 'b':
            console.log(`${salario + (salario * 0.15)}`)
            break
        case 'c':
            console.log(`${salario + (salario * 0.2)}`)
            break
        default:
            console.log("valores invalidos")
    }
}

planoSalario(1200, 'a')
planoSalario(1300, 'b')
planoSalario(1200, 'c')
planoSalario(1200, 'aabc')