/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para 
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de 
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

const dicionario = ['java','pyton','c++','php','cotlin','javascript','html','css','javatodomundo','todomundojavaindo']
const chave = 'java'


const busca = (chave, dicionario) => {
    let res = []
    for(palavra of dicionario){
        if(palavra.includes(chave)){//otima forma de procura.
            res.push(palavra)
        }
    }
    
    return res 
}
console.log(busca(chave,dicionario))
