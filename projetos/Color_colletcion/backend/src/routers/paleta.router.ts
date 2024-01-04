import { randomUUID } from "crypto"
import { FastifyInstance } from "fastify"
import { conexaoDoBanco as knex } from "../dataBase/ConexaoDoBanco"
import { z } from "zod"

export async function paletasDeCores(app: FastifyInstance){

	app.post("/criarPaleta", async (request, replay) => {
        
		const interfaceValidaDePaleta = z.object({
			idUser: z.string(),
			name: z.string(),
			category: z.string(),
			favorite: z.string(),
			colors: z.string(),
		})

		const {
			idUser,
			name,
			category,
			favorite,
			colors
		} = interfaceValidaDePaleta.parse(request.body)

		if(favorite !== "true" && favorite !== "false"){
			throw new Error("valores declarados errados")
		}

		await knex("pallets").insert({
			idPallet: randomUUID(),
			name: name,
			category: category,
			favorite: favorite,
			foreignKey_IdUser: idUser,
			colors: colors
		})

		return replay.status(201).send()

	})

	app.get("/:id", async (request) => {
        
		const interfaceValidaDeId = z.object({
			id: z.string()
		})

		const { id } = interfaceValidaDeId.parse(request.params)
		let paletas 

		if(id === "*"){
			paletas = await knex("pallets").select()
		}

		paletas = await knex("pallets").select().where("category", id)

		if(paletas.length == 0){
			throw new Error("paleta não encontraa")
		}

		return {paletas}
	})

}