const sqlite3 = require("sqlite3")
const sqlite = require("sqlite")
const path = require("path")

async function squliteConnection(){
    const dataBase = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    })
    return dataBase
}

// const Sequelize = require("sequelize")
// const dataBase = new Sequelize("rocketnote", "root", "EdUArdO123", {
//     host: "localhost",
//     dialect: "mysql"
// })

// dataBase.authenticate().then(() => {
//     console.log("Banco conectado com sucesso.")
// }).catch((error) => {
//     console.log(error)
// })

module.exports = squliteConnection 
