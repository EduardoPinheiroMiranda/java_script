import { ResouceNotFound } from "@/src/Errors/ResouceNotFound"
import { CheckInInerfaceRepository } from "@/src/repository/checkIn-interface"
import { GymInterfaceRepository } from "@/src/repository/gym-interface"
import { CheckIn} from "@prisma/client"

interface CheckInUseCaseRequest{
    foreignKey_userId: string,
    foreignKey_gymId: string,
	userLatitude: number,
	userLongitude: number
}
interface CheckInUserCaseResponse{
	checkIn: CheckIn
}

export class CheckInUser{

	constructor(
		private checkInRepository: CheckInInerfaceRepository,
		private gymRepository: GymInterfaceRepository
	){}

	async execte({
		foreignKey_userId,
		foreignKey_gymId
	}: CheckInUseCaseRequest): Promise<CheckInUserCaseResponse>{

		const gym = await this.gymRepository.findById(foreignKey_gymId)
		if(!gym){
			throw new ResouceNotFound()
		}

		//calcular distancia

		const checkIn = await this.checkInRepository.create({
			foreignKey_userId,
			foreignKey_gymId
		})

		return {
			checkIn
		}
	}
}