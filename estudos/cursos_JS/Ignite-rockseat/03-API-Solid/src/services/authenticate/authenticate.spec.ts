import {beforeEach, describe, expect, it} from "vitest"
import { TestInMemory } from "@/src/repository/teste_in_memory/test_in_memory"
//import { ErroCredenciaisInvalidas } from "@/src/Errors/AutenticacaoDeCredenciais"
import { AuthenticateUser } from "./authenticate"
import { hash } from "bcryptjs"
import { ErroCredenciaisInvalidas } from "@/src/Errors/AutenticacaoDeCredenciais"

describe("Autenticação de usuário", () => {

	let test_in_memory: TestInMemory
	let authenticateUser: AuthenticateUser

	beforeEach(() => {
		test_in_memory = new TestInMemory()
		authenticateUser = new AuthenticateUser(test_in_memory)
	})

	it("o email é valido", async () => {

		await expect(authenticateUser.execte({
			email:"eduardo@teste.com",
			password: "123456"
		})
		).rejects.toBeInstanceOf(ErroCredenciaisInvalidas)

	})

	it("A senha é valido", async () => {

		await test_in_memory.create({
			name: "eduardo",
			email: "eduardo@teste.com",
			password_hash: await hash("123456", 6)
		})

		expect(authenticateUser.execte({
			email:"eduardo@teste.com",
			password: "1234567"
		})
		).rejects.toBeInstanceOf(ErroCredenciaisInvalidas)

	})

})