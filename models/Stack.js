const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Stack = new Schema({
    name: String,
    stack: [{
        type: Schema.Types.ObjectId,
        ref: "Card"
    }]

});

module.exports = mongoose.model("Stack", Stack)