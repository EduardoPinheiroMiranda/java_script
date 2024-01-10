import fastif from "fastify"
import { PrismaClient } from "@prisma/client"

export const app = fastif()

const prisma = new PrismaClient()

prisma.user.create({
	data: {
		name: "eduardo",
		email: "eduardo@teste.com.br"
	}
})