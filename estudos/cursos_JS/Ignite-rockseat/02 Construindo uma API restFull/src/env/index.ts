import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
	NODE_ENV: z.enum(['devolopment', 'test', 'production']).default('production'),
	DATABASE_URL: z.string(),
	PORT: z.number().default(3000)

})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
	console.log('error_mensagem', _env.error.format())
	throw new Error('erro_mensagen')
}

export const env = _env.data