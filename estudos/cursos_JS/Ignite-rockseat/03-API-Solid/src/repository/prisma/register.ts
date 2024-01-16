import { prisma } from "@/src/lib/prisma"
import { UserRegisterRepository } from "../interface"
import { Prisma} from "@prisma/client"


export class RegisterUser_repo implements UserRegisterRepository{

	async create(data: Prisma.UserCreateInput){

		const user = await prisma.user.create({
			data
		})

		return user
	}

	async findByEmail(email: string){
        
		const user = await prisma.user.findUnique({
			where:{
				email
			}
		})

		return user
	}

	async findById(id: string){
		const user = await prisma.user.findUnique({
			where:{
				id
			}
		})

		return user
	}
}