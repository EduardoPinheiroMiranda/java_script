import fastify from 'fastify'
import { env } from './env'
import { transactionsRouter } from './routers/transactions'

const app = fastify()

app.register(transactionsRouter, {
	prefix: 'transactions'
})


app.listen({port: env.PORT}).then(()=>{
	console.log(' a porra ta funcionando, iiiiupiii')
})
