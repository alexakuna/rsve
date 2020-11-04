const express = require('express')
const controller = require('../controlers/auth')
const router = express.Router()

router.get('/', controller.login)
//router.post('/register', controller.register)

module.exports = router;
