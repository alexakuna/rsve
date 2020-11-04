const { Schema, model } = require('mongoose')

const schema = new Schema({
    title: String,
    description: String,
    banner: String,
    news: Array,
    navLinks: [{name: String, link: String}]
},{collection : 'homes'})

module.exports = model('Home', schema)
