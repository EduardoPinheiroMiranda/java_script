import { DataBase } from "./Database.js"
import { randomUUID } from "node:crypto"

const dataBase = new DataBase()

export const routes = [
    {
        method: "GET",
        path: "/users",
        handler: (req, res) => {
            const users = dataBase.select('users')

            return res.end(JSON.stringify(users))
        }
    },
    {
        method: "POST",
        path: "/users",
        handler: (req,res) => {
            const { name, email} = req.body

            const user = {
                id: randomUUID(),
                name: name,
                email: email,
            }
            
            dataBase.insert("users", user)

            return res.writeHead(201).end()
        }
    }
]