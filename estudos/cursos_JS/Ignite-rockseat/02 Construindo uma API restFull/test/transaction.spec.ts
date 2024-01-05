import request from 'supertest'
import { app } from '../src/app'
import { afterAll, beforeAll, describe, test} from 'vitest'

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

	test('listagem de transações realizadas', async () => {
        
		await request(app.server)
			.post('/transactions')
			.send({
				title: 'Transação de compra de carro',
				amount: 6000000,
				type: 'credit'
			})

		// const listaDeTransacoes = await request(app.server)
		// 	.get('/transactions')
		// 	.expect(200)

		//  expect(listaDeTransacoes.body.transactions).toEqual({
		// 	transaction: [
		// 		expect.objectContaining({
		// 			title: 'Transação de compra de carro',
		// 			amount: 6000000,
		// 		})
		// 	]
		// })
		//console.log(listagemDeTransacoes.body.transactions)
	})
    
})

 