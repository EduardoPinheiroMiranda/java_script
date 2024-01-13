import {FastifyInstance} from "fastify"
import { register } from "../controllers/register_user_controller"

export async function registerRouter(app: FastifyInstance){

	app.post("/users", register)
}