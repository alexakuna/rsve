const { Schema, model } = require('mongoose')

const schema = new Schema({
    _id: Schema.Types.ObjectID,
    title: String,
    itemId: String,
    description: {description: String, date: String},
    category: String,
    organizers: String,
    age: String,
    ageCategory: {title: String, name: String, description: Array},
    test: {description: [String]},
    nominations: {title: String, name: String, description: Array},
    criteria: {title: String, name: String, description: Array},
    terms: {title: String, name: String, description: Array},
    awards: {title: String, desc1: String, desc2: String, places: Array, diplomas: Array},
    finance: {title: String, desc1: String, desc2: String, fields: Array},
    note: {title: String, description: String},
    privileges: {title: String, desc1: String, desc2: String, fields: Array},
    request: {title: String, fields: Array},
    contacts: {title: String, fields: Array},
    button: String,
    lang: String
}, {collection : 'reg'})

module.exports = model('regulation', schema)
