/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/


const armazem = (fruta) => {

    switch(fruta) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'não conheço essa fruta'
    }
}

console.log(armazem('pera'))
console.log(armazem('maçã'))
console.log(armazem('kiwi'))
console.log(armazem('melancia'))

