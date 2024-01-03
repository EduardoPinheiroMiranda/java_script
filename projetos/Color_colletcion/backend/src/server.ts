import fastify from "fastify"
import { env } from "./env"

const appServer = fastify()


appServer.listen({port: env.PORT}, () => {
	console.log("Servidor ativo: http://localhost:3000")
})