import fastify from "fastify"

import { registerRouter } from "./http/routers/register_router" 
import { errorsGlobal } from "./Errors/Global"

export const app = fastify()

app.register(registerRouter)
app.register(errorsGlobal)

