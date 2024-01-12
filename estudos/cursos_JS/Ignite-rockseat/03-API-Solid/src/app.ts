import fastif from "fastify"
import { ZodError } from "zod"
import { env } from "./env"

export const app = fastif()



app.setErrorHandler((err, request, reply) => {

	if(err instanceof ZodError){
		return reply
			.status(400)
			.send({message: "validation error.", issues: err.format()})
	}

	if(env.NODE_ENV !== "production"){
		console.error(err)
	}

	return reply.status(500).send({message: "internal server error"}) 
})

