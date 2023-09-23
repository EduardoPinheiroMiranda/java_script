const squliteConnection = require("../index")
const createUsers = require("./createUsers")

async function migrationRun(){
    const schemas = [
        createUsers
    ].join("")

   squliteConnection().then(db => db.exec(schemas)).catch(error => console.log(error))
}

module.exports = migrationRun;