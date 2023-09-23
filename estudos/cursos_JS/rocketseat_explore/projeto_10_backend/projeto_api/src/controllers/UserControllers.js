const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")
const {hash, compare} = require("bcryptjs")

class UserControllers {

    async create(req,res){
        const {name, email, passoword} = req.body
        const hashPassword = await hash(passoword, 8)

        const dataBase = await sqliteConnection()
        const checkUserExists = await dataBase.get("select * from users where email = (?)", [email])

        if(checkUserExists){
            throw new AppError("Este email já esta em uso")
        }

        await dataBase.run(`insert into users (name, email, passwordUser)
            values(?,?,?)`, [name, email, hashPassword])


        return res.status(201).json()
    }

    async update(req, res){
        const {name, email, password, oldCode} = req.body
        const {id} = req.params

        const database = await sqliteConnection()
        const user = await database.get("select * from users where id = (?)", [id])

            if(!user){
                throw new AppError("Este usuario não existe.")
            }


        const emailUpdateUser = await database.get("select * from users where email = (?)", [email])
            
            if(emailUpdateUser && emailUpdateUser.id !== user.id){
                throw new AppError("Este email ja esta sendo usado")
            }

        user.name = name ?? user.name
        user.email = email ?? user.email

            if(password && !oldCode){
                throw new AppError("senha antiga deve ser informada.")
            }

            if(password && oldCode){
                const newPassword = await compare(oldCode, user.passwordUser)

                if(!newPassword){
                    throw new AppError("A senhas atual digitada é invalida.")
                }

                user.passwordUser = await hash(password, 8)
            }
        

        await database.run(`
            update users set
            name = (?),
            email = (?),
            passwordUser = (?),
            update_at = datetime('now')
            where id = (?)` , 
            [user.name, user.email, user.passwordUser, id]
        )

        return res.status(200).json()


    }


}

module.exports = UserControllers