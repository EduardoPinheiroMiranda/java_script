const mongoose = require("mongoose")
const ticketSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    cidade:{
        type: String,
        require: true
    },
    endereco:{
        type: String,
        require: true
    },
    telefone:{
        type: String,
        require: true
    },
    buy:{
        type: String,
        require: true
    },
    bilhete:{
        type: String,
        require: true
    },
    dateBuy:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Ticket", ticketSchema)