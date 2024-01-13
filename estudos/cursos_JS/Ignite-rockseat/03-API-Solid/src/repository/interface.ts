import { Prisma, User } from "@prisma/client"

export interface UserRegisterRepository{
    
    create(data: Prisma.UserCreateInput): Promise<User>

    findByEmail(email: string): Promise< User | null>
}