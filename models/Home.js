
const { Schema, model } = require('mongoose')

const schema = new Schema({
    lang: String,
    title: String,
    description: String,
    subtitle: String,
    banner: String,
    news: Array,
    sections: [
        {
            title: String,
            images: Array,
            description: Array,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    footer: [{title: String, url: String, show: Boolean}],
    footer2: {title: String, social: Array}
}, {collection: 'homes'})

module.exports = model('Home', schema)
