import { FastifyRequest, FastifyReply} from "fastify"

import { z } from "zod"
import { EmailExistente } from "@/src/Errors/EmailExistenti"
import { makeRegisterUseCase } from "@/src/factory/make-register-use-case"

export async function register(request: FastifyRequest, reply: FastifyReply){

	const padraoDeDadosValidos = z.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string().min(6)
	})

	const {name, email, password} = padraoDeDadosValidos.parse(request.body)

	try{
		const registerUser = makeRegisterUseCase()

		await registerUser.register({
			name,
			email,
			password
		})
		
	}catch(err){
		
		if(err instanceof EmailExistente){
			return reply.status(409).send({
				message: "Este email já esta em uso"
			})
		}
		
	}

	return reply.status(201).send()


}