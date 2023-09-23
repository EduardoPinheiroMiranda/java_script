/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const jurosSimples = (c,i,t) => {
    var j=0
    var m=0 

    j = c * i * t
    return m = c+j
}

const jurosCompostos = (c,i,t) => {
    var a
        return a = c*(1+i)**t
}


console.log( `O montante è de ${jurosSimples(3000,0.5,3)}`)
console.log(`Valor do juros composto ${jurosCompostos(30,0.5,2)}`)