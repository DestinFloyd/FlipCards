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
    // show: (req, res) => {
    //     const boardID = req.params.boardId
    //     const userID = req.params.id
    //     Board.findById(boardID).populate('tasks').then((board) => {
    //         const tasks = board.tasks
    //         const name = board.name
    //         res.render('boards/show', { board: board, name: name, tasks: tasks, userID: userID })
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // },
    // edit: (req, res) => {

    //     const userID = req.params.id
    //     const boardID = req.params.boardId
    //     res.render('boards/edit', { userID, boardID })
    // },
    // update: (req, res) => {
    //     const userID = req.params.id
    //     const boardID = req.params.boardId
    //     Board.findByIdAndUpdate(boardID, req.body, { new: true })
    //         .then((board) => {
    //             res.redirect(`/${userID}/board/${boardID}`)
    //         })
    // },
    // delete: (req, res) => {
    //     const userID = req.params.id
    //     const boardId = req.params.boardId
    //     Board.findByIdAndDelete(boardId)
    //         .then(() => {
    //             res.redirect(`/${userID}/board`)
    //         })
    // }
}

module.exports = qaController