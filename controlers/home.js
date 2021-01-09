const Home = require('../models/Home')
const errorHandler = require('../utils/errorHandler')

module.exports.getHome = async function (req, res) {
    try {
        const data = await Home.findOne({})
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
module.exports.createSection = async function (req, res) {
    try {
        const data = await Home.findOne({_id: '5f8488b3e6ce5bdfd7c6c660'})
        data.sections.push(req.body)
        await data.save()
        res.status(200).json(data)
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
module.exports.deleteSection = async function (req, res) {
    //console.log(req.body)
    try {
        const data = await Home.findOne({_id: '5f8488b3e6ce5bdfd7c6c660'})
        data.sections.splice(req.body.index, 1)
        await data.save()
        res.status(200).json(data)
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
