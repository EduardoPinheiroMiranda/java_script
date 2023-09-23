const carrinho = [
    '{ "mome":"cola", "preco": 10}',
    '{ "mome":"caderno", "preco":30}',
    '{ "mome":"marcador", "preco":58}',   
]

const paraObjeto = pb => {  return JSON.parse(pb) }
const preco = (preco) => { return preco.preco}
const res = carrinho.map(paraObjeto).map(preco)
console.log(res)


/* 
lembrete, o map não é uma função pronta, ou seja,
vc deve associar uma função a ele antes de usa-lo.
*/