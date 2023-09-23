var jogador1 = document.getElementById("play1")
var jogador2 = document.getElementById("play2")
var men = document.getElementById("velha")
var res1 = document.getElementById("prim")
var res2 = document.getElementById("segu")
var res3 = document.getElementById("terc")
var res4 = document.getElementById("quar")
var res5 = document.getElementById("quin")
var res6 = document.getElementById("sest")
var res7 = document.getElementById("sete")
var res8 = document.getElementById("oito")
var res9 = document.getElementById("nono")
var i= 0//vai ser usado para controlar as jogados dos oponentes
var jogadas = ['black','black','black','black','black','black','black','black','black']

window.alert("O jogador 1 sera o primeiro, os quadrados preenchidos de vermelho serão dele. Em seguida será a vez do jogador 2, ele ficar com o azul")

function start(){
    if(jogador1.value.length ==0||jogador2.value.length==" 0"){
        alert("[ERRO] Falta jogadores")
    }else{
        window.alert(`${jogador1.value} e ${jogador2.value} se preparem (°__°)`)
    }
}
function prim(){
    if(i%2==0){//se a variavel ´i´ for para é a vez do jogador 1
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[0]=='azul'||jogadas[0]=='vermelha'){//compara o quadrado para saber se já foi marcado
                    window.alert(`Aqui já foi marcado com a cor ${jogadas[0]}`)
                }else{//se a variavel for impar será a vez do jogador 2
                    res1.style.background = "red"
                    jogadas[0]='vermelha'
                    i+=1
                }
            }
    }else{
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[0]=='vermelha'||jogadas[0]=='azul'){//compara o quadrado para saber se já foi marcado
                window.alert(`Aqui já foi marcado com a cor ${jogadas[0]}`)
            }else{
                res1.style.background = "blue"
                jogadas[0]='azul'
                i+=1
            }
        }
    }
    //-------------conferindo se o jogador1 é o ganhador
    if(jogadas[0]=='vermelha'&&jogadas[1]=='vermelha'&&jogadas[2]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='vermelha'&&jogadas[3]=='vermelha'&&jogadas[6]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[8]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    //--------------conferindo se jogador2 é o ganhador
    if(jogadas[0]=='azul'&&jogadas[1]=='azul'&&jogadas[2]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='azul'&&jogadas[3]=='azul'&&jogadas[6]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='azul'&&jogadas[4]=='azul'&&jogadas[8]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    
}
function segu(){
    if(i%2==0){
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[1]=='azul'||jogadas[1]=='vermelha'){
                window.alert(`Aqui já foi marcado com a cor ${jogadas[1]}`)
            }else{
                res2.style.background = "red"
                jogadas[1]='vermelha'
                i+=1
            }
        }
    }else{
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[1]=='azul'||jogadas[1]=='vermelha'){
                window.alert(`Aqui já foi marcado com a cor ${jogadas[1]}`)
            }else{
                res2.style.background = "blue"
                jogadas[1]='azul'
                i+=1
            }
        }
    }
    if(jogadas[0]=='vermelha'&&jogadas[1]=='vermelha'&&jogadas[2]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[1]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[7]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='azul'&&jogadas[1]=='azul'&&jogadas[2]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[1]=='azul'&&jogadas[4]=='azul'&&jogadas[7]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    
}
function terc(){
    if(i%2==0){
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[2]=='azul'||jogadas[2]=='vermelha'){
                window.alert(`Aqui já foi marcado com a cor ${jogadas[2]}`)
            }else{
                res3.style.background = "red"
                jogadas[2]='vermelha'
                i+=1
            }
        }
    }else{
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[2]=='azul'||jogadas[2]=='vermelha'){
                window.alert(`Aqui já foi marcado com a cor ${jogadas[2]}`)
            }else{
                res3.style.background = "blue"
                jogadas[2]='azul'
                i+=1
            }
        }
    }
    if(jogadas[0]=='vermelha'&&jogadas[1]=='vermelha'&&jogadas[2]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[2]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[2]=='vermelha'&&jogadas[5]=='vermelha'&&jogadas[8]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='azul'&&jogadas[1]=='azul'&&jogadas[2]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='azul'&&jogadas[4]=='azul'&&jogadas[2]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[2]=='azul'&&jogadas[5]=='azul'&&jogadas[8]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    }
