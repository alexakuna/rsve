const express = require('express')
const controller = require('../controlers/home')
const passport = require('passport')
const router = express.Router()

router.post('/', passport.authenticate('jwt', {session: false}), controller.getHome)

module.exports = router;
