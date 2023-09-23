const notesRouter = require("express").Router()

const NotesControllers = require("../controllers/NotesControllers")
const notesControllers = new NotesControllers()

notesRouter.get("/", notesControllers.showNotesUser)
notesRouter.post("/:user_id", notesControllers.create)
notesRouter.get("/:id", notesControllers.show)
notesRouter.delete("/:id", notesControllers.delete)

module.exports = notesRouter