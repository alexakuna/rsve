const express = require('express')
const controller = require('../controlers/regulations')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getRegulations)
router.post('/regulation', controller.getRegulation)
router.patch('/regulation/number', controller.updateRegulation)
router.patch('/update-regulations', controller.updateRegulations)

module.exports = router;
