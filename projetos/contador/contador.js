var inicio = document.getElementById("inicio")
var fim = document.getElementById("fim")
var passos = document.getElementById("passos")
var res = document.getElementById("res")


function confirmar(){
var ini = Number(inicio.value)
var ffim = Number(fim.value)
var pas = Number(passos.value)
var limit = ffim - ini

    if(passos.value.length ==0){
        window.alert("[ERRO] Valores invalidos")
    }else if(pas>limit){
        window.alert("[ERRO] Número de passos invalidos")
    }
        for(var i=ini; i<=ffim;i+=pas){
            res.innerHTML += `  \u{1f449}${i}`
        }
        res.innerHTML += `\u{1F3C1}`
}



