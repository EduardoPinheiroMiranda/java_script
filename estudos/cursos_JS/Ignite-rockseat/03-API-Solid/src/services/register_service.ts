import { hash } from "bcryptjs"
import { UsersRepository } from "@/repositories/interface_user_repository"
import { UserAlreadyExistsErros } from "@/errors/users-Already-exists-error"

interface register {
    name: string,
    email: string,
    password: string
}



export class RegisterService{

	constructor(private userRepository:UsersRepository){}

	async registerUser({ name, email, password }: register){
        
		const password_hash = await hash(password, 6)

		const userWithSameEmail = await this.userRepository.findByEmail(email)

		if(userWithSameEmail){
			throw new UserAlreadyExistsErros()
		}

	
		//const prismaUsersRepository = new PrismaUsersRepository()

		await this.userRepository.create({
			name,
			email,
			password_hash
		})
	}

}

	
