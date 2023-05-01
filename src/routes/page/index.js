"use strict"

const express = require("express")
const router = express.Router()

const controller = require("./controllers")

router.get('/', controller.output.main)
  
router.get('/login', controller.output.login)
router.post('/login', controller.process.login)

module.exports = router;