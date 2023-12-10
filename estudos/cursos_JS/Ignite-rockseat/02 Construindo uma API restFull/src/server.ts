import Fastify from 'fastify'
import {knexConnection as knex} from './database/database'


const app = Fastify()

app.get('/', async () => {
	const test = await knex('sqlite_schema').select('*')
	return test
})



app.listen({port:3000}).then(() => {
	console.log('Servidor ativado, http://localhost:3000')
}) 