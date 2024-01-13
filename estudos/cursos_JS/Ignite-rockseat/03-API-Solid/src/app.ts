import fastify from "fastify"
import { env } from "./env"
import { ZodError } from "zod"

import { registerRouter } from "./http/routers/register_router" 

export const app = fastify()

app.register(registerRouter)

app.setErrorHandler((err, request, reply) => {
    
	if(err instanceof ZodError){
		return reply.status(400).send({
			message: "validation error", 
			erro: err.format()
		})
	}

	if(env.NODE_ENV !== "production"){
		console.error(err)
	}

	return reply.status(500).send({
		message: "Erro interno no servidor"
	})
})
