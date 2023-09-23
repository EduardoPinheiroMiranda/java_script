const express = require("express")
const dbrifa = require("./database/db_rifa")
const path = require("path")
const routs = require("./routes/routes")

const port = 5500
const app = express()

dbrifa()

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())
app.use(routs)

app.listen(port, () => {
    console.log(`servidor conectado com sucesso, http://localhost:${port}/`)
})

























/*const express = require('express')
const path = require("path")
const dbrifa = require('./database/db_rifa')
const routs = require("./routes/routes")

const app = new express()
const port = 5500

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())
app.use(dbrifa)
//app.use(routs)

app.get("/", (req,res) => {
    res.send('oi')
})
*/