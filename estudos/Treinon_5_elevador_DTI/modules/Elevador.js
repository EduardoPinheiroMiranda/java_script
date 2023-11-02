class Pessoa {
    constructor(nome, peso){
        this.nome = nome
        this.peso = peso
    }
    

}

class Elevador {
    constructor(cargaMaxima, quatidadeAndares){
        this.cargaMaxima = cargaMaxima
        this.quatidadeAndares = quatidadeAndares
        this.andarAtual = 0
        this.quatidadePessoas = []
        this.cargaAtual = 0

    }

    aviso(menssagem){//avisar quando o peso estiver acima
        console.log(menssagem)
    }

    mostraStatus(){
        console.log(`
           andar Atual: ${this.andarAtual}
           quantidade de pessoas: ${this.quatidadePessoas.length}
           carga atual: ${this.cargaAtual}
            
        `)

        this.quatidadePessoas.forEach((item) => {
            console.log(`nome: ${item.nome} peso: ${item.peso}`)
        })
    }

    subir(){//metodo para fazer o elevador subir de andar 
        if(this.andarAtual <= this.quatidadeAndares){
            this.andarAtual++
        }
    }

    descer(){//metodo para fazer o elevador descer de andar 
        if(this.andarAtual > 0){
            this.andarAtual--
        }
    }

    adicionarPessoa(pessoa){
        if(this.cargaAtual + pessoa.peso > this.cargaMaxima){
            this.aviso("A carga maxima foi ultrapassada, normalize para continuar.")
        }else{
            this.quatidadePessoas.push(pessoa)
            this.cargaAtual += pessoa.peso
        }

    }

    removerPessoa(pessoa){
        const indexPessoa = this.quatidadePessoas.findIndex(p => p === pessoa)

        if(indexPessoa !== -1){
            const pessoaRemovida = this.quatidadePessoas.splice(indexPessoa, 1)[0]
            this.cargaAtual -= pessoaRemovida.peso
        }else(
            this.aviso("pessoa não encontrada.")
        )
    }
    
}

const pessoa = new Pessoa("eduardo", 68)
const pessoa2 = new Pessoa("Lucas", 400)

const elevador = new Elevador(300, 10)

elevador.adicionarPessoa(pessoa)
elevador.subir()

elevador.adicionarPessoa(pessoa2)
elevador.subir()

elevador.mostraStatus()

elevador.subir()

elevador.mostraStatus()

elevador.removerPessoa(pessoa2)

elevador.descer()

elevador.mostraStatus()

elevador.descer()
elevador.descer()
elevador.descer()

elevador.mostraStatus()