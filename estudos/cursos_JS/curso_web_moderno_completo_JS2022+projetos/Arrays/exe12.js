/*
Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos 
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a 
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias 
de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas 
situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções. 
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome 
de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade 
especificada no segundo parâmetro.

A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função 
removerPropriedade, você poderá usar a função Object.is(), por exemplo:  
Object.is(removerPropriedade(objeto, "descricao"), objeto)  
Retornará false se o objeto não for o mesmo.
*/

const carro = {
    nome: 'toro',
    valor: 50000,
    Ttrasao: true,
    des: "picape de quatro rodas"
}

const copia = (obj) => {
    let newobj = JSON.stringify(obj)
    return newobj
}

const remover = (obj, atr) => {
    const obj2 = JSON.parse(copia(obj))
    delete obj2[atr]
    return obj2
}

const Objcopia = remover(carro, 'des')
console.log('Copia do objeto 1: ', Objcopia)
console.log(Object.is(carro, Objcopia ))

//metodo mais facil usar o assing()

const copia2 = (obj, atr) => {
    const newobj = Object.assign({}, obj)
    delete newobj[atr]
    return Object.is(newobj, obj)
}

console.log(copia2(carro, 'des'))