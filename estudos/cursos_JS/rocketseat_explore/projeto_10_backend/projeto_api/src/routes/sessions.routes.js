const { Router } = require('express')

const SessionsController = require('../controllers/SessionsController')
const sessionsController = new SessionsController()
const router = Router()

router.post("/", sessionsController.create)

module.exports = router