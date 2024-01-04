import fastify from "fastify"

import { env } from "./env"
import { user } from "./routers/user.router"
import { paletasDeCores } from "./routers/paleta.router"


const appServer = fastify()

appServer.register( user,{ prefix: "user" } )
appServer.register(paletasDeCores, { prefix: "paletas"})



appServer.listen({port: env.PORT}, () => {
	console.log(`Servidor ativo: http://localhost:${env.PORT}`)
})