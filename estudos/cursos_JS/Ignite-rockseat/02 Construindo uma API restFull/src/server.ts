import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/',async () => {
	const table = await knex('sqlite_scgema').select('*')
	
	return table
})

app.listen({port:3333}).then(()=>{
	console.log(' a porra ta funcionando, iiiiupiii')
})