import { CheckInInerfaceRepository } from "@/src/repository/checkIn-interface"
import { CheckIn} from "@prisma/client"

interface CheckInUseCaseRequest{
    foreignKey_userId: string,
    foreignKey_gymId: string
}
interface CheckInUserCaseResponse{
	checkIn: CheckIn
}

export class CheckInUser{

	constructor(private checkInRepository: CheckInInerfaceRepository){}

	async execte({
		foreignKey_userId,
		foreignKey_gymId
	}: CheckInUseCaseRequest): Promise<CheckInUserCaseResponse>{

 
		const checkIn = await this.checkInRepository.create({
			foreignKey_userId,
			foreignKey_gymId
		})

		return {
			checkIn
		}
	}
}