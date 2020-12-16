const Pages = require('../models/Pages')
const errorHandler = require('../utils/errorHandler')

module.exports.getTitlesForSidebar = async function (req, res) {
    try {
        const data = await Pages.findOne({_id: '5fd76620e07cba4a7b34b19a'})
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.updatePageTitle = async function (req, res) {

    console.log(req.body)
    const keys = Object.keys(req.body)
    const item1 = keys[0]
    const item2 = keys[1]
    console.log(item1, item2)

    try {
        const data = await Pages.findOneAndUpdate(
            {_id: "5fd76620e07cba4a7b34b19a", "pages":{ $elemMatch:{ [item1]: req.body.url}}},
            {$set:{[`pages.$.${item2}`] : req.body.show}}, {new: true})
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
    }
}
