import {FastifyInstance} from "fastify"
import { register } from "../controllers/register_user_controller"
import { Authenticate } from "../controllers/authenticate_user_controller"

export async function AppRoutes(app: FastifyInstance){

	app.post("/users", register)

	app.post("/sessãoDeAutenticação", Authenticate)
}