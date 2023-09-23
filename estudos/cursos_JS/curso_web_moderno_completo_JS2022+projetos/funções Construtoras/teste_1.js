//criando modelo de objeto
function Produto(valor=5, nome='macarram'){
    let qtdEstoque = 10     //atributo privado
    
    //metodos publicos
    this.vende1 = function () {     //o this torna os metodos publicos
        if(qtdEstoque-1>=0){
            console.log(`qtd: 1 ${nome}`)
            console.log(`valor Uni.: ${valor}`)
            console.log(`total: ${valor*1}\n`)
            qtdEstoque -= 1
        }else{
            console.log(`Estoque esgotado, aguard reposição!!`)
        }
    }
    //metodos publicos
    this.vende2 = function () {
        if(qtdEstoque-2 >= 0){
            console.log(`qtd: 2 macarram`)
            console.log(`valor Uni.: ${valor}`)
            console.log(`total: ${valor*2}\n`)
            qtdEstoque -= 2
        }else{
            console.log(`Estoque esgotado, aguard reposição!!`)
        }
    }
    //metodos publicos
    this.estoque = function () {
        return qtdEstoque
    }
}

//instanciando um novo objeto
const cereal = new Produto
cereal.vende1()
cereal.vende2()
cereal.vende1()
cereal.vende2()
cereal.vende1()
cereal.vende2()
cereal.vende1()
cereal.vende2()
console.log(cereal.estoque())

const cereal2 = new Produto(10,'oleo')
cereal2.vende1()
cereal2.vende2()
cereal2.vende1()
cereal2.vende2()
cereal2.vende1()
cereal2.vende2()
cereal2.vende1()
cereal2.vende2()
console.log(cereal.estoque())
