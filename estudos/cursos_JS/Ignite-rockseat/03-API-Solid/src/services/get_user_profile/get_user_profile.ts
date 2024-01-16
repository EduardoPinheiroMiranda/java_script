import { ResouceNotFound } from "@/src/Errors/ResouceNotFound"
import { UserRegisterRepository } from "@/src/repository/interface"
import { User } from "@prisma/client"

interface GetUserProfileCaseRequest{
    id: string
}
interface GetUserProfileCaseResponse{
    user: User
}

export class GetUserProfiler{

	constructor(private UserRepository: UserRegisterRepository){}

	async execte({
		id
	}: GetUserProfileCaseRequest): Promise<GetUserProfileCaseResponse>{

		const user = await this.UserRepository.findById(id)

		if(!user){
			throw new ResouceNotFound()
		}

		return {
			user,
		}
	}
}