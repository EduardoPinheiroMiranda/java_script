const express = require("express")
const cors = require("cors")

const routes = require("./routes")
const AppError = require("./utils/AppError")
const migrationRun = require("./database/sqlite/migrations")

const app = express()

const PORT = 5500

migrationRun()

app.use(express.json())
app.use(routes)
app.use(cors())
app.use((error, req, res, next) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)

    return res.status(500).json({
        status: "error", 
        message: "erro no servidor"
    })
})


app.listen(PORT, () => {
    console.log(`Serve is running on port ${PORT}`)
}) 