const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const QA = new Schema({
    question: String,
    answer: String
});


module.exports = mongoose.model("QA", QA)
