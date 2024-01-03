import { randomUUID} from "node:crypto"

import { FastifyInstance } from "fastify"
import { z } from "zod"
import { conexaoDoBanco as knex} from "../dataBase/ConexaoDoBanco"

export async function user( app: FastifyInstance){
	app.get("/", (request, replay) => {
		return replay.status(201).send
	})

	app.post("/cadastrar", async (request, replay) => {
		
		const interfaceValidaDeUsuario = z.object({
			name: z.string(),
			email: z.string(),
			password: z.string(),
			confirmPassword: z.string()
		})

		const {name, email, password, confirmPassword} = interfaceValidaDeUsuario.parse(request.body)

		if( password !== confirmPassword){
			throw new Error("senhas deiferentes")
		}

		await knex("users").insert({
			idUser: randomUUID(),
			name: name,
			email: email,
			password: password,
		})

		return replay.status(201).send()

	})
}