import { FastifyInstance} from "fastify"
import { env } from "@/src/env"
import { ZodError } from "zod"

export async function errorsGlobal(app: FastifyInstance){

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
}