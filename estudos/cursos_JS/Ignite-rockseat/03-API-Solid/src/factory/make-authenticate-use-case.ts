import { RegisterUser_repo } from "../repository/prisma/register"
import { AuthenticateUser } from "../services/authenticate/authenticate"

export function makeAuthenticateUseCase(){
	const prismaRepository = new RegisterUser_repo()
	const authenticateUser = new AuthenticateUser(prismaRepository)

        
	return authenticateUser
}