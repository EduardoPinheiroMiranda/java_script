import Fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './router/transactions'

const app = Fastify()

app.register(transactionsRoutes, {
	prefix: 'transactions'
})



app.listen({
	port: env.PORT
}).then(() => {
	console.log('Servidor ativado, http://localhost:3000')
}) 