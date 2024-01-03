import { FastifyInstance } from 'fastify'
import { knexConnection as knex } from '../database/database' 
import { z } from 'zod'
import crypto from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance){
	app.get('/', async () => {
		const transactions = await knex('transactions').select('*')
		
		return {
			transactions
		}
	})

	app.get('/:id', async (request) => {
		const getTransactionParamsSchema = z.object({
			id: z.string().uuid()
		})

		const { id } = getTransactionParamsSchema.parse(request.params)
		//serve como validador, se os ids são iguais.

		const transaction = await knex('transactions').where('id', id).first()

		return {
			transaction,
		}
	})

	app.get('/summary', async () => {
		const summaryTransacttions = await knex('transactions')
			.sum('amount', {as: 'soma de valores'})
			.first()
	
		return {
			summaryTransacttions
		}
	})

	app.post('/', async (request, replay) => {
		
		const createTransactionsBodySchema = z.object({
			title: z.string(),
			amount: z.number(),
			type: z.enum(['credit', 'debit'])
		})

		const {title, amount, type} = createTransactionsBodySchema.parse(request.body)
	
		await knex('transactions').insert({ 
			id: crypto.randomUUID(),
			title,
			amount: type === 'credit' ? amount : amount * (-1)
		})
	
		return replay.status(201).send()
	})
}