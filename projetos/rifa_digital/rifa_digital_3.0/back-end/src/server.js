const express = require("express")

const port = 5500
const app = new express()

app.listen(port, () => {
    console.log(`
        servidor rodando na porta ${port}
        http://localhost:${port}
    `)
})