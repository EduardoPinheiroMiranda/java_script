const routs = require('express').Router()
const rotas = require('../Controller/TasksController')

routs.get("/", rotas.displayRifa)
routs.get("/formulario/:i", rotas.formulario)
routs.post("/insert/:ticket", rotas.insert)
routs.get("/userAdmin", rotas.displayuserAdmin)
routs.post("/login", rotas.login)
routs.get("/confirmticket/:i", rotas.confirmTicket)
routs.get("/rifaAdmin", rotas.displayrifaAdmin)
routs.get("/buyConfirm/:ticket", rotas.buyConfirm)
routs.get("/ticketDelete/:ticket", rotas.ticketDelite)

routs.get("/ticketSort", rotas.ticketSort)
routs.get("/sortWiner", rotas.sortWiner)
routs.get("/alertDel", rotas.alertDel)
routs.get("/rifaDelite", rotas.rifaDelite)

module.exports = routs