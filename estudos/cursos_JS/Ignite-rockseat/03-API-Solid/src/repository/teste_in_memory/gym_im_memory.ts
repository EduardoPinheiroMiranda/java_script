import { GymInterfaceRepository } from "../gym-interface"
import { Gym} from "@prisma/client"



export class GymRepository implements GymInterfaceRepository{

	public items: Gym[] = []


	async findById(id: string){
		const gym = this.items.find((item) => item.id === id)
		
		if(!gym){
			return null
		}

		return gym
	}

}

