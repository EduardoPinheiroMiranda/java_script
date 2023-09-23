const userRouter = require("express").Router()

const UserControllers = require("../controllers/UserControllers.js")
const userControllers = new UserControllers()

userRouter.post("/", userControllers.create)
userRouter.put("/:id", userControllers.update)

module.exports = userRouter