function quar(){
    if(i%2==0){
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[3]=='azul'||jogadas[3]=='vermelha'){
                window.alert(`Aqui já foi marcado com a cor ${jogadas[3]}`)
            }else{
                res4.style.background = "red"
                jogadas[3]='vermelha'
                i+=1
            }
        }
    }else{
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[3]=='azul'||jogadas[3]=='vermelha'){
                window.alert(`Aqui já foi marcado com a cor ${jogadas[3]}`)
            }else{
                res4.style.background = "blue"
                jogadas[3]='azul'
                i+=1
            }
        }
    }
    if(jogadas[0]=='vermelha'&&jogadas[3]=='vermelha'&&jogadas[6]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[3]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[5]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='azul'&&jogadas[3]=='azul'&&jogadas[6]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[3]=='azul'&&jogadas[4]=='azul'&&jogadas[5]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
}
function quin(){
    if(i%2==0){
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[4]=='azul'||jogadas[4]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[4]}`)
            }else{
                res5.style.background = "red"
                jogadas[4]='vermelha'
                i+=1
            }
        }
    }else{
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[4]=='azul'||jogadas[4]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[4]}`)
            }else{
                res5.style.background = "blue"
                jogadas[4]='azul'
                i+=1
            }
        }
    }
    if(jogadas[1]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[7]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[3]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[5]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[2]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[8]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[1]=='azul'&&jogadas[4]=='azul'&&jogadas[7]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[3]=='azul'&&jogadas[4]=='azul'&&jogadas[5]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='azul'&&jogadas[4]=='azul'&&jogadas[2]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='azul'&&jogadas[4]=='azul'&&jogadas[8]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    }
function sest(){
    if(i%2==0){
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[5]=='azul'||jogadas[5]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[5]}`)
            }else{
                res6.style.background = "red"
                jogadas[5]='vermelha'
                i+=1
            }
        }
    }else{
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[5]=='azul'||jogadas[5]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[5]}`)
            }else{
                res6.style.background = "blue"
                jogadas[5]='azul'
                i+=1
            }
        }
    }
    if(jogadas[2]=='vermelha'&&jogadas[5]=='vermelha'&&jogadas[8]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[3]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[5]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[2]=='azul'&&jogadas[5]=='azul'&&jogadas[8]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[3]=='azul'&&jogadas[4]=='azul'&&jogadas[5]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    }
function seti(){
    if(i%2==0){
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
           if(jogadas[6]=='azul'||jogadas[6]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[6]}`)
            }else{
                res7.style.background = "red"
                jogadas[6]='vermelha'
                i+=1
            }
        }
    }else{
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[6]=='azul'||jogadas[6]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[6]}`)
            }else{
                res7.style.background = "blue"
                jogadas[6]='azul'
                i+=1
            }
        }
    }
    if(jogadas[0]=='vermelha'&&jogadas[3]=='vermelha'&&jogadas[6]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[2]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='vermelha'&&jogadas[7]=='vermelha'&&jogadas[8]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='azul'&&jogadas[3]=='azul'&&jogadas[6]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='azul'&&jogadas[4]=='azul'&&jogadas[2]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='azul'&&jogadas[7]=='azul'&&jogadas[8]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    }
function oita(){
    if(i%2==0){
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
           if(jogadas[7]=='azul'||jogadas[7]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[7]}`)
            }else{
                res8.style.background = "red"
                jogadas[7]='vermelha'
                i+=1
            }
        }
    }else{
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[7]=='azul'||jogadas[7]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[7]}`)
            }else{
                res8.style.background = "blue"
                jogadas[7]='azul'
                i+=1
            }
        }
    }
    if(jogadas[1]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[7]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='vermelha'&&jogadas[7]=='vermelha'&&jogadas[8]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[1]=='azul'&&jogadas[4]=='azul'&&jogadas[7]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='azul'&&jogadas[7]=='azul'&&jogadas[8]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
}
function nono(){
    if(i%2==0){
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[8]=='azul'||jogadas[8]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[8]}`)
            }else{
                res9.style.background = "red"
                jogadas[8]='vermelha'
                i+=1
            }
        }
    }else{
        if(jogador1.value.length == 0 || jogador2.value.length == 0){
            alert("[ERRO] Diga quem são os jogadores")
        }else{
            if(jogadas[8]=='azul'||jogadas[8]=='vermelha'){
        window.alert(`Aqui já foi marcado com a cor ${jogadas[8]}`)
            }else{
                res9.style.background = "blue"
                jogadas[8]='azul'
                i+=1
            }
        }
    }
    if(jogadas[6]=='vermelha'&&jogadas[7]=='vermelha'&&jogadas[8]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='vermelha'&&jogadas[4]=='vermelha'&&jogadas[8]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[2]=='vermelha'&&jogadas[5]=='vermelho'&&jogadas[8]=='vermelha'){men.style.background = 'red'; men.innerHTML = `<strong> ${jogador1.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[6]=='azul'&&jogadas[7]=='azul'&&jogadas[8]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[0]=='azul'&&jogadas[4]=='azul'&&jogadas[8]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
    if(jogadas[2]=='azul'&&jogadas[5]=='azul'&&jogadas[8]=='azul'){men.style.background = 'blue'; men.innerHTML = `<strong> ${jogador2.value} ganhou<strong`; men.style.padding = '10px'}
}
    