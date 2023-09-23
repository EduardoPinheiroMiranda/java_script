const notesRouter = require("express").Router()

const TagsControlles = require("../controllers/TagsControllers")
const tagsControllers = new TagsControlles()

notesRouter.get("/:user_id", tagsControllers.showTags)

module.exports = notesRouter