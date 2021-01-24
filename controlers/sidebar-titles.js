const Pages = require('../models/Pages')
const errorHandler = require('../utils/errorHandler')

module.exports.getTitlesForSidebar = async function (req, res, next) {
    console.log(req.body)
    try {
        const data = await Pages.findOne({lang: 'ru'})
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
    next()
}
module.exports.updatePageTitle = async function (req, res) {
    const keys = Object.keys(req.body)
    const item1 = keys[0]
    const item2 = keys[1]
    try {
        const data = await Pages.findOneAndUpdate(
            {lang: req.body.locale, "pages":{ $elemMatch:{ [item1]: req.body.url}}},
            {$set:{[`pages.$.${item2}`] : req.body.show || req.body.title}}, {new: true})
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
