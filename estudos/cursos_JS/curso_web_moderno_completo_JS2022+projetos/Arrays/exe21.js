//Criar uma função que receba um array de números e retorne o menor número desse array.

const num = [2,3,6,5,1,0,-9]

const menorNum = (array) => {
    return array.reduce((menor,atual)=>menor>atual ? menor=atual : menor=menor)
}
console.log(menorNum(num))