import fastify from "fastify"

const app = fastify()

app.listen(3000).then(()=>{
	console.log("servidor em pé puts")
})