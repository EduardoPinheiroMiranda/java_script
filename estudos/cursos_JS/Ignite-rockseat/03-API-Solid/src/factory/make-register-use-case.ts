import { RegisterUser_repo } from "../repository/prisma/register"
import { RegisterUser } from "../services/register_service/register"

export function makeRegisterUseCase(){
	const prismaRepository = new RegisterUser_repo()
	const registerUser = new RegisterUser(prismaRepository)

	return registerUser
}