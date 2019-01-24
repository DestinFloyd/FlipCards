const Set = require('../models/Set')
const QA = require('../models/QA')

const setController = {
    index: (req, res) => {
        // res.send("Hello Set Index")
        Set.find({}).populate('stack').then((set) => {
            res.send(set)
        })
    },
    show: (req, res) => {
        Set.findById(req.params.setId).populate('stack').then((set) => {
            res.send(set)
        })
    },
    create: (req, res) => {
        Set.create(req.body).then((set) => {
            res.send(set)
        })
    },
    delete: (req, res) => {
        Set.findByIdAndDelete(req.params.setId).then(() => {
            res.send(200)
        })
    },
    update: (req, res) => {
       Set.findByIdAndUpdate(req.params.setId, req.body, { new: true }).then((set) => {
            res.send(set)
        })
    }

}

module.exports = setController