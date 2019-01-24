const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Set = new Schema({
    name: String,
    stack: [{
        type: Schema.Types.ObjectId,
        ref: "QA"
    }]

});

module.exports = mongoose.model("Set", Set)