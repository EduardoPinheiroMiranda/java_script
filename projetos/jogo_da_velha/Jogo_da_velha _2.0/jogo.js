//-----------manipulação da tabela de introdução de jogadores-----------
let alerta = document.getElementById("mensagen")
let JogadaErrada = document.getElementById("JogadaErrada")
let tabuleiro = document.getElementById("tabuleiro")
let jogador1 = document.getElementById("p1")
let jogador2 = document.getElementById("p2")
let jogador = document.getElementById("players")
let cor = document.querySelectorAll(".CordosBlocos")

function start() {
  if (jogador1.value.length == 0 || jogador2.value.length == 0) {
      alerta.setAttribute("style", "color:red");
      alerta.innerHTML = `<strong>Ainda está faltando o nome de jogadores</strong>`;
  } else {
      jogador.innerHTML = " ";
      jogador.setAttribute("style", "background-color:transparent");
      tabuleiro.setAttribute("style", "background-color: rgba(0,0,0,0.7)");
        
            for(let i=0;i<9;i++){
              cor[i].setAttribute('style', 'background-color:white')
            }
  }
}

//-------------manipulação da tabela de jogo--------------------
// utilizar um for() para saber quem está jogando, impar para jogar1 e par para jogado2.

let TabelaDeCores = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
let QuemJoga = 01
let cont = 0
function vencedor(){
//------------------------Horizontal
  if(TabelaDeCores[0]=="blue"&&TabelaDeCores[1]=="blue"&&TabelaDeCores[2]=="blue"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador1.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[3]=="blue"&&TabelaDeCores[4]=="blue"&&TabelaDeCores[5]=="blue"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador1.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[6]=="blue"&&TabelaDeCores[7]=="blue"&&TabelaDeCores[8]=="blue"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador1.value} você foi o ganhador</strong>`}
    cont = -1
  }

  if(TabelaDeCores[0]=="red"&&TabelaDeCores[1]=="red"&&TabelaDeCores[2]=="red"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador2.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[3]=="red"&&TabelaDeCores[4]=="red"&&TabelaDeCores[5]=="red"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador2.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[6]=="red"&&TabelaDeCores[7]=="red"&&TabelaDeCores[8]=="red"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador2.value} você foi o ganhador</strong>`}
    cont = -1
  }
//------------------------vertical
  if(TabelaDeCores[0]=="blue"&&TabelaDeCores[3]=="blue"&&TabelaDeCores[6]=="blue"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador1.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[1]=="blue"&&TabelaDeCores[4]=="blue"&&TabelaDeCores[7]=="blue"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador1.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[2]=="blue"&&TabelaDeCores[5]=="blue"&&TabelaDeCores[8]=="blue"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador1.value} você foi o ganhador</strong>`}
    cont = -1
  }

  if(TabelaDeCores[0]=="red"&&TabelaDeCores[3]=="red"&&TabelaDeCores[6]=="red"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador2.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[1]=="red"&&TabelaDeCores[4]=="red"&&TabelaDeCores[7]=="red"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador2.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[2]=="red"&&TabelaDeCores[5]=="red"&&TabelaDeCores[8]=="red"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador2.value} você foi o ganhador</strong>`}
    cont = -1
  }
//----------------------Diagonal
  if(TabelaDeCores[0]=="red"&&TabelaDeCores[4]=="red"&&TabelaDeCores[8]=="red"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador2.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[2]=="red"&&TabelaDeCores[4]=="red"&&TabelaDeCores[6]=="red"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador2.value} você foi o ganhador</strong>`}
    cont = -1
    
  }
  if(TabelaDeCores[0]=="blue"&&TabelaDeCores[4]=="blue"&&TabelaDeCores[8]=="blue"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador1.value} você foi o ganhador</strong>`}
    cont = -1
  }
  if(TabelaDeCores[2]=="blue"&&TabelaDeCores[4]=="blue"&&TabelaDeCores[6]=="blue"){
    for(let i=0;i<9;i++){cor[i].setAttribute("style","background-color:transparent");tabuleiro.innerHTML=`<strong>Parabéns ${jogador1.value} você foi o ganhador</strong>`}
    cont = -1
    
  }
  for(let i=0; i<9;i++){
    if(TabelaDeCores[i]!=' '){
      cont +=1
    }else{cont = 0}
  }
  if(cont>=9){
    for(let i =0; i<9;i++){
      cor[i].setAttribute("style","background-color:transparent")
    }
    tabuleiro.innerHTML=`<strong>uuuuuuh foi quase, mas deu empate...vão deixa assim? </strong>`
  }
}

