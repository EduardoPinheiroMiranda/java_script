import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { connectKnex } from '../database'
import crypto from 'node:crypto'



export async function transactionsRouter(app: FastifyInstance){
	app.post('/',async (request, reply) => {
    
		const createTransactionBodySchema = z.object({
			title: z.string(),
			amount: z.number(),
			type: z.enum(['credito', 'debito'])
		})

		const {title, amount, type} = createTransactionBodySchema.parse(request.body)

		await connectKnex('transactions').insert({
			id: crypto.randomUUID(),
			title,
			amount: type === 'credito' ? amount : amount * (-1)
		})
        
		return reply.status(201).send()
	})
}