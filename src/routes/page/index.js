"use strict"

const express = require("express")
const router = express.Router()

const controller = require("./controllers")

router.get('/', controller.output.main)
router.get('/login', controller.output.login)
router.get('/register', controller.output.register)
router.get('/test',controller.output.test)

router.post('/login', controller.process.login)
router.post('/register', controller.process.register)

module.exports = router;