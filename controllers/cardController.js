const Stack = require('../models/Stack')
const Card = require('../models/Card')


const cardController = {
    index: (req, res) => {
        const stackId = req.params.stackId
        Stack.findById(stackId).populate('stack').then(
            (returnedStack) => {
                const stack = returnedStack.stack
                res.send(stack)
                
            })
    },
    create: (req, res) => {

        const stackId = req.params.stackId
        Stack.findById(stackId).populate('stack')
            .then((returnedSet) => {
                Card.create(req.body)
                    .then((card) => {
                        returnedSet.stack.push(card)
                        returnedSet.save()
                        res.send(returnedSet)
                    })
            })
    },
    show: (req, res) => {
        const stackId = req.params.stackId
        const cardId = req.params.cardId
        Card.findById(cardId).then((cardOne) => {
            res.send(cardOne)
        })
    },
    update: (req, res) => {
        const stackId = req.params.stackId
        const cardId = req.params.cardId
        Card.findByIdAndUpdate(cardId, req.body, { new: true })
            .then((cardOne) => {
                res.send( cardOne)
            })
    },
    delete: (req, res) => {
        const stackId = req.params.stackId
        const cardId = req.params.cardId
        Card.findByIdAndDelete(cardId)
        .then(() => {
            res.send(200)
        })   
    }
}

module.exports = cardController