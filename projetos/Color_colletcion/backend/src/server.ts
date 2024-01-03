import fastify from "fastify"

const appServer = fastify()


appServer.listen({port:3000}, () => {
	console.log("Servidor ativo: http://localhost:3000")
})