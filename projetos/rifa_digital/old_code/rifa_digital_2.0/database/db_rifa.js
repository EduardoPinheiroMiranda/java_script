const mongoose = require('mongoose')
const dbrifa = () => {
    mongoose.connect(
        "mongodb+srv://Eduardo:EdUArdO123@rifa.15a5mla.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then( () => {
        console.log("Conecção realizada com sucesso ao mongoDB")
    }).catch( (err) => {
        console.log("erro ao se conectar " + err)
    })
}

module.exports = dbrifa