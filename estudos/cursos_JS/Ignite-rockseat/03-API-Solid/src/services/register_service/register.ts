import { EmailExistente } from "../../Errors/EmailExistenti"
import { UserRegisterRepository } from "../../repository/interface"
import Bcrypt from "bcryptjs"

interface users{
    name: string,
    email: string,
    password: string
}

export class RegisterUser{
	constructor(private userRepository: UserRegisterRepository){}

	async register({name, email, password}: users){

		
		const password_hash = await Bcrypt.hash(password, 6)
            
		const _user = await this.userRepository.findByEmail(email)

		if(_user){
			throw new EmailExistente()
		}
		
		const user = await this.userRepository.create({
			name,
			email,
			password_hash
		})
		
		return { 
			user,
		}
	}

}
