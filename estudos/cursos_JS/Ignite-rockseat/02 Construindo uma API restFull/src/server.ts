import Fastify from 'fastify'
import { env } from './env'

import {knexConnection as knex} from './database/database'


const app = Fastify()

app.get('/helo', async () => {
	const test = await knex('sqlite_schema').select('*')
	return test
})



app.listen({port: env.PORT}).then(() => {
	console.log('Servidor ativado, http://localhost:3000')
}) 