const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const authRoutes = require('./routs/auth')
// const getHomeData = require('./routs/home')
const getRecord = require('./routs/record')
const getProfile = require('./routs/profile')
const getPlanning = require('./routs/planning')
const getHistory = require('./routs/history')
const getDetailHistory = require('./routs/detail-history')
const getCategories = require('./routs/categories')
const getTitlesForPages = require('./routs/name-pages')

const app = express()

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('Connected DB'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(require('morgan')('dev'))
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())


app.use('/api/auth', authRoutes)
app.use('/api/', getTitlesForPages)
app.use('/api/record', getRecord)
app.use('/api/profile', getProfile)
app.use('/api/planning', getPlanning)
app.use('/api/history', getHistory)
app.use('/api/history', getDetailHistory)
app.use('/api/categories', getCategories)

// app.use(express.static(__dirname + "/dist/"))
// app.get(/.*/, function (req, res) {
//     res.sendFile(__dirname + "/dist/index.html")
// })

module.exports = app
