/*
O cardápio de uma lanchonete é o seguinte: 

Código  Descrição do Produto  Preço 

100  Cachorro Quente        R$ 3,00 
200  Hambúrguer Simples     R$ 4,00 
300  Cheeseburguer          R$ 5,50 
400  Bauru                  R$ 7,50 
500  Refrigerante           R$ 3,50 
600  Suco                   R$ 2,80 

Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente. 
*/


const pedido = (produto,qtde) => {
    switch(produto){
        case 100:
            console.log(`${qtde} Cachorro Quente: ${(3*qtde).toFixed(2).replace('.',',')}`)
            break
        case 200:
            console.log(`${qtde} Hambúrguer Simples: ${(qtde*4).toFixed(2).replace('.',',')}`)
            break
        case 300:
            console.log(`${qtde} Cheeseburguer: ${(5.5*qtde).toFixed(2).replace('.',',')}`)
            break
        case 400: 
            console.log(`${qtde} Bauru: ${(7.5*qtde).toFixed(2).replace('.',',')}`)
            break
        case 500:
            console.log(`${qtde} Refrigerante: ${(3.5*qtde).toFixed(2).replace('.',',')}`)
            break
        case 600:
            console.log(`${qtde} Suco: ${(2.8*qtde).toFixed(2).replace('.',',')}`)
            break
        default:
            console.log(`Esse produto não existe`)
    }
}

pedido(100,3)
pedido(200,2)
pedido(600,4)
pedido(400,9)



