import { ErroCredenciaisInvalidas } from "@/src/Errors/AutenticacaoDeCredenciais"
import { UserRegisterRepository } from "@/src/repository/interface"
import Bcrypt from "bcryptjs"
import { User } from "@prisma/client"

interface AuthenticateUseCaseRequest{
    email: string,
    password: string
}
interface AuthenticateUsserCaseResponse{
	user: User
}

export class AuthenticateUser{

	constructor(private UserRepository: UserRegisterRepository){}

	async execte({
		email,
		password
	}: AuthenticateUseCaseRequest): Promise<AuthenticateUsserCaseResponse>{

		const user = await this.UserRepository.findByEmail(email)

		if(!user){
			throw new ErroCredenciaisInvalidas()
		}
 
		const AsSenhasSaoIguais = await Bcrypt.compare(password, user.password_hash)

		if(!AsSenhasSaoIguais){
			throw new ErroCredenciaisInvalidas()
		}

		return {
			user,
		}
	}
}