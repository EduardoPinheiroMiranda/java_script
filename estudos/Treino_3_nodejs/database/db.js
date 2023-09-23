const mongoose = require("mongoose")

const db = () => {
    mongoose.connect(
        "mongodb+srv://root:EdUArdO123@cluster0.kgly9ia.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then( () => {
        console.log("sucesso ao conectar ao MONGODB")
    }).catch( (err) => {
        console.log(`erro ao se conectar ao banco mongodb ${err}`)
    })
}
module.exports = db