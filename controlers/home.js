const Home = require('../models/Home')
const errorHandler = require('../utils/errorHandler')

module.exports.getHome = async function (req, res) {
    try {
        const data = await Home.find({lang: req.body.locale})
        if(Array.isArray(data)) {
            res.status(200).json(data[0])
        } else {
            res.status(200).json(data)
        }
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
module.exports.createSection = async function (req, res) {
    try {
        const data = await Home.findOne({lang: req.body.locale})
        data.sections.push(req.body)
        await data.save()
        res.status(200).json(data)
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
module.exports.deleteSection = async function (req, res) {
    try {
        const data = await Home.findOne({lang: req.body.locale})
        data.sections.splice(req.body.index, 1)
        await data.save()
        res.status(200).json(data)
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
