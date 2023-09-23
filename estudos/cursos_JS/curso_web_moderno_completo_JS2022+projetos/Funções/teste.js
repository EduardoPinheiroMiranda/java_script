Array.prototype.fortop = (propriedade) =>{
    propriedade(this)
}



const teste = ['eduardo','Ricardo','erenice','cleiton', 'vania', 'gelsson',2,3,5,4,5,45,51]

teste.fortop((valor,ind) => {
    console.log(valor)
})






