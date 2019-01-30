const Stack = require('../models/Stack')
const Card = require('../models/Card')

const stackController = {
    index: (req, res) => {
        // res.send("Hello Set Index")
        Stack.find({}).populate('stack').then((set) => {
            res.send(set)
        })
    },
    show: (req, res) => {
        Stack.findById(req.params.stackId).populate('stack').then((set) => {
            res.send(set)
        })
    },
    create: (req, res) => {
        Stack.create(req.body).then((set) => {
            res.send(set)
        })
    },
    delete: (req, res) => {
        Stack.findByIdAndDelete(req.params.stackId).then(() => {
            res.send(200)
        })
    },
    update: (req, res) => {
       Stack.findByIdAndUpdate(req.params.stackId, req.body, { new: true }).then((set) => {
            res.send(set)
        })
    }

}

module.exports = stackController