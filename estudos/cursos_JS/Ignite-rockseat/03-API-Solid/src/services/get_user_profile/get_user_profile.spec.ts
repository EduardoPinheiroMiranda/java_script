import {beforeEach, describe, expect, it} from "vitest"
import { TestInMemory } from "@/src/repository/teste_in_memory/test_in_memory"
import { hash } from "bcryptjs"
import { GetUserProfiler } from "./get_user_profile"
import { ResouceNotFound } from "@/src/Errors/ResouceNotFound"

describe("Autenticação de usuário", () => {

	let test_in_memory: TestInMemory
	let get_user_profile: GetUserProfiler

	beforeEach(() => {
		test_in_memory = new TestInMemory()
		get_user_profile = new GetUserProfiler(test_in_memory)
	})

	it("Buscar perfil de usuário", async () => {

		const newUser = await test_in_memory.create({
			name: "eduardo",
			email: "eduardo@teste.com",
			password_hash: await hash("123456", 6)
		})

        
		const {user} = await get_user_profile.execte({
			id: newUser.id
		})

		expect(user.name).toEqual(newUser.name)

	})

	it(" perfil de usuário não exist", async () => {

		await expect(get_user_profile.execte({
			id: "newUser.id"
		})
		).rejects.toBeInstanceOf(ResouceNotFound)

	})

	

})