const Sequelize = require("sequelize")
const bancoAleatorio = new Sequelize('rifa','root', 'EdUArdO123',{
    host: 'localhost',
    dialect: 'mariadb'
})
/*
bancoAleatorio.authenticate().then(function(){
    console.log("conecção bem sucedida")
}).catch(function(erro){
    console.log("erro na conecção")
})*/

const cliente = bancoAleatorio.define('clientes', {
    nome:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.STRING
    },
    numero:{
        type:Sequelize.STRING
    }
})

/*cliente.sync({force:true})  ==> este comando deve ser removido assim 
que as tabelas e os campos forem criados, se ela permanecer não sera possivel 
adicionar valores dentro dos campos desejados. 
*/
//metodo sem query, onde fica a cargo do node interpretar os valores pro sql.
cliente.create({
    nome:'ricardo',
    telefone: '984242424',
    numero: '3'
})
//metodo com query.
bancoAleatorio.query("insert into teste(descricao, valor) value('jghxcasjgnvhjag', '3')")