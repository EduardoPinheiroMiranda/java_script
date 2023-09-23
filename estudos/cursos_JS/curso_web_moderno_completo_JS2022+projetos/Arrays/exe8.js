/**
 * Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a 
multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */

const multi = (a,b) => {
    if(a<0 || b<0){
        return false
    }else{
        let res = 0
        for(let i=0; i<b; i++){
            res += a
        }
        return res
    }
}

console.log(multi(2,40))