import { CheckInInerfaceRepository } from "../checkIn-interface"
import {CheckIn, Prisma} from "@prisma/client"
import dayjs from "dayjs"
import { randomUUID } from "node:crypto"

export class CheckInMemory implements CheckInInerfaceRepository{

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

	//eslint-disable-next-line
	async findByUseridonDate(userId: string, data: Date){
		const startOfTheDay = dayjs(data).startOf("date")
		const endOfTheDay = dayjs(data).endOf("date")
		
		const checkOnSameDate =  this.checkIn.find((checkIn) => {
			const checkInDate = dayjs(checkIn.created_at)

			const isOnSameDate = checkInDate.isAfter(startOfTheDay) && checkInDate.isBefore(endOfTheDay)
			
			return checkIn.foreignKey_userId === userId && isOnSameDate
		})

		if(!checkOnSameDate){
			return null
		}

		return checkOnSameDate
	}
}