import { describe, expect, it } from "vitest"
import { CheckInUser} from "./check_in"
import { checkInMemory } from "@/src/repository/teste_in_memory/checkIn_in_memory"

describe("validações de check-in", () => {

	it("se é possivel criar um checkIn", async () => {
		const repository_checkIn = new checkInMemory()
		const service_checkIn = new CheckInUser(repository_checkIn)

		const { checkIn } = await service_checkIn.execte({
			foreignKey_gymId: "123456789",
			foreignKey_userId: "1234567890",
		})

		expect(checkIn.id).toEqual(expect.any(String))
	})
})