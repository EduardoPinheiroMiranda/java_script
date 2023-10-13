const userRouter = require("express").Router()
const multer = require('multer')
const uploadConfig = require("../configs/uploads")

const UserControllers = require("../controllers/UserControllers.js")
const userControllers = new UserControllers()

const ensureAuthenticated = require('../middlewares/ensureAuthenticated.js')
const upload = multer(uploadConfig.MULTER)

userRouter.post("/", userControllers.create)
userRouter.put("/:id", ensureAuthenticated, userControllers.update)
userRouter.patch("/avatar", ensureAuthenticated, upload,single('avatar') /*controler q vai tratar a foto */ )

module.exports = userRouter