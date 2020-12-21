const express = require('express')
const controller = require('../controlers/regulations')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getRegulations)
router.patch('/update-regulations', controller.updateRegulations)

module.exports = router;
