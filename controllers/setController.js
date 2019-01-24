// const Set = require('../models/Set')

const setController = {
    index: (req, res)=>{
        res.send("Hello Set Index")
// Set.find({}).then((set)=>{
//     res.send(set)
// })
    }

}

module.exports = setController