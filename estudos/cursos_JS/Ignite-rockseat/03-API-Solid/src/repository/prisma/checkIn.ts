import { prisma } from "@/src/lib/prisma"
import { CheckInInerfaceRepository } from "../checkIn-interface"
import { Prisma} from "@prisma/client"


export class CheckInRepository implements CheckInInerfaceRepository{
    
	async create(data: Prisma.CheckInUncheckedCreateInput){
        
		const checkIn = await prisma.checkIn.create({
			data
		})

		return checkIn
	}
}