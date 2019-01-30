const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Card = new Schema({
    question: String,
    answer: String
});


module.exports = mongoose.model("Card", Card)
