import { DataBase } from "./Database.js"
import { randomUUID } from "node:crypto"
import { buildRouterPath } from "./utils/build-router-path.js"

const dataBase = new DataBase()

export const routes = [
    {
        method: "GET",
        path: buildRouterPath("/users"),
        handler: (req, res) => {
            const users = dataBase.select('users')

            return res.end(JSON.stringify(users))
        }
    },
    {
        method: "POST",
        path: buildRouterPath("/users"),
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
    },
    {
        method: "DELITE",
        path: buildRouterPath("/users/:id"),
        handler: (req, res) => {
            return res.end()
        }
    }
]