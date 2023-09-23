const Sequelize = require('sequelize')
const bancoRifa = new Sequelize('rifa', 'root', 'EdUArdO123',{
    host: 'localhost',
    dialect: 'mariadb'
})
module.exports = {
    Sequelize: Sequelize,
    bancoRifa: bancoRifa
}