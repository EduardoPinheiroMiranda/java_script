/*
Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda 
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza 
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: 
“Não trabalhamos com este tipo de automóvel aqui”.
*/

const compra = (veiculo) => {
    switch(veiculo){
        case 'hatch':
            return 'compra efetuada com sucesso'
        case 'sedans':
        case 'motocicleta':
        case 'caminhonetes':
            return 'tem certeza que não prefere este modelo ?'
        default:
            return 'Não trabalhamos com este tipo de automovel aqui'
    }
}

console.log(compra('hatch'))
console.log(compra('sedans'))
console.log(compra('motocicleta'))
console.log(compra('picape'))
console.log(compra('touro'))
