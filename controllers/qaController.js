const Set = require('../models/Set')
const QA = require('../models/QA')


const qaController = {
    index: (req, res) => {
        const setId = req.params.setId
        Set.findById(setId).populate('stack').then(
            (returnedStack) => {
                const stack = returnedStack.stack
                res.send(stack)
                // { stack: stack, setId: setId }
            })
    },
    create: (req, res) => {

        const setId = req.params.setId
        Set.findById(setId).populate('stack')
            .then((returnedSet) => {
                QA.create(req.body)
                    .then((qa) => {
                        returnedSet.stack.push(qa)
                        returnedSet.save()
                        res.send(returnedSet)
                    })
            })
    },
    show: (req, res) => {
        const setId = req.params.setId
        const qaId = req.params.qaId
        QA.findById(qaId).then((qaOne) => {
            res.send(qaOne)
        })
    },
    update: (req, res) => {
        const setId = req.params.setId
        const qaId = req.params.qaId
        QA.findByIdAndUpdate(qaId, req.body, { new: true })
            .then((qaOne) => {
                res.send( qaOne)
            })
    },
    delete: (req, res) => {
        const setId = req.params.setId
        const qaId = req.params.qaId
        QA.findByIdAndDelete(qaId)
        .then(() => {
            res.send(200)
        })   
    }
}

module.exports = qaController