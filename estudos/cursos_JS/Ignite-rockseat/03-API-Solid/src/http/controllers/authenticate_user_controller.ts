import { FastifyRequest, FastifyReply} from "fastify"
import { z } from "zod"

import { ErroCredenciaisInvalidas } from "@/src/Errors/AutenticacaoDeCredenciais"
import { makeAuthenticateUseCase } from "@/src/factory/make-authenticate-use-case"

export async function Authenticate(request: FastifyRequest, reply: FastifyReply){

	const padraoDeDadosValidos = z.object({
		email: z.string().email(),
		password: z.string().min(6)
	})

	const {email, password} = padraoDeDadosValidos.parse(request.body)

	try{
        
		const authenticateUser = makeAuthenticateUseCase()

		await authenticateUser.execte({
			email,
			password
		})
		
	}catch(err){
		
		if(err instanceof ErroCredenciaisInvalidas){
			return reply.status(400).send({
				message: "Credenciais invalidas"
			})
		}

		throw err
		
	}

	return reply.status(200).send()


}