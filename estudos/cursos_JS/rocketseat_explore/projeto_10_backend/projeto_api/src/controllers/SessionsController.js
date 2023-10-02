const { response } = require("express")
const { compare } = require("bcryptjs")
const { sing } = require("jsonwebtoken")
const authconfig = require("../configs/auth")

const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class SessionsController{
    async create(req, res){
        const {email, senha} = req.body

        const user = await knex("users").where({email}).first()

        if(!user){
            throw new AppError("Email ou senha invalidos", 401)
        }
        
        const password = await compare(senha, user.password)

        if(!password){
            throw new AppError("Email ou senha invalidos", 401)
        }

        const {secret, expireIn} = authconfig.jwt

        const token = sing({}, secret, {
            subject: String(user.id),
            expireIn
        })

        return res.json({user})
    }
} 
module.exports = SessionsController