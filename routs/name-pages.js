const express = require('express')
const controller = require('../controlers/sidebar-titles')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getTitlesForSidebar)

module.exports = router;
