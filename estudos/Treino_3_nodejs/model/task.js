const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    valor: {
        type: Number,
        require: true,
    },
    data: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model("task", taskSchema)