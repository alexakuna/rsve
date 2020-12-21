const { Schema, model } = require('mongoose')

const schema = new Schema({
    regulations: [{img: String, title: String, url: String, show: Boolean}]
}, {collection: 'regulations'})

module.exports = model('Regulations', schema)
