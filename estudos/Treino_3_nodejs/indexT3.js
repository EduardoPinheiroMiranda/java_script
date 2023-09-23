//Requires
const express = require("express");
const path = require("path");
const routes = require("./routes/rotas")
const db = require("./database/db")
//constates
const app = express();
const port = 5500;

//aplicações do express
db()
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())
app.use(routes)
//rotas



//porta do servidor
app.listen(port,()=>{
    console.log(`Servidor ligado: http://localhost:${port}`);
})