import Fastify from 'fastify'

const app = Fastify()

app.get('/', async (req, res) => {
	res.send('hello World')
})

app.listen({port:3000}).then(() => {
	console.log('oi codigo')
}) 