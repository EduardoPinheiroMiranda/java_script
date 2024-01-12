import { z } from "zod"
import "dotenv/config"


const padraoDeVariaveis = z.object({
	NODE_ENV: z.enum(["dev", "production", "test"]).default("dev"),
	PORT: z.coerce.number().default(5500),
	DATABASE_URL: z.string()
})

const _env = padraoDeVariaveis.safeParse(process.env)


if(_env.success === false){

	console.log("erro: variaveis invalidas", _env.error.format())

	throw new Error("Erro: variaveis de ambiente invalidas")
}

export const env = _env.data