function pos1(){
  if(QuemJoga%2!=0){
    if(TabelaDeCores[0]==' '){
      JogadaErrada.innerText=` `
      cor[0].setAttribute("style", "background-color:blue")
      TabelaDeCores[0]="blue"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML= `<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }else{
    if(TabelaDeCores[0]==' '){
      JogadaErrada.innerText=` `
      cor[0].setAttribute("style", "background-color:red")
      TabelaDeCores[0]="red"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }
}

function pos2(){
  if(QuemJoga%2!=0){
    if(TabelaDeCores[1]==' '){
      JogadaErrada.innerText=` `
      cor[1].setAttribute("style", "background-color:blue")
      TabelaDeCores[1]="blue"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }else{
    if(TabelaDeCores[1]==' '){
      JogadaErrada.innerText=` `
      cor[1].setAttribute("style", "background-color:red")
      TabelaDeCores[1]="red"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }
}

function pos3(){
  if(QuemJoga%2!=0){
    if(TabelaDeCores[2]==' '){
      JogadaErrada.innerText=` `
      cor[2].setAttribute("style", "background-color:blue")
      TabelaDeCores[2]="blue"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }else{
    if(TabelaDeCores[2]==' '){
      JogadaErrada.innerText=` `
      cor[2].setAttribute("style", "background-color:red")
      TabelaDeCores[2]="red"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }
}

function pos4(){
  if(QuemJoga%2!=0){
    if(TabelaDeCores[3]==' '){
      JogadaErrada.innerText=` `
      cor[3].setAttribute("style", "background-color:blue")
      TabelaDeCores[3]="blue"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }else{
    if(TabelaDeCores[3]==' '){
      JogadaErrada.innerText=` `
      cor[3].setAttribute("style", "background-color:red")
      TabelaDeCores[3]="red"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }
}

function pos5(){
  if(QuemJoga%2!=0){
    if(TabelaDeCores[4]==' '){
      JogadaErrada.innerText=` `
      cor[4].setAttribute("style", "background-color:blue")
      TabelaDeCores[4]="blue"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML= `<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }else{
    if(TabelaDeCores[4]==' '){
      JogadaErrada.innerText=` `
      cor[4].setAttribute("style", "background-color:red")
      TabelaDeCores[4]="red"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }
}

function pos6(){
  if(QuemJoga%2!=0){
    if(TabelaDeCores[5]==' '){
      JogadaErrada.innerText=` `
      cor[5].setAttribute("style", "background-color:blue")
      TabelaDeCores[5]="blue"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML= `<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }else{
    if(TabelaDeCores[5]==' '){
      JogadaErrada.innerText=` `
      cor[5].setAttribute("style", "background-color:red")
      TabelaDeCores[5]="red"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }
}

function pos7(){
  if(QuemJoga%2!=0){
    if(TabelaDeCores[6]==' '){
      JogadaErrada.innerText=` `
      cor[6].setAttribute("style", "background-color:blue")
      TabelaDeCores[6]="blue"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML= `<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }else{
    if(TabelaDeCores[6]==' '){
      JogadaErrada.innerText=` `
      cor[6].setAttribute("style", "background-color:red")
      TabelaDeCores[6]="red"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }
}

function pos8(){
  if(QuemJoga%2!=0){
    if(TabelaDeCores[7]==' '){
      JogadaErrada.innerText=` `
      cor[7].setAttribute("style", "background-color:blue")
      TabelaDeCores[7]="blue"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML= `<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }else{
    if(TabelaDeCores[7]==' '){
      JogadaErrada.innerText=` `
      cor[7].setAttribute("style", "background-color:red")
      TabelaDeCores[7]="red"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }
}

function pos9(){
  if(QuemJoga%2!=0){
    if(TabelaDeCores[8]==' '){
      JogadaErrada.innerText=` `
      cor[8].setAttribute("style", "background-color:blue")
      TabelaDeCores[8]="blue"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML= `<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }else{
    if(TabelaDeCores[8]==' '){
      JogadaErrada.innerText=` `
      cor[8].setAttribute("style", "background-color:red")
      TabelaDeCores[8]="red"
      QuemJoga +=1
      vencedor()
    }else{
      JogadaErrada.innerHTML=`<strong>Você não pode marcar aqui, tente outro lugar!</strong>`
    }
  }
}

