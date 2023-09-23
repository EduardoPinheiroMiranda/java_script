/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao 
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a 
seguir:
*/

const obj1 = {nome:"eduardo"}

const inverter = (obj) => {
    let obj2 = Object.entries(obj).map(obj=> obj.reverse())
    return Object.fromEntries(obj2)
}

console.log(inverter(obj1))
//console.log(obj1)