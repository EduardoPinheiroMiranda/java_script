import fastify from 'fastify'
// import crypto from 'node:crypto'
import { connectKnex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello',async () => {
	const table = await connectKnex('transactions').select('*')
	
	return table

	// const transactions = await connectKnex('transactions').insert({
	// 	id: crypto.randomUUID(),
	// 	title: 'Transação de teste',
	// 	amount: 1000,
	// }).returning('*')
	
	// return transactions
})

app.listen({port: env.PORT}).then(()=>{
	console.log(' a porra ta funcionando, iiiiupiii')
})
