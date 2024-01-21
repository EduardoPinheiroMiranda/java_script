import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { CheckInUser} from "./check_in"
import { CheckInMemory } from "@/src/repository/teste_in_memory/checkIn_in_memory"
import { GymRepository } from "@/src/repository/teste_in_memory/gym_im_memory"
import { Prisma} from "@prisma/client"

describe("validações de check-in", () => {

	let repository_checkIn: CheckInMemory
	let repository_gym: GymRepository
	let service_checkIn: CheckInUser

	beforeEach(() =>{

		repository_checkIn = new CheckInMemory()
		repository_gym = new GymRepository() 
		service_checkIn = new CheckInUser(repository_checkIn, repository_gym)

		repository_gym.items.push({
			id: "123456789",
			title: "js",
			description: "",
			phone: "",
			latitude: new Prisma.Decimal(0),
			longitude: new Prisma.Decimal(0)
		})

		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	it("se é possivel criar um checkIn", async () => {
		vi.setSystemTime(new Date(2022, 3, 12, 10, 0 , 0))

		const { checkIn } = await service_checkIn.execte({
			foreignKey_gymId: "123456789",
			foreignKey_userId: "1234567890",
			userLatitude: 0,
			userLongitude: 0 
		})

		expect(checkIn.id).toEqual(expect.any(String))
	})

	it("se é possivel criar dois checkIn em momentos diferentes", async () => {
		vi.setSystemTime(new Date(2022, 3, 12, 10, 0 , 0))

		await service_checkIn.execte({
			foreignKey_gymId: "123456789",
			foreignKey_userId: "1234567890",
			userLatitude: 0,
			userLongitude: 0 
		})

		vi.setSystemTime(new Date(2022, 3, 13, 10, 0 , 0))


		const {checkIn} = await service_checkIn.execte({
			foreignKey_gymId: "123456789",
			foreignKey_userId: "1234567890",
			userLatitude: 0,
			userLongitude: 0 
		})

		expect(checkIn.id).toEqual(expect.any(String))
	})
})