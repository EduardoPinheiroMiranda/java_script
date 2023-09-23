const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Siquelize = require('sequelize')
const cliente = require('./models/db_valores')

    //templete engine configuração
        app.engine('handlebars', handlebars.engine({defaultLayout:false}))
        app.set('view engine', 'handlebars')
    
    //configuração do body-parser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())
    
    /*conectando banco mariaDB
        const bancoRifa = new Siquelize('rifa', 'root', 'EdUArdO123', {
            host: 'localhost',
            dialect: 'mariadb'
        })*/
    
    //rota
        app.get('/test', function(req,res){
            res.render('formulario')
        })
    //rota post com capacidade de inserir valores no banco rifa
        app.post('/enviar', function(req,res){
            cliente.create({
                nome: req.body.nome,
                numero: req.body.numero
            }).then(function(){
                res.redirect('/exibir')
            }).catch(function(erro){
                res.send('Ops...erro: '+erro)
            })
        })

    //rota exibir dados do banco 
        app.get('/exibir',(req,res) => {
            cliente.findAll({order:[['nome', 'asc']]}).then((dados) => {
                res.render('exibirBanco', {clientes: dados.map(dados => dados.toJSON())})
                                            /*esse trecho tema a capacidade de mapiar todos os dados e transformaços em 
                                            um Json para facilitar para o handlebars enteder quando for exibir os valores*/
            })
        })

        //eliminar valores
        app.get('/apagar/: id', (req,res)=>{
            cliente.destroy({where: {'id': req.params.id}}).then( ()=>{
                res.send('dado apagado')
            }).catch( (erro) =>{
                res.send('erro ao apagar valor')
            })
        })




app.listen(5500)
