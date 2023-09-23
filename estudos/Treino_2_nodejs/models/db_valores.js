const db = require('./db_Rifaapp')

const cliente = db.bancoRifa.define('clientes',{
    nome:{
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.INTEGER
    }
})

module.exports = cliente
//cliente.sync({force:true})
