const express = require('express')
const controller = require('../controlers/sidebar-titles')
const controllerHome = require('../controlers/home')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getTitlesForSidebar)
router.get('/home', controllerHome.getHome)
router.patch('/update-titles', controller.updatePageTitle)

module.exports = router;
