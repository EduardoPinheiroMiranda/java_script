import { Prisma, CheckIn} from "@prisma/client"

export interface CheckInInerfaceRepository{

    create(data: Prisma.CheckInUncheckedCreateInput): Promise <CheckIn>
}   