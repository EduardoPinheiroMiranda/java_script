/*
As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

/*
    DICA
    Para calcularmos se um ano é bissexto utilizamos uma regra bastante prática, 
    se o ano não terminar em 00 e for divisível por 4 dizemos que ele é bissexto. 
    Um número é divisível por 4 quando a sua dezena é divisível por 4. Por exemplo, 
    1988 é divisível por 4, pois 88:4 = 22. Portanto, os seguintes anos são bissextos: 1988, 1992, 
    1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, ... . 
    Os anos terminados em 00 serão bissextos se a divisão deles por 400 for exata, isto é, 
    o resto da divisão precisa ser igual a zero.
*/

const anobi = (ano) => {
    if(ano%4==0){
        return true
    }else{
        return false
    }
}

console.log(`${anobi(2000)}`)
console.log(`${anobi(1988)}`)
console.log(`${anobi(2001)}`)
console.log(`${anobi(2012)}`)
console.log(`${anobi(2014)}`)
console.log(`${anobi(1999)}`)