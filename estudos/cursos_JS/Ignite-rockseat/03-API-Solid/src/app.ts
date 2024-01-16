import fastify from "fastify"

import { AppRoutes } from "./http/routers/register_router" 
import { errorsGlobal } from "./Errors/Global"

export const app = fastify()

app.register(AppRoutes)

app.register(errorsGlobal)

