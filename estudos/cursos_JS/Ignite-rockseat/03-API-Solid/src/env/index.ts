import "dotenv/config"
import { z } from "zod"

const schema_env = z.object({
	NODE_ENV: z.enum(["test", "dev", "production" ]).default("dev"),
	PORT: z.coerce.number().default(3333)
})

const _env = schema_env.safeParse(process.env)

if(_env.success === false){
	console.error("Erro nas variaveis de ambiente", _env.error.format())

	throw new Error("Erro: valores invalidos")
}

export const env = _env.data