import { app } from './app'
import { env } from './env'

app.listen({
	port: env.PORT
}).then(() => {
	console.log('Servidor ativado, http://localhost:3000')
}) 