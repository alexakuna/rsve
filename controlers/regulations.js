const Regulations = require('../models/Regulations')
const errorHandler = require('../utils/errorHandler')

module.exports.getRegulations = async function (req, res) {
    try {
        const data = await Regulations.findOne({_id: '5fa03410b137151f4ea2865f'})
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
module.exports.updateRegulations = async function (req, res) {
    console.log(req.body)
    const keys = Object.keys(req.body)
    const item1 = keys[0]
    const item2 = keys[1]
    try {
        const data = await Regulations.findOneAndUpdate(
            {_id: "5fa03410b137151f4ea2865f", "regulations":{ $elemMatch:{ [item1]: req.body.url}}},
            {$set:{[`regulations.$.${item2}`] : req.body.show || req.body.title || req.body.img}}, {new: true})
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
