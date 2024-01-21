import { Gym } from "@prisma/client"

export interface GymInterfaceRepository{

    findById(id: string): Promise< Gym | null>
}