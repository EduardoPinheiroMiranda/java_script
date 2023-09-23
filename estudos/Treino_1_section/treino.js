var valor=document.getElementById("num")
var exibir=document.getElementById("sel")
var analize= document.getElementById("analise")
var banco=[]


function tem_numero(n){
    if(n.length==0){
        return true
    }else{
        return false
    }
}
function  tem_lista(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function confirmar(){
      
    if(tem_numero(valor.value) || tem_lista(valor.value, banco)){
            alert("[ERRO] Verifique se você digitou um valor, ou se o valor digitado está sendo repetido! ")
        }else{
            //apresentando os valores no select
            banco.push(valor.value)
            var item = document.createElement('option')
            item.text=valor.value
            exibir.appendChild(item)
                
            
        }
}

function fim(){
    if(banco.length==0){
        alert("[ERRO] Verifique se os valores foram digitados!")
    }else{
        var maior=valor.value, cont, menor=9999999, media=0
            for(var i=0;i<banco.length;i++){
                if(banco[i]>maior){
                    maior=banco[i]
                }
                if(banco[i]<menor){
                    menor=banco[i]
                }
                media = media+Number(banco[i])
            }
            media=media/banco.length
        analize.innerHTML=`O maior número é ${maior}.<p>`
        analize.innerHTML+=`O menor número é ${menor}.<p>`
        analize.innerHTML+=`A tabela possui ${banco.length} números.<p>`
        analize.innerHTML+=` A media dos valores na tabele é ${media}`
    }
}