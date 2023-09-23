/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

const trueFalse = (num) => {
    if(num%3==0){
        return true
    }else{
        return false
    }
}

console.log(trueFalse(3))
console.log(trueFalse(30))
console.log(trueFalse(23))
console.log(trueFalse(13))
console.log(trueFalse(90))
