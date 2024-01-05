import request from 'supertest'
import { app } from '../src/app'
import { afterAll, beforeAll, describe, expect, test} from 'vitest'

describe('Transactions router', () => {
	beforeAll( async() => {
		await app.ready()
	})
    
	afterAll( async () => {
		await app.close()
	})
    
	test('o usuário consegue cria uma transação', async () => {
		await request(app.server)
			.post('/transactions')
			.send({
				title: 'New transaction',
				amount: 5000,
				type: 'credit'
			})
			.expect(201)
	})

	test('listando transações', async () => {
		await request(app.server)
			.post('/transactions')
			.send({
				title: 'New transaction',
				amount: 5000,
				type: 'credit'
			})
        
		const listaDeTransacoes = await request(app.server)
			.get('/transactions')
			.expect(200)

		//console.log(listaDeTransacoes.body)


		expect(listaDeTransacoes.body.transactions).toEqual(
			expect.objectContaining({
				title: 'New transaction',
				amount: 5000,
			})
		)

		
	})
})

 