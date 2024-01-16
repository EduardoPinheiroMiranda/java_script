import { expect, describe, it, beforeEach } from "vitest"
import { RegisterUser } from "./register"
import { TestInMemory } from "@/src/repository/teste_in_memory/test_in_memory" 
import { compare } from "bcryptjs"
import { EmailExistente } from "@/src/Errors/EmailExistenti"


let testInMemory: TestInMemory
let registerUser: RegisterUser
	
describe("register", () => {

	beforeEach(() => {
		testInMemory = new TestInMemory()
		registerUser = new RegisterUser(testInMemory)
	})

	it("o valor da senha deve ser um hash", async () => {
    

		const { user } = await registerUser.register({
			name: "eduardo",
			email: "testeunitario@gmail.com",
			password: "123456"
		})

		const isPassworHash = await compare( "123456", user.password_hash)

		expect(isPassworHash).toBe(true)

	})

	it("O email já existe", async () => {

		await registerUser.register({
			name: "eduardo",
			email: "testeunitario@gmail.com",
			password: "123456"
		})

		await expect(
			() => registerUser.register({
				name: "eduardo",
				email: "testeunitario@gmail.com",
				password: "123456"
			})
		).rejects.toBeInstanceOf(EmailExistente)
	})

	it("O cadastro do usuário está valido", async () => {

		const {user} = await registerUser.register({
			name: "eduardo",
			email: "testeunitario@gmail.com",
			password: "123456"
		})

		expect(user.id).toEqual(expect.any(String))
	})

})