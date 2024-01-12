import { UserAlreadyExistsErros } from "@/errors/users-Already-exists-error"
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository"
import { RegisterService } from "@/services/register_service"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"


export async function register( request: FastifyRequest, reply: FastifyReply){
	const registerBodySchema = z.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string().min(6)
	})

	const {name, email, password} = registerBodySchema.parse(request.body)
	
	try{
		const prismaRepository = new PrismaUsersRepository()
		const registerService = new RegisterService(prismaRepository)

		await registerService.registerUser({
			name,
			email,
			password
		})

	}catch(err){
		if(err instanceof UserAlreadyExistsErros){
			return reply.status(409).send({
				memsage: err
			})
		}
	}

	return reply.status(201).send()
}