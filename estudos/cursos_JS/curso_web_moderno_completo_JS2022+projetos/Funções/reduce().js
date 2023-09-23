const carro = [
    {marca:"fiat", valor:50000},
    {marca:"chevrole", valor: 105000},
    {narca:"nissan", valor: 40000}
]

const preco  = val => val.valor 

console.log(carro.map(preco).reduce((valor, atual) => {
    if(valor<atual){
        valor = atual
    }
    return valor
}))
