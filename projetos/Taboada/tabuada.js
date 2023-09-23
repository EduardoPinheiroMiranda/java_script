var mult1 = document.getElementById("mult1")
var res = document.getElementById('res')

var i = parseInt()

function soma(){
    var mul = Number(mult1.value)
        if(mult1.value.length ==0){
            alert("[ERRO] Campo vazio")
        }else{
            res.innerHTML = 'Soma<p>'
            for(i=0; i<=10; i++){
            res.innerHTML += `${mul} + ${i} = ${mul+i}</p>`
            }
        }
}
function subt(){
    var mul = Number(mult1.value)
        if(mult1.value.length==0){
            window.alert("[ERRO] Campo vazio")
        }else{
            res.innerHTML= 'Subtração<p>'
            for(i=0;i<=10;i++){
                res.innerHTML += `${mul} - ${i} = ${mul-i}<p/>`
            }
        }
}
function divi(){
    var mul = Number(mult1.value)
        if(mult1.value.length==0){
            window.alert("[ERRO] Campo vazio")
        }else{
            res.innerHTML = 'Divisão<p>'
            for(i=1;i<=10;i++){
                    res.innerHTML += `${mul} / ${i} = ${Math.floor(mul/i)}<p/>`
                }
        }
}
function mult(){
    var mul = Number(mult1.value)
        if(mult1.value.length==0){
            window.alert("[ERRO] Campo vazio")
        }else{
            res.innerHTML = 'Multiplicação</p>'
            for(i=0;i<=10;i++){
                res.innerHTML += `${mul} * ${i} = ${mul*i}<p/>`
            }
        }
}
