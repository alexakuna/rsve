const Pages = require('../models/Pages')
const errorHandler = require('../utils/errorHandler')

module.exports.getTitlesForSidebar = async function (req, res) {
    try {
        const data = await Pages.findOne({})
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
    }
}
