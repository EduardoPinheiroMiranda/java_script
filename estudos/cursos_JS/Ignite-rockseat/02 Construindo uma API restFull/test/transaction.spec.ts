import request from 'supertest'
import { app } from '../src/app'
import { afterAll, beforeAll, beforeEach, expect, describe ,test} from 'vitest'
import { execSync } from 'child_process'

describe('Transactions router', () => {
	beforeAll( async() => {
		await app.ready()
	})
    
	afterAll( async () => {
		await app.close()
	})
	
	beforeEach(async () => {
		execSync('npm run knex -- migrate:rollback --all')
		execSync('npm run knex -- migrate:latest')
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

		const listaDeTrasancoes = await request(app.server)
			.get('/transactions')
			.expect(200)

		expect(listaDeTrasancoes.body.transactions).toEqual([
			expect.objectContaining({
				title: 'Transação de compra de carro',
				amount: 6000000,
			})
		])
	})
    
})

 