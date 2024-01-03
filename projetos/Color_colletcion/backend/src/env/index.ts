import { z } from "zod"
import "dotenv/config"

const envSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
	BASE_URL: z.string(),
	PORT:  z.number().default(5000)
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
	console.log("erro_mensagem", _env.error.format())
	throw new Error("Mensagem de erro")
}

export const env = _env.data