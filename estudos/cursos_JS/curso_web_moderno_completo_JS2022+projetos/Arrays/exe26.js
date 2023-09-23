/*
Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, 
ou seja, sem as vogais.
*/

const consoantes = (filtrar) => {
    let res = filtrar
    let res2 = ''
    let le = ['a','e','i','o','u']

    for(let i=0; i<5;i++){
        for(letra of res){
            if(!letra.includes(le[i])){
                res2 = res2+letra
            }
        }
        res = res2
        res2 = ""
    }
    
    return res
}

console.log(consoantes("reprovado"))
