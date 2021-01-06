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
