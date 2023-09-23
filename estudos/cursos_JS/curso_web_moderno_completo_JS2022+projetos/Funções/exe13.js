/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const dia = (num) => {
    switch (num) {
        case 1:
            return 'fim de semana'
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'dia util'
            break;
        case 7:
            return 'fim de semana'
            break;
        default:
            return 'valor invalido'
    }
}
//nota se vc ficar uma sequencia de case sem preencher eles iram responder o mesmo
//valor do próximo case preenchido.

console.log(dia(8))
console.log(dia(2))
console.log(dia(1))
console.log(dia(4))
