const routes = require("express").Router()
const apresentar = require("../controller/TaskController")

    routes.get('/', apresentar.apresentar)
    routes.post('/criarpost', apresentar.criarPost)
    routes.get('/getById/:id/:method', apresentar.getById)
    routes.post('/update/:id', apresentar.update)
    routes.get('/delete/:id', apresentar.delet)

module.exports = routes