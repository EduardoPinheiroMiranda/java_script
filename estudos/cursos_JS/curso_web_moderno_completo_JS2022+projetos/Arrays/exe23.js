/*
Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
Considere que todas as palavras só são separadas por um espaço.
*/

const qtddPalavras = (frase) => {
    let contagem = 0
    for(let i=0; i<frase.length; i++){
        if(frase[i]==' '){
            contagem += 1
        }
    }
    return contagem
}

console.log(qtddPalavras('oi, eu sou Eduardo e estou procurando um emprego, você pode me ajudar ?'))