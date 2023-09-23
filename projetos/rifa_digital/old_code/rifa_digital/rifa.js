const nome = document.getElementById('nome')
const tel = document.getElementById('tel')
const end_eletronico = document.getElementById('email')
const cety = document.getElementById('city')
const bilhete = document.getElementById('option')
const nome_alert = document.getElementById('nome_alert')
const tel_alert = document.getElementById('tel_alert')
const bilhete_alert = document.getElementById('bilhete_alert')
const marcar_bilhete = document.querySelectorAll('.number')
/*-----variaveis de controle para validaça de dados*/
    let n
    let t
    let b
    let bilhetes_vendidos = []
/*-------------------------------------------------*/
function confirmar(){
    //nome
    if(nome.value.length ==0){
        nome_alert.innerText = '*Nome obrigatório'
        n = false
    }else{
        nome_alert.innerText = ' '
        n = true
    }
    //telefone
    if(tel.value.length==0){
        tel_alert.innerText = '*Telefone de contato obrigatório'
        t = false
    }else{
        tel_alert.innerText = ' '
        t = true
    }
    //bilhete
    if(bilhete.value.length==0){
        bilhete_alert.innerText = '*Escolha do bilhete obrigatório'
        b = false
    }else{
        bilhete_alert.innerText = ' '
        b = true
    }
    
    if((bilhete.value*10)%10!=0 || bilhete.value>50 || bilhete.value<=0){
        bilhete_alert.innerText ="*Número invalido"
        b = false
    }else{
        bilhete_alert.innerText = ' '
        b = true
    }
    
    if(bilhetes_vendidos[bilhete.value-1]==null){
        bilhetes_vendidos[bilhete.value-1] = bilhete.value
        b = true
    }else{
        bilhete_alert.innerText = '*Esse bilhete já foi escolhido'
        b = false
    }

    if(n==true && t==true && b==true){        
        marcar_bilhete[bilhete.value-1].setAttribute('style', 'background-color: green')
         
        
        const Sequelize = require('sequelize')
        const sequelize = new Sequelize('rifabeneficiente', 'root', 'EdUArdO123', {
            host: 'localhost',
            dialect:'mariadb'
        });
        
        Postagem.create({
            nome: "nome",
            telefone: "tel",
            email: "end_eletronico",
            bilhete: "bilhete",
            cidade: "cidade"
        })
          
    }
  
}