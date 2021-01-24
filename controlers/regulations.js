const Regulations = require('../models/Regulations')
const Regulation = require('../models/Regulation')
const errorHandler = require('../utils/errorHandler')

function sortId(a, b) {
    if (a.itemId > b.itemId) {
        return 1;
    }
    if (a.itemId < b.itemId) {
        return -1;
    }
    return 0;
}

module.exports.getRegulations = async function (req, res) {
    try {
        //const data = await Regulations.findOne({lang: req.body.locale})

        const data = await Regulations.findOne({lang: req.body.locale})
        const reg = await Regulation.find({lang: req.body.locale}, '_id itemId')
        reg.sort(sortId)
        data.regulations.map((i, index) => {
            i.id = reg[index]._id
        })
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
module.exports.updateRegulations = async function (req, res) {
    const keys = Object.keys(req.body)
    const item1 = keys[0]
    const item2 = keys[1]
    try {
        const data = await Regulations.findOneAndUpdate(
            {
                lang: req.body.locale,
                "regulations": {
                    $elemMatch: {
                        [item1]: req.body.url
                    }
                }
            },
            {
                $set: {
                    [`regulations.$.${item2}`]: req.body.show || req.body.title || req.body.img
                }
            },
            {
                new: true
            }
        )
        res.status(200).json(data);
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
module.exports.getRegulation = async function (req, res) {
    try {
        const data = await Regulation.findById(req.body.id)
        res.status(200).json(data)

    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}
module.exports.updateRegulation = async function (req, res) {

    const name = req.body.name2 ? `${req.body.name}.${req.body.name2}` : req.body.name
    let can = ''
    if(req.body.name2) {
        can = `${req.body.name}.${req.body.name2}.$`
    } else {
        can = req.body.name
    }

        try {
        const data = await Regulation.findOneAndUpdate(
            {
                _id: req.body.id,
                [name]: req.body.value
            },
            {
                $set: {
                    [can]: req.body.candidate
                }
            },
            {
                new: true
            }
        )

        res.status(200).json(data)
    } catch (e) {
        errorHandler(res, e);
        res.status(500).json(e)
    }
}

