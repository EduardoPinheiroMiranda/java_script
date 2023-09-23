/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é 
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está 
desenvolvendo no momento é a de somar o total das despesas. 
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

const despesas = [
    {nome: 'jornal', categoria:'informação', preco: 15.9},
    {nome: 'laranja', categoria:'alimento', preco: 2.50},
    {nome: 'camisa', categoria:'roupa', preco: 58.98}
]


const despesaTotal = (array) => {
    return array.map(array => array.preco).reduce( (soma,atual) => soma + atual)
}

console.log(despesaTotal(despesas))