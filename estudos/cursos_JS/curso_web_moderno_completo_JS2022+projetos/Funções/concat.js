const filha = ['ana', 'flavia']
const filho = ['joao', 'herick']
const sobrinho = ['paulo', 'carlo']
const  primo = ['bia', 'sorian']


const pai =  filha.concat(filho)

console.log(pai)

const pai2 = [].concat(filha,filho, sobrinho, primo)
console.log(pai2)