import { EmailExistente } from "../Errors/EmailExistenti"
import { UserRegisterRepository } from "../repository/interface"
import { hash } from "bcryptjs"

interface users{
    name: string,
    email: string,
    password: string
}

export class RegisterUser{
	constructor(private userRepository: UserRegisterRepository){}

	async register({name, email, password}: users){

		
		const password_hash = await hash(password, 6)
            
		const user = await this.userRepository.findByEmail(email)

		if(user){
			throw new EmailExistente()
		}
		
		await this.userRepository.create({
			name,
			email,
			password_hash
		})
		
	}

}
