const { Schema, model } = require('mongoose')

const schema = new Schema({
    pages: [{title: String, url: String, show: Boolean}]
},{collection : 'pages'})

module.exports = model('Page', schema)
