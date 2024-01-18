import { CheckInInerfaceRepository } from "../checkIn-interface"
import {CheckIn, Prisma} from "@prisma/client"
import { randomUUID } from "node:crypto"

export class checkInMemory implements CheckInInerfaceRepository{

	public checkIn: CheckIn[] = []
    
	async create(data: Prisma.CheckInUncheckedCreateInput){

		const newCheckIn = {
			id: randomUUID(),
			created_at: new Date(),
			validated_at: data.validated_at ? new Date(data.validated_at) : null,
			foreignKey_userId: data.foreignKey_userId,
			foreignKey_gymId: data.foreignKey_gymId,
		}

		this.checkIn.push(newCheckIn)

		return newCheckIn
	}
}