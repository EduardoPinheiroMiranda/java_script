import Fastify from 'fastify'
import { transactionsRoutes } from './router/transactions'

export const app = Fastify()

app.register(transactionsRoutes, {
	prefix: 'transactions'
})

