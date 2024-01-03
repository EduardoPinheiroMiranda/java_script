import fastify from "fastify"

import { env } from "./env"
import { user } from "./routers/user.router"


const appServer = fastify()

appServer.register( user,{ prefix: "user" } )



appServer.listen({port: env.PORT}, () => {
	console.log(`Servidor ativo: http://localhost:${env.PORT}`)
})