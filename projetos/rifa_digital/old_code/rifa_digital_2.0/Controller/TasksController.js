const loginAdmin = "Admin"
const fraseDeAcesso = "admin"

const { trusted } = require("mongoose")
const Ticket = require("../modules/ticket")

let cont = 100
let ticketBuy
let ticketStatus
let notification
let x

let del, winer, logAdmin, sort, notOpem



const displayRifa = async (req,res) => {
    ticketBuy = []
    ticketStatus = []
    notification = ""

    const bilhete = await Ticket.find({})
    bilhete.forEach( (item) =>{
        ticketBuy.push(item.bilhete)
        if(item.buy=="reservado"){
            ticketStatus.push(item.buy)
        }else{
            ticketStatus.push(item.buy)
        }
    })
    return res.render("rifa",{cont, form:true, ticketBuy, notification, notOpem:true, ticketStatus, logAdmin:true}) 
}


const formulario = (req,res) =>{
    const ticket = req.params.i
        if(ticket){
           return res.render("rifa",{cont, form:false, ticket, ticketStatus, ticketBuy, notification, notOpem:true, logAdmin:true})
        }
}


const insert = async (req,res) => {
    const ticket = req.params.ticket

    const bilhete = new Ticket({
        nome: req.body.nome,
        email: req.body.email,
        cidade: req.body.city,
        endereco: req.body.end,
        telefone: req.body.tel,
        buy:"reservado",
        bilhete: ticket
    })

    if(bilhete.nome.length==0 || bilhete.email.length==0 || bilhete.cidade.length==0 || bilhete.endereco.length==0 || bilhete.telefone.length==0){
        notification = "*preencha todos os campos pedidos"
        return res.render("rifa",{cont, form:false, ticket,ticketStatus, ticketBuy, notification, notOpem:true,logAdmin:true})
    }

    //validação do bilhete, verifico se o bilhete já foi vendido e resgato valor para usar como validação
    const bilheteVendido = await Ticket.find({bilhete: req.params.ticket})
    let num
    bilheteVendido.forEach( (item) => {
        num = item.bilhete
    })

    if(num==ticket || ticket<1 || ticket>cont || isNaN(ticket)){    
        notification = "Opa! ...Esté é um valor que foi inserido de forma invalida, por favor escolha outro da forma correta!"
        return res.render("rifa",{cont, form:true, ticket, ticketStatus, ticketBuy, notification, notOpem:false, logAdmin:true})
    }else{
        try{
            await Ticket.create(bilhete)
            notification = "Obrigado por ter comprado um bilhete!"
            return res.render("rifa",{cont, form:true, ticketBuy, ticketStatus, notification, notOpem:false, logAdmin:true})
        }catch(err){
            return res.status(500).send({error: err.message})
        }
    }

}


const displayuserAdmin = (req,res) => {
    res.render("rifa",{cont, form:true, ticketBuy, notification, notOpem:true, ticketStatus, logAdmin:false})
}


//referem-se rifa de administrador


const login = (req, res) =>{
    const login = req.body

    if(login.user == loginAdmin && login.senha == fraseDeAcesso){
        return res.render("rifaAdmin", {cont, ticketBuy, ticketStatus, notification, notOpem:true, sort:true, del:true, winer:true})
    }else{
        notification = "usuário ou senha incerreto! tente novamente."
        return res.render("rifa",{cont, form:true, ticketBuy, notification, notOpem:false, ticketStatus, logAdmin:false,})
    }
}


const displayrifaAdmin = async (req, res) => {
    ticketStatus =[]
    ticketBuy = []

    const bilhete = await Ticket.find({})
    bilhete.forEach( (item) =>{
        ticketBuy.push(item.bilhete)
        if(item.buy=="reservado"){
            ticketStatus.push(item.buy)
        }else{
            ticketStatus.push(item.buy)
        }
    })
    return res.render("rifaAdmin", {cont, ticketBuy, ticketStatus, notOpem:true, sort:true, del:true, winer:true})
}


const confirmTicket = async (req,res) => {
    const client = await Ticket.findOne({bilhete: req.params.i})
    return res.render("rifaAdmin", {cont, ticketBuy, ticketStatus, client, notOpem:false, sort:true, del:true, winer:true})
}


const buyConfirm = async (req, res) => {
    await Ticket.updateOne({bilhete:req.params.ticket}, {$set: {buy:"vendido"}})
    return res.redirect("/rifaAdmin")
}


const ticketDelite = async (req, res) => {
    try{
        await Ticket.deleteOne({bilhete: req.params.ticket})
        return res.redirect("/rifaAdmin")
    }catch(err){
        res.status(500).send({error: err.message})
    }
}


const ticketSort = (req, res) => {
    return res.render("rifaAdmin",{cont, ticketBuy, notOpem:true, ticketStatus, logAdmin:true, sort:false, del:true, winer:true}) 
}


const alertDel = (req,res) => {
    return res.render("rifaAdmin", {cont, ticketBuy, ticketStatus,notOpem:true, logAdmin:true, sort:true, del:false, winer:true})
}


const rifaDelite = async (req, res) => {
    await Ticket.deleteMany({})
    return res.redirect("/rifaAdmin")
}

const sortWiner = async (req, res) => {

    const clients = await Ticket.find({buy: "vendido"})
    let Winer
    
    function between(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
    }

    x = between(1, clients.length)

    Winer = clients[x-1]

    
    
    return res.render("rifaAdmin", {cont, ticketBuy, ticketStatus, Winer, notOpem:true, sort:true, del:true, winer:false})
    
} 

module.exports = {
    displayRifa,
    formulario,
    insert,
    displayuserAdmin,
    login,
    displayrifaAdmin,
    confirmTicket,
    buyConfirm,
    ticketDelite,
    ticketSort,
    alertDel,
    rifaDelite,
    sortWiner
}